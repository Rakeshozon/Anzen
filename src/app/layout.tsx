import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'Dekho Bharath | Discover Incredible India',
  description:
    'Dekho Bharath is your digital window to explore the beauty, culture, and heritage of India. Discover top destinations, local cuisines, traditions, and travel experiences across the country.',
  keywords: [
    'Dekho Bharath',
    'Incredible India',
    'India Tourism',
    'Travel India',
    'Indian Culture',
    'Heritage Sites',
    'Explore India',
  ],
  authors: [
    { name: 'Rakesh', url: 'https://github.com/Rakeshozon' },
   
  ],
  creator: 'Rakesh & DR.Puli Venu',
  publisher: 'Dekho Bharath',
  metadataBase: new URL('https://dekhobharath.in'),
  openGraph: {
    title: 'Dekho Bharath | Discover Incredible India',
    description:
      'Explore India’s hidden gems, heritage sites, food, and culture with Dekho Bharath — your ultimate travel and culture guide.',
    url: 'https://dekhobharath.in',
    siteName: 'Dekho Bharath',
    images: [
      {
        url: '/og-image.jpg', // Place this in your /public folder
        width: 1200,
        height: 630,
        alt: 'Dekho Bharath — Discover Incredible India',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dekho Bharath | Discover Incredible India',
    description:
      'Explore the rich culture, beauty, and destinations of India with Dekho Bharath.',
    creator: '@DekhoBharath',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  themeColor: '#0ea5e9', // Tailwind sky-500
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased'
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
