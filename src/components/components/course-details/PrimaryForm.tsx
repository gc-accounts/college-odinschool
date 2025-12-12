// PrimaryForm.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useToast } from '@/components/hooks/use-toast';
import DynamicForm, { FieldConfig } from '@/components/components/form/DynamicForm';
import { getUTMTrackingData } from '@/components/utils/getUTMTrackingData';
import CoursePrimaryFormFields from '@/components/data/form-fields/CoursePrimaryFormFields';
import { useRouter } from 'next/navigation';
import { pushToDataLayer } from '@/lib/gtm';
import { fetchUserLocation } from '@/components/utils/fetchUserLocation';
import { getGaCookieValue } from '@/components/utils/cookieUtils';
import { fetchUserLocation2 } from '@/components/utils/fetchUserLocation2';
interface PrimaryFormProps {
  slug: string;
  isModal: Boolean;
  buttonText?: string
  isCoupon?: Boolean;
  sourceDomain?: string;
}


const PrimaryForm: React.FC<PrimaryFormProps> = ({ slug, isModal, buttonText, isCoupon, sourceDomain }) => {
  const { toast } = useToast();
  const [utm, setUtm] = React.useState<Record<string, string>>({});
  const router = useRouter();
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [GaClientId, setGaClientId] = useState('');


  const getAccessToken = async () => {
    const res = await fetch('/api/auth/course-form-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error('Failed to get access token');
    const data = await res.json();
    return data.access_token;
  };


  const getLocation = async () => {
    const location = await fetchUserLocation2();
    setCity(location.city);
    setState(location.region);
  };

  useEffect(() => {
    const data = getUTMTrackingData();
    setUtm(data);
    getLocation()

    const gaValue = getGaCookieValue();
    setGaClientId(gaValue);
  }, []);

const handleFormSubmit = async (data: any, reset: () => void) => {
  try {
    const token = await getAccessToken();
    const formData = new FormData();
    formData.append('accessToken', token);
    formData.append('First Name', data.firstName);
    formData.append('Last Name', data.lastName);
    formData.append('Email', data.email);

    // Extract country code (e.g., '+91 (India)' -> '+91')
    const countryCode = data.countryCodeValue.split(' ')[0];
    const fullPhoneNumber = countryCode + data.phone;
    formData.append('Phone', fullPhoneNumber);

    formData.append('Year of Graduation', data.year);
    formData.append('Work Experience Level', data.experience);

    // formData.append('StudentId', data.StudentId);
    // formData.append('College Name', data.collegeName);
    // formData.append('Other City', data.city);
    // formData.append('College Year Of Graduation', data.year);


    formData.append('Country', data.countryCode);
    

    // ✅ Dynamic Program assignment
    const programName =
  slug === 'data-analyst-course' ? 'Data Analyst' :
  slug === 'ai-analyst-course' ? 'AI Analyst' :
  slug === 'investment-banking-finance-ops' ? 'College Investment Banking' :
  '';
    formData.append('Program', programName);
    formData.append('College Programs', programName);

    formData.append('Ga_client_id', GaClientId ? GaClientId : '');
    formData.append('Business Unit', 'Odinschool');
    formData.append('Source_Domain', sourceDomain ? sourceDomain : 'Course form');
    isCoupon && formData.append('Coupon Code', 'EBO2025');


      // user location open
      formData.append('Other_City', city);
      formData.append('Other_State', state);
      // user location close


    // Use the UTM data from state
    formData.append('First Page Seen', utm['First Page Seen'] || '');
    formData.append('Original Traffic Source', utm['Original Traffic Source'] || '');
    formData.append(
      'Original Traffic Source Drill-Down 1',
      utm['Original Traffic Source Drill-Down 1'] || ''
    );
    formData.append(
      'Original Traffic Source Drill-Down 2',
      utm['Original Traffic Source Drill-Down 2'] || ''
    );
    formData.append('UTM Term-First Page Seen', utm['UTM Term-First Page Seen'] || '');
    formData.append('UTM Content-First Page Seen', utm['UTM Content-First Page Seen'] || '');
    formData.append('ads_gclid', utm['ads_gclid']);

    const res = await fetch('/api/zoho/course-form', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Form submission failed');
    }

    toast({
      title: 'Success!',
      description: "Your information has been submitted successfully. We'll contact you soon.",
    });

    // --- START: Add GTM Data Layer Push Here ---
    pushToDataLayer('form_submission', {
      eventName: 'form_submission',
      program_name: programName, // ✅ use dynamic value
      user_email: data.email,
    });

    sessionStorage.setItem('submittedEmail', data.email);
    reset();

    
      sessionStorage.setItem('first_name', data.firstName);
      sessionStorage.setItem('last_name', data.lastName);
      sessionStorage.setItem('phone', data.phone);

      
    setTimeout(() => router.push(`/thank-you?title=${slug}`), 1000);
  } catch (error: any) {
    console.error(error);
    toast({ title: 'Error', description: error.message, variant: 'destructive' });
  }
};


  if (!Object.keys(utm).length) return null;

  return (
    <div className={`${isModal ? '' : 'w-full max-w-lg mx-auto bg-white text-black rounded-xl p-6 md:p-8 shadow-lg'}`}>
      <DynamicForm
        fields={CoursePrimaryFormFields as FieldConfig[]}
        buttonText={buttonText ? buttonText : 'Submit'}
        initialValues={{
          program: 'Data Analyst',
          ga_client_id: '',
          business_unit: 'Odinschool',
        }}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default PrimaryForm;
