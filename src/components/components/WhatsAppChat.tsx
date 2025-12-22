'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/components/ui/button';
import { useToast } from '@/components/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/components/ui/card';
import { useProgram } from '@/context/ProgramContext';
import { IoLogoWhatsapp } from "react-icons/io";
import { MdCall } from "react-icons/md";
import Link from 'next/link';
import { getUTMTrackingData } from '@/components/utils/getUTMTrackingData';
import { pushToDataLayer } from '@/lib/gtm';
import whatsappFormFields from '../data/form-fields/whatsappFormFields';
import dynamic from 'next/dynamic';
import Modal from '@/components/components/component-template/Modal';
import { usePathname } from 'next/navigation';
import { fetchUserLocation } from '../utils/fetchUserLocation';
const DynamicForm = dynamic(() => import('@/components/components/form/DynamicForm'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const WhatsAppChat: React.FC = () => {
  const [formOpen, setFormOpen] = useState(false);
  const { program } = useProgram();
  const { toast } = useToast();
  const [utm, setUtm] = useState<Record<string, string>>({});

    const [city, setCity]= useState('')
  const [state, setState]= useState('')




const getLocation= async()=>{
   const location = await fetchUserLocation();
  setCity(location.city)
  setState(location.region)

}



  useEffect(() => {
    
    const data = getUTMTrackingData();
    setUtm(data);
    getLocation()
  }, []);
  const pathname= usePathname()
  const isHomePage=  pathname === '/'
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

  const handleFormSubmit = async (data: any, reset: () => void) => {
    try {
      const accessToken = await getAccessToken();

      const zohoFormData = new FormData();
      zohoFormData.append('accessToken', accessToken);
      zohoFormData.append('First Name', data.firstName);
      zohoFormData.append('Last Name', data.lastName);
      zohoFormData.append('Email', data.email);

        // --- START: Add Country Code to Phone Number ---
      const countryCodePrefix = data.countryCodeValue ? data.countryCodeValue.split(' ')[0] : '';
      const fullPhoneNumber = countryCodePrefix + data.phone;
      zohoFormData.append('Phone', fullPhoneNumber);
      // --- END: Add Country Code to Phone Number ---


      // program
      // const programName= pathname.includes('ai-analyst-course') ? 'AI Analyst' : 'Data Analyst'
      const programName =
  pathname.includes('data-analyst-course') ? 'Data Analyst' :
  pathname.includes('ai-analyst-course') ? 'AI Analyst' :
  pathname.includes('investment-banking-finance-ops') ? 'College Investment Banking' :
  '';

      zohoFormData.append('Program', programName);
      zohoFormData.append('College Programs', programName); 
      
      
      zohoFormData.append('Country', data.countryCode)
      zohoFormData.append('Year of Graduation', data.year);
      zohoFormData.append('Ga_client_id', '');
      zohoFormData.append('Business Unit', 'Odinschool');


      // user location open
      zohoFormData.append('Other_City', city  );
      zohoFormData.append('Other_State', state);
      // user location close



      // UTM Tracking details
      zohoFormData.append('First Page Seen', utm['First Page Seen'] || '');
      zohoFormData.append('Original Traffic Source', utm['Original Traffic Source'] || '');
      zohoFormData.append(
        'Original Traffic Source Drill-Down 1',
        utm['Original Traffic Source Drill-Down 1'] || ''
      );
      zohoFormData.append(
        'Original Traffic Source Drill-Down 2',
        utm['Original Traffic Source Drill-Down 2'] || ''
      );
      zohoFormData.append('UTM Term-First Page Seen', utm['UTM Term-First Page Seen'] || '');
      zohoFormData.append('UTM Content-First Page Seen', utm['UTM Content-First Page Seen'] || '');
      zohoFormData.append('ads_gclid', utm['ads_gclid'] || '');

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

      // Open WhatsApp in new tab
      window.open('https://api.whatsapp.com/send?phone=919355011033', '_blank');
      
      // Push to data layer
      pushToDataLayer('whatsapp_form_submission', {
        eventName: 'whatsapp_form_submission',
        program_name: data.program,
        user_email: data.email,
      });

      reset();
      setFormOpen(false);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
        variant: "destructive"
      });
    }
  };

  // Set initial values based on program context
  const initialValues = {
    program: program || '',
    ga_client_id: '',
    business_unit: 'Odinschool'
  };

  return (
    <>
      <Button
        onClick={() => setFormOpen(true)}
        className="fixed md:bottom-6 bottom-5 md:right-6 right-5 md:w-12 md:h-12 w-12 h-12 z-50 rounded-full shadow-lg bg-green-500 hover:bg-green-600"
        aria-label="Open WhatsApp chat"
      >
        <IoLogoWhatsapp className="h-10 w-10 text-white" />
      </Button>

      <Link href="tel:9355011033">
        <div className="group fixed md:bottom-[5rem] md:right-6 bottom-20 right-5 z-50 flex items-center">
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

<Modal header_text={'Chat with us on WhatsApp'} open={formOpen} onOpenChange={setFormOpen}>
  <DynamicForm
    fields={[
      ...whatsappFormFields,
      ...(isHomePage
        ? [{
            name: 'program',
            label: 'Program',
            type: 'select',
            options: ['AI Analyst', 'Data Analyst'],
            rules: { required: 'Please select a program' },
          }]
        : [])
    ]}
    buttonText="Start WhatsApp Chat"
    initialValues={initialValues}
    onSubmit={handleFormSubmit}
  />
</Modal>

    </>
  );
};

export default WhatsAppChat;
