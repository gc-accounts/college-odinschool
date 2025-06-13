'use client';

import React from 'react';
import Image from 'next/image';

const JobServicesData = [
  {
    icon: 'https://strapi.odinschool.com/uploads/resume_8eec272789.webp',
    text: 'Resume and Linkedin profile building',
  },
  {
    icon: 'https://strapi.odinschool.com/uploads/behaviour_20skills_20b69a6a52.webp',
    text: 'Workplace Behavioral skills',
  },
  {
    icon: 'https://strapi.odinschool.com/uploads/interview_4bf27787a1.webp',
    text: 'Interview preparation',
  },
  {
    icon: 'https://strapi.odinschool.com/uploads/expert_274d1349d8.webp',
    text: 'Industry experts interaction',
  },
  {
    icon: 'https://strapi.odinschool.com/uploads/job_20portal_809e83e8a2.webp',
    text: 'Dedicated placement portal',
  },
  {
    icon: 'https://strapi.odinschool.com/uploads/drive_30dbe30af0.webp',
    text: 'Job drives',
  },
];

const JobServices = () => {
  return (
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {JobServicesData.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="h-[4.5rem] w-[4.5rem] bg-[#021331] rounded-full flex items-center justify-center flex-shrink-0">
              <Image
                src={item.icon}
                alt={item.text}
                width={40}
                height={40}
                className=""
              />
            </div>
            <p className="text-base">{item.text}</p>
          </div>
        ))}
      </div>

  );
};

export default JobServices;
