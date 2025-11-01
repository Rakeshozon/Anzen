'use server';

import { moderateUserReview } from '@/ai/flows/moderate-user-reviews';
import { revalidatePath } from 'next/cache';

type SubmitReviewInput = {
  attractionId: string;
  author: string;
  rating: number;
  comment: string;
};

type SubmitReviewOutput = {
  success: boolean;
  error?: string;
};

export async function submitReview(
  input: SubmitReviewInput
): Promise<SubmitReviewOutput> {
  // 1. Moderate the review using AI
  try {
    const moderationResult = await moderateUserReview({ reviewText: input.comment });

    if (moderationResult.isFlagged) {
      return {
        success: false,
        error: `Your review could not be posted. Reason: ${moderationResult.flaggingReason}`,
      };
    }
  } catch (error) {
    console.error('Error during review moderation:', error);
    return {
      success: false,
      error: 'Could not verify the review. Please try again later.',
    };
  }

  // 2. If moderation passes, save the review (mocked)
  // In a real app, you would save the review to your database here.
  // For example: await db.reviews.create({ data: { ...input } });
  console.log('Review submitted and passed moderation:', input);


  // 3. Revalidate the path to show the new review (if your data source was updated)
  // Since we are not persisting data, this won't have a visible effect but is good practice.
  // revalidatePath(`/city/[^/]+`, 'page');
  
  return { success: true };
}
