import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { LocationSelector } from './LocationSelector';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tight animate-fade-in-down">
          Discover Incredible India
        </h1>
        <p className="max-w-2xl text-md sm:text-lg md:text-xl text-neutral-200">
          Your ultimate guide to exploring the best tourist attractions across the country.
        </p>
        <LocationSelector />
      </div>
    </section>
  );
}
