// src/components/skeletons/EventCardSkeleton.tsx
import React from 'react';

const EventCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 animate-pulse">
      <div className="relative w-full h-48 bg-gray-200 rounded-t-xl">
        {/* Placeholder for image */}
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start z-10">
          <div className="h-5 w-12 bg-gray-300 rounded-full"></div> {/* Free/Past tag */}
          <div className="h-5 w-16 bg-gray-300 rounded-full"></div> {/* Status tag */}
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Date and Time */}
        <div className="flex items-center text-gray-200 text-sm">
          <div className="h-4 w-24 bg-gray-300 rounded mr-2"></div>
          <div className="h-4 w-20 bg-gray-300 rounded"></div>
        </div>

        {/* Event Title */}
        <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
        <div className="h-6 w-1/2 bg-gray-300 rounded"></div>

        {/* Category/Tag */}
        <div className="h-4 w-28 bg-gray-300 rounded"></div>

        {/* Description */}
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-11/12 bg-gray-300 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded"></div>

        {/* Instructor and View Details */}
        <div className="flex justify-between items-center pt-2">
          <div className="h-4 w-2/5 bg-gray-300 rounded"></div>
          <div className="h-5 w-24 bg-blue-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default EventCardSkeleton;