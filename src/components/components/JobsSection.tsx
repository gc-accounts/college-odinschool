import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from '@/components/components/ui/card';
import { Badge } from '@/components/components/ui/badge';
import { MapPin, Building, BriefcaseBusiness, ChevronLeft, ChevronRight } from 'lucide-react';
import { dsJobsDrives } from '@/components/data/dsJobsDrives';
import Image from 'next/image';

interface JobsSectionProps {
  sectionClass?: string;
}

const JobsSection = ({ sectionClass }: JobsSectionProps) => {
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
    <section className={`${sectionClass ? sectionClass : 'py-16 md:py-24 bg-white'} relative`}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Job Drives<span className="text-blue-600"> Every Month!</span>
          </h2>
          <p className="text-md text-gray-600">
            Participate in company assessments, get shortlisted based on your skills—not your background—and attend multiple placement drives every month.
            {/* Participate in company assessments, get shortlisted based on your skills—not your background—and attend at least three placement drives each month. */}
          </p>
        </div>

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
              {dsJobsDrives.map((item) => (
                <div key={item.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] px-2">
                  <Card className="border border-gray-200 hover:shadow-lg transition-all h-full">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="relative mb-6 flex items-center">
                          <Image
                            src={item.jobCompanyLogo}
                            alt={item.jobDesignation}
                            className="w-30 h-14 object-contain rounded-md shadow-sm border"

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
    </section>
  );
};

export default JobsSection;
