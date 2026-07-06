import { notFound } from "next/navigation";
import { featuredProjects } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { PrimaryLink, SecondaryLink, Section } from "@/components/ui";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const project = featuredProjects.find((entry) => entry.slug === slug);

  if (!project) {
    return createMetadata({
      title: "Case Study Not Found",
      description: "This case study could not be found.",
      path: `/work/${slug}`
    });
  }

  return createMetadata({
    title: `${project.brand} Case Study | ${project.category}`,
    description: project.result,
    path: `/work/${project.slug}`,
    keywords: [project.brand, project.category, "case study"]
  });
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = featuredProjects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  const projectIndex = featuredProjects.findIndex((entry) => entry.slug === slug);
  const previousProject =
    projectIndex > 0 ? featuredProjects[projectIndex - 1] : undefined;
  const nextProject =
    projectIndex < featuredProjects.length - 1
      ? featuredProjects[projectIndex + 1]
      : undefined;

  return (
    <>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              {project.brand} · {project.year}
            </p>
            <h1 className="font-heading text-5xl md:text-7xl">{project.name}</h1>
          </div>
          <div className="panel overflow-hidden rounded-[2rem] p-3">
            <div className="aspect-video overflow-hidden rounded-[1.5rem]">
              <iframe
                src={`https://player.vimeo.com/video/${project.vimeoId}?autoplay=0&title=0&byline=0&portrait=0`}
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                title={`${project.brand} film`}
              />
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="The Brief" title="The brand came to us with one challenge:">
        <p className="max-w-4xl text-2xl leading-10 text-[var(--muted)]">
          {project.brief}
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["The Brand", project.brand],
            ["The Audience", project.audience],
            ["The Goal", project.goal]
          ].map(([title, body]) => (
            <div key={title} className="panel rounded-[2rem] p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                {title}
              </p>
              <p className="mt-5 leading-8 text-[var(--muted)]">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Our Approach" title="Creative direction with business intent.">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            {project.approach.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-[var(--muted)]">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid gap-4">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="panel min-h-48 rounded-[1.5rem] bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(10,10,10,0.15), rgba(10,10,10,0.65)), url(${project.heroImage})`
                }}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="The Film" title="Full campaign centerpiece.">
        <div className="panel overflow-hidden rounded-[2rem] p-3">
          <div className="aspect-video overflow-hidden rounded-[1.5rem]">
            <iframe
              src={`https://player.vimeo.com/video/${project.vimeoId}?autoplay=0&title=0&byline=0&portrait=0`}
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              title={`${project.brand} full film`}
            />
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="panel rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Deliverables
            </p>
            <div className="mt-6 grid gap-4">
              {project.deliverables.map((item) => (
                <p key={item} className="text-lg text-[var(--muted)]">
                  · {item}
                </p>
              ))}
            </div>
          </div>
          <div className="panel rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              The Result
            </p>
            <div className="mt-6 grid gap-4">
              {project.outcomes.map((item) => (
                <p key={item} className="text-lg text-[var(--muted)]">
                  · {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {previousProject ? (
            <SecondaryLink href={`/work/${previousProject.slug}`}>← Previous</SecondaryLink>
          ) : (
            <div />
          )}
          <SecondaryLink href="/work">All Work</SecondaryLink>
          {nextProject ? (
            <SecondaryLink href={`/work/${nextProject.slug}`}>Next →</SecondaryLink>
          ) : (
            <div />
          )}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="panel flex flex-col items-start justify-between gap-8 rounded-[2.5rem] p-10 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              Start Your Project
            </p>
            <h2 className="mt-4 font-heading text-4xl md:text-5xl">
              Inspired? Let&apos;s build yours.
            </h2>
          </div>
          <PrimaryLink href="/contact">Start a Project →</PrimaryLink>
        </div>
      </Section>
    </>
  );
}
