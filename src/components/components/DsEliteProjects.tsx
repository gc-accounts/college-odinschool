'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/components/Button';
import { ArrowDown, ArrowRight } from 'lucide-react';
import Modal from '@/components/components/component-template/Modal';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';

interface DsEliteProjsctsProps {
  sectionClass?: string;
}

const DsEliteProjects = ({ sectionClass }: DsEliteProjsctsProps) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [formOpen, setFormOpen] = useState(false)

  const projects = [
      {
    id: 1,
    title: 'Amazon Sales Insights with SQL',
    description:
      'Analyze Amazon’s sales data to uncover trends in products, customers, and revenue across different branches.',
    image: 'https://strapi.odinschool.com/uploads/Amazon_20sales_19ab24d32e.webp',
  },
  {
    id: 2,
    title: 'OTP Verification System',
    description:
      'A secure One-Time Password (OTP) verification system that generates, sends, and validates OTPs for user authentication.',
    image: 'https://strapi.odinschool.com/uploads/OTP_20verification_dc55a28526.png',
  },
  {
    id: 3,
    title: 'COVID - 19 Prediction',
    description:
      'Develop a predictive model that can accurately identify the likelihood of COVID-19 infection.',
    image: 'https://strapi.odinschool.com/uploads/Covid_20prediction_a7d0f45362.webp',
  },
  {
    id: 4,
    title: 'Laptop Price Prediction for SmartTech Co.',
    description:
      'Predict laptop prices using machine learning by analyzing brand, specifications, and market trends.',
    image: 'https://strapi.odinschool.com/uploads/laptop_948b5d2653.webp',
  },
  {
    id: 5,
    title: 'Health Insurance Prediction',
    description:
      'Build a predictive ML model to increase the accuracy of health insurance prediction.',
    image: 'https://strapi.odinschool.com/uploads/Health_20insurance_f36adc2b17.webp',
  },
  {
    id: 6,
    title: 'Credit Card Approval',
    description:
      'Help banks find potential customers to give out credit cards to by building an ML model.',
    image: 'https://strapi.odinschool.com/uploads/credit_20card_20approval_53be4abea5.png',
  },




    {
      id: 7,
      title: ' Music Streaming Application Analysis ',
      description:
        'Create a cutting-edge music streaming platform. Focus on an extensive collection, personalized experiences & insights into user behaviour, and preferences for enhanced user experience. ',
      prerequisites: 'SQL',
      tools: ['MySQL', 'Workbench'],
      ctaText: 'Request a callback',
      ctaLink: '#',
      videoThumb: 'https://strapi.odinschool.com/uploads/Music_Streaming_App_Analysis_7965b470f0.webp',
      videoUrl: 'https://strapi.odinschool.com/uploads/Music_20_Streaming_20_Application_20_Analysis_6788d41d8a.mp4', // sample URL
    },
  ];

  return (
    <section className={`${sectionClass ?? 'px-5 py-12 md:px-8 md:py-16 bg-primary-50'}`}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight text-white">
            20+ Hands-on <span className="text-primary-600">Projects</span>
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        {/* First 3 small project cards */}
        {projects.slice(0, 6).map((project) => (
          <div
            key={project.id}
            className="bg-white text-black rounded-xl p-4 col-span-12 md:col-span-4 flex flex-col justify-between"
          >
            <div className="relative w-full h-40 mb-3 rounded-md overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-md font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-gray-700">{project.description}</p>
          </div>
        ))}

        {/* Large AirBnB project details */}
        <div className="col-span-12 lg:col-span-6 bg-white text-black p-6 rounded-xl flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-2">{projects[6].title}</h3>
          <p className="text-sm text-gray-700 mb-4">{projects[6].description}</p>

          <div className="flex flex-col sm:flex-row justify-between text-sm mb-4 gap-4">
            <div>
              <p className="text-gray-500">Pre-requisite</p>
              <p>{projects[6].prerequisites}</p>
            </div>
            <div>
              <p className="text-gray-500">Tools Required</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {projects[6].tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 text-xs rounded-full border border-blue-500 text-blue-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>


          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center delay-200 mt-10">
            <Button
              size="md"
              variant="yellow"
              icon={<ArrowRight className='ml-1' size={18} />}
              iconPosition="right"
              className='font-semibold'
              onClick={() => setFormOpen(true)}
            >
              {projects[6].ctaText}
            </Button>

            <Modal header_text={'Enquire Now'} open={formOpen} onOpenChange={setFormOpen}>
              <PrimaryForm buttonText='Request a Callback' slug={'data-science-elite-course'} isModal={true} sourceDomain='Course form' />
            </Modal>
          </div>


        </div>

        {/* AirBnB project video block */}
        <div className="col-span-12 lg:col-span-6 rounded-xl overflow-hidden relative aspect-video border border-white">
          {playVideo ? (
            <iframe
              className="w-full h-full rounded-xl"
              src={projects[6].videoUrl}
              title="Python Analysis on AirBnB"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ) : (
            <div
              className="relative w-full h-full cursor-pointer"
              onClick={() => setPlayVideo(true)}
            >
              <Image
                src={projects[6].videoThumb}
                alt="Python Analysis on AirBnB Video"
                fill
                className="rounded-xl object-cover"
              />
              <Image
                src="https://strapi.odinschool.com/uploads/play_button_3a9c87c1ac.png"
                alt="Play Button"
                width={60}
                height={60}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DsEliteProjects;
