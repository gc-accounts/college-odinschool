// file: src/app/data-science-elite-course/page.tsx
import React from 'react'
import DataAnalystCollegeProgram from '@/components/pages/DataAnalystCollegeProgram'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Analyst College Program | Live-Online training | OdinSchool',
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

const page = () => {
  return (
    <DataAnalystCollegeProgram organisations={[]}
    />
  );
};

export default page;
