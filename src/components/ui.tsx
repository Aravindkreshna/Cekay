import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function Section({
  eyebrow,
  title,
  description,
  children,
  className = ""
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`px-4 py-20 sm:px-6 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {eyebrow || title || description ? (
          <Reveal className="mb-12 max-w-3xl space-y-4">
            {eyebrow ? (
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--accent)]">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-heading text-4xl leading-tight md:text-6xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="text-lg leading-8 text-[var(--muted)]">
                {description}
              </p>
            ) : null}
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function PrimaryLink({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-5 py-3 text-center text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:opacity-90 sm:px-6"
    >
      {children}
    </Link>
  );
}

export function SecondaryLink({
  href,
  children
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-center text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] sm:px-6"
    >
      {children}
    </Link>
  );
}
