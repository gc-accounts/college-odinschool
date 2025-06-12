import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ShieldCheck, ChevronLeft, Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { useToast } from '@/components/hooks/use-toast';
import { getCourse } from '@/components/utils/api/courses';
import Image from 'next/image';

const Navbar = dynamic(() => import('@/components/components/Navbar'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const Footer = dynamic(() => import('@/components/components/Footer'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const Button = dynamic(() => import('@/components/components/ui/button').then(mod => ({ default: mod.Button })), {
  ssr: true
});

const Card = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.Card })), {
  ssr: true
});

const CardContent = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.CardContent })), {
  ssr: true
});

const CardHeader = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.CardHeader })), {
  ssr: true
});

const CardTitle = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.CardTitle })), {
  ssr: true
});

const Input = dynamic(() => import('@/components/components/ui/input').then(mod => ({ default: mod.Input })), {
  ssr: true
});

const Label = dynamic(() => import('@/components/components/ui/label').then(mod => ({ default: mod.Label })), {
  ssr: true
});

const RadioGroup = dynamic(() => import('@/components/components/ui/radio-group').then(mod => ({ default: mod.RadioGroup })), {
  ssr: true
});

const RadioGroupItem = dynamic(() => import('@/components/components/ui/radio-group').then(mod => ({ default: mod.RadioGroupItem })), {
  ssr: true
});

interface ApiCourseResponse {
  id: string;
  documentId: string;
  title: string;
  description: string;
  level: string;
  on_sale: boolean;
  has_certificate: boolean;
  overview: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  url_slug: string;
  image: string;
  instructor?: string;
  price?: number;
  salePrice?: number;
  duration?: string;
  students?: number;
  lessons?: any;
  modules?: any[];
}

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  duration: string;
  students: number;
  image: string;
  has_certificate: boolean;
  lessons: string[] | number;
  level: string;
  on_sale: boolean;
  overview: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  url_slug: string;
  modules: any[];
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  year: string;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

