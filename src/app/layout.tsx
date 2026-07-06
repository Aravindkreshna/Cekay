import type { Metadata } from "next";
import { AnalyticsScripts } from "@/components/analytics";
import { CustomCursor } from "@/components/custom-cursor";
import { SiteChrome } from "@/components/site-chrome";
import { createMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = createMetadata({
  title: "Ad Film Production Company Chennai | CEKAY Studio",
  description:
    "Dark, cinematic ad film production studio in Chennai creating brand films, launch campaigns, and founder stories that are built to be remembered.",
  keywords: [
    "ad film production company Chennai",
    "brand films Chennai",
    "production house Chennai",
    "launch campaign films India"
  ]
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AnalyticsScripts />
        <CustomCursor />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
