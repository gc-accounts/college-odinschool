'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/components/Button';
import { ArrowRight } from 'lucide-react';
import Modal from '@/components/components/component-template/Modal';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';



interface DsEliteProjectItem{
  id: number;
  title: string;
  description: string;
  image: string;
  prerequisites?: string; 
  tools?: string[];       
  ctaText?: string;       
  ctaLink?: string;           
  videoThumb?: string;        
  videoUrl?: string;
}

interface DsEliteProjectsProps {
  sectionClass?: string;
  slug?:string;
  projects:DsEliteProjectItem[]
}

const DsEliteProjects = ({ sectionClass , slug,  projects  }: DsEliteProjectsProps) => {
  const [playVideo, setPlayVideo] = useState(false);
  const [formOpen, setFormOpen] = useState(false);


  /* shorthand — easier to read later */
  const featured = projects[6];
  const featured2= projects[7]

  return (
    <section
      className={`${
        sectionClass ?? 'px-5 py-12 md:px-8 md:py-16 bg-primary-50'
      }`}
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight text-white">
            20+ Hands-on <span className="text-primary-600">Projects</span>
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        {/* ── first six small cards ── */}
        {projects.slice(0, 6).map((project) => (
          <div
            key={project.id}
            className="bg-white text-black rounded-xl p-4 col-span-12 md:col-span-4 flex flex-col justify-between"
          >
            <div className="relative w-full h-40 mb-3 rounded-md overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-md font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-gray-700">{project.description}</p>
          </div>
        ))}

        {/* ── large “featured” description card ── */}
        <div className="col-span-12 lg:col-span-6 bg-white text-black p-6 rounded-xl flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-2">{featured.title}</h3>
          <p className="text-sm text-gray-700 mb-4">{featured.description}</p>

          <div className="flex flex-col sm:flex-row justify-between text-sm mb-4 gap-4">
            <div>
              <p className="text-gray-500">Pre-requisite</p>
              <p>{featured.prerequisites}</p>
            </div>
            <div>
              <p className="text-gray-500">Tools Required</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {featured.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 text-xs rounded-full border border-blue-500 text-blue-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA button + modal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center delay-200 mt-10">
            <Button
              size="md"
              variant="yellow"
              icon={<ArrowRight className="ml-1" size={18} />}
              iconPosition="right"
              className="font-semibold"
              onClick={() => setFormOpen(true)}
            >
              {featured.ctaText}
            </Button>

            <Modal
              header_text="Enquire Now"
              open={formOpen}
              onOpenChange={setFormOpen}
            >
              <PrimaryForm
                buttonText="Request a Callback"
                slug="data-science-elite-course"
                isModal
                sourceDomain="Course form"
              />
            </Modal>
          </div>
        </div>

        {/* ── featured project video ── */}
        <div className="col-span-12 lg:col-span-6 rounded-xl overflow-hidden relative aspect-video border border-white">
          {playVideo ? (
            /* ▶ after clicking, show the HTML5 video element */
            <video
              className="w-full h-full object-cover rounded-xl"
              src={featured.videoUrl}
              controls
              autoPlay
              playsInline
              poster={featured.videoThumb}
            >
              <source src={featured.videoUrl} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          ) : (
            /* ▶ thumbnail with play-button overlay */
            <div
              className="relative w-full h-full cursor-pointer"
              onClick={() => setPlayVideo(true)}
            >
              <Image
                src={featured.videoThumb}
                alt={`${featured.title} video thumbnail`}
                fill
                className="rounded-xl object-cover"
              />
              <Image
                src="https://strapi.odinschool.com/uploads/play_button_3a9c87c1ac.png"
                alt="Play Button"
                width={60}
                height={60}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              />
            </div>
          )}
        </div>



    

              {/* ── featured 2 project video ── */}
              {
                featured2 && 
                   <div className="col-span-12 lg:col-span-6 rounded-xl overflow-hidden relative aspect-video border border-white">
          {playVideo ? (
            /* ▶ after clicking, show the HTML5 video element */
            <video
              className="w-full h-full object-cover rounded-xl"
              src={featured2.videoUrl}
              controls
              autoPlay
              playsInline
              poster={featured2.videoThumb}
            >
              <source src={featured2.videoUrl} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          ) : (
            /* ▶ thumbnail with play-button overlay */
            <div
              className="relative w-full h-full cursor-pointer"
              onClick={() => setPlayVideo(true)}
            >
              <Image
                src={featured2.videoThumb}
                alt={`${featured2.title} video thumbnail`}
                fill
                className="rounded-xl object-cover"
              />
              <Image
                src="https://strapi.odinschool.com/uploads/play_button_3a9c87c1ac.png"
                alt="Play Button"
                width={60}
                height={60}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              />
            </div>
          )}
        </div>
              }


                          {/* ── large “featured” description card ── */}
            {
              featured2 &&      <div className="col-span-12 lg:col-span-6 bg-white text-black p-6 rounded-xl flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-2">{featured2.title}</h3>
          <p className="text-sm text-gray-700 mb-4">{featured2.description}</p>

          <div className="flex flex-col sm:flex-row justify-between text-sm mb-4 gap-4">
            <div>
              <p className="text-gray-500">Pre-requisite</p>
              <p>{featured2.prerequisites}</p>
            </div>
            <div>
              <p className="text-gray-500">Tools Required</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {featured2.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-1 text-xs rounded-full border border-blue-500 text-blue-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA button + modal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center delay-200 mt-10">
            <Button
              size="md"
              variant="yellow"
              icon={<ArrowRight className="ml-1" size={18} />}
              iconPosition="right"
              className="font-semibold"
              onClick={() => setFormOpen(true)}
            >
              {featured2.ctaText}
            </Button>

            <Modal
              header_text="Enquire Now"
              open={formOpen}
              onOpenChange={setFormOpen}
            >
              <PrimaryForm
                buttonText="Request a Callback"
                slug={slug}
                isModal
                sourceDomain="Course form"
              />
            </Modal>
          </div>
        </div>
            }
     
      </div>
    </section>
  );
};

export default DsEliteProjects;
