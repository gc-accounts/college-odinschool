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
          <HeroSection />
          <OrganizationLogos organisations={organisations} />
          <DsEliteFold sectionClass={'bg-[#021331] px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />
          <FeaturedCourses courses={featuredCourses} />
          <Testimonials testimonials={testimonials} />
          <InstructorProfileHome data={DsMentorsData} />
          <JobsSection sectionClass={'px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />
          <OdinTalks odinTalks={odinTalks} sectionClass={'bg-primary-50 px-[20px] py-[50px] md:px-[30px] md:py-[70px]'} />
        </main>
        <ExtrasSection1 />
        <NewsSection />
        <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
                Ready to <span className="text-primary-600">Get Started?</span>
              </h2>
              <p className="text-md text-gray-600 max-w-2xl mx-auto">
                Request a callback from our team and begin your upskilling journey today.
              </p>
            </div>
            <CallbackForm />
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Index;
