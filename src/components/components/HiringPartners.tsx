import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { Card, CardContent } from '@/components/components/ui/card'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/components/Button'

const hiringPartnersData = [
  { id: 1, thumbnail: 'https://strapi.odinschool.com/uploads/Flip_Kart_Preplacement_Talk_45de2b1844.webp', videoId: 'Tj1whD5zUOg' },
  { id: 2, thumbnail: 'https://strapi.odinschool.com/uploads/Pre_Placement_Talk_1_1c7c667c98.webp', videoId: 'W7JQKYetLy0' },
  { id: 3, thumbnail: 'https://strapi.odinschool.com/uploads/Ven_Analytics_Preplacement_20_Talk_fac5aaf3fb.webp', videoId: 'CMYMHqBDZi0' },
  { id: 4, thumbnail: 'https://strapi.odinschool.com/uploads/Kriya_Nextewalth_900a7b8ed3.webp', videoId: 'A5_qkG18hH8' },
]

interface HiringPartnersProps { sectionClass?: string }
const videoIcon = 'https://strapi.odinschool.com/uploads/youtube_8c0e38626b.webp'

  const HiringPartners = ({ sectionClass }: HiringPartnersProps) => {


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
    <section className={`${sectionClass ?? 'px-5 py-12 md:px-8 md:py-16 bg-primary-50'}` }>
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl mb-3 font-display leading-tight">
            Hiring Sprints - From <span className="text-primary-600">Our Partners</span>
          </h2>
          <p className="text-gray-600">
            We have partnered with 600+ organisations and conduct multiple job drives every month.
            Here's What Our Hiring Partners Have To Say
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
              {hiringPartnersData.map(({ id, thumbnail, videoId }) => (
                <div key={id} className="embla__slide flex-[0_0_100%] md:flex-[0_0_33.33%] lg:flex-[0_0_50%] px-2 mt-2 mb-2">
                  <Card className="border border-primary-600 hover:shadow-lg transition-all h-full overflow-hidden p-5">
                    <CardContent className="p-0 relative">
                      {playingId === id ? (
                        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                          <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                            allow="autoplay; encrypted-media"
                            className="absolute top-0 left-0 w-full h-full"
                          />
                        </div>
                      ) : (
                        <div className="relative cursor-pointer" onClick={() => setPlayingId(id)}>
                          <Image
                            src={thumbnail}
                            alt="Partner video thumbnail"
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

export default HiringPartners