"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const samplePlaces = [
    "Taj Mahal",
    "Himalayas",
    "Kerala Backwaters",
    "Ooty",
    "Coorg",
    "Munnar",
    "Varanasi",
    "Jaipur",
    "Goa",
    "Rishikesh",
  ];

  const suggestions = query
    ? samplePlaces.filter((p) =>
        p.toLowerCase().includes(query.toLowerCase())
      )
    : samplePlaces.slice(0, 5);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  function handleSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    const q = query.trim();
    // always navigate to search page (show all when empty)
    router.push(`/search?query=${encodeURIComponent(q)}`);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center gap-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold sm:inline-block font-headline">
            DekhoBharat
          </span>
        </Link>

        {/* Search form */}
        <form
          onSubmit={handleSubmit}
          className="relative mx-2 flex flex-1 max-w-lg items-center"
          role="search"
        >
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            aria-label="Search places"
            placeholder="Search places (e.g. Taj Mahal, Ooty, Coorg)"
            className="w-full rounded-md border px-3 py-2 text-sm bg-white/5 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent"
          />

          {/* Suggestions dropdown */}
          {open && (
            <div className="absolute left-0 top-full mt-1 z-50 w-full rounded-md border bg-background/95 py-1 shadow-lg">
              {suggestions.length === 0 ? (
                <div className="px-3 py-2 text-sm text-neutral-400">No results</div>
              ) : (
                suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setQuery(s);
                      setOpen(false);
                      router.push(`/search?query=${encodeURIComponent(s)}`);
                    }}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-white/5"
                  >
                    {s}
                  </button>
                ))
              )}
            </div>
          )}
        </form>

        {/* removed Sign In link as requested */}
      </div>
    </header>
  );
}

// filepath: 
import Image from "next/image";

const PLACES = [
  {
    name: "Taj Mahal",
    desc: "Agra, Uttar Pradesh",
    img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&h=600&fit=crop",
    category: "Historical",
  },
  {
    name: "Himalayas",
    desc: "Northern India",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    category: "Trek",
  },
  {
    name: "Kerala Backwaters",
    desc: "Kerala",
    img: "https://images.unsplash.com/photo-1537225228614-b4fad34a0b19?w=1200&h=600&fit=crop",
    category: "Nature",
  },
  {
    name: "Indian Museum",
    desc: "Kolkata - One of the oldest museums in India",
    img: "https://images.unsplash.com/photo-1526312426976-3d8ecf77b99f?w=1200&h=600&fit=crop",
    category: "Museum",
  },
  {
    name: "Ooty",
    desc: "Tamil Nadu - Hill station",
    img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&h=600&fit=crop",
    category: "Trek",
  },
  {
    name: "Coorg",
    desc: "Karnataka - Coffee & hills",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=600&fit=crop",
    category: "Trek",
  },
];

export default function SearchPage({
  searchParams,
}: {
  searchParams: { query?: string; category?: string };
}) {
  const q = (searchParams?.query || "").trim().toLowerCase();
  const selectedCategory = (searchParams?.category || "").trim();

  // build category list
  const categories = Array.from(
    new Set(PLACES.map((p) => p.category))
  ).sort();

  const matchesQuery = (p: typeof PLACES[number]) =>
    !q ||
    p.name.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q);

  const matchesCategory = (p: typeof PLACES[number]) =>
    !selectedCategory || selectedCategory === "All"
      ? true
      : p.category.toLowerCase() === selectedCategory.toLowerCase();

  const results = PLACES.filter((p) => matchesQuery(p) && matchesCategory(p));

  return (
    <main className="container mx-auto py-12">
      <h1 className="mb-4 text-2xl font-bold">
        Search results{q ? ` for "${searchParams?.query}"` : ""}
      </h1>

      {/* category filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        <a
          href={`?query=${encodeURIComponent(searchParams?.query || "")}&category=All`}
          className={`rounded-full px-3 py-1 text-sm border ${
            !selectedCategory || selectedCategory === "All" ? "bg-accent text-white" : "bg-white/5"
          }`}
        >
          All
        </a>

        {categories.map((c) => (
          <a
            key={c}
            href={`?query=${encodeURIComponent(searchParams?.query || "")}&category=${encodeURIComponent(
              c
            )}`}
            className={`rounded-full px-3 py-1 text-sm border ${
              selectedCategory.toLowerCase() === c.toLowerCase()
                ? "bg-accent text-white"
                : "bg-white/5"
            }`}
          >
            {c}
          </a>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {results.map((p) => (
          <article key={p.name} className="flex overflow-hidden rounded-md border">
            <div className="relative h-32 w-40 flex-shrink-0">
              <Image src={p.img} alt={p.name} fill className="object-cover" sizes="200px" />
            </div>
            <div className="p-4 flex-1">
              <div className="mb-1 flex items-center justify-between">
                <h2 className="text-lg font-semibold">{p.name}</h2>
                <span className="rounded-full px-2 py-0.5 text-xs border bg-white/5">
                  {p.category}
                </span>
              </div>
              <p className="text-sm text-neutral-400">{p.desc}</p>
            </div>
          </article>
        ))}

        {results.length === 0 && (
          <div className="col-span-full py-8 text-center text-neutral-400">
            No places found. Try a different search or category.
          </div>
        )}
      </div>
    </main>
  );
}
