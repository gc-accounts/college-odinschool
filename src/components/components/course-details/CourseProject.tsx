
import React, { useEffect } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Download } from 'lucide-react';
import Button from '@/components/components/Button';

import { DsProjectsData } from '@/components/data/course-section/projects/DsProjectsData';
import { DsEliteProjectsData } from '@/components/data/course-section/projects/DsEliteProjectsData';
import { GenAIProjectsData } from '@/components/data/course-section/projects/GenAIProjectsData';
import { GenAIIITGProjectsData } from '@/components/data/course-section/projects/GenAIIITGProjectsData';
import { IbProjectsData } from '@/components/data/course-section/projects/IbProjectsData';

import { getDataByPage } from '@/components/utils/getDataByPage';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
const CourseProject = () => {
  const path = usePathname()
  const projectData = 
  path === '/data-science-course' ? getDataByPage(DsProjectsData, path) : 
  path === '/generative-ai-bootcamp' ? getDataByPage(GenAIProjectsData, path) : 
  path === '/generative-ai-course-iitg' ? getDataByPage(GenAIIITGProjectsData, path) : 
  path === '/data-science-elite-course' ? getDataByPage(DsEliteProjectsData, path) :
  path === '/investment-banking-and-finance-operations-elite-course' ? getDataByPage(IbProjectsData, path) : ''

  useEffect(() => {
    console.log('----------projectData---', projectData);

  })
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Course Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {DsProjectsData.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{project.description}</p>
            </CardContent>
            <CardFooter>
              <Button
                variant={project.free ? "default" : "outline"}
                className="w-full"
                size="sm"
              >
                <Download className="h-4 w-4 mr-2" />
                {project.free ? 'Download Now' : 'Access with Course'}
              </Button>
            </CardFooter>
          </Card>
        ))} */}

        {
          projectData && projectData?.project?.map((project: any, index: any) => {
            return (
              <Card key={index} className="overflow-hidden">
                <div className="h-30 overflow-hidden">
                  <Image
                    src={project.project_img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"

                    loading="lazy"
                    width={500}
                    height={500}
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-md">{project.project_title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className='p-6 pt-3'>
                  <p className="text-sm text-gray-600">{project.project_description}</p>
                </CardContent>
                {/* <CardFooter>
                  <Button
                    variant={project.free ? "default" : "outline"}
                    className="w-full"
                    size="sm"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    {project.free ? 'Download Now' : 'Access with Course'}
                  </Button>
                </CardFooter> */}
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default CourseProject