import React from "react";

// Export the type for Aiml module data
export type AimlModuleData = {
  week: string | number;
  module: string;
  subtitle?: string;
  topics: string[];
  sessions: string[];
};

// Props type for component
interface AimlCoreModuleProps {
  data: AimlModuleData[];
}

// 3️⃣ Component Definition
const AimlCoreModule: React.FC<AimlCoreModuleProps> = ({ data }) => (
  <section>
    <h3 className="text-2xl md:text-lg font-semibold  text-center mt-10 mb-6">
      Core Modules - Live Online Classes
    </h3>
    <div className="overflow-x-auto">
      <table
        className="w-full border-separate border-spacing-0 rounded-xl shadow-xl"
        style={{ borderCollapse: "separate", borderSpacing: 0 }}
      >
        <thead>
          <tr>
            <th
              className="bg-primary-600 text-white font-semibold text-lg border border-primary-600 text-center py-4 px-0 tracking-wide"
              style={{ letterSpacing: "1px", width: "30%" }}
            >
              Topic
            </th>
            <th
              className="bg-primary-600 text-white font-semibold text-lg border border-primary-600 text-center py-4 px-0 tracking-wide"
              style={{ letterSpacing: "1px", width: "10%" }}
            >
              Week
            </th>
            <th
              className="bg-primary-600 text-white font-semibold text-lg border border-primary-600 text-center py-4 px-0 tracking-wide"
              style={{ letterSpacing: "1px", width: "60%" }}
            >
              Modules
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map(({ week, module, subtitle, topics, sessions }, idx) => {
            // Divider/Project Row
            if (!topics.length && !sessions.length) {
              return (
                <tr key={idx}>
                  <td
                    colSpan={3}
                    className="bg-[#0c2039] text-[#ffe600] font-bold text-base md:text-lg text-center py-4 border-t border-b border-primary-600"
                  >
                    {module}
                  </td>
                </tr>
              );
            }
            // Regular Module Row
            return (
              <tr key={idx} className="border-t border-b border-primary-600">
                {/* Topic Cell */}
                <td className="border-l border-r border-b border-primary-600 py-3 px-3 align-center">
                  <div className=" font-semibold text-base md:text-lg leading-tight mb-1">
                    {module}
                  </div>
                  {subtitle && (
                    <div className=" text-xs md:text-sm mt-1">
                      {subtitle}
                    </div>
                  )}
                </td>
                {/* Week Cell */}
                <td className="border-l border-r border-b border-primary-600  font-semibold text-lg text-center py-4 px-2 align-center">
                  {week}
                </td>
                {/* Modules Cell */}
                <td className="border-l border-r border-b border-primary-600  py-3 px-3 align-top">
                  <div className="grid grid-cols-12">
                    <div className="md:col-span-6 col-span-12">
                      <ul className="list-disc pl-5 mb-3 md:border-r md:border-b-0 border-b border-gray-500 pr-3">
                        {topics.map((topic, i) => (
                          <li key={i} className="text-sm md:text-base mb-1">
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-6 col-span-12">
                      <ul className="list-disc pl-10">
                        {sessions.map((sess, i) => (
                          <li key={i} className="text-sm md:text-base mb-1">
                            {sess}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </section>
);

export default AimlCoreModule;
