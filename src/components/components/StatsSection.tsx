import React from 'react';
import Image from 'next/image';

const StatsSection = () => {
  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">

        {/* Left: Stats Cards */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-0">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-6 rounded-xl w-64 shadow-md">
            <div className="text-4xl font-bold mb-2">54%</div>
            <p className="text-sm">Freshers in India are Unemployed</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white p-6 rounded-xl w-64 shadow-md">
            <div className="text-4xl font-bold mb-2">115%</div>
            <p className="text-sm">Data Science Jobs will be created globally by 2026</p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-72 md:w-96">
          <Image
            src="https://images.unsplash.com/photo-1612831662123-e4c4d542b7f5?auhref=format&fit=crop&w=500&q=80"
            alt="Illustration of a person"
            className="w-full h-auto"

            loading="lazy"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
