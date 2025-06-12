import React, { useState } from 'react';
import { Download, FileText, File, Clock, Tag } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/components/ui/card';
import { Button } from '@/components/components/ui/button';
import Image from 'next/image';

interface ResourceCardProps {
  resource: {
    id: string;
    poster: string;
    video: string;
    category: string;
    title: string;
    description: string;
    fileFormat: string;
    fileSize: string;
    createdAt: string;
    popularity?: number;
    tags?: string[];
    downloadUrl: string;
  };
  formatDate: (dateString: string) => string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, formatDate }) => {
  const [isHovering, setIsHovering] = useState(false);
  console.log("resource.video", resource.video);
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video overflow-hidden bg-gray-100 relative group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering && resource.video ? (
          <video
            src={resource.video}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (<>
          <Image
            src={resource.poster}
            alt={`${resource.title} thumbnail`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"

            loading="lazy"
            width={500}
            height={500}
          />

        </>)}

      </div>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {resource.category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{resource.description}</p>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <FileText className="w-4 h-4 mr-1" />
            <span>{resource.fileFormat}</span>
          </div>
          <div className="flex items-center">
            <File className="w-4 h-4 mr-1" />
            <span>{resource.fileSize}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{formatDate(resource.createdAt)}</span>
          </div>
          <div className="flex items-center">
            <Download className="w-4 h-4 mr-1" />
            <span>{resource.popularity?.toLocaleString()}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {resource.tags?.slice(0, 3).map((tag: string) => (
            <span key={tag} className="inline-flex items-center bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button disabled={!resource.downloadUrl} className="w-full gap-2" onClick={() => window.open(resource.downloadUrl, '_blank')}>
          <Download className="h-4 w-4" />
          Download Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard; 