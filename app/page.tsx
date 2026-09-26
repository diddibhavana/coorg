import { PageShell } from '@/components/page-shell'
import { Hero } from '@/components/home/hero'
import { Intro } from '@/components/home/intro'
import { Property } from '@/components/home/property'
import { RoomsPreview } from '@/components/home/rooms-preview'
import { FeaturedSlider } from '@/components/home/featured-slider'
import { GalleryPreview } from '@/components/home/gallery-preview'
import { Testimonials } from '@/components/home/testimonials'
import { Location } from '@/components/home/location'
import { CtaBanner } from '@/components/home/cta'

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Intro />
      <Property />
      <RoomsPreview />
      <FeaturedSlider />
      <GalleryPreview />  
      <Testimonials />
      <Location />
      <CtaBanner />
    </PageShell>
  )
}
