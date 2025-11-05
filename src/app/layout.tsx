import type { Metadata } from 'next';
import Script from 'next/script';
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
  authors: [{ name: 'Rakesh', url: 'https://github.com/Rakeshozon' }],
  creator: 'Rakesh & Dr. Puli Venu',
  publisher: 'Dekho Bharath',
  metadataBase: new URL('https://dekhobharath.com'),
  openGraph: {
    title: 'Dekho Bharath | Discover Incredible India',
    description:
      'Explore India’s hidden gems, heritage sites, food, and culture with Dekho Bharath — your ultimate travel and culture guide.',
    url: 'https://dekhobharath.com',
    siteName: 'Dekho Bharath',
    images: [
      {
        url: '/og-image.jpg',
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
  themeColor: '#0ea5e9',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ ConsentManager Script (must load early) */}
        <Script
          id="consent-manager"
          src="https://cdn.consentmanager.net/delivery/autoblocking/83adfde8529dd.js"
          data-cmp-ab="1"
          data-cmp-host="c.delivery.consentmanager.net"
          data-cmp-cdn="cdn.consentmanager.net"
          data-cmp-codesrc="16"
          strategy="beforeInteractive"
          type="text/javascript"
        />

        {/* ✅ Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TMG0YCW2LL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TMG0YCW2LL');
          `}
        </Script>

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
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
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
