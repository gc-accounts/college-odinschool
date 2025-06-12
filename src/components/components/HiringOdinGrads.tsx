import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Card } from '@/components/components/ui/card'
import Button from '@/components/components/Button'

const testimonials = [
  {
    id: 1,
    name: 'Harish R',
    role: 'Assistant Manager - FnV',
    avatar: 'https://strapi.odinschool.com/uploads/harish_dummy_ava.png',
    companyLogo: 'https://strapi.odinschool.com/uploads/Swiggy_Logo_c5c7df8da9.png',
    quote:
      'OdinSchool trains students with in-demand skills and clarity. I hired some recently—impressed by their performance and how quickly they adapted. They\'ve never disappointed us.',
  },
  {
    id: 2,
    name: 'Riya D',
    role: 'HR Manager - TechOps',
    avatar: 'https://strapi.odinschool.com/uploads/riya_dummy.png',
    companyLogo: 'https://strapi.odinschool.com/uploads/Company_Logo_dummy.png',
    quote:
      'The candidates from OdinSchool bring in a fresh perspective and energy. Their preparation is clearly aligned with industry expectations.',
  },
]

const HiringPartners = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <section className="px-5 py-12 md:px-8 md:py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Testimonial Card */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t) => (
              <div key={t.id} className="flex-[0_0_100%] px-2">
                <Card className="border border-cyan-700 p-6 rounded-lg flex gap-5 items-start">
                  <div className="flex-shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={100}
                      height={100}
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-cyan-800">{t.name}</h3>
                    <p className="text-sm text-gray-500 font-medium mb-2">{t.role}</p>
                    <Image
                      src={t.companyLogo}
                      alt="Company logo"
                      width={80}
                      height={30}
                      className="mb-3"
                    />
                    <p className="text-sm text-gray-700 leading-relaxed">{t.quote}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Heading + Thumbnail Nav */}
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-display leading-tight mb-8">
            Here's why companies <br />
            <span className="text-cyan-700">love hiring OdinGrads</span>
          </h2>

          {/* Arrows */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={scrollPrev}
              className="bg-white border shadow p-2 rounded-full hover:bg-primary-50 text-primary-600"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="bg-white border shadow p-2 rounded-full hover:bg-primary-50 text-primary-600"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Horizontal Thumbnails */}
          <div className="flex gap-4 justify-center">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => scrollTo(idx)}
                className={`rounded-md overflow-hidden ring-2 ${
                  selectedIndex === idx ? 'ring-cyan-600' : 'ring-transparent'
                }`}
              >
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-row gap-4 justify-center mt-12">
        <Link href="https://jobs.odinschool.com/" target="_blank">
          <Button
            size="lg"
            variant="yellow"
            icon={<ArrowRight className="ml-1" size={18} />}
            iconPosition="right"
            className="font-semibold"
          >
            Explore Jobs
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default HiringPartners
