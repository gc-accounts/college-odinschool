// components/ProgramHighlights2.tsx
'use client';

import React from 'react';
import Image from 'next/image';

interface HighlightItem {
  title: string;
  features: {
    icon: string;
    label: string;
  }[];
}

interface ProgramHighlights2Props {
sectionClass: string;
  data: HighlightItem[];
  centerImage: {
    src: string;
    caption: string;
  };
}

    const ProgramHighlights2 = ({ sectionClass, data, centerImage }: ProgramHighlights2Props) => {

  return (
    <section className={`${sectionClass ?? "px-6 py-12 bg-white"}`}>

         <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll ">
          <h2 className="mb-4 text-3xl md:text-5xl font-display leading-tight text-white">
            Program <span className="text-primary-600">Highlights</span>
          </h2>
          {/* <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum teaches you the most in-demand tools used by data professionals worldwide
          </p> */}
        </div>
        </div>

      <div className="max-w-7xl mx-auto border border-white/10 rounded-xl p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6">
            {data.slice(0, 2).map((group, i) => (
              <div key={i}>
                <h3 className="text-sm font-medium text-center underline underline-offset-4 mb-4 text-white/80">{group.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {group.features.map((item, j) => (
                    <div key={j} className="text-center rounded-md overflow-hidden border border-white/65">
                        <div className='bg-white'>
                      <Image src={item.icon} alt={item.label} width={70} height={70} className="mx-auto py-3" />
                      </div>
                      <p className="py-4 px-2 text-sm font-semibold text-white">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Center */}
          <div className="flex flex-col items-center justify-center">
            <div className="overflow-hidden rounded-md w-60 border border-white/65">
              <Image src={centerImage.src} alt="Center" width={300} height={400} className="w-full h-auto" />
              <p className="py-4 text-center font-semibold text-white">{centerImage.caption}</p>
            </div>
            
          </div>

          {/* Right */}
          <div className="flex flex-col gap-6">
            {data.slice(2).map((group, i) => (
              <div key={i}>
                <h3 className="text-sm font-medium text-center underline underline-offset-4 mb-4 text-white/80">{group.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {group.features.map((item, j) => (
                     <div key={j} className="text-center rounded-md overflow-hidden border border-white/65">
                      <div className='bg-white'>
                      <Image src={item.icon} alt={item.label} width={70} height={70} className="mx-auto py-3" />
                      </div>
                     <p className="py-4 px-2 text-sm font-semibold text-white">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights2;
