'use client';
import React, { useEffect } from 'react';
import { DM_Serif_Display } from 'next/font/google';
import dynamic from 'next/dynamic';

import DaAnalystFF from '../components/DaAnalystFF';
import ProgramHighlights2 from '../components/ProgramHighlights2';
import JobPrepSupport from '../components/JobPrepSupport';
import YouCanSection from '../components/YouCanSection';
import Roles from '../components/Roles';
import DualCertification from '../components/DualCertification';
import InstructorProfileHome from '../components/InstructorProfileHome';
import DaFeeModule from '../components/DaFeeModuel';


const CardsFF = dynamic(() => import('@/components/components/CardsFF'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const ImageResponsive = dynamic(() => import('@/components/components/ImageResponsive'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const ToolsSection = dynamic(() => import('@/components/components/ToolsSection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const DsEliteProjects = dynamic(() => import('@/components/components/DsEliteProjects'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});


const ProgramCurriculum = dynamic(() => import('@/components/components/ProgramCurriculum'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});


const FAQsection = dynamic(() => import('@/components/components/FAQsection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});



import { highlightData, centerImage } from '@/components/data/course-section/program-highlights/DaCollegeProgramData';
import { DsMentorsData } from '../data/course-section/mentors/DsMentorsData';
import { DsEliteCurriculumData } from '@/components/data/course-section/curriculum/DsEliteCurriculumData';
import { DaCollegeProgramFaqsData } from '../data/course-section/faqs/DaCollegeProgramFaqsData';





const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
});

// Lazy-loaded components
const Navbar = dynamic(() => import('@/components/components/Navbar'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });
const Footer = dynamic(() => import('@/components/components/Footer'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });
const OrganizationLogos = dynamic(() => import('@/components/components/OrganizationLogos'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });
const DsEliteFoldLight = dynamic(() => import('@/components/components/DSEliteFoldLight'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });

const StudentsTicker = dynamic(() => import('@/components/components/StudentsTicker'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });
const HelloBar = dynamic(() => import('@/components/components/HelloBar'), { loading: () => <div className="h-16 bg-gray-100 animate-pulse" /> });

const DataAnalystCollegeProgram = ({ organisations }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HelloBar isPrimaryForm={true} slug='data-analyst-course' />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className={`flex-grow ${dmSerifDisplay.variable}`}>
          <DaAnalystFF sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:pt-[70px] md:pb-[160px]" />
          <CardsFF sectionClass="px-[20px] pb-[00px] md:px-[30px] md:pb-[0px] md:pt-[70px]" />
          <section className="">
            <ImageResponsive
              desktopSrc="https://strapi.odinschool.com/uploads/info_bg_3_a7fa49bc4b.webp"
              mobileSrc="https://strapi.odinschool.com/uploads/Get_success_in_data_analytics_eed91c40c2.webp"
              alt="Careers You’ll Be Ready For"
              width={1200}
              height={600}
              className="w-full h-auto rounded-xl"
              loading="lazy"
              priority={false}
              fetchPriority="low"
            />
          </section>
          <ProgramHighlights2 sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={highlightData} centerImage={centerImage} />
          <ProgramCurriculum
            data={DsEliteCurriculumData}
            sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
            slug="data-analyst-course"
          />
          <ToolsSection fontFamily={dmSerifDisplay.variable} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <DsEliteProjects sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <JobPrepSupport sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <YouCanSection sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]"  /> 
          <Roles sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" /> 
          <DualCertification sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <OrganizationLogos sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" organisations={organisations} />    
          <InstructorProfileHome sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={DsMentorsData} />
          <StudentsTicker sectionClass="bg-primary-50 px-0 py-[50px] md:px-0 md:py-[70px]" />
          <DaFeeModule sectionClass="bg-white px-0 py-[50px] md:px-0 md:py-[70px]" />
          <FAQsection fontFamily={dmSerifDisplay.variable} sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={DaCollegeProgramFaqsData} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DataAnalystCollegeProgram;
