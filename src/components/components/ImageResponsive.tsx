'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ImageResponsiveProps {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
  fetchPriority?: 'high' | 'low' | 'auto';
}

const ImageResponsive = ({
  desktopSrc,
  mobileSrc,
  alt,
  width = 1200,
  height = 600,
  className = '',
  loading = 'lazy',
  priority = false,
  fetchPriority = 'auto'
}: ImageResponsiveProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Image
      src={isMobile ? mobileSrc : desktopSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      priority={priority}
      fetchPriority={fetchPriority}
    />
  );
};

export default ImageResponsive;
