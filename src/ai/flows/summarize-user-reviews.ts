'use server';
/**
 * @fileOverview Summarizes user reviews for an attraction.
 *
 * - summarizeUserReviews - A function that generates a summary of user reviews.
 * - SummarizeUserReviewsInput - The input type for the summarizeUserReviews function.
 * - SummarizeUserReviewsOutput - The return type for the summarizeUserReviews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeUserReviewsInputSchema = z.object({
  reviews: z.array(z.string()).describe('An array of user reviews for an attraction.'),
});
export type SummarizeUserReviewsInput = z.infer<typeof SummarizeUserReviewsInputSchema>;

const SummarizeUserReviewsOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the user reviews.'),
});
export type SummarizeUserReviewsOutput = z.infer<typeof SummarizeUserReviewsOutputSchema>;

export async function summarizeUserReviews(input: SummarizeUserReviewsInput): Promise<SummarizeUserReviewsOutput> {
  return summarizeUserReviewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeUserReviewsPrompt',
  input: {schema: SummarizeUserReviewsInputSchema},
  output: {schema: SummarizeUserReviewsOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing user reviews for tourist attractions.
  Given the following user reviews, generate a concise summary that captures the overall sentiment and key points. 
  The summary should be no more than three sentences long.

  Reviews:
  {{#each reviews}}
  - {{{this}}}
  {{/each}}`,
});

const summarizeUserReviewsFlow = ai.defineFlow(
  {
    name: 'summarizeUserReviewsFlow',
    inputSchema: SummarizeUserReviewsInputSchema,
    outputSchema: SummarizeUserReviewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
