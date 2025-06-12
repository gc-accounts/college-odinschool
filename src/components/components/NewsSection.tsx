import React, { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardDescription, CardFooter } from "@/components/components/ui/card";
import { Button } from "@/components/components/ui/button";
import { newsMediaData } from "@/components/data/newsMediaData";
import Image from "next/image";

const NewsSection = () => {
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

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const dots = useMemo(() => {
    if (!emblaApi) return [];
    return emblaApi.scrollSnapList().map((_, index) => index);
  }, [emblaApi, newsMediaData]);

  return (
    <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-primary-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            OdinSchool in <span className="text-primary-600">Media</span>
          </h2>
          <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest announcements and success stories from OdinSchool
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
              {newsMediaData.map((item) => (
                <div
                  key={item.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] px-2"
                >
                  <Link href={item.mediaLink} target="_blank" rel="noopener noreferrer">
                    <Card className="pt-6 h-full flex flex-col justify-between overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative mb-6 flex justify-center items-center">
                        <Image
                          src={item.mediaLogo}
                          alt={item.mediaTitle}
                          className="w-40 h-14 object-contain"

                          loading="lazy"
                          width={500}
                          height={500}
                        />
                      </div>
                      <CardContent className="flex-grow">
                        <CardDescription className="line-clamp-3 mt-2 text-center">
                          {item.mediaTitle}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="justify-center">
                        <Button variant="ghost" className="hover:bg-primary-50 p-0 h-auto">
                          Read More <span className="ml-1">→</span>
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
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
                className={`md:w-2 md:h-2  w-[0.4rem] h-[0.4rem] rounded-full transition-all duration-200 ${index === selectedIndex ? "bg-primary-600 md:w-[28px] w-[1.5rem] shadow" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default NewsSection;
