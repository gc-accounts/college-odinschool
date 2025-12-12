import React from 'react';
import SecondaryForm from '@/components/components/course-details/SecondaryForm';

const CallbackForm = () => {
  return (
    <div className="w-full max-w-lg mx-auto mt-12 glass-card rounded-xl shadow-lg">
      <div className='px-8 pt-8'>
      <h3 className="text-2xl  text-gray-900 mb-2">Request a Callback</h3>
      <p className="text-gray-600 mb-0">Fill in your details and our team will get back to you</p>
      </div>
      <SecondaryForm isModal={false} isCoupon={false} buttonText='Request a Callback' sourceDomain='Home Page' />
    </div>
  );
};

export default CallbackForm;
