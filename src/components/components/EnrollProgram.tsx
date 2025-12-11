import React from 'react'


interface Props {
  sectionClass: string;
}

const EnrollProgram = ({ sectionClass }: Props) => {
  return (
    <section className={`${sectionClass ?? 'px-6 py-12 bg-[#021331]'}`}>
                  <div className="container">
            <h3 className="text-2xl font-bold mb-4 text-center">How do I enroll in this program?</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our structured learning path takes you from beginner to certified professional
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {[
              { step: "1", title: "Request a Callback", },
              { step: "2", title: " Talk to A Counsellor", },
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
                <h4 className="text-lg text-center font-bold mb-2">{step.title}</h4>
              </div>
            ))}
          </div>
    </section>
  )
}

export default EnrollProgram