"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { LocationSelector } from './LocationSelector';

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      id: 'taj-mahal',
      url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&h=600&fit=crop',
      title: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh'
    },
    {
      id: 'himalayas',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
      title: 'Himalayas',
      location: 'Northern India'
    },
    {
      id: 'backwaters',
      url: 'https://images.unsplash.com/photo-1537225228614-b4fad34a0b19?w=1200&h=600&fit=crop',
      title: 'Kerala Backwaters',
      location: 'Kerala'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Slideshow Images */}
      {heroImages.map((image, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.url}
            alt={`${image.title} - ${image.location}`}
            fill
            className="object-cover"
            priority={idx === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
      ))}
      
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

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition ${
              idx === currentSlide
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
