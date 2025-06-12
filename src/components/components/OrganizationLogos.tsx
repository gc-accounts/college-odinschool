import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/components/ui/card';
import { getOrganisations } from '@/components/utils/api/organisation';
import Image from 'next/image';

interface organizationProps {
  sectionClass?: String;
  organisations?: any[]
}
const OrganizationLogos = ({ sectionClass, organisations }: organizationProps) => {
  const [logos, setLogos] = useState<any[]>([]);

  const [loading, setLoading] = useState(!organisations);


  useEffect(() => {
    if (organisations) {
      setLogos(organisations);
      setLoading(false);
    }
    const fetchLogos = async () => {
      setLoading(true);
      const logos = await getOrganisations();
      setLogos(logos);
      setLoading(false);
    };
    fetchLogos();
  }, [organisations]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);



  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => (isDragging.current = false);
  const handleMouseUp = () => (isDragging.current = false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };


  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <section className={`${sectionClass ? sectionClass : ' pb-[50px] md:pb-[70px] bg-white'} overflow-hidden relative`}>
      {/* Inline animation keyframes */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .scrolling-logos {
          animation: scrollLeft 120s linear infinite;
        }
        .scrolling-logos:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2"><span className='text-primary-600'>600+</span> Hiring Organizations</h2>
        </div>

        <div
          ref={containerRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="scrolling-logos flex min-w-max">
            <div className="grid grid-rows-3 gap-4 grid-flow-col auto-cols-max">
              {loading ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {[...Array(44)].map((_, index) => (
                      <div key={index} className="animate-pulse">
                        <div className="bg-gray-200 rounded-xl h-20 mb-4"></div>
                        <div className="space-y-3">
                          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : repeatedLogos?.length > 0 ? repeatedLogos.map((logo) => (
                <Card
                  key={`${logo.id}-${Math.random()}`}
                  className="border-0 shadow-sm hover:shadow-md transition-shadow w-[160px] h-[80px]"
                >
                  <CardContent className="flex items-center justify-center p-3 h-full">
                    <Image
                      src={logo.logo}
                      alt={`${logo.name} logo`}
                      className="max-h-12 max-w-full object-contain transition-all"

                      loading="lazy"
                      width={500}
                      height={500}
                    />
                  </CardContent>
                </Card>
              )) : (
                <div className="flex justify-center items-center h-full">
                  <p className="text-gray-500">No logos found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationLogos;
