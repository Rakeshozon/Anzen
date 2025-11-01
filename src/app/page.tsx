import { FeaturedCities } from "@/components/home/FeaturedCities";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <Hero />
      <FeaturedCities />
    </div>
  );
}
