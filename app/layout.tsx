import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'GDG on Campus at BVP | Developer Community',
  description: 'Join GDG on Campus at Bharati Vidyapeeth - A student developer community hosting workshops, hackathons, and collaborative builds. Learn, build, ship.',
  keywords: ['GDG', 'Google Developer Groups', 'Student Community', 'Developer Events', 'Hackathon'],
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0D12',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} bg-background scroll-smooth`}
    >
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="bg-background text-foreground font-inter antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
