'use client'

const features = [
  {
    img: "https://strapi.odinschool.com/uploads/5_4b761a5a2d.webp",
    title: "University Certificate",
    desc: "Earn a University Recognised Certificate and make your profile stand out"
  },
  {
    img: "https://strapi.odinschool.com/uploads/6_e856345d91.webp",
    title: "Hiring Sprints",
    desc: "Join fast-paced job drives and connect directly with top employers."
  },
  {
    img: "https://strapi.odinschool.com/uploads/7_e264f72791.webp",
    title: "Live-Online Classes",
    desc: "Learn from top mentors and industry experts in engaging live sessions."
  },
  {
    img: "https://strapi.odinschool.com/uploads/8_fcb26d3ec2.webp",
    title: "Career Services",
    desc: "Explore exclusive job listings from 600+ hiring associations on our all-in-one career portal."
  }
];




interface Props {
  sectionClass?: string;
  title: string;
  subText: string;
}



const ExtrasSection1 = ({ sectionClass, title, subText }: Props) => {


  return (
    <section className={`${sectionClass ?? ''}`}>

<div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Everything You Need to Succeed <span className="text-primary-600">in the 2026 Tech Landscape</span>
            </h2>
            <p className="body-md text-white max-w-2xl mx-auto">
              Learn the tools, workflows, and practical skills employers will expect in 2026.
            </p>
          </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className=""
          >
            <div className="border-2 border-primary-50 w-full mb-4 bg-white overflow-hidden rounded-lg shadow-md flex flex-col items-center md:items-start">
              <img
                src={feature.img}
                alt={feature.title}
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
            {/* <h3 className="text-white text-lg md:text-xl font-semibold mb-2 text-center md:text-left">
              {feature.title}
            </h3> */}
            <p className="text-sm md:text-base text-center font-semibold text-white">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtrasSection1;