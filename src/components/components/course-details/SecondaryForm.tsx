// PrimaryForm.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useToast } from '@/components/hooks/use-toast';
import DynamicForm, { FieldConfig } from '@/components/components/form/DynamicForm';
import { getUTMTrackingData } from '@/components/utils/getUTMTrackingData';
import { useRouter } from 'next/navigation';
import CourseSecondaryFormFields from '@/components/data/form-fields/CourseSecondaryFormFields';
import { fetchUserLocation } from '@/components/utils/fetchUserLocation';
import { getGaCookieValue } from '@/components/utils/cookieUtils';
import { fetchUserLocation2 } from '@/components/utils/fetchUserLocation2';
interface SecondaryFormProps {
  isModal: Boolean;
  isCoupon: Boolean;
  buttonText?: string;
  sourceDomain?: string;

}

const SecondaryForm: React.FC<SecondaryFormProps> = ({ isCoupon, isModal, buttonText, sourceDomain }) => {
  const { toast } = useToast();
  const [utm, setUtm] = React.useState<Record<string, string>>({});
  const router = useRouter();

  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const [GaClientId, setGaClientId] = useState('');
  

  const getLocation = async () => {
    const location = await fetchUserLocation2();
    setCity(location.city);
    setState(location.region);
  };

  const getAccessToken = async () => {
    const res = await fetch('/api/auth/course-form-token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error('Failed to get access token');
    const data = await res.json();
    return data.access_token;
  };

  useEffect(() => {
    const data = getUTMTrackingData();
    setUtm(data);
    getLocation()
    sessionStorage.setItem('utmTracking', JSON.stringify(data));
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
      formData.append('Phone', data.phone);
      formData.append('Program', data.program === 'Investment Banking Course' ? 'College Investment Banking' : data.program);
      formData.append('Year of Graduation', data.year);
      formData.append('Work Experience Level', data.experience);

      // formData.append('College Year Of Graduation', data.year);
      formData.append('Ga_client_id', GaClientId ? GaClientId : '');
      formData.append('Business Unit', 'Odinschool');
      formData.append('Source_Domain', sourceDomain ? sourceDomain : 'Course Form');
      isCoupon && formData.append('Coupon Code', 'EBO2025');


      // user location open
      formData.append('Other_City', city);
      formData.append('Other_State', state);
      // user location close



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
      sessionStorage.setItem('submittedEmail', data.email);
      reset();
      setTimeout(() => router.push(`/thank-you`), 1000);
    } catch (error: any) {
      console.error(error);
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    }
  };

  if (!Object.keys(utm).length) return null;

  return (
    <div className={`${isModal ? '' : 'w-full max-w-lg mx-auto bg-white text-black rounded-xl p-6 md:p-8'}`}>
      <DynamicForm
        fields={CourseSecondaryFormFields as FieldConfig[]}
        buttonText={buttonText ? buttonText : 'Submit'}
        initialValues={{
          ga_client_id: '',
          business_unit: 'Odinschool',
        }}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default SecondaryForm;
