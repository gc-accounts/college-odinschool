import Link from 'next/link';
import React from 'react';
import { cn } from '@/components/lib/utils';
import Image from 'next/image';

interface CustomCourseCardProps{
  sectionClass:string
}
const CustomCourseCard = ({sectionClass} : CustomCourseCardProps ) => {
  const courseCard = [
    {
      id: 1,
      isPopular: true,
      company: '',
      image: 'https://strapi.odinschool.com/uploads/AIML_9ee02fd058.png',
      level: 'Beginner',
      title: 'Data Analyst Course',
      description:
        'Master Artificial Intelligence, Generative AI, and LLMs with India’s only AI program backed by.',
      path: '/data-analyst-course',
    },
    {
      id: 2,
      isPopular: true,
      company: '',
      image: 'https://strapi.odinschool.com/uploads/AIML_9ee02fd058.png',
      level: 'Beginner',
      title: 'AI Analyst Course',
      description:
        'Master Artificial Intelligence, Generative AI, and LLMs with India’s only AI program backed by.',
      path: '/ai-analyst-course',
    },
  ];

  return (
    <section className={sectionClass}>
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl font-bold font-display text-gray-900">
          Explore OdinSchool's{' '}
          <span className="text-primary-600">Diverse Learning Programs</span>
        </h2>
        <p className="mt-3 text-gray-600 text-base max-w-2xl mx-auto">
          Designed to help you crack great jobs in emerging technologies and in-demand areas.
        </p>
      </div>

      {/* Card Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2  gap-8 px-6">
        {courseCard.map((course) => (
          <Link
            href={course.path}
            key={course.id}
            className={cn(
              'group relative flex flex-col overflow-hidden rounded-xl transition-all duration-300 h-full',
              'bg-white border border-gray-100 hover:border-primary-200 hover:shadow-lg'
            )}
          >
            {course.isPopular && (
              <div className="absolute top-3 right-3 z-10">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                  Popular
                </span>
              </div>
            )}

            <div className="relative overflow-hidden aspect-[16/9]">
              <div className="absolute inset-0 bg-gray-100 animate-pulse"></div>
              <Image
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onLoad={(e) => {
                  (e.target as HTMLElement)
                    .parentElement?.querySelector('.animate-pulse')
                    ?.classList.add('hidden');
                }}
                loading="lazy"
                width={400}
                height={225}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="flex flex-col flex-grow p-5">
              <div className="flex items-center mb-2">
                <span
                  className={cn(
                    'text-xs font-medium mr-2 px-2.5 py-0.5 rounded',
                    course.level === 'Beginner'
                      ? 'bg-green-100 text-green-800'
                      : course.level === 'Intermediate'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-purple-100 text-purple-800'
                  )}
                >
                  {course.level}
                </span>
              </div>

              <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                {course.title}
              </h3>

              <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                {course.description}
              </p>

              <div className="mt-auto">
                <div className="flex items-center justify-start pt-2 border-t border-gray-100">
                  <span className="mr-2 text-sm font-medium">Know more</span>
                  <div className="rounded-full w-8 h-8 bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    <svg
                      className="w-4 h-4 text-primary-600 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CustomCourseCard;
