'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion-primitives'

const slides = [
  {
    src: '/images/fire.jpg',
    alt: 'Bonfire under the night sky',
    title: 'Evening Gatherings',
    subtitle: 'Warm bonfires and shared stories under the stars',
  },
  {
    src: '/images/theater.png',
    alt: 'Outdoor movie theater',
    title: 'Cinema Under the Stars',
    subtitle: 'Outdoor movie nights with your loved ones',
  },
  {
    src: '/images/water.jpg',
    alt: 'Serene water views',
    title: 'Peaceful Retreats',
    subtitle: 'Calm waters and nature\'s tranquility',
  },
]

export function FeaturedSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-14 sm:mb-20">
        <SectionHeading eyebrow="Experience" title="Unforgettable Moments." />
      </div>
      
      <Reveal>
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-charcoal">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 sm:p-12">
                <motion.h3 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="font-geraldine text-4xl sm:text-6xl text-soft drop-shadow-md"
                >
                  {slides[currentSlide].title}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="font-hiragenda text-lg sm:text-2xl text-soft/90 mt-2 tracking-wide drop-shadow-sm"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute bottom-8 right-8 flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentSlide ? 'w-8 bg-soft' : 'w-2 bg-soft/50 hover:bg-soft/80'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
