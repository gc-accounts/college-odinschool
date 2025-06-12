import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from '@/components/components/ui/card'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/components/Button'

const studentsData = [
  {
    id: 1,
    thumbnail: 'https://strapi.odinschool.com/uploads/Radha_20_1_06bcdbbed3.webp',
    videoId: 'H0ClCdYqiks',
    name: 'Radha Janapureddi',
    designation: 'Product Analyst',
    highlight: 'Career Upgrade',
    companyLogo: 'https://strapi.odinschool.com/uploads/Vaco_20_Binary_20semantics_20200_X80_c9f29860d0.webp',
  },
  {
    id: 2,
    thumbnail: 'https://strapi.odinschool.com/uploads/Priyesh_20_Singh_1_8c9a9c5d89.webp',
    videoId: 'qCiL8RG-VfI',
    name: 'Priyesh Singh',
    designation: 'Data Analytics Role',
    highlight: 'Career Transition',
    companyLogo: 'https://strapi.odinschool.com/uploads/swiggy_100x40_indv_4a990b6e20.webp',
  },
  {
    id: 3,
    thumbnail: 'https://strapi.odinschool.com/uploads/Tips_20_For_20_2_516ecc112f.jpg',
    videoId: 'i8yNewE_HZ4',
    name: 'Vaishnavi Ranjithkumar',
    designation: 'Associate Analyst',
    highlight: '15-year Career Gap',
    companyLogo: 'https://strapi.odinschool.com/uploads/Lowes_100_X40_841070c4af.svg',
  },
  {
    id: 4,
    thumbnail: 'https://strapi.odinschool.com/uploads/E2_80_9_CI_E2_80_99m_20grateful_20to_20_Odin_School_20for_20being_20a_20part_20of_20my_20upskilling_20journey_E2_80_9_D_20_2_b01e61a6c8.webp',
    videoId: 'hNwsGDmAeD8',
    name: 'Vaishnavi Pote',
    designation: 'Executive- Pricing - Analytics',
    highlight: 'Career Upgrade',
    companyLogo: 'https://strapi.odinschool.com/uploads/Scootsy_20100_X40_3f8027fb41.webp',
  },
  {
    id: 5,
    thumbnail: 'https://strapi.odinschool.com/uploads/Harshitha_8e5872ca7d.webp',
    videoId: '4UeZCPkM_MY',
    name: 'Harshitha Nerella',
    designation: 'Associate Data Analyst',
    highlight: 'Career Launch',
    companyLogo: 'https://strapi.odinschool.com/uploads/Agility_20_E_20_Services_20100_X40_02717f8537.webp',
  },
  {
    id: 6,
    thumbnail: 'https://strapi.odinschool.com/uploads/Waquar_89153aa1ab.webp',
    videoId: 'kX5FLldaxBE',
    name: 'Waquar Ahmed',
    designation: 'Senior Data Analyst',
    highlight: 'Career Upgrade',
    companyLogo: 'https://strapi.odinschool.com/uploads/Sony_5f1d58d939.webp',
  }
];


interface HiringPartnersProps { sectionClass?: string }
const videoIcon = 'https://strapi.odinschool.com/uploads/youtube_8c0e38626b.webp'

const SuccessStoriesOD = ({ sectionClass }: HiringPartnersProps) => {


  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start', containScroll: 'trimSnaps' })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [playingId, setPlayingId] = useState<number | null>(null)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((idx: number) => emblaApi?.scrollTo(idx), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const dots = useMemo(() => emblaApi ? emblaApi.scrollSnapList().map((_, i) => i) : [], [emblaApi])

  return (
    <section className={`${sectionClass ?? 'px-5 py-12 md:px-8 md:py-16 bg-primary-50'}`}>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight text-white">
            Success Stories From <span>OdinDrives</span>
          </h2>
          <p className="text-white">
            The continuous need for skilled professionals shows no signs of slowing down in the Data Science field. Here are some of the students hired through OdinDrives
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          <button onClick={scrollPrev} className="absolute top-1/2 left-0 z-10 -translate-y-1/2 -translate-x-1/2 bg-white border shadow p-2 rounded-full hover:bg-primary-50 text-primary-600">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={scrollNext} className="absolute top-1/2 right-0 z-10 -translate-y-1/2 translate-x-1/2 bg-white border shadow p-2 rounded-full hover:bg-primary-50 text-primary-600">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Embla viewport & container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {studentsData.map(({ id, thumbnail, videoId, name, designation, highlight, companyLogo }) => (
                <div key={id} className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] px-2 mt-2 mb-2">
                  <Card className="border border-primary-600 hover:shadow-lg transition-all h-full overflow-hidden p-5">
                    <CardContent className="p-0 relative">
                      {playingId === id ? (
                        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                            allow="autoplay; encrypted-media"
                            className="absolute top-0 left-0 w-full h-full rounded-md"
                          />
                        </div>
                      ) : (
                        <div className="relative cursor-pointer" onClick={() => setPlayingId(id)}>
                          <Image
                            src={thumbnail}
                            alt={`${name} thumbnail`}
                            width={600}
                            height={338}
                            className="w-full h-auto rounded-md"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                              src={videoIcon}
                              alt="Play icon"
                              width={64}
                              height={64}
                            />
                          </div>
                        </div>
                      )}

                      {/* Structured Info Block */}
                      <div className="px-2 py-4 border-t mt-2 grid grid-cols-5 gap-2 items-center">
                        {/* Left: Name & Title */}
                        <div className="col-span-3">
                          <p className="text-md text-gray-500 font-medium mb-2">{name}</p>
                          <p className="text-sm text-primary-600 font-bold leading-tight">{designation}</p>
                        </div>

                        {/* Right: Logo */}
                        <div className="col-span-2 flex justify-end">
                          <div className="bg-white p-1 rounded shadow-md w-fit">
                            <Image
                              src={companyLogo}
                              alt={`${name} company logo`}
                              width={90}
                              height={40}
                              className="object-contain"
                            />
                          </div>
                        </div>

                        {/* Highlight Row */}
                        <div className="col-span-5 mt-3">
                          <span className="inline-block bg-purple-100 text-xs text-purple-700 px-3 py-1 rounded-md font-medium">
                            {highlight}
                          </span>
                        </div>
                      </div>
                    </CardContent>

                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center flex-wrap mt-8 gap-2">
            {dots.map(idx => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`transition-all duration-200 rounded-full ${idx === selectedIndex ? 'bg-primary-600 w-6 h-2 shadow' : 'bg-gray-300 w-2 h-2'}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-row gap-4 justify-center delay-200 mt-10">
          <Link href='https://jobs.odinschool.com/' target='_blank'>
            <Button
              size="lg"
              variant="yellow" // Add this prop to use the yellow color
              icon={<ArrowRight className='ml-1' size={18} />}
              iconPosition="right"
              className='font-semibold'
            >
              Explore Jobs
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default SuccessStoriesOD