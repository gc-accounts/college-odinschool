import React from 'react'
import Image from 'next/image'
import { DsEliteDataLeadersData } from '@/components/data/course-section/data-leaders/DsEliteDataLeadersData';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';
interface CardsProps {
  sectionClass?: string,
}

const DataLeadersForm = ({ sectionClass }: CardsProps) => {
  return (
    <section className={`${sectionClass ?? 'px-5 py-12 md:px-8 md:py-16 bg-primary-50'}`}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight">
            Meet the Data Leaders Who Will <span className="text-primary-600">Shape Your Learning</span>
          </h2>
          {/* <p className="text-gray-600">
            Discover how learners like you transformed their careers through OdinSchool’s bootcamps and got placed in top companies.
          </p> */}
        </div>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Leaders */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DsEliteDataLeadersData.map((leader, idx) => (
                <div key={idx} className="bg-white rounded-lg overflow-hidden">
                  <div className="relative">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      className='w-full'
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="bg-primary-800 md:px-4 px-2 md:py-3 py-2 text-white text-center rounded-b-md">
                    <h3 className="md:text-md text-sm font-semibold">{leader.name}</h3>
                    <p className="text-xs mt-1">{leader.designation}</p>
                  </div>
                  <div className="py-3 text-center">
                    <Image
                      src={leader.logo}
                      alt={leader.company}
                      width={80}
                      height={40}
                      className="mx-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='lg:col-span-1'></div>
          {/* Right: Callback Form */}
          <div className="lg:col-span-4">
            <div className="h-fit border-[3px] border-primary-600 rounded-lg">
              <PrimaryForm slug={'data-science-elite-course'} isModal={false} buttonText={'Request a Callback'} sourceDomain='Course form' />
              {/* <form className="space-y-4 flex-1">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name*"
                    className="w-full border border-primary-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />
                  <input
                    type="text"
                    placeholder="Last name*"
                    className="w-full border border-primary-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full border border-primary-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
                />
                <div className="grid grid-cols-3 gap-4">
                  <select className="col-span-2 border border-primary-50 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary-600">
                    <option>India (भारत)</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="+91"
                    className="w-full border border-primary-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
                  />
                </div>
                <select className="w-full border border-primary-50 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary-600">
                  <option>Year of Graduation*</option>
                </select>
                <select className="w-full border border-primary-50 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary-600">
                  <option>Work Experience Level*</option>
                </select>
                <p className="text-xs text-gray-500">
                  By providing your contact details, you agree to our{' '}
                  <a href="/privacy-policy" className="underline">
                    Privacy Policy
                  </a>
                </p>
              </form> */}
              {/* <button
                type="submit"
                className="mt-4 w-full bg-primary-600 text-white rounded-lg py-3 font-medium hover:bg-primary-700 transition"
              >
                Request a Callback
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataLeadersForm;
