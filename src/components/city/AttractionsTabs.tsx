'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AttractionCard } from "./AttractionCard";
import { Building, Droplets, Castle, Trees, Landmark, Search } from "lucide-react";
import { findAttractions } from "@/ai/flows/find-attractions";
import type { ApiAttraction } from "@/lib/types";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

type AttractionsTabsProps = {
  attractions: ApiAttraction[];
};

const categories = [
  { name: 'Museum', icon: Building },
  { name: 'Waterfall', icon: Droplets },
  { name: 'Fort', icon: Castle },
  { name: 'Park', icon: Trees },
  { name: 'Temple', icon: Landmark },
] as const;

export function AttractionsTabs({ attractions: initialAttractions }: AttractionsTabsProps) {
  const [attractions, setAttractions] = useState(initialAttractions);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const cityName = pathname.split('/').pop() || '';

  const handleTabChange = async (category: string) => {
    setIsLoading(true);
    const city = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    try {
      const { attractions: newAttractions } = await findAttractions({
        city,
        category: category === "All" ? "" : category,
      });
      setAttractions(newAttractions);
    } catch (error) {
      console.error("Failed to fetch attractions for category:", category, error);
      setAttractions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const allCategories = [{ name: 'All', icon: Search }, ...categories];
  
  if (!initialAttractions || initialAttractions.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold text-muted-foreground">No attractions found for this city yet.</h2>
        <p className="mt-2 text-muted-foreground">This could be due to an API configuration issue or no results from the provider.</p>
      </div>
    )
  }

  return (
    <Tabs defaultValue="All" className="w-full" onValueChange={handleTabChange}>
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mb-8">
        {allCategories.map(({ name, icon: Icon }) => (
            <TabsTrigger key={name} value={name} disabled={isLoading}>
              <Icon className="mr-2 h-5 w-5" />
              {name}
            </TabsTrigger>
        ))}
      </TabsList>
       <TabsContent value="All">
         {isLoading ? (
            <div className="text-center py-16">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {attractions.map((attraction) => (
                <AttractionCard key={attraction.id} attraction={attraction} />
              ))}
            </div>
           )}
       </TabsContent>
      {categories.map(({ name }) => (
        <TabsContent key={name} value={name}>
          {isLoading ? (
            <div className="text-center py-16">Loading...</div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map((attraction) => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
           )}
        </TabsContent>
      ))}
    </Tabs>
  );
}
