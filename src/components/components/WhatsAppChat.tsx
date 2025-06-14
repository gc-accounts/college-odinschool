'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/components/ui/button';
import { Input } from '@/components/components/ui/input';
import { Label } from '@/components/components/ui/label';
import { useToast } from '@/components/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/components/ui/card';
import { usePathname } from 'next/navigation';
import { useProgram } from '@/context/ProgramContext';
import { useRouter } from 'next/navigation';
import { IoLogoWhatsapp } from "react-icons/io";
import { MdCall } from "react-icons/md";
import Link from 'next/link';

const WhatsAppChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { program } = useProgram();
  const pathname = usePathname();
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    StudentId: '',
    collegeName:'',
    city:'',
    year: '',
    program: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (program) {
      setFormData(prev => ({ ...prev, program }));
    }
  }, [program]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const getAccessToken = async () => {
    try {
      const response = await fetch('/api/auth/token-whatsapp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      if (!response.ok) throw new Error('Failed to get access token');
      const data = await response.json();
      return data?.access_token;
    } catch (error) {
      console.error('Error refreshing token:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const accessToken = await getAccessToken();

      const zohoFormData = new FormData();
      zohoFormData.append('accessToken', accessToken);
      zohoFormData.append('First Name', formData.firstName);
      zohoFormData.append('Last Name', formData.lastName);
      zohoFormData.append('Email', formData.email);
      zohoFormData.append('Phone', formData.phone);
      zohoFormData.append('StudentId', formData.StudentId)
      zohoFormData.append('College Name', formData.collegeName)
      zohoFormData.append('Other City', formData.city)
      zohoFormData.append('College Year Of Graduation', formData.year);
      zohoFormData.append('Program', 'Data Analyst');
      zohoFormData.append('College Programs', 'Data Analyst');
      zohoFormData.append('Year of Graduation', formData.year);
      zohoFormData.append('Ga_client_id', '');
      zohoFormData.append('Business Unit', 'Odinschool');

      const response = await fetch('/api/zoho/contact', {
        method: 'POST',
        body: zohoFormData
      });


      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }

      toast({
        title: "Success!",
        description: "Your information has been submitted successfully. We'll contact you soon.",
      });

      // router.push('https://api.whatsapp.com/send?phone=919355011033')
      window.open('https://api.whatsapp.com/send?phone=919355011033', '_blank');


      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        StudentId: '',
        collegeName:'',
        city:'',
        year: '',
        program: '',
      });
      setIsOpen(false);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed md:bottom-6 bottom-5 md:right-6 right-5 md:w-12 md:h-12 w-12 h-12 z-50 rounded-full shadow-lg bg-green-500 hover:bg-green-600"
        aria-label="Open WhatsApp chat"
      >
        <IoLogoWhatsapp className="h-10 w-10 text-white" />
      </Button>



      <Link href="tel:9355011033">
        <div className="group fixed md:bottom-[5rem] md:right-6 bottom-20 right-5 z-50 flex items-center">
          {/* Phone number visible only on desktop and on hover */}
          <span className="hidden lg:inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2 text-md font-medium text-white bg-primary-500 px-3 py-2 rounded-full shadow-lg">
            +91 9355 011033
          </span>
          <Button
            className="rounded-full md:w-12 md:h-12 w-12 h-12 shadow-lg bg-primary-500 hover:bg-primary-600 transition-all"
            aria-label="Call OdinSchool"
          >
            <MdCall className="h-6 w-6 text-white" />
          </Button>


        </div>
      </Link>




      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>

            <CardHeader>
              <CardTitle className="text-xl">Chat with us on WhatsApp</CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className='grid grid-cols-2 gap-2'>
                  <div className="space-y-2">
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder='First Name*'
                    />
                  </div>

                  <div className="space-y-2">
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder='Last Name*'
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder='Email*'
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    pattern="[0-9]{10}"
                    placeholder="Enter 10 digit phone number*"
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    id="StudentId"
                    name="StudentId"
                    value={formData.StudentId}
                    onChange={handleInputChange}
                    required
                    placeholder='Roll number / Student ID*'
                  />
                </div>

                <div className="space-y-2">
                  <Input
                    id="collegeName"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    required
                    placeholder='College Name*'
                  />
                </div>


                <div className="space-y-2">
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    placeholder='City / District*'
                  />
                </div>

                < div className="space-y-2">
                  <Label htmlFor="year">Year of Graduation*</Label>
                  <select
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                    required
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option value="">Select Year</option>
                    <option value="2025">2025</option>
                    <option value="After 2025">After 2025</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Start WhatsApp Chat'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div >
      )}
    </>
  );
};

export default WhatsAppChat;
