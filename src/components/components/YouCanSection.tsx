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

const YouCanSection = ({ sectionClass }: Props) => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section className={`${sectionClass ?? 'px-6 py-12 bg-[#021331]'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Text Block */}
        <div className="text-white md:col-span-7">
          <p className="text-sm mb-2">Thinking “Can I really do this?”</p>
          <h2 className="mb-4 text-3xl md:text-5xl font-display leading-tight font-semibold">
            Of course, you can!!
          </h2>
          <p className="mb-4 text-base">
            No advanced math or coding experience? No problem! We start from the basics and guide you every step of the way.
          </p>
          <p className="font-semibold mb-6 text-base">
            All you need is curiosity and the drive to learn! 💡
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
              slug="data-analyst-course"
              isModal={true}
              sourceDomain="Course form"
            />
          </Modal>
        </div>

        {/* Right Image Block */}
        <div className="md:col-span-5">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="https://strapi.odinschool.com/uploads/Absolutely_yes_4edc38b76a.webp"
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

export default YouCanSection;