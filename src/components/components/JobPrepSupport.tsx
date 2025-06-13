import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from '@/components/components/ui/card';
import { Badge } from '@/components/components/ui/badge';
import { MapPin, Building, BriefcaseBusiness, ChevronLeft, ChevronRight } from 'lucide-react';
import { DaCollegeProgramJobsData } from '../data/course-section/job-drives/DaCollegeProgramJobsData';
import JobServices from './JobServices';

const students = [
  {
    id: 1,
    name: 'Janapureddi Radha',
    designation: 'Product Analyst',
    image: 'https://strapi.odinschool.com/uploads/Radha_1_1d88f39370.webp',
    logo: 'https://strapi.odinschool.com/uploads/Group_204869_abf57ca26c.webp'
  },
  {
    id: 2,
    name: 'Shubham Nayak',
    designation: 'Power BI Developer',
    image: 'https://strapi.odinschool.com/uploads/19_5542c1a8a2.webp',
    logo: 'https://strapi.odinschool.com/uploads/Reliance_General_Insurance_20100_X40_3ec92f5438.webp'
  },
  {
    id: 3,
    name: 'Tanuj Chauhan',
    designation: 'Data Analyst',
    image: 'https://strapi.odinschool.com/uploads/Tanuj_1_84bd563ca5.webp',
    logo: 'https://strapi.odinschool.com/uploads/Axis_Max_Life_Insurance_100_X40_425fc9a4c3.webp'
  },
  {
    id: 4,
    name: 'Rohit Raut',
    designation: 'WMS Operator - Analytics',
    image: 'https://strapi.odinschool.com/uploads/Rohit_Raut_1_0c6a4110d1.webp',
    logo: 'https://strapi.odinschool.com/uploads/Indicold_20100_X40_131fcbbf55.webp'
  },
  {
    id: 5,
    name: 'Akash Tiwary',
    designation: 'Operations Analytics',
    image: 'https://strapi.odinschool.com/uploads/Akash_Tiwari_1_941b59341e.webp',
    logo: 'https://strapi.odinschool.com/uploads/Flipkart_20100x40_8a8b52e7a2.svg'
  },
  {
    id: 6,
    name: 'Ankita Bajpai',
    designation: 'MIS Executive',
    image: 'https://strapi.odinschool.com/uploads/18_626190768c.webp',
    logo: 'https://strapi.odinschool.com/uploads/swiggy_20100_X40_20indv_e206ccf06f.webp'
  },

];

interface CardsProps {
  sectionClass?: string,
}

const JobPrepSupport = ({ sectionClass }: CardsProps) => {


  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start', containScroll: 'trimSnaps' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const dots = useMemo(() => {
    if (!emblaApi) return [];
    return emblaApi.scrollSnapList().map((_, index) => index);
  }, [emblaApi]);

  return (
    <section className={`${sectionClass ?? 'px-5 py-12 md:px-8 md:py-16 bg-primary-50'}` }>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight">
            Job Prep <span className="text-primary-600">Support</span>
          </h2>
          {/* <p className="text-gray-600">
            Our Hiring Sprints give you the chance to hear directly from Hiring Managers and Business Heads about job roles, projects, growth opportunities, and the recruitment process. Ask questions, clarify doubts, and perform your best in the interview. <br/><span className='font-semibold'>Many success stories have emerged from our Hiring Sprints. Here are a few!</span>
          </p> */}
        </div>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: studentss */}
          <div className="lg:col-span-6">
          <div className="relative px-6">
          {/* Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute z-10 top-1/2 left-0 -translate-y-1/2 bg-white border shadow p-2 rounded-full hover:bg-primary-50 text-primary-600"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute z-10 top-1/2 right-0 -translate-y-1/2 bg-white border shadow p-2 rounded-full hover:bg-primary-50 text-primary-600"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {DaCollegeProgramJobsData.map((item) => (
                <div key={item.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_50%] px-2">
                  <Card className="border border-primary-600 hover:shadow-lg transition-all h-full">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="relative mb-6 flex items-center">
                          <Image
                            src={item.jobCompanyLogo}
                            alt={item.jobDesignation}
                            className="w-30 h-14 rounded-md shadow-sm border w-auto"

                            loading="lazy"
                            width={500}
                            height={500}
                          />
                        </div>
                        <h3 className="font-bold text-md mb-1 text-gray-900">{item.jobDesignation}</h3>
                      </div>

                      <div className="mb-4 space-y-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {item.jobLocation}
                        </div>
                        <div className="flex items-center">
                          <Building size={16} className="mr-2" />
                          Full-time
                        </div>
                        <div className="flex items-center">
                          <BriefcaseBusiness size={16} className="mr-2" />
                          {item.jobExp}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.jobSkills.map((skill: string, idx: number) => (
                          <Badge key={idx} variant="outline" className="bg-primary-50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center flex-wrap mt-6 gap-2">
            {dots.map((index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`md:w-2 md:h-2  w-[0.4rem] h-[0.4rem] rounded-full transition-all duration-200 ${index === selectedIndex ? 'bg-blue-600 md:w-[28px] w-[1.5rem] shadow' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>

          </div>

          <div className="lg:col-span-6">
            <JobServices/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JobPrepSupport;
