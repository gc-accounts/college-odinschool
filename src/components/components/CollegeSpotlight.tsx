
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/components/ui/card';

interface CollegeQuality {
  title: string;
  description: string;
}

const CollegeSpotlight = () => {
  // Refs for animation elements
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftPointsRef = useRef<HTMLDivElement>(null);
  const rightPointsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observe all animations elements
    if (leftPointsRef.current) observer.observe(leftPointsRef.current);
    if (rightPointsRef.current) observer.observe(rightPointsRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  // College qualities data - 10 points total
  const qualities: CollegeQuality[] = [
    {

      title: "#8",
      description: "Top Universities in India 2024 by QS"
    },
    {

      title: "#6",
      description: "Over 50 specialized tech programs across various disciplines"
    },
    {

      title: "#42",
      description: "Vibrant campus life with tech clubs and networking opportunities"
    },
    {

      title: "#10",
      description: "State-of-the-art labs and workspaces with latest technology"
    },
    {

      title: "#9",
      description: "Student-led research projects with industry sponsorships"
    },
    {

      title: "#7",
      description: "Extensive online library with premium access to tech publications"
    },
    {

      title: "#344",
      description: "Top Universities in India 2024 by QS"
    },
    {

      title: "#6",
      description: "Top Universities in India 2024 by QS"
    },

  ];

  // Split qualities for left and right sides
  const leftQualities = qualities.slice(0, 4);
  const rightQualities = qualities.slice(4);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900">
            Why learn at  <span className="text-primary-600">E&ICT Academy, IIT Guhawati</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Left column qualities */}
          <div
            ref={leftPointsRef}
            className="space-y-6 opacity-0"
            style={{ animationDelay: "200ms" }}
          >
            {leftQualities.map((quality, index) => (
              <QualityCard key={`left-${index}`} quality={quality} />
            ))}
          </div>

          {/* Center college image */}
          <div
            ref={imageRef}
            className="flex flex-col items-center justify-center opacity-0"
            style={{ animationDelay: "100ms" }}
          >
            <div className="relative w-full max-w-xs mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-300 rounded-full blur-2xl opacity-30"></div>
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=600&h=800&q=80"
                  alt="Tech Institute of Innovation Campus"
                  className="w-full aspect-[3/4] object-cover"

                  loading="lazy"
                  width={500}
                  height={500}
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 max-w-[90%] mx-auto -mt-16 relative z-10 text-center">
                <h3 className="text-xl font-bold text-gray-900">Indian Institute of India Guwahati (IITG)</h3>
                <p className="text-primary-600 font-medium">Guwahati, Assam</p>
              </div>
            </div>
          </div>

          {/* Right column qualities */}
          <div
            ref={rightPointsRef}
            className="space-y-6 opacity-0"
            style={{ animationDelay: "300ms" }}
          >
            {rightQualities.map((quality, index) => (
              <QualityCard key={`right-${index}`} quality={quality} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Quality card component
const QualityCard = ({ quality }: { quality: CollegeQuality }) => (
  <Card className="bg-white border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-primary-200">
    <CardContent className="p-4 flex gap-4 items-start">
      <div>
        <h2 className="text-xl font-bold text-primary">{quality.title}</h2>
        <p className="text-sm text-gray-600">{quality.description}</p>
      </div>
    </CardContent>
  </Card>
);

export default CollegeSpotlight;
