import Link from "next/link";
import { services } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { PrimaryLink, Section } from "@/components/ui";

export const metadata = createMetadata({
  title: "Ad Film Production Services India | Services",
  description:
    "Brand films, launch films, founder stories, investor films, social campaigns, and event documentation for brands across India.",
  path: "/services",
  keywords: ["ad film production services India", "brand film services Chennai"]
});

export default function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title="What We Make"
        description="Every format. One intention: to make your brand unforgettable."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="panel rounded-[2rem] p-8">
              <div className="mb-8 h-44 rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(201,168,76,0.28),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
              <h2 className="font-heading text-4xl">{service.title}</h2>
              <p className="mt-4 leading-8 text-[var(--muted)]">{service.description}</p>
              <p className="mt-6 text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                Best for: {service.bestFor}
              </p>
              <p className="mt-4 text-lg text-[var(--accent)]">
                Investment: {service.investment}
              </p>
              <Link href="/work" className="mt-6 inline-flex text-sm text-[var(--accent)]">
                See Examples →
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Pricing Tiers" title="Indicative investment bands.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Brand Story", "₹4L - ₹7L", "For focused identity films and flagship brand storytelling."],
            ["Launch Film", "₹8L - ₹13L", "For launches that need premium reveal, campaign edits, and distribution assets."],
            ["Full Campaign", "₹15L+", "For larger productions with multiple deliverables and rollout planning."]
          ].map(([title, price, body]) => (
            <div key={title} className="panel rounded-[2rem] p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                {title}
              </p>
              <h3 className="mt-5 font-heading text-5xl">{price}</h3>
              <p className="mt-4 leading-7 text-[var(--muted)]">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <PrimaryLink href="/contact">Get a Custom Quote →</PrimaryLink>
        </div>
      </Section>
    </>
  );
}
