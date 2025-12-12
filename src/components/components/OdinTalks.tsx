'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import EventCardSkeleton from './EventCardSkeleton';
import { Button } from '@/components/components/ui/button';


interface Props {
  sectionClass?: string;
}

const LatestOdintalks = ({ sectionClass }: Props) => {

  const [odintalks, setOdintalks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestOdintalks = async () => {
      try {
        setLoading(true);
        // Fetch only 3 items, sorted by date in descending order
        const res = await fetch(`https://strapi.odinschool.com/api/odintalks?populate=*&pagination[limit]=3&sort=date:desc`);
        const json = await res.json();
        setOdintalks(json.data || []);
      } catch (error) {
        console.error('Failed to fetch latest Odintalks:', error);
        setOdintalks([]);
      } finally {
        setLoading(false);
      }
    };
    fetchLatestOdintalks();
  }, []); // Empty dependency array means this runs once on mount

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (e) {
      return dateString;
    }
  };

  const getOdintalkStatus = (odintalkDate: string) => {
    const now = new Date();
    const odintalkDateTime = new Date(odintalkDate);
    return odintalkDateTime < now ? 'Past' : 'Upcoming';
  };

  return (

      <section className={`${sectionClass ? sectionClass : 'px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-primary-50'}`}>
    <div className="container">

       <div className="text-center max-w-3xl mx-auto mb-12">
               <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 ">
                <span className="text-primary-600">OdinTalks</span>
          </h2>
          <p className="section-description-1">
            Listen to subject matter experts, industry practitioners, and thought leaders talk about the latest trends, technologies, hiring processes, and more in our free OdinTalks sessions.
          </p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-4">
        {loading ? (
          // Show 3 skeletons while loading
          Array.from({ length: 3 }).map((_, index) => <EventCardSkeleton key={index} />)
        ) : odintalks.length > 0 ? (
          odintalks.map((odintalk: any) => (
            <div
              key={odintalk.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
            >
              <div className="relative w-full h-auto">
                {odintalk.video_thumbnail && (
                  <img
                    src={odintalk.video_thumbnail}
                    alt={odintalk.title || odintalk.name || 'OdinTalk Thumbnail'}
                    className="rounded-t-xl"
                    width={'420'}
                    height={'235'}
                    loading='lazy'
                  />
                )}
                <div className="absolute top-0 left-0 w-full p-4 flex justify-end items-start z-10">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      getOdintalkStatus(odintalk.date) === 'Past'
                        ? 'text-white bg-gray-600'
                        : 'bg-green-600 text-green-50'
                    }`}
                  >
                    {getOdintalkStatus(odintalk.date)}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/20 to-transparent p-4 text-white z-10"></div>
              </div>

              <div className="md:p-5 p-4 space-y-4">
                {/* <div className="flex items-center text-gray-600 text-sm">
                  <Calendar size={16} className="mr-2 text-gray-500" />
                  <span>{formatDate(odintalk.date)}</span>
                </div> */}

                <h3 className="text-md font-semibold text-gray-900">{odintalk.title || odintalk.name}</h3>

                {odintalk.speaker_name && (
                  <div className="flex items-center text-gray-700 text-sm">
                    <span>Speaker: <span className='font-semibold'>{odintalk.speaker_name}</span></span>
                  </div>
                )}

                {odintalk.speaker_designation && (
                  <span className='text-gray-700 text-sm'>Designation: <span className='font-semibold'>{odintalk.speaker_designation}</span></span>
                )}

                <div className="flex justify-end items-center pt-2">
                  <Link
                    href={`https://www.odinschool.com/odintalks/${odintalk.url}`}
                    className="px-3 py-2 rounded-md  text-sm font-semibold hover:underline"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No latest Odintalks available.</p>
        )}
      </div>
      {/* Optional: Add a "View All" link if you have a full OdinTalks page */}
      {odintalks.length > 0 && (

        <div className="flex gap-4 justify-center delay-200 mt-10">
          <Link href='https://www.odinschool.com/odintalks'>
            <Button
              size="lg">
              Explore OdinTalks <ArrowRight size={18} />
            </Button>
          </Link>
        </div>

      )}
    </div>
    </section>
  );
};

export default LatestOdintalks;