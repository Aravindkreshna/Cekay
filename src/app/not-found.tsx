import { PrimaryLink, SecondaryLink, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section eyebrow="404" title="This page drifted out of frame.">
      <div className="panel rounded-[2rem] p-10">
        <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">
          The page you are looking for does not exist, or the route has changed.
          Let&apos;s get you back to the work that matters.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <PrimaryLink href="/">Go Home</PrimaryLink>
          <SecondaryLink href="/contact">Start a Project</SecondaryLink>
        </div>
      </div>
    </Section>
  );
}
