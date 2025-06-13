'use client';

import React from 'react';
import Image from 'next/image';


  const data = {
    features: [
      {
        id: 1,
        iconLabel: 'https://strapi.odinschool.com/uploads/licensing_43c4e06c53.webp',
        title: 'Official and Verified',
        description: 'Get two certificates with verifiable credentials',
      },
      {
        id: 2,
        iconLabel: 'https://strapi.odinschool.com/uploads/reputational_5b2f63d287.webp',
        title: 'Easily Sharable',
        description: 'Enrich your LinkedIn profile by sharing the certificates with just a click',
      },
      {
        id: 3,
        iconLabel: 'https://strapi.odinschool.com/uploads/network_80391a3cc6.webp',
        title: 'Enhances credibility',
        description: 'Grab the winning advantage in the job market with credible certificates',
      },
    ],
    certificateLeft: 'https://strapi.odinschool.com/uploads/DAP_20_20_College_20cert_2e89b8c6bd.webp',
    certificateRight: 'https://strapi.odinschool.com/uploads/DAP_20intern_20_Cert_dfd0616f41.webp',
  };



interface CertificateProps {
  sectionClass?: string;
}

const DualCertification = ({ sectionClass }: CertificateProps) => {

  return (
    <section className={`${sectionClass ? sectionClass : 'my-32'}`}>

      <div className="container max-w-7xl mx-auto px-4 md:px-6">

        <div className="text-center mb-12 animate-on-scroll ">
          <h2 className="text-3xl md:text-5xl  font-display leading-tight mb-4">
            Get Dual <span className="text-primary-600">Certification</span>
          </h2>
          {/* <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum teaches you the most in-demand tools used by data professionals worldwide
          </p> */}
        </div>

        {/* Top Icons Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {data.features.map(({ id, iconLabel, title, description }) => (
            <div key={id} className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-white p-3 rounded-md shadow-sm">
                <Image
                  src={iconLabel}
                  alt={`${title} icon`}
                  width={48}
                  height={48}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-1">{title}</p>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src={data.certificateLeft}
            alt="Certificate of Completion"
            width={600}
            height={400}
            className="rounded-xl w-full h-auto object-contain"
          />
          <Image
            src={data.certificateRight}
            alt="Certificate of Internship"
            width={600}
            height={400}
            className="rounded-xl w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DualCertification;
