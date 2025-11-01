import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import type { ApiAttraction } from "@/lib/types";
import Image from "next/image";
import { Button } from "../ui/button";
import { MapPin, DollarSign } from "lucide-react";
import { StarRating } from "../common/StarRating";

type AttractionCardProps = {
  attraction: ApiAttraction;
};

const PriceLevel = ({ level }: { level: number }) => (
  <div className="flex items-center text-muted-foreground">
    {[...Array(4)].map((_, i) => (
      <DollarSign
        key={i}
        className={`h-5 w-5 ${i < level ? 'text-primary' : 'text-gray-300'}`}
      />
    ))}
  </div>
);


export function AttractionCard({ attraction }: AttractionCardProps) {

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative bg-muted">
          {attraction.photos && attraction.photos.length > 0 ? (
            <Image
              src={attraction.photos[0]}
              alt={attraction.name || 'Attraction'}
              fill
              className="object-cover"
            />
          ) : (
             <Image
                src="https://picsum.photos/seed/placeholder/400/300"
                alt="Placeholder image"
                fill
                className="object-cover"
              />
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-2xl mb-2">{attraction.name}</CardTitle>
        <div className="flex items-center justify-between gap-2 mb-4 text-muted-foreground">
          {attraction.rating && <StarRating rating={attraction.rating} />}
          {attraction.user_ratings_total && <span className="text-sm">({attraction.user_ratings_total} reviews)</span>}
        </div>
        {attraction.price_level !== undefined && <PriceLevel level={attraction.price_level} />}
        <CardDescription className="mt-4">{attraction.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="secondary" className="w-full">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(attraction.name || '')}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin className="mr-2 h-4 w-4" /> View on Map
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
