import Link from "next/link";
import Script from "next/script";

export function Header() {
  return (
    <>
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

      {/* ✅ Header Component */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block font-headline text-lg">
              DekhoBharath
            </span>
          </Link>
        </div>
      </header>
    </>
  );
}
