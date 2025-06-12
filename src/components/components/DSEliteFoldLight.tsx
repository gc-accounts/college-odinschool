'use client'
import Button from '@/components/components/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '@/components/components/component-template/Modal';
import PrimaryForm from '@/components/components/course-details/PrimaryForm';
import { useState } from 'react';

interface dsEliteProps {
  sectionClass?: String
}
const DsEliteFoldLight = ({ sectionClass }: dsEliteProps) => {

  const [formOpen, setFormOpen] = useState(false)
  const partnerLogos = [
    {
      id: 1,
      name: 'Swiggy',
      logo: 'https://strapi.odinschool.com/uploads/swiggy_20100_X40_20indv_6108c02a5c.webp',
    },
    {
      id: 2,
      name: 'PhonePe',
      logo: 'https://strapi.odinschool.com/uploads/Phon_Pe_20150_X60_aed6af7fa4.webp',
    },
    {
      id: 3,
      name: 'NuvoRetail',
      logo: 'https://strapi.odinschool.com/uploads/Nuvoretail_20150_X60_20_2_eb65cb4f84.webp',
    },
    {
      id: 4,
      name: '4Seer',
      logo: 'https://strapi.odinschool.com/uploads/4_Seer_20150_X60_30ae825a01.webp',
    },
    {
      id: 5,
      name: 'Venanalytics',
      logo: 'https://strapi.odinschool.com/uploads/Venanalytics_20150_X60_9ec2da4708.webp',
    },
  ];


  return (
    <section className={`${sectionClass ? sectionClass : ' pb-[50px] md:pb-[70px] bg-white'} overflow-hidden relative text-center`}>
      <div className="max-w-5xl mx-auto md:px-4">
        {/* <p className="text-lg ">After the successful May launch, we’re thrilled to announce the</p> */}
        <h2 className="text-3xl md:text-5xl font-display leading-tight">
          India’s Only Data Science Program Backed by <span className='block'>5 Leading Companies -</span> <span className='text-primary-600 block mt-3'>Data Science Elite Course</span>
        </h2>

        {/* Logos */}
        <div className="flex flex-wrap justify-center mt-10">
          {partnerLogos.map(({ id, name, logo }) => (
            <div
              key={id}
              className="w-[40%] sm:w-[20%] md:w-[15%] mx-2 md:mb-0 mb-3 px-4 py-3 rounded-lg flex justify-center items-center"
            >
              <Image
                src={logo}
                alt={`${name} logo`}
                width={100}
                height={40}
                className="h-10 w-auto object-contain"

                loading="lazy"
              />
            </div>
          ))}
        </div>

        <p className="mt-10">
          A career accelerator designed with direct input from industry leaders, ensuring you gain skills that companies trust and value. Backed by five fast growing companies, this program provides not only solid knowledge but also real-world applicability.
        </p>
        <p className='font-semibold px-3 py-2 mt-4 rounded-md bg-primary-50 border border-primary-600 inline-block'>Upcoming Cohort: 28 Jun 2025</p>



        {/* CTA */}
        <div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center delay-200 mt-10">
            <Button
              size="lg"
              variant="yellow"
              icon={<ArrowRight className='ml-1' size={18} />}
              iconPosition="right"
              className='font-semibold'
              onClick={() => setFormOpen(true)}
            >
              Enquire Now
            </Button>
          </div>
          <Modal header_text={'Enquire Now'} open={formOpen} onOpenChange={setFormOpen}>
            <PrimaryForm buttonText='Request a Callback' slug={'data-science-elite-course'} isModal={true} sourceDomain='Course form' />
          </Modal>

        </div>


      </div>
    </section>
  );
}


export default DsEliteFoldLight;