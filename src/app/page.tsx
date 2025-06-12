import * as React from 'react';
import Home from '@/components/pages/Index';
import { Metadata } from 'next';
import { getOrganisations } from '@/components/utils/api/organisation';
import { getCourses } from '@/components/utils/api/courses';
import { getStories } from '@/components/utils/api/story';
import { getWebinars } from '@/components/utils/api/webinars';

export const metadata: Metadata = {
  title: 'OdinSchool - Boost Your Career with Industry-Aligned Courses',
  description: 'Upskill with career-aligned courses: Data Science | Power BI | Applied Generative AI | DevOps & Cloud Computing',
  openGraph: {
    title: 'OdinSchool - Boost Your Career with Industry-Aligned Courses',
    description: 'Upskill with career-aligned courses: Data Science | Power BI | Applied Generative AI | DevOps & Cloud Computing',
  },
  twitter: {
    title: 'OdinSchool - Boost Your Career with Industry-Aligned Courses',
    description: 'Upskill with career-aligned courses: Data Science | Power BI | Applied Generative AI | DevOps & Cloud Computing',
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
