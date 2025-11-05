"use client";

import { Building2, Briefcase, Ticket } from "lucide-react";
import Script from "next/script";

export function Footer() {
  return (
    <footer className="w-full border-t bg-background relative">
      {/* Jotform Chatbot */}
      <Script
        src="https://cdn.jotfor.ms/agent/embedjs/019a5274c870740c98e00561dfb8b89fc0f2/embed.js"
        strategy="afterInteractive"
      />

      <div className="container py-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-primary mb-4 font-headline">
            Coming Soon
          </h3>
          <p className="text-muted-foreground mb-6">
            Exciting new features are on the way to make your travel planning even easier!
          </p>

          {/* Coming Soon Icons */}
          <div className="flex justify-center items-center gap-8 text-muted-foreground mb-8">
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

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.instagram.com/dekhobharath?igsh=MWx4ZWozNDhpbnFhag=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-7 h-7"
              />
            </a>

            <a
              href="https://www.facebook.com/share/17ZxRydCgH/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                alt="Facebook"
                className="w-7 h-7"
              />
            </a>

            <a
              href="https://x.com/dekhobharath?t=LFN31HLu7-sWrgNo1OqB0g&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
                alt="X (Twitter)"
                className="w-7 h-7"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/dekho-bharath-a94108391?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="w-7 h-7"
              />
            </a>
          </div>

          {/* Contact Email */}
          <p className="text-sm text-muted-foreground mb-4">
            📧 Contact us at{" "}
            <a
              href="mailto:dekhobharath@gmail.com"
              className="text-primary hover:underline"
            >
              dekhobharath@gmail.com
            </a>
          </p>
        </div>

        {/* Copyright + Credits */}
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>
            Created by <strong>Rakeshozon</strong>, co-founders{" "}
            <strong>Dr. Puli Venu</strong> and <strong>Rakesh</strong>
          </p>
          <p>
            &copy; {new Date().getFullYear()} <strong>DekhoBharath</strong>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
