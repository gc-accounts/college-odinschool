'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { Card, CardContent } from '@/components/components/ui/card';
import { Button } from '@/components/components/ui/button';
import { Badge } from '@/components/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/components/ui/tabs';
import { getStories } from '@/components/utils/api/story';
import { Dialog, DialogContent } from '@/components/components/ui/dialog';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const transformationTypes = [
  { name: 'All', key: '' },
  { name: 'Career Transition', key: 'Career Transition' },
  { name: 'Career Gap', key: 'Career Gap' },
  { name: 'Career Upgrade', key: 'Career Upgrade' },
  { name: 'Salary Hike', key: 'Salary Hike' },
  { name: 'Career Launch', key: 'Career Launch' },
];

const categoryColors: Record<string, string> = {
  'Career Transition': 'bg-blue-100 text-blue-800 border-blue-200',
  'Career Upgrade': 'bg-green-100 text-green-800 border-green-200',
  'Career Relaunch': 'bg-purple-100 text-purple-800 border-purple-200',
  'Career Gap': 'bg-amber-100 text-amber-800 border-amber-200',
  'Salary Hike': 'bg-red-100 text-red-800 border-red-200',
};

const Testimonials = () => {
  const [stories, setStories] = useState<any[]>([]);
  const [videoStories, setVideoStories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('');
  const pathname = usePathname();

  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getStories({
        pageNumber: 1,
        pageSize: 3,
        isFeatured: true,
        remarks: activeTab || undefined,
      });
      setStories(data.stories || []);
      setVideoStories(data.videoStories || []);
      setLoading(false);
    };

    fetchData();
  }, [activeTab]);

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (headerRef.current) observer.observe(headerRef.current);
    if (testimonialsRef.current) observer.observe(testimonialsRef.current);

    return () => observer.disconnect();
  }, [loading]);

  return (
    <section ref={sectionRef} className="px-6 py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div ref={headerRef} className="text-center max-w-4xl mx-auto mb-10 opacity-0">
          <h2 className="text-3xl font-bold mb-2">
            Hear from your peers who’ve <span className="text-primary-600">been successfully placed</span>
          </h2>
          <p className="text-gray-600">
            Discover how learners like you transformed their careers through OdinSchool’s bootcamps and got placed in top companies.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
            {transformationTypes.map((type) => (
              <TabsTrigger key={type.key} value={type.key}>
                {type.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0">
            {stories.length === 0 && videoStories.length === 0 && !loading && (
              <p className="text-center col-span-full text-gray-500">No success stories found.</p>
            )}
            {stories.map((t) => (
              <CareerCard key={t.documentId || t.id} testimonial={t} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {videoStories.map((t) => (
              <VideoCard key={t.documentId || t.id} testimonial={t} />
            ))}
          </div>
        </Tabs>

        {pathname !== '/success-stories' && (
          <div className="text-center mt-12">
            <Link href="/success-stories">
              <Button variant="outline">View More Success Stories</Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

const CareerCard = ({ testimonial }: any) => {
  const badge = categoryColors[testimonial.student_remark] || 'bg-gray-100 text-gray-800 border-gray-200';

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4 space-y-4">
        <Badge className={badge}>{testimonial.student_remark}</Badge>
        <div className="flex gap-3 items-center">
          <Image
            src={testimonial.avatar || '/default-avatar.png'}
            alt={testimonial.name}
            width={48}
            height={48}
            className="rounded-full border"
          />
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500 line-through">{testimonial.previous_designation}</p>
            <p className="text-sm font-bold">{testimonial.current_designation}</p>
          </div>
        </div>
        <Image
          src={testimonial.current_company_image || '/default-logo.png'}
          alt="Company Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <p className="italic text-sm text-gray-600">"{testimonial.student_remark}"</p>
      </CardContent>
    </Card>
  );
};

const VideoCard = ({ testimonial }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-0">
          <div className="relative aspect-video bg-black">
            <Image
              src={testimonial.testimonial_video_thumbnail || '/default-thumbnail.png'}
              alt="Video Thumbnail"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 flex justify-center items-center">
              <div onClick={() => setOpen(true)} className="bg-primary-600 p-3 rounded-full cursor-pointer text-white">
                <Play />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[800px] p-0">
          <div className="aspect-video">
            <video src={testimonial.testimonial_video_link} controls autoPlay className="w-full h-full" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Testimonials;
