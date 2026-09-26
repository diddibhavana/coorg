'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { site, whatsappUrl } from '@/lib/site-data'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90])

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-charcoal">
      <motion.div style={{ y: reduce ? 0 : y }} className="absolute inset-0 h-[118%] w-full">
        <motion.img
          src="/images/Landing Page.png"
          alt="Panoramic daytime view over the hills and homes of Coorg"
          className="h-full w-full object-cover"
          initial={{ scale: reduce ? 1 : 1.12 }}
          animate={{ scale: reduce ? 1 : 1 }}
          transition={{ duration: 12, ease: 'easeOut' }}
        />
      </motion.div>

      <motion.div
        style={{ opacity: reduce ? 0.6 : overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/30 to-charcoal/80"
      />
      <motion.div
        style={{ y: reduce ? 0 : contentY }}
        className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24"
      >
        {/* Elegant Animated Editorial Monogram & Title Line */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          className="flex items-center gap-3 sm:gap-4 mb-3"
        >
          {/* Glowing Animated Expanding Gold/Emerald Line */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
            className="h-[1.5px] w-8 sm:w-12 bg-gradient-to-r from-amber-400/80 to-soft/40 origin-left"
          />

          <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
            <span className="font-serif italic text-lg sm:text-xl lg:text-2xl text-amber-200/95 tracking-wide drop-shadow-sm">
              Auroville Farmstay
            </span>
            <span className="text-soft/40 font-light hidden sm:inline">&mdash;</span>
            <span className="eyebrow text-soft/75 text-[0.6875rem] sm:text-[0.75rem] uppercase tracking-[0.24em] font-medium">
              Moinabad, Hyderabad
            </span>
          </div>
        </motion.div>

        <h1 className="mt-2 max-w-4xl font-display text-[3.25rem] leading-[0.95] text-soft sm:text-7xl lg:text-8xl">
          <Line delay={0.45}>A peaceful escape</Line>
          <Line delay={0.58}>in the countryside.</Line>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 1.05 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-soft px-8 py-4 text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-charcoal transition-colors duration-500 hover:bg-forest hover:text-soft"
          >
            Book your stay
            <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true">
              â†—
            </span>
          </a>
          <a
            href="/stay"
            className="group inline-flex items-center justify-center gap-2.5 border border-soft/40 px-8 py-4 text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-soft transition-colors duration-500 hover:bg-soft hover:text-charcoal"
          >
            Explore rooms
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-8 right-5 z-10 hidden items-center gap-3 text-soft/60 sm:right-8 lg:right-12 lg:flex"
      >
        <span className="text-[0.6875rem] uppercase tracking-[0.24em]">Scroll</span>
        <span className="h-10 w-px overflow-hidden bg-soft/20">
          <motion.span
            className="block h-4 w-px bg-soft"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  )
}

function Line({ children, delay }: { children: string; delay: number }) {
  const reduce = useReducedMotion()
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: reduce ? 0 : '100%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}