import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { featuredProjects, credibilityItems, processStages } from "@/lib/content";
import { PrimaryLink, SecondaryLink, Section } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden px-4 sm:px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.22),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-25" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 pt-18 sm:gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="fade-up space-y-6 sm:space-y-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
              Ad Film Production Studio
            </p>
            <h1 className="font-heading max-w-5xl text-4xl leading-[0.94] text-balance sm:text-6xl md:text-7xl lg:text-8xl">
              We Don&apos;t Make Videos. We Build Brand Assets.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8 md:text-xl">
              Ad film production studio for brands that are ready to be remembered.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <PrimaryLink href="/work">Watch Our Work</PrimaryLink>
              <SecondaryLink href="/contact">Start a Project</SecondaryLink>
            </div>
            <div className="grid max-w-2xl grid-cols-1 gap-3 pt-4 text-sm text-[var(--muted)] sm:grid-cols-3">
              {[
                "Brand films that look like category leaders.",
                "Strategy-led production, not vendor execution.",
                "Built for websites, decks, launches, and paid media."
              ].map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  {point}
                </div>
              ))}
            </div>
          </div>
          <Reveal className="lg:justify-self-end" delay={180}>
            <div className="panel hero-glow relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
              <div className="aspect-[4/5] min-h-[24rem] bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center sm:min-h-[30rem]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.04),rgba(10,10,10,0.72))]" />
              <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-md">
                Autoplay Reel Area
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/45 p-5 backdrop-blur-xl">
                  <div className="mb-4 h-px w-full gold-line" />
                  <p className="text-sm uppercase tracking-[0.25em] text-[var(--accent)]">
                    Showreel
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--muted)]">
                    Replace this poster with a fast-loading Vimeo reel on desktop and a premium still with play state on mobile.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-sm uppercase tracking-[0.3em] text-[var(--muted)] sm:block">
          Scroll
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/10 py-5">
        <div className="marquee-track flex min-w-max gap-16 px-6 text-sm uppercase tracking-[0.28em] text-[var(--muted)]">
          {[...credibilityItems, ...credibilityItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </section>

      <Section
        eyebrow="The Problem"
        title="Most brands have a great product and a forgettable story."
        description="In a world where attention lasts 3 seconds, the brands that win are not the best. They are the most remembered. We exist to make sure that is you."
      >
        <Reveal>
          <div className="panel rounded-[2rem] p-7 md:p-12">
            <p className="max-w-4xl text-xl leading-9 text-[var(--muted)] md:text-2xl">
              We build films that do more than look good. They reposition
              perception, sharpen trust, and give your team an asset that works
              across every room where your brand needs to convince.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section eyebrow="Featured Work" title="Three films. Three business problems solved.">
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 120}>
              <article className="panel group overflow-hidden rounded-[2rem]">
                <div
                  className="aspect-[4/5] bg-cover bg-center transition duration-700 group-hover:scale-[1.04]"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(10,10,10,0), rgba(10,10,10,0.7)), url(${project.heroImage})`
                  }}
                />
                <div className="space-y-4 p-6 sm:p-7">
                  <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
                    {project.industry}
                  </p>
                  <div>
                    <h3 className="font-heading text-3xl">{project.brand}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--muted)]">
                      {project.category}
                    </p>
                  </div>
                  <p className="leading-7 text-[var(--muted)]">{project.result}</p>
                  <Link
                    href={`/work/${project.slug}`}
                    className="text-sm text-[var(--accent)]"
                  >
                    View Case Study →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <PrimaryLink href="/work">See All Work →</PrimaryLink>
        </div>
      </Section>

      <Section eyebrow="Why Us" title="Strategy first. Cinema second.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Strategy Before Script",
              body: "We spend more time understanding your brand than we spend on set. Because a beautiful film with the wrong message is an expensive mistake."
            },
            {
              title: "One Film. Multiple Uses.",
              body: "Every film is built to work across OTT ads, social media, pitch decks, and trade shows. Maximum value per rupee."
            },
            {
              title: "Brand Partners, Not Vendors",
              body: "We do not disappear after delivery. We help you understand how to deploy the film for maximum impact."
            }
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <div className="panel rounded-[2rem] p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent)] text-sm text-[var(--accent)]">
                  0{index + 1}
                </div>
                <h3 className="font-heading text-3xl">{item.title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Process Snapshot" title="A five-stage system built to remove guesswork.">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {processStages.map((stage, index) => (
            <Reveal key={stage.title} delay={index * 90}>
              <div className="panel rounded-[2rem] p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                  Step {index + 1}
                </p>
                <h3 className="mt-4 font-heading text-2xl">{stage.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {stage.points[0]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <SecondaryLink href="/process">See Full Process →</SecondaryLink>
        </div>
      </Section>

      <Section className="py-10">
        <Reveal>
          <div className="panel rounded-[2rem] px-6 py-12 text-center sm:px-8 sm:py-16">
            <p className="mx-auto max-w-4xl font-heading text-4xl leading-tight md:text-6xl">
              &quot;They didn&apos;t just make us a film. They made us look like the
              brand we always knew we were.&quot;
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
              Client Testimonial Placeholder
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="py-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 px-6 py-16 sm:px-8 sm:py-20">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative mx-auto max-w-4xl text-center">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">
                Showreel
              </p>
              <h2 className="mt-4 font-heading text-4xl leading-tight md:text-6xl">
                Two minutes that will change how you think about your brand.
              </h2>
              <div className="mt-8">
                <PrimaryLink href="/showreel">Watch Full Showreel</PrimaryLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="pt-10">
        <Reveal>
          <div className="panel flex flex-col items-start justify-between gap-8 rounded-[2.5rem] p-7 sm:p-10 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl">
                Ready to build something unforgettable?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                Tell us about your brand. We&apos;ll tell you what&apos;s possible.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <PrimaryLink href="/contact">Start a Project</PrimaryLink>
              <SecondaryLink href="/work">View Our Work</SecondaryLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
