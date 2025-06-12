
import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import { ArrowRight, Code, Cpu, Trophy, LaptopMinimalCheck, BookOpenText, BriefcaseBusiness } from 'lucide-react';
import { cn } from '@/components/lib/utils';
import Modal from './component-template/Modal';
import DynamicForm from './form/DynamicForm';
import axios from 'axios';
import { useToast } from '@/components/hooks/use-toast';
import { FieldConfig } from './form/DynamicForm';
import { useRouter } from 'next/navigation';
import { getUTMTrackingData } from '@/components/utils/getUTMTrackingData';
import SecondaryForm from '@/components/components/course-details/SecondaryForm';
import Image from 'next/image';
const formFields: FieldConfig[] = [
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    required: true,
    rules: { required: 'First Name is required' },
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    required: true,
    rules: { required: 'Last Name is required' },
  },
  {
    name: 'email',
    label: 'Email',
    type: 'text',
    required: true,
    rules: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Invalid email format',
      },
    },
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'text',
    required: true,
    rules: {
      required: 'Phone number is required',
      pattern: {
        value: /^[0-9]{10,12}$/,
        message: 'Phone number must be between 10 and 12 digits (numbers only)',
      },
    },
  },
  {
    name: 'year',
    label: 'Year of Graduation',
    type: 'select',
    options: ['Before 2018', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', 'After 2025'],
    rules: { required: 'Please select your graduation year' },
  },
  {
    name: 'program',
    label: 'Program',
    type: 'select',
    options: ['Data Science Course', 'Certification Program in Applied Generative AI', 'Generative AI Course', 'Data Science Elite Course'],
    rules: { required: 'Please select a program' },
  },
  { name: 'ga_client_id', type: 'hidden' },
];


