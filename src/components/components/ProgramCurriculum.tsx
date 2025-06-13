import React from 'react';
import Image from 'next/image';
import { CircleCheck } from 'lucide-react';
import { CiCircleCheck } from "react-icons/ci";
import { Button } from '@/components/components/ui/button';
import BrochureButton from '@/components/components/custom-component/BrochureButton';
interface ProgramCurriculumProps {
  sectionClass?: String;
  slug?: String;
  data: {
    program_title: string;
    points: string[];
    logo: string[];
  }[];
}

const ProgramCurriculum = ({ sectionClass, slug, data }: ProgramCurriculumProps) => {
  return (
    <section className={`${sectionClass ? sectionClass : ''} relative overflow-hidden`}>
      <div className="container">
        <div className='text-center mb-12 animate-on-scroll '>
        <h2 className="mb-4 text-3xl md:text-5xl font-display leading-tight">
            Program <span className="text-primary-600">Curriculum</span>
          </h2>
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow h-full flex flex-col justify-between">
              <div className='h-[240px] overflow-auto'>
                <h3 className="font-semibold md:text-lg text-md mb-4 text-black">{item.program_title}</h3>
                <ul className="md:text-md text-sm text-black space-y-2 mb-3">
                  {item.points.map((point, idx) => (
                    <li key={idx} className='flex gap-1'><span className='mr-2'><CiCircleCheck className='md:w-6 md:h-6 w-5 h-5 rounded-full text-white bg-primary-600' /></span> <span>{point}</span></li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {item.logo.map((logoUrl, logoIndex) => (
                  <Image
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

        <p className='font-medium text-xl text-center  mt-10 mb-5'>The curriculum includes both Mini Capstone and Capstone projects, providing students with practical application of their learning.</p>

        <BrochureButton slug={'data-science-elite-course'} />


      </div>
    </section >
  );
};

export default ProgramCurriculum;
