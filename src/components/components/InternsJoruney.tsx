import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface InternsJourneyProps {
  sectionClass?: string;
}

export const internshipData = [
  {
    name: "Burra Srinidhi",
    from_pos: "B.Sc (Maths, Stats, Computer Science)",
    to_pos: "Intern - Data Analysis",
    intern_profile:
      "https://strapi.odinschool.com/uploads/Srinidhi_0a6441c10c.webp",
    certificate_img:
      "https://strapi.odinschool.com/uploads/Burra_Srinidhi_1_page_0001_3c41feddbe.webp",
  },
  {
    name: "Sunil Etamarpuram",
    from_pos: "B.Sc (Maths, Stats, Computer Science)",
    to_pos: "Intern - Data Analysis",
    intern_profile:
      "https://strapi.odinschool.com/uploads/Sunil_e5a5612c41.webp",
    certificate_img:
      "https://strapi.odinschool.com/uploads/4390463_Data_Analyst_Bootcamp_Sunil_Etamarpuram_page_0001_69a350fa46.webp",
  },
];

const InternsJourney = ({ sectionClass }: InternsJourneyProps) => {
  return (
    <section className={`${sectionClass ?? "px-6 py-12 bg-white"}`}>
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="mb-4 text-3xl md:text-5xl font-display leading-tight text-black">
            From Classroom to Corporate:{" "}
            <span className="text-primary-600">Successful Internship Journeys</span>
          </h2>
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {internshipData.map((intern, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-200 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 p-6"
            >
              {/* Profile */}
              <div className="flex flex-col items-center text-center w-full sm:w-1/3">
                <div className="w-32 h-32 overflow-hidden rounded-xl shadow-md">
                  <img
                    src={intern.intern_profile}
                    alt={intern.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-3 font-bold text-black">{intern.name}</p>

                {/* From → To */}
      <div className="flex items-center gap-2 mt-2 text-sm text-gray-700 text-center">
  <span className="font-medium break-words max-w-[200px] text-xs">
    {intern.from_pos}
  </span>
  <MdKeyboardDoubleArrowRight className="text-primary-600 w-10 h-10" />
  <span className="text-black break-words max-w-[200px] text-xs">
    {intern.to_pos}
  </span>
</div>
              </div>

              {/* Certificate */}
              <div className="w-full sm:w-2/3">
                <img
                  src={intern.certificate_img}
                  alt={`${intern.name} certificate`}
                  className="w-full h-auto object-contain rounded-lg border border-gray-300 shadow-sm"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternsJourney;
