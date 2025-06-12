// components/HelloBar.tsx
'use client';
import { useState } from 'react';
import Modal from '@/components/components/component-template/Modal';
import SecondaryForm from '@/components/components/course-details/SecondaryForm';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';

interface HellobarProps {
  isPrimaryForm?: Boolean;
  slug?: string;
}
export default function HelloBar({ isPrimaryForm, slug }: HellobarProps) {
  const [formOpen, setFormOpen] = useState(false)


  return (
    <>
      <div
        style={{
          background: `linear-gradient(90deg, rgba(215, 11, 130, 0.7) 0%, rgba(152, 104, 239, 1) 50%, rgba(215, 11, 130, 0.7) 100%), url('/your-image.jpg')`
        }}
        className="w-full text-white text-center py-2 px-4 flex items-center justify-center z-50 gap-8">
        <span className='md:text-base text-xs'>🎉 Early Bird Offer! Save up to ₹12,000 for a Limited Time. Enroll Now & Elevate Your Career! 🚀</span>
        <button
          onClick={() => setFormOpen(true)}
          className="bg-yellow-400 text-black font-semibold px-4 py-1 rounded-sm hover:bg-yellow-500 transition  md:text-base text-xs whitespace-nowrap"
        >
          Claim Offer
        </button>

        <Modal header_text={'Enquire Now'} open={formOpen} onOpenChange={setFormOpen}>
          {/* <se slug={'data-science-elite-course'} isModal={true} /> */}
          {
            isPrimaryForm ? <PrimaryForm buttonText='Request a Callback' isModal={true} slug={slug} isCoupon={true} sourceDomain='Course form' /> : <SecondaryForm isCoupon={true} isModal={true} sourceDomain='Home page' />
          }

        </Modal>




      </div>
    </>
  );
}
