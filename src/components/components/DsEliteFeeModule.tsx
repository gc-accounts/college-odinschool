'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CircleCheck, ArrowRight } from 'lucide-react';
import Button from '@/components/components/Button';
import Link from 'next/link';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/components/ui/tabs';
import Modal from '@/components/components/component-template/Modal';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';


interface feeProps {
  sectionClass: string
}
const Fee = ({ sectionClass }: feeProps) => {
  const data = [
    {
      id: '1',
      cohortDate: '28 Jun 2025',
      totalPrice: '₹1,00,000',
      price: '₹90,000',
      offer: "Limited Seats! Book Yours Before They're Gone.",
      includes: 'Live Online Learning + Certificate',
      details: [
        { label: 'Live Online Classes', description: '' },
        { label: '10+ Hiring Sprints', description: '' },
        { label: '10+ Projects', description: '' },
        { label: 'Career Services', description: '' },
      ],
      emiNote: 'Scholarships & EMI Options Available!',
      emiDescription: `At OdinSchool, we believe that quality education should be accessible to everyone.\nWe offer flexible EMI options and scholarships to support this vision. No cost EMIs available!`,
      partners: [
        { name: 'FeeMonk', logo: 'https://strapi.odinschool.com/uploads/Fee_Monk_High_Res_Logo_100_X_40_b460d38c45.webp' },
        { name: 'Liquiloans', logo: 'https://strapi.odinschool.com/uploads/Liquiloans_20_INDIVIDUAL_20100_20_X40_bb1ef5dcdd.webp' },
        { name: 'Bajaj Finance', logo: 'https://strapi.odinschool.com/uploads/Bajaj_Finance_100_X40_a2a4d984d3.webp' },
        { name: 'Avanse', logo: 'https://strapi.odinschool.com/uploads/Avanse_20100_X40_1_25e232dc78.svg' }
      ]
    },
    {
      id: '2',
      cohortDate: '26 July 2025',
      totalPrice: '₹1,00,000',
      price: '₹90,000',
      offer: "Limited Seats! Book Yours Before They're Gone.",
      includes: 'Live Online Learning + Certificate',
      details: [
        { label: 'Live Online Classes', description: '' },
        { label: '10+ Hiring Sprints', description: '' },
        { label: '10+ Projects', description: '' },
        { label: 'Career Services', description: '' },
      ],
      emiNote: 'Scholarships & EMI Options Available!',
      emiDescription: `At OdinSchool, we believe that quality education should be accessible to everyone.\nWe offer flexible EMI options and scholarships to support this vision. No cost EMIs available!`,
      partners: [
        { name: 'FeeMonk', logo: 'https://strapi.odinschool.com/uploads/Fee_Monk_High_Res_Logo_100_X_40_b460d38c45.webp' },
        { name: 'Liquiloans', logo: 'https://strapi.odinschool.com/uploads/Liquiloans_20_INDIVIDUAL_20100_20_X40_bb1ef5dcdd.webp' },
        { name: 'Bajaj Finance', logo: 'https://strapi.odinschool.com/uploads/Bajaj_Finance_100_X40_a2a4d984d3.webp' },
        { name: 'Avanse', logo: 'https://strapi.odinschool.com/uploads/Avanse_20100_X40_1_25e232dc78.svg' }
      ]
    }
  ];

  const [formOpen, setFormOpen] = useState(false)
  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-500 mb-2">Upcoming Cohort</p>
          <Tabs defaultValue={data[0].id} className="w-full">
            <TabsList className="bg-primary-50 p-2 rounded-md mb-6">
              {data.map((item) => (
                <TabsTrigger
                  key={item.id}
                  value={item.id}
                  className="px-5 py-2 text-sm data-[state=active]:bg-primary-600 data-[state=active]:text-white border border-primary-500"
                >
                  {item.cohortDate}
                </TabsTrigger>
              ))}
            </TabsList>

            {data.map((selected) => (
              <TabsContent key={selected.id} value={selected.id}>
                <div className="grid grid-cols-12 gap-6 items-center">
                  {/* Left Block */}
                  <div className="col-span-12 md:col-span-4">
                    <h2 className="text-3xl md:text-5xl font-display leading-tight mb-4">Fee Structure</h2>
                    <p className="text-lg font-medium text-gray-700 mb-4">{selected.includes}</p>
                    <hr className="border-gray mb-4" />

                    <div className="space-y-3">
                      {selected.details.map((item, index) => (
                        <div key={index} className="grid grid-cols-12 items-center gap-2">
                          <span className="col-span-1 bg-primary-50 rounded-full w-8 h-8 flex justify-center items-center">
                            <CircleCheck className="text-white bg-primary-600 block rounded-full mx-auto h-5 w-5" />
                          </span>
                          <div className="col-span-10">
                            <p className="ml-1 font-semibold text-md text-gray-800 leading-tight ">{item.label}</p>
                            {/* <p className="ml-2 text-sm text-gray-500 leading-snug">{item.description}</p> */}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Card */}
                  <div className="col-span-12 md:col-span-4 border-[0.2rem] rounded-xl p-6 shadow-sm border-primary-600 h-full">
                    <p className="text-sm mb-2 text-center font-extrabold text-red-600 line-through opacity-100">
                      {selected.totalPrice}
                      <span className="font-medium text-sm text-gray-600">+ GST</span>
                    </p>
                    <h3 className="text-3xl font-bold text-center text-green-600">
                      {selected.price} <span className="text-base font-normal">+ GST</span>
                    </h3>
                    <div className="bg-blue-100 text-blue-900 text-sm px-3 py-2 mt-4 rounded-md text-center font-medium">
                      {selected.offer}
                    </div>

                    <br />




                    <Button
                      size="md"
                      variant="outline"
                      icon={<ArrowRight className="ml-1" size={18} />}
                      iconPosition="right"
                      className="font-semibold w-full py-3"
                      onClick={() => setFormOpen(true)}
                    >
                      Enquire Now

                    </Button>
                    <Modal header_text={'Enquire Now'} open={formOpen} onOpenChange={setFormOpen}>
                      <PrimaryForm buttonText='Enquire Now' slug={'data-science-elite-course'} isModal={true} sourceDomain='Course form' />
                    </Modal>

                    <Link href="/course-checkout/data-science-elite-course">
                      <Button
                        size="md"
                        variant="yellow"
                        icon={<ArrowRight className="ml-1" size={18} />}
                        iconPosition="right"
                        className="font-semibold w-full my-3 py-3"
                      >
                        Register Now
                      </Button>
                    </Link>


                  </div>

                  {/* EMI Note */}
                  <div className="col-span-12 md:col-span-4 bg-green-100 p-6 rounded-xl">
                    <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-md inline-block mb-3">
                      {selected.emiNote}
                    </span>
                    <p className="text-sm text-gray-800 whitespace-pre-line mb-4">{selected.emiDescription}</p>
                    <p className="text-sm font-medium text-gray-700 mb-2">Our Financing Partners:</p>
                    <div className="grid grid-cols-2 gap-3 text-sm font-semibold max-w-xs">
                      {selected.partners.map((partner, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-2 border border-green-300 rounded-md">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            width={80}
                            height={24}
                            className="block mx-auto"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Fee;
