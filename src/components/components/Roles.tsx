'use client';

import React from 'react';
import BrochureButton from './custom-component/BrochureButton';

const rolesData = [
  {
    title: 'Data Analyst',
    description:
      'Analyze trends, interpret data, and drive business decisions. Work with tools like Excel, SQL, and Python to extract meaningful insights.',
  },
  {
    title: 'Business Analyst',
    description:
      'Bridge the gap between data insights and business strategy. Collaborate with stakeholders to optimize processes and improve efficiency.',
  },
  {
    title: 'Data Visualization Analyst',
    description:
      'Present complex data in clear, impactful visuals. Create compelling dashboards using tool like Power BI.',
  },
];


    interface Props {
  sectionClass?: string;
}

const Roles = ({ sectionClass }: Props) => {
  return (
     <section className={`${sectionClass ?? "px-6 py-12 bg-white"}`}>
         <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll ">
          <h2 className="text-3xl md:text-5xl font-display leading-tight mb-4">
            What Roles Can A <span className="text-primary-600">Data Analytics</span> Professional Pursue?
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
        Kickstart your career in <span className="text-primary-600">high-growth data roles!</span>
      </div>

      <BrochureButton slug={'data-analyst-course'} />
    </section>
  );
};

export default Roles;
