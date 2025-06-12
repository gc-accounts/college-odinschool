import React from 'react'
import Image from 'next/image'

const cardData = [
  {
    id: 1,
    icon: 'https://strapi.odinschool.com/uploads/Limited_seats_1_bb95799679.webp',
    title: 'Limited Seats only',
    description: 'Enjoy the advantages of a limited edition premium batch - get more “me - time” with your mentors!'
  },
  {
    id: 2,
    icon: 'https://strapi.odinschool.com/uploads/Hiring_sprints_766efcebb4.webp',
    title: '10+ Hiring Sprints',
    description: 'Participate in 10+ recruitment drives and increase your chances of getting placed 10 fold.'
  },
  {
    id: 3,
    icon: 'https://strapi.odinschool.com/uploads/Mentorship_78225f90b8.webp',
    title: 'Mentorship by Alumni Network',
    description: 'Gain actionable insights from professionals who have been there and done that through mentorship and dedicated sessions.'
  }
]


interface CardsProps {
  sectionClass?: String,
}

  const CardsFF = ({ sectionClass }: CardsProps) => {
  return (
    <section className={`${sectionClass ? sectionClass : 'px-[20px] py-[50px] md:px-[30px] md:py-[70px] bg-primary-50'} relative`}>
      <div className="container mx-auto">
        {/* <div className="text-center max-w-4xl mx-auto mb-10 opacity-0">
          <h2 className="text-3xl font-bold mb-2">
            Hear from your peers who’ve <span className="text-primary-600">been successfully placed</span>
          </h2>
          <p className="text-gray-600">
            Discover how learners like you transformed their careers through OdinSchool’s bootcamps and got placed in top companies.
          </p>
        </div> */}
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 text-center'>
      {
        cardData.map((data, index)=>{
          return(
            <div key={index} className='bg-primary-50 border border-primary-600 p-4 rounded-md'>
              <Image
                            src={data.icon}
                            alt={data.title}
                            className="w-18 h-auto block mx-auto"
              
                            loading="lazy"
                            width={50}
                            height={50}
                          />
              <h2 className='font-semibold text-lg mb-2 mt-4'>{data.title}</h2>
              <p className='text-sm'>{data.description}</p>
            </div>
          )
        })
      }

    </div>
    </div>
    </section>
  )
}

export default CardsFF