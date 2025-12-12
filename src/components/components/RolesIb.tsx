'use client';

import React from 'react';
import BrochureButton from './custom-component/BrochureButton';

const rolesData = [
  {
    title: 'Investment Banking Associate',
    description: 'Support deal execution, build pitchbooks, perform valuations, assist in M&A and capital-raising activities.',
  },
  {
    title: 'Trade Lifecycle / Operations Specialist',
    description: 'Handle settlements, confirmations, reconciliations, corporate actions, break resolutions, and daily front–back office coordination.',
  },
  {
    title: 'Client Onboarding & KYC Specialist',
    description: 'Streamline onboarding, verify documents, ensure compliance, manage AML checks, and work with global banking teams.',
  },
  {
    title: 'Risk & Control Specialist (Finance Ops)',
    description: 'Monitor exposure, escalate operational risks, ensure process controls, and support audits & regulatory reporting.',
  },
];


 
interface Props {
  sectionClass?: string;
}

const RolesIb = ({ sectionClass }: Props) => {
  return (
     <section className={`${sectionClass ?? "px-6 py-12 bg-white"}`}>
         <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll ">
          <h2 className="text-3xl md:text-5xl font-display leading-tight mb-4">
            What Roles Can an <span className="text-primary-600">Investment Banking and Finance Ops</span> Professional Pursue?
          </h2>
          {/* <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum teaches you the most in-demand tools used by data professionals worldwide
          </p> */}
        </div>
        </div>


      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
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
        Kickstart your career in <span className="text-primary-600">high-growth finance roles!</span>
      </div>

      <BrochureButton slug={'investment-banking-finance-ops'} />
    </section>
  );
};

export default RolesIb;
