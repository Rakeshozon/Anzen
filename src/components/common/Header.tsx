"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const destinations = [
    { name: "Mahal", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop" },
    { name: "Ooty", image: "https://images.unsplash.com/photo-1537225228614-b4fad34a0b19?w=1200&h=400&fit=crop" },
    { name: "Coorg", image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=400&fit=crop" },
    { name: "Kerala", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % destinations.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40">
      {/* Background Slideshow */}
      <div className="absolute inset-0 h-24 overflow-hidden">
        {destinations.map((dest, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${dest.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="container relative flex h-24 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold sm:inline-block font-headline text-2xl text-white">
            DekhoBharat
          </span>
        </Link>

        {/* Destination Tags */}
        <div className="flex gap-2">
          {destinations.map((dest, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                idx === currentSlide
                  ? "bg-white text-black"
                  : "bg-white/30 text-white hover:bg-white/50"
              }`}
            >
              {dest.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
