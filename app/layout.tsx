import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Maison Royce | Bespoke Rolls-Royce Showroom',
  description:
    'Maison Royce is a luxury Rolls-Royce showroom offering bespoke motor cars, private viewings, and concierge ownership for the discerning few.',
  generator: 'v0.app',
  keywords: [
    'Rolls-Royce',
    'luxury cars',
    'Phantom',
    'Ghost',
    'Cullinan',
    'Spectre',
    'bespoke automobiles',
    'luxury showroom',
  ],
  openGraph: {
    title: 'Maison Royce | Bespoke Rolls-Royce Showroom',
    description:
      'Experience the pinnacle of automotive luxury. Bespoke Rolls-Royce motor cars and concierge ownership.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#121212',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
