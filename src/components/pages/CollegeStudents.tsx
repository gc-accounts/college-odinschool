import React, { useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';





import { Check } from 'lucide-react';

const Navbar = dynamic(() => import('@/components/components/Navbar'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const Footer = dynamic(() => import('@/components/components/Footer'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const Button = dynamic(() => import('@/components/components/ui/button').then(mod => ({ default: mod.Button })), {
  ssr: true
});

const Card = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.Card })), {
  ssr: true
});

const CardContent = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.CardContent })), {
  ssr: true
});

const CardDescription = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.CardDescription })), {
  ssr: true
});

const CardFooter = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.CardFooter })), {
  ssr: true
});

const CardHeader = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.CardHeader })), {
  ssr: true
});

const CardTitle = dynamic(() => import('@/components/components/ui/card').then(mod => ({ default: mod.CardTitle })), {
  ssr: true
});

const Separator = dynamic(() => import('@/components/components/ui/separator').then(mod => ({ default: mod.Separator })), {
  ssr: true
});

const Testimonials = dynamic(() => import('@/components/components/Testimonials'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const OrganizationLogos = dynamic(() => import('@/components/components/OrganizationLogos'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const CallbackForm = dynamic(() => import('@/components/components/CallbackForm'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const ExtrasSection1 = dynamic(() => import('@/components/components/ExtrasSection1'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const NewsSection = dynamic(() => import('@/components/components/NewsSection'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const WhyLearnDataAI = dynamic(() => import('@/components/components/WhyLearnDataAI'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const OdinTalks = dynamic(() => import('@/components/components/OdinTalks'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const FeaturedCourses = dynamic(() => import('@/components/components/FeaturedCourses'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const mentorsData = [
  {
    id: "mentor-1",
    name: "Dr. Sarah Johnson",
    role: "AI Research Scientist",
    company: "Google DeepMind",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auhref=format&fit=crop&w=256",
    expertise: ["Machine Learning", "Natural Language Processing", "Neural Networks"],
    bio: "Dr. Sarah Johnson is a leading researcher in artificial intelligence with over 15 years of experience. She has published numerous papers on deep learning applications.",
    education: "Ph.D. in Computer Science, Stanford University",
    accomplishments: [
      "Led team that developed breakthrough NLP model",
      "Author of 'Deep Learning: The Next Frontier'",
      "Recipient of the ACM Computing Innovation Fellowship"
    ]
  },
  {
    id: "mentor-2",
    name: "Michael Chen",
    role: "Senior Software Engineer",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auhref=format&fit=crop&w=256",
    expertise: ["Cloud Architecture", "DevOps", "Microservices"],
    bio: "Michael Chen specializes in cloud-native applications and infrastructure automation. He has helped numerous organizations modernize their tech stacks.",
    education: "M.S. in Computer Engineering, UC Berkeley",
    accomplishments: [
      "Microsoft Certified Azure Solutions Architect",
      "Creator of popular open-source deployment tool",
      "Speaker at KubeCon and CloudNativeCon"
    ]
  },
  {
    id: "mentor-3",
    name: "Priya Patel",
    role: "Data Science Director",
    company: "Netflix",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auhref=format&fit=crop&w=256",
    expertise: ["Big Data Analytics", "Recommendation Systems", "Statistical Modeling"],
    bio: "Priya leads data science initiatives focused on improving content recommendations and user experience through advanced analytics.",
    education: "Ph.D. in Statistics, MIT",
    accomplishments: [
      "Developed Netflix's content classification algorithm",
      "Published research on personalization at scale",
      "Adjunct Professor at UCLA"
    ]
  },
];

const CollegeStudents = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden bg-[#2d1846] flex items-center justify-center py-12 px-4">
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 items-center">
          {/* Left Section */}
          <div className="flex-1 text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-[#3a235a] px-3 py-1 rounded-full flex items-center gap-1 text-yellow-400 font-semibold text-sm">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" /></svg>
                4.6/5 | 1,539 Reviews
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">AI Analyst<br />College Program</h1>
            <p className="mb-6 text-lg">Become an AI-Powered Analyst &amp; Stay Ahead in the Age of Automation!</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-2 bg-[#3a235a] rounded-lg px-4 py-3">
                <Check className="text-purple-400 w-5 h-5" />
                <span>Internship program</span>
              </div>
              <div className="flex items-center gap-2 bg-[#3a235a] rounded-lg px-4 py-3">
                <Check className="text-purple-400 w-5 h-5" />
                <span>Job prep support</span>
              </div>
              <div className="flex items-center gap-2 bg-[#3a235a] rounded-lg px-4 py-3">
                <Check className="text-purple-400 w-5 h-5" />
                <span>Live online classes</span>
              </div>
              <div className="flex items-center gap-2 bg-[#3a235a] rounded-lg px-4 py-3">
                <Check className="text-purple-400 w-5 h-5" />
                <span>20+ Projects</span>
              </div>
            </div>
            <p className="text-yellow-400 font-semibold mb-2">
              Student ID is mandatory for the enrollment to the course.
            </p>

          </div>
          {/* Right Section (Form) */}
          <div className="flex-1 max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 relative">
            <form className=" flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="flex-1 min-w-0 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="flex-1 min-w-0 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Email*"
                  className="flex-1 min-w-0 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
                />
                <div className="flex flex-col sm:flex-row flex-1 gap-2 min-w-0">
                  <select className="border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full">
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone*"
                    className="border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="Roll number / Student ID*"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
              />
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  type="text"
                  placeholder="College Name*"
                  className="flex-1 min-w-0 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
                />
                <select className="flex-1 min-w-0 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full">
                  <option>Year of Graduation*</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="City / District*"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 w-full"
              />
              <p className="text-xs text-gray-500 mt-2">
                By providing your contact details, you agree to our <a href="#" className="underline">Privacy Policy</a>
              </p>
              <button
                type="submit"
                className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg py-3 shadow-lg transition w-full"
              >
                Request a Callback
              </button>
            </form>
          </div>
        </div>
      </main>
      <FeaturedCourses searchText="data science" />
      <WhyLearnDataAI />
      <Testimonials />
      <OrganizationLogos />
      <ExtrasSection1 />
      <OdinTalks />
      <NewsSection />
      <CallbackForm />
      <Footer />
    </>
  );
};

export default CollegeStudents;
