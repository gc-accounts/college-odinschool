import React from "react";
import RequestCallback from "./custom-component/RequestCallback";

interface CareerOpportunitiesProps {
  slug: String,
  sectionClass?: String,
  data: { id: number, title: String, description: String }[]
}
//  data: { question: string; answer: string }[];

const CareerOpportunities = ({ slug, sectionClass, data }: CareerOpportunitiesProps) => {
  return (
    <section className={`${sectionClass ? sectionClass : 'py-12 px-4 md:px-8'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Career Paths <span className="text-primary-600">After This Course</span>
      </h2>

      <div className=" container mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {data?.map((item, index) => (
          <div
            key={item.id}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white"
          >
            <h3 className="text-primary-600 font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <RequestCallback slug={slug} />
    </section>
  );
};

export default CareerOpportunities;
