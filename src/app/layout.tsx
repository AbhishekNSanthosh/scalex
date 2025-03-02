import React from "react";
import type { Metadata } from "next";
import "@styles/scss/main.scss";

export const metadata: Metadata = {
  title: "ScaleX - UI/UX Product Design Hackathon",
  description: "Join ScaleX, the ultimate inter-college UI/UX product design hackathon, and showcase your creativity and innovation!",
  keywords: "ScaleX, UI/UX, product design, hackathon, college competition, creativity, design challenge",
  openGraph: {
    title: "ScaleX - UI/UX Product Design Hackathon",
    description: "An exciting inter-college UI/UX product design hackathon. Compete, innovate, and showcase your creativity!",
    url: "https://scalexhackathon.com",
    type: "website",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "ScaleX Hackathon Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "ScaleX - UI/UX Product Design Hackathon",
    description: "Participate in ScaleX, an inter-college UI/UX design hackathon where innovation meets creativity.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "ScaleX - UI/UX Product Design Hackathon",
              "startDate": "2025-04-15T09:00:00Z",
              "endDate": "2025-04-15T17:00:00Z",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "location": {
                "@type": "Place",
                "name": "Your College Name",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 College Road",
                  "addressLocality": "Your City",
                  "addressRegion": "Your State",
                  "postalCode": "123456",
                  "addressCountry": "IN",
                },
              },
              "image": ["/favicon.png"],
              "description": "An inter-college UI/UX product design hackathon where students compete in innovative design challenges.",
              "organizer": {
                "@type": "Organization",
                "name": "ScaleX",
                "url": "https://scalexhackathon.com",
              },
            }),
          }}
        />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
