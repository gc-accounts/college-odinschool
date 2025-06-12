'use client';

import React from 'react';
import Image from 'next/image';

interface CertificateProps {
  sectionClass?: string;
  data?: any;
}

const Certification = ({ sectionClass, data }: CertificateProps) => {
  return (
    <section className={`${sectionClass ? sectionClass : 'my-32'}`}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Text Block */}
          <div className="md:col-span-6 col-span-1">
            <h2 className="text-3xl md:text-5xl font-display leading-tight mb-4 text-gray-900">
              {data.heading.split('Data Science')[0]}
              <span className="text-primary-600">Data Science</span>
              {data.heading.split('Data Science')[1]}
            </h2>
            <p className="text-gray-600 mb-6">{data.subheading}</p>

            <ul className="space-y-6">
              {data.features.map(({ id, iconLabel, title, description }) => (
                <li
                  key={id}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 bg-primary-50 rounded-md p-2">
                    <Image
                      src={iconLabel}
                      alt={`${title} icon`}
                      width={48}
                      height={48}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{title}</p>
                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Certificate Image */}
          <div className="md:col-span-6 col-span-1 flex justify-center">
            <Image
              src={data.certificateImage}
              alt="OdinSchool Data Science Certificate"
              width={400}
              height={300}
              className="w-full max-w-xs md:max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;
