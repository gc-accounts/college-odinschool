
import React from 'react';
import { Badge } from '@/components/components/ui/badge';
import { Button } from '@/components/components/ui/button';
import { GraduationCap, Award, BookCheck, BadgeCheck } from 'lucide-react';
import Image from 'next/image';

const CertificationSection = () => {
  const benefits = [
    {
      icon: <BadgeCheck className="h-10 w-10 text-primary-600" />,
      title: "Industry Recognition",
      description: "Microsoft's PL-300 certification is globally recognized and validates your expertise in Power BI data analysis."
    },
    {
      icon: <Award className="h-10 w-10 text-primary-600" />,
      title: "Career Advancement",
      description: "Stand out to employers and unlock new job opportunities with higher salary potential in the growing field of data analytics."
    },
    {
      icon: <BookCheck className="h-10 w-10 text-primary-600" />,
      title: "Practical Skills",
      description: "Master real-world data analysis techniques, visualization best practices, and data modeling used by industry professionals."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary-600" />,
      title: "Comprehensive Learning",
      description: "Our structured curriculum covers all exam objectives while focusing on practical applications you can use immediately."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-on-scroll ">
            <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-200 px-3 py-1 text-sm">
              Microsoft Certification
            </Badge>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
              Empower yourself with <span className="text-primary-600">PL-300 Certified</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              With Microsoft's® PL-300 certification, you can excel in delivering actionable insights through compelling visualizations, perform top-notch analytics, and deploy seamless Power BI solutions. You'll provide business value, empower self-service analytics, create powerful yet easy-to-comprehend visualizations, and more.            </p>

            <p className="text-lg text-gray-600 mb-8">
              Let your expertise in data modeling, Power Query, and Data Analysis Expressions set you apart and make you a highly sought-after candidate.
              Here are some of the top job roles you can land with the PL-300 Certificate            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                View PL-300 Course
                <GraduationCap className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn About Certification
              </Button>
            </div>
          </div>

          <div className="w-full flex justify-center md:justify-start">
            <Image
              src="https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2000"
              alt="Robot hand AI"
              className="rounded-xl w-64 md:w-full h-auto"

              loading="lazy"
              width={500}
              height={500}
            />
          </div>
        </div>

        <div className="mt-16 bg-white p-6 md:p-10 rounded-xl border border-gray-200 shadow-sm animate-on-scroll ">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">How do I enroll in this program?</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our structured learning path takes you from beginner to certified professional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Apply", },
              { step: "2", title: "Data Talk to A Counsellor", },
              { step: "3", title: "Review Your Eligibility", },
              { step: "4", title: "Get Started", }
            ].map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center text-lg font-bold mb-4">
                  {step.step}
                </div>
                {index < 3 && (
                  <div className="absolute top-6 left-[50%] w-auto h-0.5 bg-primary-200 hidden md:block"></div>
                )}
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-32">

          <div className="w-full flex justify-center md:justify-start">
            <Image
              src="https://images.unsplash.com/photo-1600267185393-e158a98703de?q=80&w=2000"
              alt="Robot hand AI"
              className="rounded-xl w-64 md:w-full h-auto"

              loading="lazy"
              width={500}
              height={500}
            />

          </div>
          <div className="space-y-6 animate-on-scroll ">
            <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-200 px-3 py-1 text-sm">
              Microsoft Certification
            </Badge>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
              Empower yourself with <span className="text-primary-600">PL-300 Certified</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8">
              With Microsoft's® PL-300 certification, you can excel in delivering actionable insights through compelling visualizations, perform top-notch analytics, and deploy seamless Power BI solutions. You'll provide business value, empower self-service analytics, create powerful yet easy-to-comprehend visualizations, and more.            </p>

            <p className="text-lg text-gray-600 mb-8">
              Let your expertise in data modeling, Power Query, and Data Analysis Expressions set you apart and make you a highly sought-after candidate.
              Here are some of the top job roles you can land with the PL-300 Certificate            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CertificationSection;
