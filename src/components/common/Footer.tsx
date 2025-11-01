import { Building2, Briefcase, Ticket } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-primary mb-4 font-headline">Coming Soon</h3>
          <p className="text-muted-foreground mb-6">Exciting new features are on the way to make your travel planning even easier!</p>
          <div className="flex justify-center items-center gap-8 text-muted-foreground">
            <div className="flex flex-col items-center gap-2">
              <Building2 className="h-8 w-8" />
              <span>Hotels</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Briefcase className="h-8 w-8" />
              <span>Travel Services</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Ticket className="h-8 w-8" />
              <span>Booking</span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Created by Rakeshozon, co-founder Puli venu and Rakesh</p>
          <p>&copy; {new Date().getFullYear()} DekhoBharat. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
