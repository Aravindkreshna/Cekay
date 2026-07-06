import { createMetadata } from "@/lib/metadata";
import { PrimaryLink, Section } from "@/components/ui";

export const metadata = createMetadata({
  title: "The Reel | Showreel",
  description:
    "A minimal showreel page built around one premium Vimeo player and a clean conversion path into contact.",
  path: "/showreel",
  keywords: ["showreel production house Chennai", "brand film reel"]
});

export default function ShowreelPage() {
  return (
    <Section eyebrow="Showreel" title="The Reel">
      <div className="panel overflow-hidden rounded-[2rem] p-3">
        <div className="aspect-video overflow-hidden rounded-[1.5rem]">
          <iframe
            src="https://player.vimeo.com/video/76979871?autoplay=0&title=0&byline=0&portrait=0"
            className="h-full w-full"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Studio showreel"
          />
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="mx-auto max-w-2xl text-lg leading-8 text-[var(--muted)]">
          Seen enough? Let&apos;s talk about your brand.
        </p>
        <div className="mt-6">
          <PrimaryLink href="/contact">Start a Project →</PrimaryLink>
        </div>
      </div>
    </Section>
  );
}
