import React from 'react';
import Image from 'next/image';

const WhyLearnAI = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-start gap-8">

        {/* Left: Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <Image
            src="https://images.unsplash.com/photo-1668436846305-7c7b9e6f8fa0?auhref=format&fit=crop&w=400&q=80"
            alt="Robot hand AI"
            className="rounded-xl w-64 md:w-full h-auto"

            loading="lazy"
            width={500}
            height={500}
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Why learn <br /> <span className="text-black">Generative AI now</span>
          </h2>
          <p className="text-gray-500 mb-4">
            Because Generative AI is the future.
          </p>
          <p className="text-gray-500 mb-4">
            One of the most cutting-edge innovations of recent times, Generative AI is projected to become a $1.3 trillion market in the next 8 years, with a compound annual growth rate of almost 27%.          </p>
          <p className="text-gray-500 mb-4">
            Professionals skilled in Generative AI will have a lot of career growth opportunities in various industry domains. A recent global survey revealed that 57% of IT companies have identified their Generative AI use cases, out of which 41% are actively upskilling their employees to meet their demands!          </p>
          <p className="text-gray-500">
            Become a sought after Generative AI engineer and let your career take a massive leap with E&ICT Academy's Certification Program in Applied Generative AI.         </p>
        </div>
      </div>
    </section>
  );
};

export default WhyLearnAI;
