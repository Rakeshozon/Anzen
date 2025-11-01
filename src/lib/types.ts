import { z } from "zod";

export type Review = {
  id: string;
  author: string;
  rating: number; // 1-5
  comment: string;
};

export type Attraction = {
  id: string;
  name: string;
  description: string;
  images: string[]; // image URLs or IDs
  category: 'Museum' | 'Waterfall' | 'Fort' | 'Park' | 'Temple' | string; // Allow other strings
  latitude: number;
  longitude: number;
  reviews: Review[];
  priceLevel?: number; // 0-4, optional
  address?: string; // optional
};

export type City = {
  id: string;
  name: string;
  state: string;
  description: string;
  image: string; // image ID
  attractions: Attraction[];
};

export type State = {
  name: string;
  cities: string[]; // city names
};

// Schemas and types for the find-attractions flow
export const FindAttractionsInputSchema = z.object({
  city: z.string().describe('The city to find attractions in.'),
  category: z.string().optional().describe('A category to filter attractions by (e.g., "Museum", "Park").'),
});
export type FindAttractionsInput = z.infer<typeof FindAttractionsInputSchema>;

export const ApiAttractionSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  photos: z.array(z.any()).optional(),
  price_level: z.number().optional(),
  rating: z.number().optional(),
  user_ratings_total: z.number().optional(),
});
export type ApiAttraction = z.infer<typeof ApiAttractionSchema>;

export const FindAttractionsOutputSchema = z.object({
  attractions: z.array(ApiAttractionSchema),
  error: z.string().optional(),
});
export type FindAttractionsOutput = z.infer<typeof FindAttractionsOutputSchema>;
