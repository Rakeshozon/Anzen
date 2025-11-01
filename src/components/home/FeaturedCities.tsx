import { getFeaturedCities } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function FeaturedCities() {
  const featuredCities = getFeaturedCities();

  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
          Featured Destinations
        </h2>
        <p className="text-muted-foreground mt-2 text-lg">
          Start your journey in one of India's most iconic cities.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredCities.map((city) => {
          return (
            <Link href={`/city/${city.name.toLowerCase()}`} key={city.id}>
              <Card className="overflow-hidden h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <CardTitle className="font-headline text-2xl mb-2 text-primary">{city.name}</CardTitle>
                  <CardDescription className="flex-grow">{city.description}</CardDescription>
                  <Button variant="link" className="p-0 h-auto mt-4 text-secondary justify-start">
                      Explore {city.name} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
