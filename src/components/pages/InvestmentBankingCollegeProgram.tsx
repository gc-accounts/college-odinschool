'use client';
import React, { useEffect } from 'react';
import { DM_Serif_Display } from 'next/font/google';
import dynamic from 'next/dynamic';

// Import the Course interface (just for type checking the prop)
import { Course } from '@/components/hooks/useCourseDetails';



const HelloBar = dynamic(() => import('@/components/components/HelloBar'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const Navbar = dynamic(() => import('@/components/components/Navbar'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const IbfoFF = dynamic(() => import('@/components/components/IbfoFF'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const CardsFF = dynamic(() => import('@/components/components/CardsFF'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const GetJobReady = dynamic(() => import('@/components/components/GetJobReady'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});



const ProgramHighlights2 = dynamic(() => import('@/components/components/ProgramHighlights2'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const ProgramCurriculum = dynamic(() => import('@/components/components/ProgramCurriculum'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const ToolsSection = dynamic(() => import('@/components/components/ToolsSection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const IbProjects = dynamic(() => import('@/components/components/IbProjects'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const JobPrepSupport = dynamic(() => import('@/components/components/JobPrepSupport'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const YouCanSection2 = dynamic(() => import('@/components/components/YouCanSection2'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const RolesIb = dynamic(() => import('@/components/components/RolesIb'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const DualCertification = dynamic(() => import('@/components/components/DualCertification'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const InstructorProfileHome = dynamic(() => import('@/components/components/InstructorProfileHome'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const OrganizationLogos = dynamic(() => import('@/components/components/OrganizationLogos'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const StudentsTicker = dynamic(() => import('@/components/components/StudentsTicker'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const IbFeeModule = dynamic(() => import('@/components/components/IbFeeModule'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const FAQsection = dynamic(() => import('@/components/components/FAQsection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const Footer = dynamic(() => import('@/components/components/Footer'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const ImageResponsive = dynamic(() => import('@/components/components/ImageResponsive'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});



import { DsMentorsData } from '../data/course-section/mentors/DsMentorsData';
import { IBCollegeProgramCurriculumData } from '../data/course-section/curriculum/IBCollegeProgramCurriculumData';
import { IbCollegeProgramFaqsData } from '../data/course-section/faqs/IbCollegeProgramFaqsData';
import InternsJoruney from '../components/InternsJoruney';
import { IBCardData } from '../data/course-section/card-data/IBCardData';
import { DataAnalystInternshipData } from '../data/course-section/Intership-section/DataAnalystInternshipData';
import { IBProjectData } from '../data/course-section/project-section/IBProjectData';
import { DaCollegeProgramJobsData } from '../data/course-section/job-drives/DaCollegeProgramJobsData';
import { IBProgramHighlightsData } from '../data/course-section/program-highlights/IBProgramHighlightsData';



const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
});

interface Props{
  initialCourse: Course; // Now required: the course data is passed from the server
}

const InvestmentBankingCollegeProgram = ({initialCourse}:Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const course = initialCourse;

  return (
    <>

      <HelloBar isPrimaryForm={true} slug='investment-banking-finance-ops' />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className={`flex-grow ${dmSerifDisplay.variable}`}>
            <IbfoFF cohortDates={course.cohortDates} sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:pt-[70px] md:pb-[160px]" />
            <CardsFF cardData={IBCardData} sectionClass="px-[20px] pt-[50px] pb-[50px] md:px-[30px] md:pb-[0px] md:pt-[70px]" />
            <GetJobReady sectionClass="px-[20px] pb-[50px] md:px-[30px] md:pb-[70px]" />
                <ProgramHighlights2
                 data={IBProgramHighlightsData} 
                 title='Program Highlights'
                 subText='Get job-ready with real-world tools, Investment Banking processes, financial operations projects, and hands-on learning experience.'
                 centerImg='https://strapi.odinschool.com/uploads/IBFO_ebeb659f65.webp'
                 sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                 centerText='A complete 360° mastery in Investment Banking & Finance Operations with real tools & applied projects.' />
                     <ProgramCurriculum
            data={IBCollegeProgramCurriculumData}
            sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
            slug="investment-banking-finance-ops"
            bg='dark'
          />
          <IbProjects slug='investment-banking-finance-ops' projects={IBProjectData} sectionClass="px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <YouCanSection2 sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]"  /> 
          <RolesIb sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" /> 
          <DualCertification sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <OrganizationLogos sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]"  />    
          <InstructorProfileHome sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={DsMentorsData} />
          <StudentsTicker sectionClass="bg-primary-50 px-0 py-[50px] md:px-0 md:py-[70px]" />
          {/* <IbFeeModule slug='investment-banking-finance-ops' cohortDates={course.cohortDates} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" /> */}
          <FAQsection fontFamily={dmSerifDisplay.variable} sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={IbCollegeProgramFaqsData} />
          

     
          {/* <InternsJoruney  internshipData={DataAnalystInternshipData}  sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]"/> */}
          {/* <ToolsSection fontFamily={dmSerifDisplay.variable} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" /> */}
          {/* <JobPrepSupport  programJobData={DaCollegeProgramJobsData} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" /> */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default InvestmentBankingCollegeProgram;
