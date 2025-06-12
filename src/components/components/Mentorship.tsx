import React, { useCallback, useEffect, useMemo, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from '@/components/components/ui/card';
import { Button } from '@/components/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const mentorshipData = [
  {
    id: 1,
    name: 'Akhil Thogari',
    designation: 'Sr Associate - Data Analytics',
    companyLogo: 'https://strapi.odinschool.com/uploads/Sutherland_100_X40_2f731bc5b0.webp',
    image: 'https://strapi.odinschool.com/uploads/Akhil_e6656c78ca.webp',
    story: `Akhil faced a 2-year break due to his father’s serious health issues. He worked in a small shop, then took a job at a BPO to support his family. But his dream of coding never faded. He studied tirelessly after night shifts, pushed through every obstacle, and completely transformed his life and career.`,
  },
  {
    id: 2,
    name: 'Saumya Baranwal',
    designation: 'Senior Data Analyst',
    companyLogo: 'https://strapi.odinschool.com/uploads/accenture_20_Individual_20100_20x40_073765e60b.svg',
    image: 'https://strapi.odinschool.com/uploads/Saumya_10b2e94e33.webp',
    story: `Driven by an entrepreneurial spirit, Saumya started her own startup. During this time, she realized the power of data in business decisions. Determined to grow, she honed her skills in Data Science. Today, Saumya is a Senior Data Analyst at Accenture, achieving her career goals with perseverance and passion.`,
  },
  {
    id: 3,
    name: 'Nikhil Gupta',
    designation: 'Lead Analyst',
    companyLogo: 'https://strapi.odinschool.com/uploads/swiggy_100x40_indv_43cfb03f57.webp',
    image: 'https://strapi.odinschool.com/uploads/3_b80af94df9.webp',
    story: `Nikhil Gupta is a Lead Analyst at Swiggy with a strong passion for data analysis and business intelligence. With a sharp eye for detail and a data-driven approach, he specializes in SQL, Python, Power BI, and data visualization to drive impactful insights and improve business decisions.`,
  },

  {
    id: 4,
    name: 'Jyotiprakash Dash',
    designation: 'Business Analyst',
    companyLogo: 'https://strapi.odinschool.com/uploads/Nuziveedu_20_Seeds_20100_X40_454502f882.webp',
    image: 'https://strapi.odinschool.com/uploads/4_fc1730c4ad.webp',
    story: `Jyotiprakash Dash, an agriculture enthusiast with a B.Sc. in Agriculture, is passionate about using data to make a real impact. Currently a Business Analyst at Nuziveedu Seeds, he loves solving problems and driving improvements in the agricultural sector. He brings experience and curiosity to every project.`,
  },

];

export default function Mentorship({ sectionClass }: { sectionClass?: string }) {
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
    <section className={`${sectionClass ?? 'py-16 md:py-24 bg-white'} relative`}>
      <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight">
          Get Mentored by <span className="text-primary-600">the Ones Who Made It</span>
        </h2>
        <p className="text-md text-gray-600"></p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Description */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            What is <span className="text-primary-600">Mentorship?</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Nobody can understand you better than someone who has been in your shoes. Here is an opportunity for you
            to get guided by those who’ve been there, done that.
          </p>
          <p className="text-gray-700 mb-4">
            Your mentors are successful OdinSchool alumni — professionals who’ve gone through the same journey that you
            are embarking on, and cracked some awesome jobs for themselves.
          </p>
          <p className="text-gray-700">
            Interact with the alumni, learn the tricks of the trade and craft your own big Success Story!
          </p>
        </div>

        {/* Right: Carousel */}
        <div className="relative px-2 md:px-6">


          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {mentorshipData.map((mentor) => (
                <div key={mentor.id} className="flex-[0_0_100%] px-2 h-full">
                  <Card className="border border-blue-200 h-full flex flex-col min-h-[280px]">
                    <CardContent className="p-6 grid grid-cols-12 gap-4 items-start flex-grow">

                      {/* Left: Image + Name (col-span-4 on md+) */}
                      <div className="col-span-5 md:col-span-3 text-center">
                        <Image
                          src={mentor.image}
                          alt={mentor.name}
                          className="w-24 h-24 object-cover rounded-md mx-auto"

                          loading="lazy"
                          width={500}
                          height={500}
                        />
                        <p className="mt-3 text-primary-600 font-bold leading-tight">
                          {mentor.name.split(' ')[0]}<br />{mentor.name.split(' ')[1]}
                        </p>
                      </div>

                      {/* Right: Designation + Logo + Story (col-span-8 on md+) */}
                      <div className="col-span-7 md:col-span-9">
                        <h3 className="text-md font-bold text-gray-800 mb-2">{mentor.designation}</h3>
                        <Image
                          src={mentor.companyLogo}
                          alt={mentor.companyLogo}
                          className="w-30 h-12 object-contain mb-3 border shadow-sm rounded-md"

                          loading="lazy"
                          width={100}
                          height={40}
                        />
                        <p className="text-gray-600 text-sm md:block hidden">{mentor.story}</p>
                      </div>

                      <div className="col-span-12 md:hidden">
<p className="text-gray-600 text-sm">{mentor.story}</p>
                      </div>

                    </CardContent>
                  </Card>

                </div>
              ))}
            </div>
          </div>

          {/* Navigation + Dots */}
          <div className="flex items-center justify-center mt-6 gap-6">
            {/* Prev Arrow */}
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-ful flex items-center justify-center transition bg-white border shadow p-2 rounded-full hover:bg-primary-50 text-primary-600"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {dots.map((index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`md:w-2 md:h-2  w-[0.4rem] h-[0.4rem] transition-all duration-300 rounded-full ${index === selectedIndex
                    ? 'bg-[#1a6cf7] md:w-[28px] w-[1.5rem] shadow'
                    : 'bg-gray-300 w-2 h-2'
                    }`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-ful flex items-center justify-center transition bg-white border shadow p-2 rounded-full hover:bg-primary-50 text-primary-600"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>


        </div>
      </div>
    </section>
  );
}
