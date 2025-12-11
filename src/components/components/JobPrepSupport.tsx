"use client";
import React from "react";

interface JobPrepItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface JobPrepProps {
  jobPrepItems: JobPrepItem[];
  sectionClass?: String;

}

const JobPrepSupport = ({ jobPrepItems, sectionClass }: JobPrepProps) => {
  return (
    <section className={`${sectionClass ? sectionClass : ''} overflow-hidden relative`}>
      <div className="container">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B274A]">
            Job Prep Support
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Get ready for your dream job! Attend comprehensive industry readiness
            training with Career Services.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobPrepItems?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-[#E8EEFD]"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#E8EEFD] mb-4">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#0B274A] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default JobPrepSupport;
