'use client'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { submitReview } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Star } from "lucide-react";

const reviewSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  rating: z.string().refine(val => ["1","2","3","4","5"].includes(val), {message: "Please select a rating."}),
  comment: z.string().min(10, "Review must be at least 10 characters.").max(500, "Review cannot exceed 500 characters."),
});

export function ReviewForm({ attractionId }: { attractionId: string }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: "",
      comment: "",
    },
  });

  async function onSubmit(values: z.infer<typeof reviewSchema>) {
    setIsSubmitting(true);
    const result = await submitReview({
      attractionId,
      author: values.name,
      rating: parseInt(values.rating, 10),
      comment: values.comment,
    });
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Review Submitted!",
        description: "Thank you for your feedback. Your review has been submitted for moderation.",
      });
      form.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: result.error,
      });
    }
  }

  return (
    <div>
      <h4 className="font-semibold mb-4">Leave a Review</h4>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Your Rating</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex"
                  >
                    {[1,2,3,4,5].map(rating => (
                        <FormItem key={rating} className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                                <RadioGroupItem value={String(rating)} />
                            </FormControl>
                            <FormLabel className="font-normal flex items-center">{rating} <Star className="h-4 w-4 ml-1 text-primary fill-current" /></FormLabel>
                        </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Review</FormLabel>
                <FormControl>
                  <Textarea placeholder="Tell us about your experience..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" variant="secondary" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
