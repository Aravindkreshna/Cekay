import type { Metadata } from "next";
import { site } from "@/lib/site";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = []
}: SeoInput): Metadata {
  const url = new URL(path, site.domain).toString();

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(site.domain),
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
