import React, { useState, useEffect } from 'react';
import { useToast } from "@/components/hooks/use-toast";
import DynamicForm, { FieldConfig } from './form/DynamicForm';
import { submitToZoho } from '@/components/utils/api/submitToZoho';
import callbackFormFields from '@/components/data/callbackFormFields';
import { getUTMTrackingData } from '@/components/utils/getUTMTrackingData';
import SecondaryForm from '@/components/components/course-details/SecondaryForm';

const CallbackForm = () => {
  const { toast } = useToast();
  const [utm, setUtm] = useState<Record<string, string>>({});

  useEffect(() => {
    const data = getUTMTrackingData();
    setUtm(data);
    sessionStorage.setItem('utmTracking', JSON.stringify(data));
  }, []);

  // ✅ Hidden fields for Zoho
  const hiddenFields = {
    xnQsjsdp: "b3f43adc4710a41efc03cab70d04a5eee598f225642df4a1f565782c83a02d3a",
    xmIwtLD: "a2deb9be306e58e854a1535496bd061b69e1d5dd0efc44a28ae5ee26dfe42b099e51cbb9f06e7317ab708b49c270667a",
    actionType: "Q29udGFjdHM=",
    returnURL: "null",
  };

  const fieldMap = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phone: 'Phone',
    program: 'Program',
    year: 'Year of Graduation',
    ga_client_id: 'ga_client_id',
    business_unit: 'Business Unit',
    First_Page_Seen: 'First Page Seen',
    Original_Traffic_Source: 'Original Traffic Source',
    Original_Traffic_Source_Drill_Down_1: 'Original Traffic Source Drill-Down 1',
    Original_Traffic_Source_Drill_Down_2: 'Original Traffic Source Drill-Down 2',
    UTM_Term_First_Page_Seen: 'UTM Term-First Page Seen',
    UTM_Content_First_Page_Seen: 'UTM Content-First Page Seen',
  };

  const handleFormSubmit = async (data: any, reset: () => void) => {
    await submitToZoho({
      data,
      fieldMap,
      hiddenFields,
      toast,
      onSuccess: reset,
    });
  };

  if (Object.keys(utm).length === 0) return null; // wait for UTM to be set

  return (
    <div className="w-full max-w-lg mx-auto mt-12 glass-card rounded-xl p-6 md:p-8 shadow-lg">
      <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Request a Callback</h3>
      <p className="text-gray-600 mb-6">Fill in your details and our team will get back to you</p>
      {/* <DynamicForm
        fields={callbackFormFields}
        buttonText="Submit"
        initialValues={{
          ga_client_id: '',
          business_unit: 'Odinschool',
          First_Page_Seen: utm['First Page Seen'],
          Original_Traffic_Source: utm['Original Traffic Source'],
          Original_Traffic_Source_Drill_Down_1: utm['Original Traffic Source Drill-Down 1'],
          Original_Traffic_Source_Drill_Down_2: utm['Original Traffic Source Drill-Down 2'],
          UTM_Term_First_Page_Seen: utm['UTM Term-First Page Seen'],
          UTM_Content_First_Page_Seen: utm['UTM Content-First Page Seen'],
        }}
        onSubmit={handleFormSubmit}
      /> */}
      <SecondaryForm isModal={false} isCoupon={false} buttonText='Request a Callback' sourceDomain='Home Page' />
    </div>
  );
};

export default CallbackForm;