const REFRESH_TOKEN = "1000.9610e09a6a7a1d160ff1b71e848ad575.807b0d1acb74af5c6d650e688295c8d5";
const CLIENT_ID = "1000.0OJAI0ZC0NIBXRX19IC6B14QE22HFT";
const CLIENT_SECRET = "ea6422637d7299fdb33bf7a62b41ad6465a851d12b";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const CourseCheckout = () => {
  const params = useParams();
  const id = params?.id as string;
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [price, setPrice] = useState(0);
  const [certificateButtonState, setCertificateButtonState] = useState(true);
  const { toast } = useToast();
  const [showPayment, setShowPayment] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [isRazorpayLoaded, setIsRazorpayLoaded] = useState(false);

  const [paymentType, setPaymentType] = useState<'partial' | 'full'>('partial');
  const [couponChecked, setCouponChecked] = useState(false);
  const [showCouponError, setShowCouponError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const courseData = await getCourse("", id);
        if (courseData && courseData[0]) {
          const apiCourse = courseData[0] as ApiCourseResponse;
          // Transform the API response to match our Course interface
          const transformedCourse: Course = {
            id: apiCourse.id || '',
            title: apiCourse.title || '',
            description: apiCourse.description || '',
            instructor: apiCourse.instructor || 'Instructor Name',
            price: Number(apiCourse.price) || 0,
            duration: apiCourse.duration || '0 hours',
            students: Number(apiCourse.students) || 0,
            image: apiCourse.image || '',
            has_certificate: Boolean(apiCourse.has_certificate),
            lessons: apiCourse.lessons || [],
            level: apiCourse.level || 'Beginner',
            on_sale: Boolean(apiCourse.on_sale),
            overview: apiCourse.overview || '',
            slug: apiCourse.slug || '',
            createdAt: apiCourse.createdAt || '',
            updatedAt: apiCourse.updatedAt || '',
            publishedAt: apiCourse.publishedAt || '',
            url_slug: apiCourse.url_slug || '',
            modules: apiCourse.modules || [],
          };
          setCourse(transformedCourse);
          setPrice(Number(apiCourse.price) || 0);
        }
      } catch (error) {
        console.error('Error fetching course:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    year: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getAccessToken = async () => {
    try {
      // Use our backend endpoint instead of calling Zoho directly
      const response = await fetch('/api/auth/token-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to get access token');
      }

      const data = await response.json();
      if (data?.access_token) {
        return data.access_token;
      } else {
        throw new Error('No access token in response');
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
      throw error;
    }
  };

  const getAccessTokenForPayment = async () => {
    try {
      // Use our backend endpoint instead of calling Zoho directly
      const response = await fetch('/api/auth/token-payment-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to get access token');
      }

      const data = await response.json();
      if (data?.access_token) {
        return data.access_token;
      } else {
        throw new Error('No access token in response');
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
      throw error;
    }
  };

  function add18Percent(value) {
    return value + (value * 0.18);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    if (couponChecked && paymentType === 'partial') {
      toast({
        title: "Invalid Coupon Use",
        description: "Coupon can only be applied with full payment option.",
        variant: "destructive"
      });
      setSubmitting(false);
      return;
    }

    try {
      const accessToken = await getAccessToken();

      const zohoFormData = new FormData();
      zohoFormData.append('accessToken', accessToken);
      zohoFormData.append('First Name', formData.firstName);
      zohoFormData.append('Last Name', formData.lastName);
      zohoFormData.append('Email', formData.email);
      zohoFormData.append('Phone', formData.phone);
      zohoFormData.append('Program', course.slug === 'data-science-course' ? 'Data Science Course'
        : course.slug === 'data-science-elite-course' ? 'Data Science Elite Course'
          : course.slug === 'generative-ai-bootcamp' ? 'Generative AI Course'
            : course.slug === 'generative-ai-course-iitg' ? 'Certification Program in Applied Generative AI'
              : course.slug);
      zohoFormData.append('Year of Graduation', formData.year);
      zohoFormData.append('Coupon Code', (couponChecked && paymentType === 'full') ? 'EBO2025' : '');
      zohoFormData.append('Ga_client_id', '');
      zohoFormData.append('Business Unit', 'Odinschool');

      const contactResponse = await fetch('/api/zoho/checkout-form', {
        method: 'POST',
        body: zohoFormData
      });

      if (!contactResponse.ok) {
        const errorData = await contactResponse.json();
        throw new Error(errorData.error || 'Failed to create contact');
      }

      const contactData = await contactResponse.json();

      if (contactData?.data?.[0]?.status === 'success') {
        toast({
          title: "Registration successful!",
          description: "Please complete the payment to secure your seat.",
        });

        try {
          await handlePayment(formData);
        } catch (paymentError) {
          console.error('Payment initiation error:', paymentError);
          toast({
            title: "Contact Created",
            description: "Your registration is complete. Please try the payment again or contact support.",
          });
        }
      } else {
        throw new Error('Failed to create contact in CRM');
      }
    } catch (error) {
      console.error('Error in registration process:', error);
      toast({
        title: "Registration failed",
        description: error instanceof Error ? error.message : "There was an error processing your registration. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };


  // Load Razorpay script
  useEffect(() => {
    const loadRazorpay = () => {
      return new Promise((resolve, reject) => {
        if (window.Razorpay) {
          setIsRazorpayLoaded(true);
          resolve(window.Razorpay);
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        script.onload = () => {
          setIsRazorpayLoaded(true);
          resolve(window.Razorpay);
        };
        script.onerror = () => {
          reject(new Error('Failed to load Razorpay SDK'));
        };
        document.body.appendChild(script);
      });
    };

    loadRazorpay().catch((error) => {
      console.error('Error loading Razorpay:', error);
      toast({
        title: "Error",
        description: "Failed to load payment system. Please refresh the page.",
        variant: "destructive"
      });
    });
  }, []);

  const handlePayment = async (formData: FormData) => {
    try {
      const baseAmount = paymentType === 'partial'
        ? (course.slug === 'generative-ai-course-iitg' ? 10000 : 5000)
        : (couponChecked
          ? price - (course.slug === 'generative-ai-bootcamp' ? 10000 : 15000)
          : price);


      const payableAmount = add18Percent(baseAmount);

      const orderResponse = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          amount: Number(payableAmount),
          coupon: couponChecked ? 'EBO2025' : ''
        })
      });

      if (!orderResponse.ok) {
        const errorData = await orderResponse.json();
        console.error('Order creation failed:', errorData);
        throw new Error(errorData.details || 'Failed to create payment order');
      }

      const { orderId } = await orderResponse.json();

      const options = {
        key: "rzp_live_gxJ95DeVUwmpdc",
        amount: Math.round(payableAmount * 100),
        currency: "INR",
        name: `${course?.title} Seat Booking`,
        description: "OdinSchool Payment",
        image: "https://college.odinschool.com/hubfs/OdinSchool%20M22/icons/fevicon.svg",
        order_id: orderId,
        handler: async function (response: RazorpayResponse) {
          try {
            const verifyResponse = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                razorpay_amount: payableAmount
              })
            });

            const verifyData = await verifyResponse.json();
            const accessToken2: any = await getAccessTokenForPayment();

            const zohoPaymentFormData = new FormData();
            zohoPaymentFormData.append('accessToken', accessToken2 || '');
            zohoPaymentFormData.append('Email', formData.email || '');
            zohoPaymentFormData.append('Program', course.slug === 'data-science-course' ? 'Data Science Course'
              : course.slug === 'data-science-elite-course' ? 'Data Science Elite Course'
                : course.slug === 'generative-ai-bootcamp' ? 'Generative AI Course'
                  : course.slug === 'generative-ai-course-iitg' ? 'Certification Program in Applied Generative AI'
                    : course.slug);
            zohoPaymentFormData.append('Effective Bootcamp Fee', price.toString());
            zohoPaymentFormData.append('Payment_Status', verifyData.response || '');
            zohoPaymentFormData.append('Payable_Amount', payableAmount.toFixed(0));
            zohoPaymentFormData.append('Coupon_Code', (couponChecked && paymentType === 'full') ? 'EBO2025' : '');
            zohoPaymentFormData.append('Ga_client_id', '');
            zohoPaymentFormData.append('Business Unit', 'Odinschool');
            zohoPaymentFormData.append('Source_Domain', 'Checkout form');

            await fetch('/api/zoho/payment-status', {
              method: 'POST',
              body: zohoPaymentFormData
            });

            const img = document.createElement('img');
            img.src = `https://shareasale.com/sale.cfm?amount=${payableAmount}&tracking=${response.razorpay_order_id}&merchantID=123856&transtype=sale&currency=INR`;
            document.body.appendChild(img);

            toast({ title: verifyData.response });
          } catch (error) {
            console.error('Payment verification error:', error);
            toast({
              title: "Payment Failed",
              description: "There was an error verifying your payment. Please contact support.",
              variant: "destructive"
            });
          }
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone
        },
        theme: { color: "#3399cc" }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

      razorpay.on('payment.failed', function (response: any) {
        console.error('Payment failed:', response);
        toast({
          title: "Payment Failed",
          description: "Your payment could not be processed. Please try again.",
          variant: "destructive"
        });
      });
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error",
        description: error instanceof Error ? error.message : "Failed to initiate payment. Please try again.",
        variant: "destructive"
      });
    }
  };


  if (!course || loading) {
    return (
      <>
        <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
        <Script src="https://www.dwin1.com/19038.js" strategy="beforeInteractive" />
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          {loading ? (
            <Loader2 className="h-10 w-10 animate-spin" />
          ) : (
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Course not found</h1>
              <Button asChild>
                <Link href="/courses">Back to Courses</Link>
              </Button>
            </div>
          )}
        </div>
        <Footer />
      </>
    );
  }

  const lessonCount = Array.isArray(course.lessons)
    ? course.lessons.length
    : (typeof course.lessons === 'number' ? course.lessons : 0);

  // const baseAmount = paymentType === 'partial'
  //   ? (course.slug === 'generative-ai-course-iitg' ? 10000 : 5000)
  //   : (couponChecked ? price - 10000 : price);
  const baseAmount = paymentType === 'partial'
    ? (course.slug === 'generative-ai-course-iitg' ? 10000 : 5000)
    : (couponChecked
      ? price - (course.slug === 'generative-ai-bootcamp' ? 10000 : 15000)
      : price);


  const gst = baseAmount * 0.09;
  const cst = baseAmount * 0.09;
  const total = baseAmount + gst + cst;
  return (
    <>
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
      <Script src="https://www.dwin1.com/19038.js" strategy="beforeInteractive" />
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <Button variant="outline" className="mb-6" asChild>
            <Link href={`/${id}`} className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Course
            </Link>
          </Button>

          <h1 className="text-3xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8 bg-white p-6 rounded-lg shadow-sm">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Reserve Your Seat</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{10}"
                      placeholder="Enter 10 digit phone number"
                    />
                  </div>
                  <div className="space-y-2 mt-4">
                    <Label htmlFor="year">Year of Graduation</Label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                    >
                      <option value="">Select Year</option>
                      <option value="Before 2018">Before 2018</option>
                      <option value="2018">2018</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="After 2025">After 2025</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button type="submit" variant='yellow' size="lg" className="w-full" disabled={submitting}>
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Complete Registration'
                    )}
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center">
                    <ShieldCheck className="h-4 w-4 mr-1" />
                    Secure registration process
                  </p>
                </div>
              </form>
            </div>

            <div>
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">

                  {/* Payment Type Selection */}
                  <div className="border p-4 rounded space-y-2">
                    <Label className="block font-medium">Choose Payment Option</Label>
                    <RadioGroup
                      value={paymentType}
                      onValueChange={(val: 'partial' | 'full') => {
                        setPaymentType(val);
                        setCouponChecked(false); // reset coupon
                        setShowCouponError(false);
                      }}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="partial" id="partial" />
                        <Label htmlFor="partial">Reserve your seat with ₹{course.slug === 'generative-ai-course-iitg' ? '10000' : '5000'} + GST</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="full" id="full" />
                        <Label htmlFor="full">Make full payment <span>₹{price?.toFixed(2)}</span></Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Coupon Code Section */}
                  <div className="border p-4 rounded space-y-2 mt-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="coupon"
                        checked={couponChecked}
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          setCouponChecked(isChecked);

                          if (isChecked && paymentType === 'partial') {
                            setShowCouponError(true);
                          } else {
                            setShowCouponError(false);
                          }
                        }}
                        disabled={paymentType === 'partial'} // 🔒 Disable checkbox if ₹5000 is selected
                      />
                      <Label htmlFor="coupon" className={paymentType === 'partial' ? 'text-gray-400 cursor-not-allowed' : ''}>
                        Apply Coupon EBO2025
                      </Label>
                    </div>

                    <Input
                      value={couponChecked ? 'EBO2025' : ''}
                      readOnly
                      disabled={true}
                      className="mt-2"
                      placeholder="Enter coupon"
                    />

                    {paymentType === 'partial' && (
                      <p className="text-sm text-red-500 mt-1">Coupon cannot be applied with ₹5000 seat reservation.</p>
                    )}
                  </div>



                  <div className="flex space-x-4">
                    <div className="flex-shrink-0 rounded-md overflow-hidden w-20 h-20">
                      <Image
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"

                        loading="lazy"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{course.title}</h3>
                      {/* <div className="text-sm text-gray-500">{course.instructor}</div> */}
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Base Amount</span>
                      <span>₹{baseAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GST (9%)</span>
                      <span>₹{gst.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>CST (9%)</span>
                      <span>₹{cst.toFixed(0)}</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>₹{total.toFixed(0)}</span>
                    </div>
                    {couponChecked && paymentType === 'full' && (
                      <div className="text-sm text-green-600 text-right font-medium">
                        You saved ₹{course.slug === 'generative-ai-bootcamp' ? '10,000' : '15,000'} with coupon!
                      </div>
                    )}
                  </div>



                  {/* <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-2" />
                      {course.students?.toLocaleString()} students
                    </div>
                  </div> */}

                  {/* <div className="border-t pt-4">
                    <div className="flex justify-between py-2">
                      <span>Price</span>
                      <span>₹{price?.toFixed(2)}</span>
                    </div> */}
                  {/* <div className="flex justify-between py-2">
                      <span>Certificate</span>
                      <span>Not Included</span>
                    </div> */}
                  {/* <div className="flex justify-between py-2 font-bold border-t">
                      <span>Total</span>
                      <span>₹{price?.toFixed(2)}</span>
                    </div>
                  </div> */}
                  {/* {course.has_certificate && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        if (certificateButtonState) {
                          setPrice(price + 29.99);
                          setCertificateButtonState(false);
                        } else {
                          setPrice(price - 29.99);
                          setCertificateButtonState(true);
                        }
                      }}
                      className="w-full"
                    >
                      {certificateButtonState ? "Add Certificate (+ $29.99)" : "Remove Certificate (- $29.99)"}
                    </Button>
                  )} */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CourseCheckout;
