'use client';

import React from 'react';
import { CiCircleCheck } from "react-icons/ci";
import BrochureButton from '@/components/components/custom-component/BrochureButton';


import AimlCoreModule from '@/components/components/AimlCoreModule';
import type { AimlModuleData } from '@/components/components/AimlCoreModule';



import { usePathname } from 'next/navigation';


// Types for main curriculum and each core module
interface SubModule {
  program_title: string;
  points: string[];
  logo: string[];
}

interface MainModule {
  module: string;
  subModules: SubModule[];
}

interface ProgramCurriculum2Props {
  sectionClass?: string;
  slug?: string;
  sourceDomain?: string;
  brochureSourceDomain?: string;
  title?: string;
  subText?: string;
  data: MainModule[];
  aimlCoremoduleData?: AimlModuleData[];
}

const ProgramCurriculum2 = ({
  sectionClass,
  sourceDomain,
  brochureSourceDomain,
  slug,
  data,
  title,
  subText,
  aimlCoremoduleData,
}: ProgramCurriculum2Props) => {

  const pathname = usePathname();
  // Route checks
  const showDiv1 = [''].includes(pathname);
  const showDiv2 = ['/ai-analyst-course'].includes(pathname);
  const showDiv3 = [''].includes(pathname);

  return (
    <section className={`${sectionClass ? sectionClass : 'py-16 md:py-24 bg-white'}`}>
      <div className="container">
            <div className='section-header text-center'>
           <h2 className="mb-4 text-3xl md:text-5xl font-display leading-tight">
            {title}
          </h2>
          <p className='text-md text-center text-balck'>{subText}</p>
        </div>

        {/* {showDiv1 && dsCoremoduleData && (
          <div className='mt-3'>
            <DsCoreModule data={dsCoremoduleData} />
          </div>
        )} */}

        {showDiv2 && aimlCoremoduleData && (
          <div className='mt-3'>
            <AimlCoreModule data={aimlCoremoduleData} />
          </div>
        )}

        {/* {showDiv3 && genaiCoremoduleData && (
          <div className='mt-3'>
            <GenAiCoreModule data={genaiCoremoduleData} />
          </div>
        )} */}

        {data.map((moduleData, moduleIndex) => (
          <div key={moduleIndex}>
            <h3 className="text-2xl md:text:lg font-semibold text-center mt-10 mb-6">{moduleData.module}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-4">
              {moduleData.subModules.map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow h-full flex flex-col justify-between">
                  <div className='h-[240px] overflow-auto'>
                    <h3 className="font-semibold md:text-lg text-md mb-4 text-black">{item.program_title}</h3>
                    <ul className="md:text-md text-sm text-black space-y-2 mb-3">
                      {item.points.map((point, idx) => (
                        <li key={idx} className='flex gap-1'>
                          <span className='mr-2'>
                            <CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' />
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {item?.logo?.map((logoUrl, logoIndex) => (
                      <img
                        key={logoIndex}
                        src={logoUrl}
                        alt="tool"
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}


             <p className='text-black font-medium md:text-xl text-base text-center mt-10 mb-3'>
          The curriculum includes both Mini Capstone and Capstone projects, providing students with practical application of their learning.
        </p>

        <p className='text-black md:text-sm text-xs text-center mb-5 italic'>
          Note: AI tools are subject to changes based on the availability and other updates on the course pages.
        </p>

        <BrochureButton slug={slug} />
      </div>
    </section>
  );
};

export default ProgramCurriculum2;
