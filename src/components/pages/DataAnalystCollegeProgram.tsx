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

const DaAnalystFF = dynamic(() => import('@/components/components/DaAnalystFF'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const JobsSection = dynamic(() => import('@/components/components/JobsSection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const CardsFF = dynamic(() => import('@/components/components/CardsFF'), {
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
const DsEliteProjects = dynamic(() => import('@/components/components/DsEliteProjects'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const JobPrepSupport = dynamic(() => import('@/components/components/JobPrepSupport'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const YouCanSection = dynamic(() => import('@/components/components/YouCanSection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});
const Roles = dynamic(() => import('@/components/components/Roles'), {
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

const EnrollProgram = dynamic(() => import('@/components/components/EnrollProgram'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});

const DaFeeModule = dynamic(() => import('@/components/components/DaFeeModuel'), {
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
import { DaCollegeProgramCurriculumData } from '@/components/data/course-section/curriculum/DaCollegeProgramCurriculumData';
import { DaCollegeProgramFaqsData } from '../data/course-section/faqs/DaCollegeProgramFaqsData';
import InternsJoruney from '../components/InternsJoruney';
import { DataAnalystCardData } from '../data/course-section/card-data/DataAnalystCardData';
import { DataAnalystInternshipData } from '../data/course-section/Intership-section/DataAnalystInternshipData';
import { DataAnalystProjectData } from '../data/course-section/project-section/DataAnalystProjectData';
import { DaCollegeProgramJobsData } from '../data/course-section/job-drives/DaCollegeProgramJobsData';
import { DaProgramHighlightsData } from '../data/course-section/program-highlights/DaCollegeProgramData';
import { DaPrepSupport } from '../data/course-section/prepSupport/DaPrepSupport';
import { dsJobsDrives } from '../data/dsJobsDrives';


const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
});

interface Props{
  initialCourse: Course; // Now required: the course data is passed from the server
}

const DataAnalystCollegeProgram = ({initialCourse}:Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const course = initialCourse;

  return (
    <>

      <HelloBar isPrimaryForm={true} slug='data-analyst-course' />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className={`flex-grow ${dmSerifDisplay.variable}`}>
          <DaAnalystFF cohortDates={course.cohortDates} sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:pt-[70px] md:pb-[160px]" />
          <CardsFF cardData={DataAnalystCardData} sectionClass="px-[20px] pt-[50px] pb-[50px] md:px-[30px] md:pb-[0px] md:pt-[70px]" />
          <section className="">
            <ImageResponsive
              desktopSrc="https://strapi.odinschool.com/uploads/infographic_4b23c99b10.png"
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
         <ProgramHighlights2
                 data={DaProgramHighlightsData} 
                 title='Program Highlights'
                 centerImg='https://strapi.odinschool.com/uploads/program_student_50d859907a.webp'
                 sectionClass=" px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                 centerText='Master Data Analytics with AI tools & Projects' />
          {/* <InternsJoruney  internshipData={DataAnalystInternshipData}  sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]"/> */}
          <ProgramCurriculum
            data={DaCollegeProgramCurriculumData}
            sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
            slug="data-analyst-course"
          />
          <ToolsSection fontFamily={dmSerifDisplay.variable} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <DsEliteProjects slug='data-analyst-course' projects={DataAnalystProjectData} sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <JobPrepSupport  jobPrepItems={DaPrepSupport} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <JobsSection jobs={dsJobsDrives} sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"/>
          <YouCanSection sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]"  /> 
          <Roles sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" /> 
          <DualCertification sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <OrganizationLogos sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]"  />    
          <InstructorProfileHome sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={DsMentorsData} />
          <StudentsTicker sectionClass="bg-primary-50 px-0 py-[50px] md:px-0 md:py-[70px]" />
          <EnrollProgram sectionClass="bg-white px-0 py-[50px] md:px-0 md:py-[70px]" />
          <DaFeeModule slug='data-analyst-course' cohortDates={course.cohortDates} sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <FAQsection fontFamily={dmSerifDisplay.variable} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={DaCollegeProgramFaqsData} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DataAnalystCollegeProgram;
