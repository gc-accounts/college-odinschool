'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/components/Button';
import { ArrowRight } from 'lucide-react';
import Modal from '@/components/components/component-template/Modal';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';



interface DsEliteProjectItem{
  id: number;
  title?: string;
  description?: string;
  image?: string;
  prerequisites?: string; 
  tools?: string[];       
  ctaText?: string;       
  ctaLink?: string;           
  videoThumb?: string;        
  videoUrl?: string;
}

interface IbProjectsProps {
  sectionClass?: string;
  slug?:string;
  projects:DsEliteProjectItem[]
}

const IbProjects = ({ sectionClass , slug,  projects  }: IbProjectsProps) => {
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
          <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight">
            10+ Hands-on <span className="text-primary-600">Projects</span>
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-6">
        {/* ── first six small cards ── */}
        {projects.slice(0, 6).map((project) => (
          <div
            key={project.id}
            className="bg-white text-black border rounded-xl p-4 col-span-12 md:col-span-4 flex flex-col justify-between"
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


     
      </div>
    </section>
  );
};

export default IbProjects;
