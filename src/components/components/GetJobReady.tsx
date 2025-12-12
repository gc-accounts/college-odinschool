import React from 'react';
import Image from "next/image";

interface CardsProps {
  sectionClass?: string;
}

const GetJobReady = ({ sectionClass }: CardsProps) => {
  return (
    <section className={`${sectionClass ?? ''}`}>
      <div className="container mx-auto">

        {/* ---------- HEADER ---------- */}
        <div className="section-header text-center mb-10 md:mb-16">
          <h2 className="mb-4 text-3xl md:text-5xl font-display leading-tight">
            Get Job-Ready for 2026 with{" "}
            <span className="text-primary-600">IBFO Program</span>
          </h2>
        </div>

        {/* ---------- MAIN CONTENT (Cards + Image) ---------- */}
        <div className="grid grid-cols-12 gap-10 items-center max-w-5xl mx-auto">

          {/* LEFT SIDE – CARDS */}
          <div className="col-span-4 flex flex-col gap-6 mx-auto md:mx-0">

            {/* Card 1 */}
            <div className="bg-[#0C1130] text-white rounded-xl p-6 md:p-8 shadow-lg text-center">
              <p className="text-sm opacity-80 mb-1">Only</p>
              <h3 className="text-5xl font-bold mb-2">40%</h3>
              <p className="text-sm leading-relaxed opacity-90">
                of Indian finance professionals <br />
                are skilled for modern investment banking roles.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0C1130] text-white rounded-xl p-6 md:p-8 shadow-lg text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">1.3 million+</h3>
              <p className="text-sm leading-relaxed opacity-90">
                global finance operations jobs <br />
                are expected to open by <strong>2026.</strong>
              </p>
            </div>

          </div>
          <div className='col-span-2'></div>

          {/* RIGHT SIDE – IMAGE */}
          <div className="col-span-6 flex justify-center md:justify-end">
            <img
              src="https://strapi.odinschool.com/uploads/ib_img22_da81818059.png"
              alt="IBFO Program Illustration"
              className="w-full h-auto max-w-lg"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default GetJobReady;
