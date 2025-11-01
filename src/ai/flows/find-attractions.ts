'use server';
/**
 * @fileOverview Finds tourist attractions in a city using the Google Places API.
 *
 * - findAttractions - A function that finds tourist attractions.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import {
  Client,
  Place,
} from '@googlemaps/google-maps-services-js';
import { FindAttractionsInputSchema, FindAttractionsOutputSchema, type FindAttractionsInput, type FindAttractionsOutput } from '@/lib/types';


const mapsClient = new Client({});

async function getPhotoUrl(photoReference?: string): Promise<string | undefined> {
  if (!photoReference) return undefined;
  // Note: In a real app, you might not want to expose the API key to the client.
  // This could be handled by a backend endpoint that serves the image.
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${process.env.GOOGLE_MAPS_API_KEY!}`;
}

export async function findAttractions(
  input: FindAttractionsInput
): Promise<FindAttractionsOutput> {
  if (!process.env.GOOGLE_MAPS_API_KEY) {
    const errorMsg = 'GOOGLE_MAPS_API_KEY environment variable not set.';
    console.error(errorMsg);
    return { 
      attractions: [], 
      error: 'The application is missing the required API key for Google Maps. Please check the server configuration.' 
    };
  }
  return findAttractionsFlow(input);
}


const findAttractionsTool = ai.defineTool(
  {
    name: 'findAttractions',
    description: 'Finds tourist attractions in a given city and category.',
    inputSchema: FindAttractionsInputSchema,
    outputSchema: z.object({
      results: z.array(z.any()),
    }),
  },
  async (input: FindAttractionsInput) => {
    try {
      const query = `tourist attractions in ${input.city} ${input.category || ''}`;
      const response = await mapsClient.textSearch({
        params: {
          query: query,
          key: process.env.GOOGLE_MAPS_API_KEY!,
        },
      });

      return response.data;
    } catch (e: any) {
      console.error('Error fetching attractions from Google Maps:', e);
      // Re-throw the error to be caught by the flow's try/catch block
      throw new Error(`Failed to fetch attractions: ${e.message}`);
    }
  }
);


const findAttractionsFlow = ai.defineFlow(
  {
    name: 'findAttractionsFlow',
    inputSchema: FindAttractionsInputSchema,
    outputSchema: FindAttractionsOutputSchema,
  },
  async (input: FindAttractionsInput): Promise<FindAttractionsOutput> => {
    try {
      const { results } = await findAttractionsTool(input);

      const attractions = await Promise.all(
        (results as Partial<Place>[]).map(async (place) => {
          const photoUrl = await getPhotoUrl(place.photos?.[0]?.photo_reference);
          return {
            id: place.place_id,
            name: place.name,
            description: place.formatted_address, // Using address as a description fallback
            photos: photoUrl ? [photoUrl] : [],
            price_level: place.price_level,
            rating: place.rating,
            user_ratings_total: place.user_ratings_total,
          };
        })
      );
      
      return { attractions };
    } catch (e: any) {
      console.error(e);
      const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
      return {
        attractions: [],
        error: `Could not retrieve attractions. Please ensure your Google Maps API key is valid, has the Places API enabled, and that billing is active for your project. Error: ${errorMessage}`,
      };
    }
  }
);
