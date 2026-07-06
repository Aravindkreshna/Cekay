import { processStages } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui";

export const metadata = createMetadata({
  title: "How We Work | Production Process",
  description:
    "A five-stage production process covering discovery, concept, pre-production, shoot, and post for premium brand films.",
  path: "/process",
  keywords: ["video production process Chennai", "brand film process India"]
});

export default function ProcessPage() {
  return (
    <Section
      eyebrow="Process"
      title="How We Work"
      description="A detailed five-stage process built to reduce friction, sharpen thinking, and make the final film more useful to the business."
    >
      <div className="grid gap-6">
        {processStages.map((stage, index) => (
          <article key={stage.title} className="panel rounded-[2rem] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                  Stage {index + 1}
                </p>
                <h2 className="mt-4 font-heading text-4xl">{stage.title}</h2>
                <p className="mt-3 text-sm uppercase tracking-[0.22em] text-[var(--muted)]">
                  {stage.timeline}
                </p>
              </div>
              <div>
                <p className="text-lg leading-8 text-[var(--muted)]">
                  {stage.description}
                </p>
                <div className="mt-6 grid gap-3 text-[var(--muted)]">
                  {stage.points.map((point) => (
                    <p key={point}>· {point}</p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
