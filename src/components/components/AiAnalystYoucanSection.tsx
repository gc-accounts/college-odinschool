'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Modal from './component-template/Modal';
import PrimaryForm from './course-details/PrimaryForm';
import Button from './Button';

interface Props {
  sectionClass?: string;
}

const AiAnalystYoucanSection = ({ sectionClass }: Props) => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section className={`${sectionClass ?? 'px-6 py-12 bg-[#021331]'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Text Block */}
        <div className="text-white md:col-span-7">
          <p className="text-sm mb-2">Wondering if AI Analytics is only for IT professionals?</p>
          <h2 className="mb-4 text-3xl md:text-5xl font-display leading-tight font-semibold">
            Think again!!
          </h2>
          <p className="mb-4 text-base">
            AI Analytics is not limited to coders or tech experts—it's for anyone eager to solve problems using data and AI-driven insights.
          </p>

          <p className="mb-4 text-base">
            Our step-by-step approach ensures you gain confidence from day one.
          </p>
          <p className="font-semibold mb-6 text-base">
            Curious minds and problem solvers, this is your chance to explore AI Analytics!🚀
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button
              size="lg"
              variant="yellow"
              icon={<ArrowRight className="ml-1" size={18} />}
              iconPosition="right"
              className="font-semibold"
              onClick={() => setFormOpen(true)}
            >
              Request a Callback
            </Button>
          </div>

          {/* Modal Form */}
          <Modal header_text="Enquire Now" open={formOpen} onOpenChange={setFormOpen}>
            <PrimaryForm
              buttonText="Request a Callback"
              slug="ai-analyst-course"
              isModal={true}
              sourceDomain="Course form"
            />
          </Modal>
        </div>

        {/* Right Image Block */}
        <div className="md:col-span-5">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="https://strapi.odinschool.com/uploads/Eligibility_section_AIACP_1_b85a94bbb2.webp"
              alt="Motivational Student"
              width={450}
              height={330}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiAnalystYoucanSection;