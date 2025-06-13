import * as React from 'react';
import Home from '@/components/pages/Index';
import { Metadata } from 'next';
import { getOrganisations } from '@/components/utils/api/organisation';
import { getCourses } from '@/components/utils/api/courses';
import { getStories } from '@/components/utils/api/story';
import { getWebinars } from '@/components/utils/api/webinars';

export const metadata: Metadata = {
  title: 'Data & AI Analyst Courses for College Students | Get Job-Ready Today',
  description: 'Get job-ready with OdinSchool’s Data & AI Analyst courses! Learn Python, SQL, AI & ML with hands-on projects, expert training & placement support.',
  openGraph: {
    title: 'Data & AI Analyst Courses for College Students | Get Job-Ready Today',
    description: 'Get job-ready with OdinSchool’s Data & AI Analyst courses! Learn Python, SQL, AI & ML with hands-on projects, expert training & placement support.',
  },
  twitter: {
    title: 'Data & AI Analyst Courses for College Students | Get Job-Ready Today',
    description: 'Get job-ready with OdinSchool’s Data & AI Analyst courses! Learn Python, SQL, AI & ML with hands-on projects, expert training & placement support.',
  },
};

// This function will be called during build time
export async function generateStaticParams() {
  return [{}]; // Return an empty object to generate a single static page
}

// This function will be called during build time
async function getStaticData() {
  try {
    const [organisations, featuredCourses, testimonials, odinTalks] = await Promise.all([
      getOrganisations(),
      getCourses({ pageNumber: 1, city: '', isFeatured: true, search: '' }),
      getStories({ pageNumber: 1, pageSize: 3, isFeatured: true, remarks: 'student' }),
      getWebinars({
        pageNumber: 1,
        pageSize: 3,
        isOdintalk: true,
        isFeatured: true
      })
    ]);

    return {
      organisations,
      featuredCourses,
      testimonials,
      odinTalks,
    };
  } catch (error) {
    console.error('Error fetching data during build:', error);
    return {
      organisations: [],
      featuredCourses: [],
      testimonials: [],
      odinTalks: [],
    };
  }
}

export default async function HomePage() {
  const data = await getStaticData();

  return (
    <main>
      <div className='layout min-h-screen'>
        <Home
          organisations={data.organisations}
          featuredCourses={data.featuredCourses}
          testimonials={data.testimonials}
          odinTalks={data.odinTalks}
        />
      </div>
    </main>
  );
}
