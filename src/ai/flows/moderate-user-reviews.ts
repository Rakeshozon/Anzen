'use server';

/**
 * @fileOverview AI-powered user review moderation flow.
 *
 * - moderateUserReview - A function that moderates user reviews for inappropriate content or spam.
 * - ModerateUserReviewInput - The input type for the moderateUserReview function.
 * - ModerateUserReviewOutput - The return type for the moderateUserReview function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ModerateUserReviewInputSchema = z.object({
  reviewText: z
    .string()
    .describe('The text content of the user review to be moderated.'),
});

export type ModerateUserReviewInput = z.infer<typeof ModerateUserReviewInputSchema>;

const ModerateUserReviewOutputSchema = z.object({
  isFlagged: z
    .boolean()
    .describe(
      'Whether the review is flagged as inappropriate or spam (true) or is considered acceptable (false).' // changed from isAppropriate to isFlagged to indicate undesirable content
    ),
  flaggingReason: z
    .string()
    .optional()
    .describe(
      'The reason why the review was flagged as inappropriate or spam.  If the review is not flagged, this field should be omitted.'
    ),
});

export type ModerateUserReviewOutput = z.infer<typeof ModerateUserReviewOutputSchema>;

export async function moderateUserReview(
  input: ModerateUserReviewInput
): Promise<ModerateUserReviewOutput> {
  return moderateUserReviewFlow(input);
}

const prompt = ai.definePrompt({
  name: 'moderateUserReviewPrompt',
  input: {schema: ModerateUserReviewInputSchema},
  output: {schema: ModerateUserReviewOutputSchema},
  prompt: `You are an AI-powered content moderator tasked with identifying inappropriate or spam reviews.

  Analyze the user review provided below and determine if it should be flagged based on the following criteria:

  -   Inappropriate Content: Does the review contain offensive language, hate speech, or any form of harassment?
  -   Spam: Is the review irrelevant, repetitive, or promotional in nature?

  Based on your analysis, set the isFlagged output field to true if the review should be flagged, and false otherwise.

  If isFlagged is true, provide a detailed reason for flagging the review in the flaggingReason output field.

  User Review: {{{reviewText}}}`,
});

const moderateUserReviewFlow = ai.defineFlow(
  {
    name: 'moderateUserReviewFlow',
    inputSchema: ModerateUserReviewInputSchema,
    outputSchema: ModerateUserReviewOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
