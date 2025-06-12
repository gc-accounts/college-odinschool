import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/components/lib/utils';

export interface CourseProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessons: number;
  rating: number;
  students: number;
  image: string;
  category: string;
  company?: string; // Add optional company property
  popular?: boolean;
  className?: string;
  documentId: string;
  url_slug: string;
  enrolled_avatars: {
    url: string;
    name: string;
  }[];
  total_enrolled: number;
}

const CourseCard = ({
  id,
  title,
  description,
  instructor,
  level,
  duration,
  lessons,
  rating,
  students,
  image,
  category,
  company, // Add company to destructured props
  popular = false,
  className,
  documentId,
  url_slug,
  total_enrolled,
}: CourseProps) => {
  return (

    <Link
      href={`/${url_slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl transition-all duration-300 h-full",
        "bg-white border border-gray-100 hover:border-primary-200 hover:shadow-lg",
        className
      )}
    >
      {popular && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
            Popular
          </span>
        </div>
      )}

      {/* Add company logo or name */}
      {company && (
        <div className="absolute top-3 left-3 z-10 bg-white/80 rounded-full px-2.5 py-1 text-xs font-medium text-gray-700">
          {company}
        </div>
      )}

      <div className="relative overflow-hidden aspect-[16/9]">
        <div className="absolute inset-0 bg-gray-100 animate-pulse"></div>
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onLoad={(e) => {
            (e.target as HTMLElement).parentElement?.querySelector('.animate-pulse')?.classList.add('hidden');
          }}

          loading="lazy"
          width={150}
          height={150}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-center mb-2">
          <span className={cn(
            "text-xs font-medium mr-2 px-2.5 py-0.5 rounded",
            level === 'Beginner' ? "bg-green-100 text-green-800" :
              level === 'Intermediate' ? "bg-blue-100 text-blue-800" :
                "bg-purple-100 text-purple-800"
          )}>
            {level}
          </span>
          <span className="text-xs text-gray-500">{category}</span>
        </div>

        <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-end pt-2 border-t border-gray-100">
            {/* <div className="flex items-center">
              <Star size={14} className="text-yellow-400" />
              <span className="ml-1 text-sm font-medium">{rating}</span>
            </div> */}
            <span className="mr-2 text-sm font-medium">Know more</span>
            <div className="rounded-full w-8 h-8 bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
              <svg
                className="w-4 h-4 text-primary-600 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
