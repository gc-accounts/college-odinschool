import Button from '@/components/components/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


interface dsEliteProps {
  sectionClass?: String
}
const DsEliteFold = ({ sectionClass }: dsEliteProps) => {


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
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-lg text-white">After the successful May launch, we’re thrilled to announce the</p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mt-2">
          <span className='text-white'>June 2025</span> Data Science Elite Course
        </h2>
        <p className="text-white font-semibold mt-2">
          the only Data Science Course in India backed by 5 fast growing companies!
        </p>
        {/* Logos */}
        <div className="flex flex-wrap justify-center mt-10">
          {partnerLogos.map(({ id, name, logo }) => (
            <div
              key={id}
              className="w-[40%] sm:w-[20%] md:w-[15%] mx-2 md:mb-0 mb-3 bg-primary-50 px-4 py-3 rounded-lg flex justify-center items-center"
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



        {/* What's special */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white">What’s special?</h3>
          <div className="flex flex-col md:flex-row justify-center items-start gap-12 mt-6 text-left text-white">
            <div className="max-w-sm text-center">
              <p className="text-primary-600 font-semibold text-lg">10+ Hiring sprints</p>
              <p className="mt-1">
                Fast Track your placement journey with more than 10 placement drive opportunities.
              </p>
            </div>
            <div className="max-w-sm text-center">
              <p className="text-primary-600 font-semibold text-lg">Alumni Mentorship</p>
              <p className="mt-1">
                Interact with the alumni, learn the tricks of the trade and craft your own big Success Story.
              </p>
            </div>
          </div>
        </div>

        <p className="font-semibold mt-8 text-white">
          and several more attractive benefits.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center delay-200 mt-10">
          <Link href='/data-science-elite-course'>
            <Button
              size="lg"
              icon={<ArrowRight className='ml-1' size={18} />}
              iconPosition="right"
            >
              Know More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}


export default DsEliteFold;