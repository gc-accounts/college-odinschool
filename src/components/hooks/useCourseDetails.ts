import { useState, useEffect } from 'react';
import { getCourse } from '@/components/utils/api'; // Assuming this path is correct
import { useProgram } from '@/context/ProgramContext'; // Assuming this path is correct

// Define the Course interface
export interface Course {
  id: string;
  documentId: string;
  title: string;
  description: string;
  fullDescription?: string;
  longDescription?: string;
  level: string;
  on_sale: boolean;
  has_certificate: boolean;
  overview: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  url_slug: string;
  image: string;
  sale?: boolean;
  salePrice?: number;
  skills?: string[];
  tags?: string[];
  enrolled_avatars?: Array<{
    url: string;
    name: string;
  }>;
  enrolled_students?: {
    total_enrolled: number;
  };
  rating?: number;
  total_rated?: number;
  curriculum?: Array<{
    id: string;
    heading: string;
    lessons: number;
    description?: string;
  }>;
  price?: number;
  final_price?: number;
  modules?: any[];
  cohortDates?: {
    cohort1?: string;
    cohort2?: string;
  };
}

interface UseCourseDetailsProps {
  courseId: string | undefined;
  initialCourse?: Course;
}

interface UseCourseDetailsReturn {
  course: Course | null;
  loading: boolean;
  error: Error | null;
}

export const useCourseDetails = ({ courseId, initialCourse }: UseCourseDetailsProps): UseCourseDetailsReturn => {
  const [course, setCourse] = useState<Course | null>(initialCourse || null);
  const [loading, setLoading] = useState(!initialCourse);
  const [error, setError] = useState<Error | null>(null);
  const { setProgram } = useProgram();

  useEffect(() => {
    const fetchCourse = async () => {
      if (!courseId || initialCourse) {
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await getCourse("", courseId);
        if (response && response[0]) {
          setCourse(response[0]);
          setProgram(response[0].slug || '');
        } else {
          setCourse(null);
          setError(new Error('Course not found'));
        }
      } catch (err) {
        console.error('Error fetching course:', err);
        setError(err as Error);
        setCourse(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();

    if (initialCourse?.slug) {
      setProgram(initialCourse.slug);
    }

    return () => {
      setProgram('');
    };
  }, [courseId, initialCourse, setProgram]);

  return { course, loading, error };
};