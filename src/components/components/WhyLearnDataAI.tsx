import React from 'react';
import Image from 'next/image';

const WhyLearnDataAI = () => {
  return (
    <section className="w-full py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Why Learn Data & AI Analytics
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: Info Cards */}
          <div className="flex flex-col gap-4 w-full lg:w-2/3">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Card 1 */}
              <div className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white p-6 rounded-lg w-full md:w-1/2 shadow-md">
                <div className="text-lg font-semibold">
                  1.2 crore graduates
                </div>
                <p className="text-sm mt-2">
                  are produced annually in India, yet <strong>54% remain unemployed</strong> in their respective fields.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gradient-to-r from-pink-400 to-rose-400 text-white p-6 rounded-lg w-full md:w-1/2 shadow-md">
                <div className="text-lg font-semibold">
                  51% shortage
                </div>
                <p className="text-sm mt-2">
                  of skilled professionals in AI and Data Science exists, despite <strong>High industry demand</strong>.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-r from-green-400 to-emerald-400 text-white p-6 rounded-lg w-full shadow-md">
              <div className="text-lg font-semibold">
                By 2027
              </div>
              <p className="text-sm mt-2">
                AI and Data Science will be among the <strong>Top 3 most</strong> in demand skills globally.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1606513545099-6c742f0cfcbd?auhref=format&fit=crop&w=400&q=80"
              alt="Student with notebook"
              className="rounded-xl w-64 md:w-80 object-cover"

              loading="lazy"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLearnDataAI;
