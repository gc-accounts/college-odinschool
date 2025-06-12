import React, { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/components/ui/card";
import Image from "next/image";

interface SuccessStory {
  id: number;
  name: string;
  designation: string;
  companyLogo: string;
  companyName: string;
  quote: string;
  photo: string;
}

const SuccessStoriesIBData = [
  {
    id: 1,
    name: "Adesh Jilthe",
    designation: "Assistant Manager",
    companyLogo: "/logos/pepsico.png",
    companyName: "PepsiCo",
    quote:
      "According to Wikipedia, a paragraph is a self-contained unit of a discourse in writing...",
    photo: "/photos/adesh.jpg",
  },
  {
    id: 2,
    name: "Riya Sharma",
    designation: "Data Analyst",
    companyLogo: "/logos/accenture.png",
    companyName: "Accenture",
    quote:
      "The course really helped me build a solid foundation in analytics and transition smoothly into my new role.",
    photo: "/photos/riya.jpg",
  },
  {
    id: 3,
    name: "Adesh Jilthe",
    designation: "Assistant Manager",
    companyLogo: "/logos/pepsico.png",
    companyName: "PepsiCo",
    quote:
      "According to Wikipedia, a paragraph is a self-contained unit of a discourse in writing...",
    photo: "/photos/adesh.jpg",
  },
  {
    id: 4,
    name: "Riya Sharma",
    designation: "Data Analyst",
    companyLogo: "/logos/accenture.png",
    companyName: "Accenture",
    quote:
      "The course really helped me build a solid foundation in analytics and transition smoothly into my new role.",
    photo: "/photos/riya.jpg",
  },
];

interface Props {
  sectionClass?: string;
}

const SuccessStoriesIB = ({ sectionClass }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const dots = useMemo(() => {
    if (!emblaApi) return [];
    return emblaApi.scrollSnapList().map((_, index) => index);
  }, [emblaApi, SuccessStoriesIBData]);

  return (
    <section className={`${sectionClass ?? "px-6 py-12 bg-white"}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-on-scroll ">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            Success <span className="text-primary-600">Stories</span>
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum teaches you the most in-demand tools used by data professionals worldwide
          </p>
        </div>


        <div className="relative px-6">
          {/* Navigation Arrows */}
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
            <div className="flex min-w-0">
              {SuccessStoriesIBData.map((story) => (
                <div
                  key={story.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] px-3"
                >
                  <Card className="border border-gray-200 rounded-lg overflow-hidden shadow-sm h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Image
                          src={story.photo}
                          alt={story.name}
                          width={80}
                          height={80}
                          className="rounded-full object-cover border-2 border-primary-600"
                        />
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {story.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {story.designation}
                          </p>
                          <div className="mt-2">
                            <Image
                              src={story.companyLogo}
                              alt={story.companyName}
                              width={80}
                              height={24}
                            />
                          </div>
                        </div>
                      </div>

                      <blockquote className="mt-4 text-gray-700 text-sm relative">
                        <span className="text-2xl text-primary-600 font-serif">
                          “
                        </span>
                        {story.quote}
                        <span className="text-2xl text-primary-600 font-serif">
                          ”
                        </span>
                      </blockquote>
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
                className={`md:w-2 md:h-2  w-[0.4rem] h-[0.4rem] rounded-full transition-all duration-200 ${
                  index === selectedIndex
                    ? "bg-primary-600 md:w-[28px] w-[1.5rem] shadow"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesIB;
