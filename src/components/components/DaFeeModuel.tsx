'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import Modal from './component-template/Modal';
import PrimaryForm from './course-details/PrimaryForm';

    interface Props {
  sectionClass?: String,
}
const DaFeeModule = ({ sectionClass }: Props) => {
 const [formOpen, setFormOpen] = useState(false);

  const data = {
    cohorts: ['28 Jun 2025', '26 Jul 2025'],
    fee: '₹ 35,000',
    partners: [
      { id: 1, name: 'Feemonk', logo: 'https://strapi.odinschool.com/uploads/Fee_Monk_High_Res_Logo_100_X_40_b460d38c45.webp' },
      { id: 2, name: 'Bajaj Finserv', logo: 'https://strapi.odinschool.com/uploads/Bajaj_Finance_100_X40_a2a4d984d3.webp' },
      { id: 3, name: 'Avanse', logo: 'https://strapi.odinschool.com/uploads/Avanse_20100_X40_1_25e232dc78.svg' },
      // { id: 4, name: 'Liquiloans', logo: 'https://strapi.odinschool.com/uploads/Liquiloans_20_INDIVIDUAL_20100_20_X40_bb1ef5dcdd.webp' },
    ],
  };

  return (
     <section className={`${sectionClass ? sectionClass : ''} relative`}>
      <div className='container'>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-display leading-tight mb-4">
            Program <span className="text-primary-600">Fee</span>
          </h2>
          {/* <p className="body-md text-gray-600 max-w-2xl mx-auto">
            Get the chance to interact with professionals from top companies, who bring years of real-world experience to the table.
          </p> */}
        </div>


      <div className="max-w-3xl mx-auto space-y-6">
        {/* Cohort Dates */}
        <div className="border border-gray-300 rounded-lg px-6 py-3 flex flex-wrap gap-4 justify-start items-center text-sm md:text-base">
          <span className="font-medium text-primary-600">Upcoming Cohort</span>
          {data.cohorts.map((date, i) => (
            <span key={i} className="text-gray-800 font-medium border-l border-gray-300 pl-4 first:border-none first:pl-0">
              {date}
            </span>
          ))}
        </div>

        {/* Fee and EMI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden border border-gray-300">
          <div className="bg-primary-600 flex items-center justify-center px-6 py-10 text-white text-center">
            <div className="bg-white text-primary-800 py-4 px-6 rounded-md shadow-md">
              <p className="text-sm font-medium">Affordable Program Fee</p>
              <p className="text-4xl font-bold mt-1">{data.fee}</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 flex flex-col justify-center text-center">
            <p className="text-xl font-semibold text-primary-600 mb-2">
              No Cost EMI and <br className="md:hidden" />
              Scholarships available
            </p>
            <p className="text-gray-700 text-sm">Limited seats!! Apply now to secure your spot!</p>

             {/* CTA */}
          <div className="flex flex-col justify-center sm:flex-row gap-4 mt-10">
            <Button
              size="md"
              variant="yellow"
              icon={<ArrowRight className="ml-1" size={18} />}
              iconPosition="right"
              className="font-semibold"
              onClick={() => setFormOpen(true)}
            >
              Request a Callback
            </Button>
          </div>

           {/* Modal Form */}
          <Modal header_text="Enquire Now" open={formOpen} onOpenChange={setFormOpen}>
            <PrimaryForm
              buttonText="Request a Callback"
              slug="data-analyst-course"
              isModal={true}
              sourceDomain="Course form"
            />
          </Modal>
          </div>
        </div>

        {/* Financing Partners */}
        <div className="text-center">
          <p className="text-md font-semibold text-gray-700 mb-4">Our Financing Partners</p>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            {data.partners.map((partner) => (
              <Image
                key={partner.id}
                src={partner.logo}
                alt={partner.name}
                width={100}
                height={40}
                className="object-contain h-8"
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default DaFeeModule;
