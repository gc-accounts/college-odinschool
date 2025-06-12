import React from 'react'
import Image from 'next/image'
import { MoveRight } from 'lucide-react';


interface  ProgramHighlightsProps{
 sectionClass?:String;
 data?: { id:number; icon: string; title: string; description:string }[];
}

  const  ProgramHighlights = ({ sectionClass, data }: ProgramHighlightsProps) => {
  return (
    <section className={`${sectionClass ? sectionClass : 'px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-primary-50'} relative`}>
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight text-white">
            Program <span className="">Highlights</span>
          </h2>
          <p className="text-white">Grab the advantage of being a part of India's only Data Science course backed by top Indian companies
          </p>
        </div>
    <div className='grid grid-cols-2 md:grid-cols-2 md:gap-5 gap-4'>
      {
        data.map((data, index)=>{
          return(
            <div key={index} className='bg-primary-50 p-4 rounded-md grid grid-cols-12 items-center'>
              <div className='md:col-span-1 col-span-12 flex items-center'>
                {/* <Image src={data.icon} alt={data.title} className="w-18 h-auto block mx-auto" loading="lazy" width={50} height={50}  /> */}
                <div className='bg-primary-600 rounded-full w-10 h-10 flex justify-center items-center block mx-auto md:mb-0 mb-2'>
                  <MoveRight className='text-white'/>
                </div>
              </div>
              <div className='md:col-span-10 col-span-12 md:text-start text-center'>
                <div className='md:ml-3'>
              <h2 className='font-semibold md:text-lg text-md mb-1'>{data.title}</h2>
              <p className='md:text-sm text-xs'>{data.description}</p>
              </div>
              </div>
            </div>
          )
        })
      }

    </div>
    </div>
    </section>
  )
}

export default  ProgramHighlights