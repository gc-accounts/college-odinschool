import React from 'react';
import Link from 'next/link';
import { Network, UserRoundPen, Newspaper, Handshake, Podcast } from 'lucide-react';
import { Button } from '@/components/components/ui/button';
import RequestCallback from './custom-component/RequestCallback';
import { CourseCarrerServiceData } from '@/components/data/CourseCarrerServiceData';

import { usePathname } from 'next/navigation';


interface CareerServices1Props {
  slug: String,
  sectionClass?: String,
  fontFamily?: String
}
const CareerServices = ({ slug, sectionClass, fontFamily }: CareerServices1Props) => {

  const pathname = usePathname();
  const showDiv = pathname !== '/data-science-elite-course';


  return (
    <section className={`${sectionClass ? sectionClass : 'py-16 bg-white'}`}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className={`text-3xl mb-4 text-gray-900 ${fontFamily?'md:text-5xl font-display leading-tight':'font-bold md:text-4xl'} ${fontFamily}`}>
            <span className="text-primary-600">Career Services</span> Designed for Success
          </h2>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Get ready for your dream job! Attend comprehensive industry readiness training with Career Services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 justify-items-center">
          {
            CourseCarrerServiceData.map((item, index) => {
              return (
                <div key={index} className={`${sectionClass?.includes('bg-primary-50') ? 'bg-white' : 'bg-primary-50'} rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all`}>
                  <div className="mx-auto flex items-center justify-center h-16 w-16 bg-primary-50 rounded-full mb-4 shadow ">
                    <item.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                </div>
              )
            })
          }

        </div>


        

        {showDiv && (
          <>
          <RequestCallback slug={slug} />
        <div className="mt-16 bg-white p-6 md:p-10 rounded-xl border border-gray-200 shadow-sm animate-on-scroll ">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">How do I enroll in this program?</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our structured learning path takes you from beginner to certified professional
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Apply", },
              { step: "2", title: " Talk to A Counsellor", },
              { step: "3", title: "Review Your Eligibility", },
              { step: "4", title: "Get Started", }
            ].map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold mb-4">
                  {step.step}
                </div>
                {index < 3 && (
                  <div className="absolute top-6 left-[50%] w-auto h-0.5 bg-primary-200 hidden md:block"></div>
                )}
                <h4 className="text-lg text-center font-bold mb-2">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
        </>
        )}

      </div>

    </section>

  );
};

export default CareerServices;