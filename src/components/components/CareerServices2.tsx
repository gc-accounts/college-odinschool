import React from "react";
import Image from "next/image";

const CareerServices2 = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-8">
        {/* Left Text Block */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Career Services in <br /> a nutshell
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Optimize your resume and LinkedIn profiles to maximize your chances of
            landing amazing opportunities.
          </p>
        </div>

        {/* Right Image Block */}
        <div className="flex justify-center">
          <Image
            src="https://your-image-link.com/career-wheel.png" // Replace with your actual image URL
            alt="Career Services Graphic"
            className="max-w-xs md:max-w-md w-full"

            loading="lazy"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default CareerServices2;
