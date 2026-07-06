import { stats } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui";

export const metadata = createMetadata({
  title: "Brand Film Studio Chennai | About",
  description:
    "Meet the Chennai-based production studio building premium brand films for businesses that want sharper perception and stronger recall.",
  path: "/about",
  keywords: ["brand film studio Chennai", "production house about Chennai"]
});

export default function AboutPage() {
  return (
    <>
      <Section
        eyebrow="Studio Story"
        title="Built for Brands That Mean Business"
        description="We started this studio because too many serious businesses were being introduced through forgettable videos. We believe brand storytelling should create memory, not noise."
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-lg leading-8 text-[var(--muted)]">
            <p>
              CEKAY Studio exists at the intersection of strategy and cinema. We
              work with companies that know design matters, trust matters, and the
              first impression often shapes the entire sales conversation.
            </p>
            <p>
              Our philosophy is simple: a film should not just describe your brand.
              It should move perception in the direction your business actually
              needs.
            </p>
            <p>
              Based in Chennai and available across India, we partner with brands
              during launches, repositioning moments, investor narratives, and
              category-defining campaigns.
            </p>
          </div>
          <div className="panel min-h-[30rem] rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
        </div>
      </Section>

      <Section eyebrow="Founder" title="Founder & Creative Director">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="panel min-h-[28rem] rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
          <div className="space-y-5">
            <h2 className="font-heading text-5xl">Your Name Here</h2>
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
              Founder & Creative Director
            </p>
            <p className="text-lg leading-8 text-[var(--muted)]">
              A cinematic founder profile belongs here, not a corporate headshot.
              Use this section to explain your background, why film became your
              medium, and what you believe strong brand storytelling should do.
            </p>
            <p className="text-2xl leading-10 text-white">
              &quot;The job of a brand film is not just to explain. It is to make the
              right people feel something difficult to forget.&quot;
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Team" title="The People Behind the Lens">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Creative Producer",
            "Director of Photography",
            "Editor",
            "Sound Designer"
          ].map((role, index) => (
            <div key={role} className="panel rounded-[2rem] p-5">
              <div
                className="mb-5 aspect-[4/5] rounded-[1.5rem] bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=800&q=80&sig=${index})`
                }}
              />
              <h3 className="font-heading text-2xl">Team Member</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                {role}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-lg leading-8 text-[var(--muted)]">
          We work with a curated network of Chennai&apos;s best cinematographers,
          editors, and sound designers to build the exact team each story needs.
        </p>
      </Section>

      <Section eyebrow="Numbers" title="A few signals of momentum.">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="panel rounded-[2rem] p-8 text-center">
              <div className="font-heading text-6xl text-[var(--accent)]">{stat.value}</div>
              <p className="mt-4 uppercase tracking-[0.18em] text-[var(--muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
