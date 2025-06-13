
import React, { useEffect } from 'react';
import { Badge } from '@/components/components/ui/badge';
import { Card, CardContent } from '@/components/components/ui/card';
import Image from 'next/image';

import { courseToolsData } from '@/components/data/course-section/tools/courseToolsData';
import { getDataByPage } from '@/components/utils/getDataByPage';
import { usePathname } from 'next/navigation'
interface ToolCardProps {
  name: string | undefined;
  description: string | undefined;
  icon: string | undefined;
  bgColor: string;
  delay: number;
}

const ToolCard = ({ name, description, icon, bgColor, delay }: ToolCardProps) => (
  <Card className="border border-primary-100 hover:shadow-lg transition-all duration-300 animate-on-scroll "
    style={{ animationDelay: `${delay}ms` }}>
    <CardContent className="p-5 flex flex-col items-center text-center">
      <div className={`md:w-16 md:h-16 w-10 h-10 rounded-full flex items-center justify-center mb-4 ${bgColor}`}>
        <Image src={icon} alt={name} loading="lazy" width={500} height={500} />
      </div>
      {/* <h3 className="md:text-lg text-xs font-semibold mb-2">{name}</h3> */}
      
      <p className="text-gray-600 text-sm">{description}</p>
    </CardContent>
  </Card>
);


interface ToolsSectionProps {
  sectionClass?: String;
    fontFamily?: string;
}
const ToolsSection = ({ sectionClass, fontFamily }: ToolsSectionProps) => {
  const path = usePathname()
  const ToolsData = getDataByPage(courseToolsData, path)


  return (
    <section className={`${sectionClass ? sectionClass : 'py-16 md:py-24 bg-white'}`}>
      <div className="container">
        <div className="text-center mb-12 animate-on-scroll ">
          <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-200 px-3 py-1 text-sm mb-4">
            Industry Tools
          </Badge>
          <h2 className={`text-3xl mb-4 text-gray-900 ${fontFamily?'md:text-5xl font-display leading-tight':'font-bold md:text-4xl'} ${fontFamily}`}>
            Tools You Will <span className="text-primary-600">Master</span>
          </h2>
          {/* <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum teaches you the most in-demand tools used by data professionals worldwide
          </p> */}
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {ToolsData?.tools?.map((tool, index) => (
            <ToolCard
              key={index}
              name={tool.name}
              description={tool.description}
              icon={tool.path}
              bgColor={'#f2f2f2'}
              delay={100 * index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
