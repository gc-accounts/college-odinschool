'use client'
import React, { useEffect } from 'react';
import { DsMentorsData } from '@/components/data/course-section/mentors/DsMentorsData';
import dynamic from 'next/dynamic';




const Hellobar = dynamic(() => import('@/components/components/HelloBar'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});
const Navbar = dynamic(() => import('@/components/components/Navbar'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});


const HeroSection = dynamic(() => import('@/components/components/HeroSection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});


const FeaturedCourses = dynamic(() => import('@/components/components/FeaturedCourses'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});


const Testimonials = dynamic(() => import('@/components/components/Testimonials'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});

const Footer = dynamic(() => import('@/components/components/Footer'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});

const CallbackForm = dynamic(() => import('@/components/components/CallbackForm'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});

const OrganizationLogos = dynamic(() => import('@/components/components/OrganizationLogos'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});

const NewsSection = dynamic(() => import('@/components/components/NewsSection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});



const JobsSection = dynamic(() => import('@/components/components/JobsSection'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});



const OdinTalks = dynamic(() => import('@/components/components/OdinTalks'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});

const ExtrasSection1 = dynamic(() => import('@/components/components/ExtrasSection1'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});

const DsEliteFold = dynamic(() => import('@/components/components/DsEliteFold'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});

const InstructorProfileHome = dynamic(() => import('@/components/components/InstructorProfileHome'), {
  loading: () => <div className="h-16 bg-gray-100 animate-pulse" />
});



const Index = ({
  organisations,
  featuredCourses,
  testimonials,
  odinTalks
}) => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <HeroSection sectionClass={'bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />
          <OrganizationLogos sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} organisations={organisations} />
          <InstructorProfileHome data={DsMentorsData} />
          <OdinTalks odinTalks={odinTalks} sectionClass={'bg-white px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />
        </main>
        <ExtrasSection1 />
        <NewsSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
