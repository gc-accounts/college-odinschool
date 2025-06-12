import React from "react";
import Image from 'next/image';
const testimonials = [
  {
    name: "S. Sai Subrath",
    role: "Human Resources",
    companyLogo: "https://strapi.odinschool.com/uploads/swiggy_100x40_indv_f7345e6e4d.webp",
    avatar: "https://strapi.odinschool.com/uploads/Sai_20_Subrath_9e7c81532b.webp",
    feedback: '"The quality of candidates provided, especially for roles in MIS and Senior MIS, has consistently met our high standards, contributing significantly to our business objectives. OdinSchools commitment to understanding our needs and providing well-trained professionals has been a major factor in the seamless execution of our hiring process."',
  },
  {
    name: "Rhishikesh Joshi",
    role: "Founder ",
    companyLogo: "https://strapi.odinschool.com/uploads/venanalytics_200_X80_2227da1d4e.webp",
    avatar: "https://strapi.odinschool.com/uploads/Rhishikesh_20_Joshi_005678846b.webp",
    feedback: '"We have hired 2 candidates from OdinSchool in the last one year. The candidates from OdinSchool have been pivotal in delivering high-quality applications and client servicing. They are well-trained in technical skills and have already started to make an impact on application development."',
  },
  {
    name: "Saritha Raghavan",
    role: "Manager, Talent Acquisition, Symphony Retail AI",
    companyLogo: "https://strapi.odinschool.com/uploads/Symphony_Retail_100_X40_20_1_ffcf44fa44.webp",
    avatar: "https://strapi.odinschool.com/uploads/man_9846a69ed7.png",
    feedback: '"As a pioneer in AI-powered marketing, merchandising, and supply chain solutions, we are very particular about the kind of data science professionals we bring on board. Working with OdinSchool and hiring their graduates has been a very smooth experience so far. We are happy with the performance of OdinSchool students and value their workplace behavior."',
  },
  {
    name: "Niraj Gupta",
    role: "Technical Recruiter, Human Resource, Cotiviti",
    companyLogo: "https://strapi.odinschool.com/uploads/Cotivity100_X40_4f39d97248.webp",
    avatar: "https://strapi.odinschool.com/uploads/man_9846a69ed7.png",
    feedback: '"My appreciation to team OdinSchool for the effort put into providing the right candidates for roles in our company, hence assuring quick TAT. The team was prompt in responding with the course curriculum and other details requested. I thank the team for continuous assistance and follow-up throughout the process. I wish to have a fruitful association going forward as well!"',
  },
  {
    name: "Rajeev Jha",
    role: "Vice President - Human Resources, FIA Global",
    companyLogo: "https://strapi.odinschool.com/uploads/FIA_20_Global_20100x40_grid_a7a1c9ec3f.webp",
    avatar: "https://strapi.odinschool.com/uploads/man_9846a69ed7.png",
    feedback: '"Sourcing skilled and relevant talent for our data analytics team has become very easy with our association with OdinSchool. What works for us is the diversity that exists in the learner base of OdinSchool. We get access to both fresher and experienced profiles here. This has highly reduced our effort in hiring the right candidates. We are happy to work with them and are looking forward to hiring more candidates from them in the future."',
  },
  {
    name: "Sharthak Acharjee",
    role: "Senior Manager - HR, Celebal Technologies",
    companyLogo: "https://strapi.odinschool.com/uploads/celebal_20_100x40_5eab45eef4.webp",
    avatar: "https://strapi.odinschool.com/uploads/man_9846a69ed7.png",
    feedback: '"OdinSchool has done a great job preparing candidates with hands-on experience in the most up-to-date curriculum, and it has been a great experience working with them so far."',
  },
  {
    name: "Abhishek Vardhana",
    role: "Talent Acquisition Specialist, Qurinom Solutions",
    companyLogo: "https://strapi.odinschool.com/uploads/Qurinom_solutions_1_6e7e077e30.webp",
    avatar: "https://strapi.odinschool.com/uploads/man_9846a69ed7.png",
    feedback: '"We appreciate OdinSchools excellent talent pool and their seamless support in our recent placement drive. The teams cooperation, and prompt profile shortlisting greatly facilitated our hiring process. We look forward to continued collaboration for future requirements."',
  },
  {
    name: "Nisha Goyal",
    role: "Associate - Human Resource, Vivifi",
    companyLogo: "https://strapi.odinschool.com/uploads/vivifi_100x40_individual_ffa02dc7e1.webp",
    avatar: "https://strapi.odinschool.com/uploads/man_9846a69ed7.png",
    feedback: '"I commend OdinSchool for helping us hire top-quality candidates for Data Analyst roles. Your support ensured a smooth recruitment experience. We value our partnership and look forward to continuing to work together in the future."',
  },

];

const steps = [
  {
    number: 1,
    text: "Send Us Your Specific Hiring Requirements",
  },
  {
    number: 2,
    text: "Receive Shortlisted Profiles Within 24 Hours",
  },
  {
    number: 3,
    text: "Review YouInterview Our Graduates And Onboard Themr Eligibility",
  },
];

const EmployerTestimonials = () => {
  return (
    <section className="px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-primary-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What <span className="text-primary-600">Employers Say</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Break away from the tradition of hunting for degrees. Onboard talents who have the right skill sets!
        </p>

        {/* Top Row: 2 Centered Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-6">
          {testimonials.map((item, index) => (
            <div key={index} className=" border rounded-xl p-6 shadow-sm bg-white">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"

                  loading="lazy"
                  width={500}
                  height={500}
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <Image src={item.companyLogo} alt="Company Logo" className="w-20 mb-4" loading="lazy" width={500} height={500} />
              <p className="text-sm text-gray-600 italic leading-relaxed">
                {item.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>

      <section className="py-12">
        <div className="container px-4 border rounded-xl text-center bg-white">
          <h2 className="text-2xl md:text-3xl mt-6 font-bold mb-8">
            Quick, free, easy hiring process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 mb-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                  {step.number}
                </div>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed text-center max-w-[200px]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </section>
  );
};

export default EmployerTestimonials;
