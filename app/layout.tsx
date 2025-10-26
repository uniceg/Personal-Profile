import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

// Optimize fonts
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'Eunice Gardner - IT Student & Developer',
    template: '%s | Eunice Gardner'
  },
  description: 'Personal portfolio of Eunice Gardner, IT student at Gordon College. Backend developer specializing in PHP, web development, and creative problem-solving.',
  keywords: ['IT Student', 'Backend Developer', 'PHP', 'Web Development', 'Gordon College', 'Portfolio'],
  authors: [{ name: 'Eunice Gardner' }],
  creator: 'Eunice Gardner',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eunicegardner.dev',
    title: 'Eunice Gardner - IT Student & Developer',
    description: 'Personal portfolio of Eunice Gardner, IT student at Gordon College.',
    siteName: 'Eunice Gardner Portfolio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification here when needed
    // google: 'verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#f6b800" />
        <meta name="msapplication-TileColor" content="#f6b800" />
      </head>
      <body className={`font-sans antialiased bg-white text-gray-900 min-h-screen`}>
        {/* Main content */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Global loading indicator could go here */}
        {/* <div id="global-loading"></div> */}
      </body>
    </html>
  )
}