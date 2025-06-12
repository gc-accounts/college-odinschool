import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/components/ui/button';
import { Card } from '@/components/components/ui/card';
import { getWebinars } from '@/components/utils/api/webinars';
import Image from 'next/image';


interface JobsSectionProps {
  sectionClass?: string;
  odinTalks: any[]
}


const OdinTalks = ({ sectionClass, odinTalks }: JobsSectionProps) => {
  const [webinars, setWebinars] = useState<any[]>(odinTalks || []);
  const [loading, setLoading] = useState(!odinTalks);

  useEffect(() => {
    if (odinTalks) {
      return;
    }
    const fetchWebinars = async () => {
      setLoading(true);
      const webinars = await getWebinars({
        pageNumber: 1,
        pageSize: 3,
        isOdintalk: true,
        isFeatured: true,
        // time: 'upcoming'
      });
      setWebinars(webinars);
      setLoading(false);
    }
    fetchWebinars();
  }, [odinTalks]);



  return (
    <section className={`${sectionClass ? sectionClass : 'px-[20px] pt-[50px] md:px-[30px] md:pt-[70px] bg-white'}`}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-primary-600">
            OdinTalks
          </h2>
          <p className="body-md text-gray-600 max-w-3xl mx-auto">
            Listen to subject matter experts, industry practitioners, and thought leaders talk about the latest trends, technologies, hiring processes, and more in our free OdinTalks sessions.
          </p>
        </div>

        <div className="pb-12 md:pb-6">
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
          ) : (<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinars.map((webinar) => (
              <Link key={webinar.id} href={`/webinars/${webinar.id}`}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={webinar.image}
                      alt={webinar.title}
                      className="w-full h-full object-cover"

                      loading="lazy"
                      width={500}
                      height={500}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-xl font-semibold text-white">{webinar.title}</h3>
                      <p className="text-white/90">{webinar.instructor}</p>
                      <p className="text-gray-600">{webinar.category}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>)}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/odintalks">Explore OdinTalks</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OdinTalks; 