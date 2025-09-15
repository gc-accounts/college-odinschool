'use client';

import React from 'react';
// import BrochureButton from './custom-component/BrochureButton';

import BrochureButton from '../custom-component/BrochureButton';
const rolesData = [
  {
    title: 'AI Analyst',
    description:
      'Uncover patterns in data, automate processes, and drive AI-powered insights to enhance decision-making.',
  },
  {
    title: 'Machine Learning Associate',
    description:
      'Support the development and implementation of machine learning models to analyze trends and optimize workflows.',
  },
  {
    title: 'Software Engineer - AI',
    description:
      'Develop AI-driven applications, build intelligent algorithms, and optimize AI models for real-world solutions.',
  },
];


    interface Props {
  sectionClass?: string;
}

const AiAnalystRoleSection = ({ sectionClass }: Props) => {
  return (
     <section className={`${sectionClass ?? "px-6 py-12 bg-white"}`}>
         <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll ">
          <h2 className="text-3xl md:text-5xl font-display leading-tight mb-4">
            What Roles Can A <span className="text-primary-600">AI Analytics</span> Professional Pursue?
          </h2>
          {/* <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum teaches you the most in-demand tools used by data professionals worldwide
          </p> */}
        </div>
        </div>


      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {rolesData.map((role, index) => (
          <div
            key={index}
            className="relative px-4 md:px-6 border-l-4 border-transparent md:border-l-2 border-primary-700"
          >
            <h3 className="text-lg font-semibold text-primary-600 mb-2">{role.title}</h3>
            <p className="text-sm leading-relaxed">{role.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 font-semibold text-lg mb-10">
        Step into a dynamic <span className="text-primary-600">AI-driven career and make an impact!</span>
      </div>

      <BrochureButton slug={'ai-analyst-course'} />
    </section>
  );
};

export default AiAnalystRoleSection;
