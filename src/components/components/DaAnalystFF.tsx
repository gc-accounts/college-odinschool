// components/DaAnalystFF.tsx
'use client';

import React from 'react';
import { Button } from "@/components/components/ui/button";
import Link from 'next/link';
import { CiCircleCheck } from 'react-icons/ci';
import PrimaryForm from './course-details/PrimaryForm';
import Image from 'next/image';


interface dsEliteProps {
  sectionClass?: String
}
const DaAnalystFF = ({ sectionClass }: dsEliteProps) => {


  return (
    <section className={`${sectionClass ? sectionClass : ''} overflow-hidden relative`}>
      <div className="container grid md:grid-cols-12 gap-10 items-center justify-between">
        {/* Left Section */}
        <div className='col-span-5'>
          <div className="mb-4 flex items-center gap-2 bg-primary-100 px-3 py-1 rounded-full inline-block w-fit">
            <div className='flex items-center justify-start'>
            <Image src="https://strapi.odinschool.com/uploads/google_icon_1c781f0daa.svg" alt="Google Reviews" width={20} height={20} className="w-4 h-4 mr-1" />
            <Image src="https://strapi.odinschool.com/uploads/4_7_Rating_21deb84380.svg" alt="Google Reviews" width={20} height={20} className="w-auto h-4" />
            </div>
            <Link href='https://www.google.com/search?q=odinschool+reviews&ei=nraqY-bdDYePseMPs7KXyAE&oq=odinschool&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgcIABCwAxBDMgcIABCwAxBDMgcIABCwAxBDMgcIABCwAxBDMg0IABDkAhDWBBCwAxgBMg0IABDkAhDWBBCwAxgBMg0IABDkAhDWBBCwAxgBMhIILhDHARCvARDIAxCwAxBDGAIyEgguEMcBENEDEMgDELADEEMYAjISCC4QxwEQrwEQyAMQsAMQQxgCMgwILhDIAxCwAxBDGAJKBAhBGABKBAhGGAFQAFgAYPoPaAFwAXgAgAEAiAEAkgEAmAEAyAETwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz-serp#lrd=0x3bcb9397ba0bf25b:0xc3f248706b488093,1' target='_blank'>
            <span className="text-xs">4.6/5 | 1,539 Reviews</span>
            </Link>
          </div>

          <h2 className="text-3xl md:text-5xl text-white mb-3 font-display leading-normal">
            Data Analyst <br /> College Program
          </h2>
          <p className="text-white text-md mb-10">
            Master Data Analytics and get job-ready before you graduate!
          </p>


           <ul className='text-gray-300 delay-100 grid grid-cols-2 gap-4 mb-6'>
                        <li className='flex gap-1 px-2 py-3 rounded-md border border-primary-800 bg-primary-900'><span className='mr-2 flex items-center'><CiCircleCheck className='md:w-5 md:h-5 w-5 h-5 rounded-full text-white bg-primary-600' /></span> <span>Internship program </span></li>
                        <li className='flex gap-1 px-2 py-3 rounded-md border border-primary-800 bg-primary-900'><span className='mr-2 flex items-center'><CiCircleCheck className='md:w-5 md:h-5 w-5 h-5 rounded-full text-white bg-primary-600' /></span> <span>Job prep support </span></li>
                        <li className='flex gap-1 px-2 py-3 rounded-md border border-primary-800 bg-primary-900'><span className='mr-2 flex items-center'><CiCircleCheck className='md:w-5 md:h-5 w-5 h-5 rounded-full text-white bg-primary-600' /></span> <span>Live online classes</span></li>
                        <li className='flex gap-1 px-2 py-3 rounded-md border border-primary-800 bg-primary-900'><span className='mr-2 flex items-center'><CiCircleCheck className='md:w-5 md:h-5 w-5 h-5 rounded-full text-white bg-primary-600' /></span> <span>20+ Projects </span></li>
                      </ul>


          <p className="text-yellow-400 font-medium">
            Student ID is mandatory for the enrollment to the course.
          </p>
          <div className="mt-4 flex items-center justify-start gap-3">
            <p className='text-xs text-white'>A Certified Member of</p>
            <Image src="https://strapi.odinschool.com/uploads/hysea_rc_f9ae5c4e82.webp" alt="HYSEA" className="h-6" width={70} height={20} />
            <Image src="https://strapi.odinschool.com/uploads/shrm_rc_7b33e51251.webp" alt="SHRM" className="h-6" width={70} height={20} />
          </div>
        </div>
        <div className='col-span-2'></div>
        {/* Right Form Section */}
        <div className='col-span-5'>

            {/* <div className="cohort-holder text-white rounded-3 rounded-b-0 flex justify-center items-center">
        <Image src="https://college.odinschool.com/hubfs/Header%20Form%20Image.png" width={20} height={20} alt="student image" loading="eager" fetchPriority="high" className="student-image" />
        <div className="p-md-4 p-3">
            <h4 className="font-semibold border-b border-white md:pb-3  pb-3 mb-3 none">A Proven Program to make you a Software Developer</h4>
            <p className="fs-12px mb-1">Upcoming Cohort</p>
            <h4 className="mb-0 fw-semibold">28 Jun 2025</h4>
        </div>

    </div> */}

            <PrimaryForm slug={'data-analyst-course'} isModal={false} buttonText={'Request a Callback'} sourceDomain='Course form' />
        </div>
      </div>
    </section>
  );
};

export default DaAnalystFF;
