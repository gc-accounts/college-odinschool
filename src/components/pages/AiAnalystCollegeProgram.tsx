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

const AiAnalystFF = dynamic(() => import('@/components/components/ai-analyst-coomponents/AiAnalystFF'), {
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


const AiAnalystYoucanSection= dynamic(()=>import ('@/components/components/AiAnalystYoucanSection'))


const AiAnalystRoleSection = dynamic(() => import('@/components/components/ai-analyst-coomponents/AiAnalystRoleSection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />,
});


const AiAnalystDualCertification= dynamic(() => import('@/components/components/ai-analyst-coomponents/AiAnalystDualCertification'), {
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
import { DsEliteCurriculumData } from '@/components/data/course-section/curriculum/DsEliteCurriculumData';
import { DaCollegeProgramFaqsData } from '../data/course-section/faqs/DaCollegeProgramFaqsData';
import InternsJoruney from '../components/InternsJoruney';
import { AiAnalystCardData } from '../data/course-section/card-data/AiAnalystCardData';
import { AiHighlightData } from '../data/course-section/program-highlights/AiHighlightData';
import { AiAnalystInternshipData } from '../data/course-section/Intership-section/AiAnalystInternshipData';
import { AiAnalystProgramCurriculumData } from '../data/course-section/curriculum/AiAnalystProgramCurriculumData';
import { AiAnalystProjectData } from '../data/course-section/project-section/AiAnalystProjectData';
import { DaCollegeProgramJobsData } from '../data/course-section/job-drives/DaCollegeProgramJobsData';
import { AiCollegeProgramJobsData } from '../data/course-section/job-drives/AiCollegeProgramJobsData';
import { AiAnalystMentorsData } from '../data/course-section/mentors/AiAnalystMentorsData';
import { AiAnalystCollegeProgramFaqsData } from '../data/course-section/faqs/AiAnalystCollegeProgramFaqsData';
import { AimlCoreModuleData } from '../data/course-section/curriculum/AimlCoreModuleData';
import ProgramCurriculum2 from '../components/ProgramCurriculum2';
import { AIEliteCurriculumData } from '../data/course-section/curriculum/AIEliteCurriculumData';
import { AiAnalystPrepSupport } from '../data/course-section/prepSupport/AiAnalystPrepSupport';
import JobsSection from '../components/JobsSection';
import { dsJobsDrives } from '../data/dsJobsDrives';
import { AIEliteJobDrives } from '../data/aiEliteJobDrives';
import EnrollProgram from '../components/EnrollProgram';


const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif',
});

interface Props{
  initialCourse: Course; // Now required: the course data is passed from the server
}

const AiAnalystCollegeProgram = ({initialCourse}:Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const course = initialCourse;

  return (
    <>

      <HelloBar isPrimaryForm={true} slug='ai-analyst-course' />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className={`flex-grow ${dmSerifDisplay.variable}`}>
          <AiAnalystFF cohortDates={course.cohortDates} sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:pt-[70px] md:pb-[160px]" />
          <CardsFF cardData={AiAnalystCardData} sectionClass="px-[20px] pt-[50px] pb-[50px] md:px-[30px] md:pb-[0px] md:pt-[70px]" />
          <section className="">
            <ImageResponsive
              desktopSrc="https://strapi.odinschool.com/uploads/infographic_AIACP_26b476d282.webp"
              mobileSrc="https://strapi.odinschool.com/uploads/infographic_AIACP_mobile_5b1f752cf5.webp"
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
          sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" 
          data={AiHighlightData} 
          title='Program Highlights'
          centerImg='https://strapi.odinschool.com/uploads/program_student_50d859907a.webp'
          centerText='Master AI Analytics with AI tools & Projects'
           />
          {/* <InternsJoruney internshipData={AiAnalystInternshipData}  sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]"/> */}
          {/* <ProgramCurriculum
            data={AiAnalystProgramCurriculumData}
            sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
            slug="ai-analyst-course"
          /> */}

     
              <ProgramCurriculum2
                title="A Curriculum designed for outcomes"
                subText=""
                data={AIEliteCurriculumData}
                sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"
                slug="ai-analyst-course" sourceDomain="Course form"
                aimlCoremoduleData={AimlCoreModuleData}
              />
    

          <ToolsSection fontFamily={dmSerifDisplay.variable} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <DsEliteProjects slug='ai-analyst-course'  projects={AiAnalystProjectData} sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <JobPrepSupport jobPrepItems={AiAnalystPrepSupport} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <JobsSection jobs={AIEliteJobDrives} sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]"/>
          <AiAnalystYoucanSection sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]"  /> 
          <AiAnalystRoleSection sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" /> 
          <AiAnalystDualCertification sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <OrganizationLogos sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]"  />    
          <InstructorProfileHome sectionClass="bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={DsMentorsData} />
          <StudentsTicker sectionClass="bg-primary-50 px-0 py-[50px] md:px-0 md:py-[70px]" />
          <EnrollProgram sectionClass="bg-white px-0 py-[50px] md:px-0 md:py-[70px]" />
          <DaFeeModule slug='ai-analyst-course' cohortDates={course.cohortDates} sectionClass="bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]" />
          <FAQsection fontFamily={dmSerifDisplay.variable} sectionClass="bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]" data={AiAnalystCollegeProgramFaqsData} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AiAnalystCollegeProgram;
