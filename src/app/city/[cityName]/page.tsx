import { getCityByName } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AttractionsTabs } from "@/components/city/AttractionsTabs";
import { findAttractions } from "@/ai/flows/find-attractions";
import { type ApiAttraction } from "@/lib/types";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { type City } from "@/lib/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type CityPageProps = {
  params: {
    cityName: string;
  };
};

const getCityData = (cityName: string): { city: City, cityImage: any } => {
  let city = getCityByName(cityName);

  if (!city) {
    // If the city is not in our static data, create a mock city object
    // to allow the page to render and fetch attractions from the API.
    const decodedCityName = decodeURIComponent(cityName);
    city = {
      id: decodedCityName.toLowerCase(),
      name: decodedCityName.charAt(0).toUpperCase() + decodedCityName.slice(1),
      state: '', // State is unknown for dynamically generated cities
      description: `Explore the best attractions in ${decodedCityName.charAt(0).toUpperCase() + decodedCityName.slice(1)}.`,
      image: 'hero', // Use a default hero image
      attractions: [],
    };
  }

  const cityImage = PlaceHolderImages.find((img) => img.id === city!.image);

  return { city, cityImage };
};

export default async function CityPage({ params }: CityPageProps) {
  // Fetch static city data or create a dynamic one
  const { city, cityImage } = getCityData(params.cityName);

  if (!city) {
    notFound();
  }

  // Fetch real-time attractions from Google Places API
  const { attractions, error } = await findAttractions({ city: city.name });

  return (
    <div className="flex flex-col">
      <section className="relative h-[40vh] w-full flex items-end justify-start text-white p-6 md:p-8">
        {cityImage && (
          <Image
            src={cityImage.imageUrl}
            alt={cityImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={cityImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline tracking-tight">
            {city.name}
          </h1>
          <p className="max-w-3xl text-base sm:text-lg text-neutral-200 mt-2">
            {city.description}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <Button asChild variant="outline" className="mb-8">
           <Link href="/">
                <ArrowLeft /> Go Back Home
            </Link>
        </Button>
        {error && (
           <Alert variant="destructive" className="mb-8">
             <AlertCircle className="h-4 w-4" />
             <AlertTitle>Error Fetching Attractions</AlertTitle>
             <AlertDescription>
              {error}
             </AlertDescription>
           </Alert>
        )}
        <AttractionsTabs attractions={attractions as ApiAttraction[]} />
      </section>
    </div>
  );
}
