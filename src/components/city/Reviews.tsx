import { summarizeUserReviews } from "@/ai/flows/summarize-user-reviews";
import type { Attraction } from "@/lib/types";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { StarRating } from "../common/StarRating";
import { ReviewForm } from "./ReviewForm";
import { Bot, MessageCircle } from "lucide-react";

type ReviewsProps = {
  attraction: Attraction;
};

async function AiSummary({ reviews }: { reviews: string[] }) {
  if (reviews.length < 2) {
    return null;
  }
  try {
    const { summary } = await summarizeUserReviews({ reviews });
    return (
      <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
            <Bot className="h-5 w-5 text-primary" />
            <h4 className="font-semibold text-primary">AI Summary</h4>
        </div>
        <p className="text-sm text-foreground/80 italic">{summary}</p>
      </div>
    );
  } catch (error) {
    console.error("AI summary failed:", error);
    return null;
  }
}

// In a real app, you would fetch reviews for an attraction.
// For the live API demo, we won't show the review section for attractions.
export function Reviews({ attraction }: ReviewsProps) {
  const reviewComments = attraction.reviews.map((r) => r.comment);

  return (
    <div className="pt-6">
      <h3 className="text-lg font-semibold mb-4">Ratings & Reviews</h3>
      
      <AiSummary reviews={reviewComments} />

      <div className="space-y-6 mt-6">
        {attraction.reviews.length > 0 ? (
          attraction.reviews.map((review) => (
            <div key={review.id} className="flex gap-4">
              <Avatar>
                <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">{review.author}</p>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm text-muted-foreground mt-1">{review.comment}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <MessageCircle className="mx-auto h-10 w-10 mb-2" />
            <p>No reviews yet. Be the first to share your experience!</p>
          </div>
        )}
      </div>

      <Separator className="my-6" />

      <ReviewForm attractionId={attraction.id} />
    </div>
  );
}