const HeroSection = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [utmData, setUtmData] = useState<Record<string, string>>({});


  const elementRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elementRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    const trackingData = getUTMTrackingData();
    setUtmData(trackingData);
    sessionStorage.setItem('utmTracking', JSON.stringify(trackingData));

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementRefs.current.includes(el)) {
      elementRefs.current.push(el);
    }
  };


  // Handle Form Submit
  const handleFormSubmit = async (data: any) => {
    console.log('data------------------------', data);

    const zohoEndpoint = "https://crm.zoho.in/crm/WebToContactForm";

    const hiddenFields = {
      xnQsjsdp: "b3f43adc4710a41efc03cab70d04a5eee598f225642df4a1f565782c83a02d3a",
      xmIwtLD: "a2deb9be306e58e854a1535496bd061b69e1d5dd0efc44a28ae5ee26dfe42b099e51cbb9f06e7317ab708b49c270667a",
      actionType: "Q29udGFjdHM=",
      returnURL: "null",
    };

    const formData = new FormData();

    // Append hidden fields
    Object.entries(hiddenFields).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Append visible form data
    formData.append("First Name", data.firstName || '');
    formData.append("Last Name", data.lastName || '');
    formData.append("Email", data.email || '');
    formData.append("Phone", data.phone || '');
    formData.append("Year of Graduation", data.year || '');
    formData.append("Program", data.program);
    formData.append("ga_client_id", '');
    formData.append("Business Unit", 'OdinSchool');
    formData.append("Source Domain", 'Odinschool Home Page')


    // UTM Tracking 
    formData.append('First Page Seen', utmData['First Page Seen'] || '');
    formData.append('Original Traffic Source', utmData['Original Traffic Source'] || '');
    formData.append('Original Traffic Source Drill-Down 1', utmData['Original Traffic Source Drill-Down 1'] || '');
    formData.append('Original Traffic Source Drill-Down 2', utmData['Original Traffic Source Drill-Down 2'] || '');
    formData.append('UTM Term-First Page Seen', utmData['UTM Term-First Page Seen'] || '');
    formData.append('UTM Content-First Page Seen', utmData['UTM Content-First Page Seen'] || '');


    try {
      const response = await axios.post(zohoEndpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      sessionStorage.setItem('submittedEmail', data.email);


      toast({
        title: "Form submitted successfully!",
        description: "Thank you for your interest. Our team will contact you shortly.",
      });



      setTimeout(() => {
        router.push(`/thank-you`);
      }, 1000);

    } catch (err) {
      console.error('Error submitting form:', err);

      toast({
        title: "Form submission failed!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    }

    setFormOpen(false);
  };

  return (
    <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div className="space-y-8">
            <div ref={addToRefs} className="opacity-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 mb-6">
                <span className="text-xs font-medium">Master In-Demand Tech Skills. Get Job-Ready.</span>
              </div>
              <h1 className="heading-xl text-balance">
                <span className='text-nowrap'>Upskill Now!</span><br />
                <span className="text-primary-600">Accelerate Your Career</span>
              </h1>
            </div>

            <p ref={addToRefs} className="text-gray-600 opacity-0 delay-100 max-w-xl">
              Learn job-ready tech skills through expert-led online bootcamps. OdinSchool empowers you to upskill, build projects, and unlock top career opportunities.
            </p>

            <div ref={addToRefs} className="flex flex-col sm:flex-row gap-4 opacity-0 delay-200">
              <Button
                size="lg"
                icon={<ArrowRight className='ml-1' size={18} />}
                iconPosition="right"
                onClick={() => setFormOpen(true)}
              >
                Talk to an Expert
              </Button>
            </div>
            <Modal header_text={'Enquire Now'} open={formOpen} onOpenChange={setFormOpen}>
              <SecondaryForm isModal={true} isCoupon={false} buttonText='Request a Callback' sourceDomain='Home page' />

            </Modal>

            <div ref={addToRefs} className="grid grid-cols-3 gap-4 pt-4 opacity-0 delay-300">
              {[
                {
                  icon: <LaptopMinimalCheck size={20} className="text-primary-600" />,
                  label: 'In-Demand Bootcamps',
                  description: 'Curated programs built for tech careers'
                },
                {
                  icon: <BookOpenText size={20} className="text-primary-600" />,
                  label: 'Elite Programs',
                  description: 'Industry backed programs for high career ROI'
                },
                {
                  icon: <BriefcaseBusiness size={20} className="text-primary-600" />,
                  label: 'Job-Ready Curriculum',
                  description: 'Learn what the industry actually needs'
                },
              ].map((item, index) => (
                <div key={index} className="text-center p-3">
                  <div className="flex justify-center mb-2">{item.icon}</div>
                  <h3 className="text-sm font-semibold">{item.label}</h3>
                  <p className="text-xs text-gray-500 md:block hidden">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div ref={addToRefs} className="wrap opacity-0 delay-200">
            <div>
              <div className="flex gap-8 items-end justify-center flex-row ">
                <Image
                  src="https://strapi.odinschool.com/uploads/image1_5d9dce47c3.webp"
                  alt="Student 1"
                  className="rounded-full md:w-60 md:h-60 w-32 h:32 object-cover"

                  loading="lazy"
                  width={150}
                  height={150}
                />

                <Image
                  src="https://strapi.odinschool.com/uploads/img2_a118e82026.webp"
                  alt="Student 2"
                  className="rounded-3xl md:w-40 md:h-40 w-32 h:32 object-cover"

                  loading="lazy"
                  width={150}
                  height={150}
                />
              </div>
              <div className="flex gap-10 items-top justify-center flex-direction:row mt-8">
                <Image
                  src="https://strapi.odinschool.com/uploads/img2_fc7fbb8c4e.png"
                  alt="Student 3"
                  className="rounded-3xl md:w-40 md:h-40 w-32 h:32 object-cover"

                  loading="lazy"
                  width={150}
                  height={150}
                />

                <Image
                  src="https://strapi.odinschool.com/uploads/img3_d2a7f5236c.png"
                  alt="Student 4"
                  className="rounded-full md:w-60 md:h-60 w-32 h:32 object-cover"

                  loading="lazy"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className="absolute -bottom-0 -right-6 md:w-28 md:h-28 rounded-full bg-primary-100 z-0"></div>
            <div className="absolute -top-0 -left-0 md:w-20 md:h-20 rounded-full bg-primary-100 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
