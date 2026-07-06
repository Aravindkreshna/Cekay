import Link from "next/link";
import { HomeTwoLogoSlider } from "@/components/home-two-logo-slider";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { PrimaryLink, SecondaryLink, Section } from "@/components/ui";
import {
  credibilityItems,
  featuredProjects,
  processStages
} from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { navigation, site } from "@/lib/site";

export const metadata = createMetadata({
  title: "Home 02 | CEKAY Studio",
  description:
    "Alternative homepage concept for CEKAY Studio with a glassmorphism video hero and premium studio framing.",
  path: "/home-2",
  keywords: ["premium studio website", "glassmorphism video hero", "home page variation"]
});

export default function HomeTwoPage() {
  return (
    <>
      <section className="hero-viewport relative w-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.2),transparent_24%),linear-gradient(180deg,#141414_0%,#090909_48%,#050505_100%)]" />
        <div className="hero-viewport relative flex w-screen flex-col overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/76979871?background=1&autoplay=1&loop=1&muted=1&controls=0"
            className="absolute inset-0 h-full w-full scale-[1.42] md:scale-[1.18]"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Home 02 showreel background"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.26)_42%,rgba(0,0,0,0.62)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.08)_46%,rgba(0,0,0,0.42)_100%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[20%] bg-[linear-gradient(0deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.72)_32%,rgba(0,0,0,0.35)_62%,rgba(0,0,0,0)_100%)]" />

          <div className="hero-viewport relative z-10 flex flex-col px-4 pt-4 sm:px-6 sm:pt-5">
            <div className="mx-auto w-full max-w-[min(96vw,1600px)] rounded-[1.35rem] border border-white/12 bg-white/[0.08] px-4 py-4 backdrop-blur-2xl sm:px-6">
              <div className="flex items-center justify-between gap-4">
                <Link
                  href="/home-2"
                  className="font-heading text-base uppercase tracking-[0.3em] sm:text-lg"
                >
                  {site.shortName}
                </Link>
                <nav className="hidden items-center gap-5 text-xs uppercase tracking-[0.18em] text-white/72 lg:flex">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="hidden sm:block">
                  <Link
                    href="/contact"
                    className="rounded-full bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-black transition hover:bg-[var(--accent)]"
                  >
                    Start Project
                  </Link>
                </div>
              </div>
            </div>

            <div className="mx-auto grid w-full max-w-[min(96vw,1600px)] flex-1 content-center gap-6 px-1 py-6 pb-36 sm:py-8 sm:pb-40 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:px-6 lg:py-14 lg:pb-20">
              <Reveal className="max-w-5xl self-center lg:self-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full border border-white/12 bg-white/[0.08] px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-white/76 backdrop-blur-xl">
                    Home Variation 02
                  </div>
                  <h1 className="font-heading max-w-4xl text-4xl leading-[0.92] text-white sm:text-6xl lg:text-8xl">
                    We Don&apos;t Make Videos. We Build Brand Assets.
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.28em] text-white/78">
                    <span>Brand Films</span>
                    <span>+</span>
                    <span>Launch Campaigns</span>
                    <span>+</span>
                    <span>Founder Stories</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={180} className="self-center lg:self-center">
                <div className="max-w-md justify-self-end rounded-[2rem] border border-white/12 bg-white/[0.08] p-5 backdrop-blur-2xl sm:p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent)]">
                    Chennai, India
                  </p>
                  <p className="mt-5 text-base leading-8 text-white/84 sm:text-lg">
                    Ad film production studio for brands that are ready to be
                    remembered.
                  </p>
                  <div className="mt-8 flex flex-col gap-3">
                    <PrimaryLink href="/work">Watch Our Work</PrimaryLink>
                    <SecondaryLink href="/contact">Start a Project</SecondaryLink>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="absolute inset-x-4 bottom-8 z-20 sm:inset-x-6 sm:bottom-10 lg:bottom-12 lg:static lg:mx-auto lg:w-full lg:max-w-[min(96vw,1600px)]">
              <div className="rounded-[1.5rem] border border-white/12 bg-black/32 p-4 backdrop-blur-2xl lg:border-transparent lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
              <HomeTwoLogoSlider items={credibilityItems} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="The Problem"
        title="Most brands have a great product and a forgettable story."
        description="In a world where attention lasts 3 seconds, the brands that win are not the best. They are the most remembered. We exist to make sure that is you."
      >
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="panel rounded-[2rem] p-8 md:p-12">
              <p className="max-w-4xl text-xl leading-9 text-[var(--muted)] md:text-2xl">
                We build films that do more than look good. They reposition
                perception, sharpen trust, and give your team an asset that works
                across every room where your brand needs to convince.
              </p>
            </div>
            <div className="panel rounded-[2rem] p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                Why This Works
              </p>
              <p className="mt-5 text-sm leading-8 text-[var(--muted)]">
                Your website should feel like a premium first meeting. This
                version leans harder into cinematic framing, layered glass, and a
                more editorial hero composition.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section eyebrow="Featured Work" title="Three films. Three business problems solved.">
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 110}>
              <article className="panel group overflow-hidden rounded-[2rem]">
                <div
                  className="aspect-[4/5] bg-cover bg-center transition duration-700 group-hover:scale-[1.05]"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(10,10,10,0), rgba(10,10,10,0.78)), url(${project.heroImage})`
                  }}
                />
                <div className="space-y-4 p-6">
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
            <Reveal key={item.title} delay={index * 110}>
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

      <SiteFooter />
    </>
  );
}
