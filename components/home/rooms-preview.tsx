'use client'

import { useState } from 'react'
import { ImageReveal, Reveal } from '@/components/motion-primitives'
import { SectionHeading } from '@/components/section-heading'
import { rooms } from '@/lib/site-data'
import { Lightbox } from '@/components/lightbox'

export function RoomsPreview() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const lightboxImages = rooms.map((room) => ({
    src: room.image,
    alt: `${room.name} — ${room.description}`,
    category: 'Rooms' as const,
  }))

  return (
    <section id="stay" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading eyebrow="The Rooms" title="Simple, restful rooms." />
      </div>

      <div className="mt-14 grid gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {rooms.map((room, i) => (
          <Reveal key={room.id} delay={i * 0.1} className="group">
            <article className="flex flex-col">
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="relative aspect-[4/3] w-full overflow-hidden text-left cursor-pointer group/img focus:outline-none focus:ring-2 focus:ring-forest"
                aria-label={`View full image of ${room.name}`}
              >
                <ImageReveal
                  src={room.image}
                  alt={room.name}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
              </button>
              <div className="mt-6 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl text-charcoal sm:text-3xl">{room.name}</h3>
                <span className="eyebrow text-earth">{room.label}</span>
              </div>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/65 sm:text-base">
                {room.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Lightbox
        images={lightboxImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  )
}
