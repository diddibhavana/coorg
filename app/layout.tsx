import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Coorg North Breeze | Homestay in Madikeri, Coorg',
  description:
    'A peaceful homestay in Madikeri, Coorg, offering comfortable rooms, beautiful surroundings and a warm stay close to the best of Coorg.',
  generator: 'v0.app',
  openGraph: {
    title: 'Coorg North Breeze | Homestay in Madikeri, Coorg',
    description:
      'A peaceful homestay in Madikeri, Coorg, offering comfortable rooms, beautiful surroundings and a warm stay close to the best of Coorg.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Coorg North Breeze',
    images: [{ url: '/images/property.png' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#f4f1e8',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
