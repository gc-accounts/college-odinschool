
import React, { useRef, useEffect } from 'react';
import { Check, X, Trophy, ThumbsUp, Star } from 'lucide-react';
import { cn } from '@/components/lib/utils';
import { Card, CardContent } from '@/components/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/components/ui/carousel";

interface ComparisonFeature {
  name: string;
  odinschool: boolean;
  odinschoolInfo: string,
  others: boolean;
  othersInfo: string,
  highlight?: boolean;
}

interface PlatformComparison {
  sectionClass?: String
}
const PlatformComparison = ({ sectionClass }: PlatformComparison) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const features: ComparisonFeature[] = [
    {
      name: 'Live Online Classes',
      odinschool: true,
      odinschoolInfo: 'Live online classes led by instructors',
      others: false,
      othersInfo: '',
      highlight: true
    },
    {
      name: 'Course Fee',
      odinschool: true,
      odinschoolInfo: 'Very high value for money ',
      others: false,
      othersInfo: 'Expensive',
    },
    {
      name: 'Curriculum',
      odinschool: true,
      odinschoolInfo: ' Updated every month as per industry requirements ',
      others: true,
      othersInfo: 'Not up-to-date',
    },
     {
      name: 'Job Drives',
      odinschool: true,
      odinschoolInfo: 'Attend at least 3 Job Drives every month',
      others: false,
      othersInfo: 'Limited opportunities',
      highlight: true,
    },
    {
      name: 'Projects',
      odinschool: true,
      odinschoolInfo: 'Industry-aligned projects with project presentation guidance',
      others: false,
      othersInfo: 'Not industry-aligned ',
      highlight: true,
    },
    {
      name: 'Mock Interviews',
      odinschool: true,
      odinschoolInfo: 'With a dedicated team of experts',
      others: false,
      othersInfo: '',
    },
    {
      name: 'Career Services',
      odinschool: true,
      odinschoolInfo: 'Extensive services, including resume-building and behavioral skills workshops',
      others: false,
      othersInfo: '',
    },
    {
      name: 'Support',
      odinschool: true,
      odinschoolInfo: 'A dedicated support team',
      others: false,
      othersInfo: '',
      highlight: true
    },
    {
      name: 'Salary Negotiation ',
      odinschool: true,
      odinschoolInfo: 'For higher salaries',
      others: false,
      othersInfo: '',
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <section id="comparison" className={`${sectionClass ? sectionClass : 'py-16 md:py-24 bg-gradient-to-b from-white to-gray-50'}`}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            Why OdinSchool is your gateway to a <span className="text-primary-600">successful career</span>
          </h2>

          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            OdinSchool helps learners upskill with confidence through live training, hands-on projects, and dedicated career support. Whether you're switching careers or leveling up, we’re with you every step of the way.
          </p>
        </div>

        {/* Main comparison table - redesigned with better visuals */}
        <div className="animate-on-scroll opacity-0 max-w-5xl mx-auto" style={{ animationDelay: '300ms' }}>
          <Card className="overflow-hidden border shadow-lg">
            <CardContent className="p-0">
              {/* Table header */}
              <div className="grid grid-cols-3 border-b md:text-start text-center">
                <div className="col-span-1 p-4 bg-gray-50 font-bold">Features</div>
                <div className="col-span-1 p-4 bg-primary-50 font-bold text-primary-800">OdinSchool</div>
                <div className="col-span-1 p-4 font-bold text-gray-500">Others</div>
              </div>

              {/* Table body */}
              <div className="divide-y">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={cn(
                      "grid grid-cols-3",
                      feature.highlight ? "bg-primary-50" : "bg-white"
                    )}
                  >
                    <div className="col-span-1 p-4 flex items-center">
                      <span>
                        {feature.highlight && (
                          <>
                          <span className="md:ml-2 md:hidden inline-block bg-primary-600 text-white text-xs px-2 py-0.5 rounded-full">
                            <Star className="h-3 w-3 text-white" />
                          </span>
                          <br className='md:hidden' />
                          </>
                        )}
                        <span className='font-semibold md:text-[0.9rem] text-sm'>{feature.name}</span>
                        
                        {feature.highlight && (
                          <span className="md:ml-2 md:inline-block hidden bg-primary-600 text-white text-xs px-2 py-[0.8px] font-semibold rounded-full">
                            <span className='leading-none'>Key Feature</span>
                          </span>
                        )}

                      </span>
                    </div>
                    <div className="col-span-1 p-4 flex md:flex-nowrap flex-wrap items-center">
                      {feature.odinschool ?
                        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-primary-100 flex items-center justify-center md:mb-0 mb-1">
                          <Check className="h-5 w-5 text-primary-600" />
                        </div> :
                        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center md:mb-0 mb-1">
                          <X className="h-5 w-5 text-gray-400" />
                        </div>
                      }
                      <p className='md:ml-4 md:text-sm text-xs md:text-md'>{feature.odinschoolInfo}</p>
                    </div>
                    <div className="col-span-1 p-4 flex md:flex-row flex-col flex-wrap md:items-center items-start">
                      {feature.others ?
                        <div className="w-8 flex-shrink-0 h-8 rounded-full bg-gray-100 flex items-center justify-center md:mb-0 mb-1">
                          <Check className="h-5 w-5 text-gray-600" />
                        </div> :
                        <div className="w-8 flex-shrink-0 h-8 rounded-full bg-gray-100 flex items-center justify-center md:mb-0 mb-1">
                          <X className="h-5 w-5 text-gray-400" />
                        </div>
                      }
                      <p className='md:ml-4 md:text-sm text-xs md:text-md'>{feature.othersInfo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlatformComparison;
