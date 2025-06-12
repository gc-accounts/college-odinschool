import React, { useRef, useEffect, useState } from 'react';
import CourseCard, { CourseProps } from './CourseCard';
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getCourses } from '@/components/utils/api/courses';

const FeaturedCourses = ({
  searchText = '',
  courses: coursesItems
}) => {
  const [courses, setCourses] = useState<CourseProps[]>(coursesItems || []);
  const [loading, setLoading] = useState(!coursesItems);

  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (coursesItems) {
      return;
    }
    const fetchCourses = async () => {
      try {
        const data = await getCourses({ pageNumber: 1, city: '', isFeatured: true as boolean, search: searchText });
        // Transform the data to match CourseProps interface
        const transformedCourses = data.map((course: any) => ({
          id: course.documentId,
          documentId: course.documentId,
          title: course.title,
          description: course.description,
          instructor: 'Expert Instructor', // Default value since not in API
          level: course.level || 'Beginner',
          duration: '10 hours', // Default value since not in API
          lessons: 45, // Default value since not in API
          rating: course.rating || 4.5,
          students: course.total_enrolled || 0,
          image: course.image,
          // category: 'Technology', // Default value since not in API
          enrolled_avatars: [], // Default empty array since not in API
          total_enrolled: course.total_enrolled || 0,
          url_slug: course.url_slug // Add url_slug with fallback to documentId
        }));
        setCourses(transformedCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [searchText, coursesItems]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (titleRef.current) observer.observe(titleRef.current);

    cardRefs.current.forEach((card, i) => {
      if (card) {
        card.style.animationDelay = `${i * 100}ms`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, [courses]); // Add courses as dependency to re-run when courses change

  const addToCardRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      cardRefs.current[index] = el;
    }
  };

  return (
    <section ref={sectionRef} className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-primary-50">
      <div className="container">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-12 md:mb-16 opacity-0">
          <h2 className="heading-lg mb-4">
            Explore OdinSchool's <span className="text-primary-600">Diverse Learning Programs</span>
          </h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Designed to help you crack great jobs in emerging technologies and in-demand areas.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 rounded-xl h-48 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                ref={(el) => addToCardRefs(el, index)}
                className="w-full sm:w-[48%] lg:w-[30%] max-w-sm"
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        )}

        {/* <div className="text-center mt-12">
          <Link href="/courses">
            <Button
              variant="outline"
              size="lg"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
            >
              View All Courses
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedCourses;
