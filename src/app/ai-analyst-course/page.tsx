// file: src/app/data-science-elite-course/page.tsx
import React from 'react'
import DataAnalystCollegeProgram from '@/components/pages/DataAnalystCollegeProgram'
import { Metadata } from 'next'

import { getCourse } from '@/components/utils/api'; // Your API utility
import { Course } from '@/components/hooks/useCourseDetails'; // Import the Course interface
import AiAnalystCollegeProgram from '@/components/pages/AiAnalystCollegeProgram';

export const metadata: Metadata = {
  title: 'AI Analyst College Program | Live-Online training | OdinSchool',
  description:
    'Join OdinSchool’s Data Analyst College Program for students. Gain hands-on skills, expert guidance, and career support. Enroll now with your student ID!',
  openGraph: {
    title: 'Data Analyst College Program | Live-Online training | OdinSchool',
    description:
      'Join OdinSchool’s Data Analyst College Program for students. Gain hands-on skills, expert guidance, and career support. Enroll now with your student ID!',
    type: 'website',
    url: 'https://college.odinschool.com/data-analyst-course',
    images: [
      {
        url: 'https://strapi.odinschool.com/uploads/ds_elite_og_image.webp',
        width: 1200,
        height: 630,
        alt: 'Data Analyst College Program | Live-Online training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Analyst College Program | Live-Online training',
    description:
      'Join OdinSchool’s Data Analyst College Program for students. Gain hands-on skills, expert guidance, and career support. Enroll now with your student ID!',
    images: ['https://strapi.odinschool.com/uploads/ds_elite_og_image.webp'],
  },
  keywords: [
    'Data Analyst College Program',
    'online course',
    'real-world projects',
    'OdinSchool',
  ],
  authors: [{ name: 'OdinSchool' }],
  metadataBase: new URL('https://college.odinschool.com'),
};

const Page = async () => {
  const courseSlug = 'data-science-course'; // The specific slug for this page

  const response = await getCourse("", courseSlug);
  const course: Course | null = response && response[0] ? response[0] : null;

  if (!course) {
    // Handle case where course data is not found
    return (
      <div className="flex flex-col min-h-screen items-center justify-center text-center py-16">
        <h1 className="text-4xl font-bold text-red-600">Course Not Found</h1>
        <p className="text-lg mt-4">We could not find the details for the Data Science course. Please try again later or contact support.</p>
      </div>
    );
  }

  return (
    <>
      <style>
        {`
          .primaryFormCustom {
            border: 3px solid #1a6cf7;
          }
          .downloadBtn{
            color: #000;
            border-color: #000;
          }
        `}
      </style>
      
      <AiAnalystCollegeProgram
        initialCourse={course}
      />
    </>
  );
};
export default Page;
