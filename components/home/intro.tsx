import { ImageReveal, Parallax, Reveal, TextReveal } from '@/components/motion-primitives'
import { ArrowLink } from '@/components/arrow-link'

export function Intro() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div className="flex flex-col gap-7">
          <Reveal>
            <span className="eyebrow text-earth">Welcome to Aurovilla</span>
          </Reveal>
          <h2 className="font-display text-4xl leading-[1.05] text-charcoal sm:text-5xl lg:text-[3.75rem]">
            <TextReveal text="A private escape, made for slow days." />
          </h2>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-charcoal/70 sm:text-lg">
              Set among the greenery of Moinabad, Auroville FarmStay offers a peaceful countryside retreat near Hyderabad. Days unfold beside the swimming pool, across open lawns and around the gazebo, while evenings bring bonfires, outdoor movies and time together. Between them are comfortable rooms, spacious outdoor areas and the easy warmth of a private farmhouse.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="pt-2">
              <ArrowLink href="/stay" variant="outline">
                Discover the stay
              </ArrowLink>
            </div>
          </Reveal>
        </div>

        <Parallax distance={40} className="aspect-[4/5] w-full overflow-hidden lg:aspect-[5/6]">
          <ImageReveal
            src="/images/property.png"
            alt="The North Breeze homestay in golden evening light, with its terracotta tiled roof"
            className="h-full w-full"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Parallax>
      </div>
    </section>
  )
}
