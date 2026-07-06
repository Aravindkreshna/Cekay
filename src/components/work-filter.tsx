"use client";

import { useMemo, useState } from "react";
import type { Project, WorkCategory } from "@/lib/content";
import { featuredProjects } from "@/lib/content";
import Link from "next/link";

const filters: Array<"All" | WorkCategory> = [
  "All",
  "Brand Films",
  "Launch Campaigns",
  "Product Films",
  "Founder Stories",
  "Corporate"
];

export function WorkFilter({ projects = featuredProjects }: { projects?: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<"All" | WorkCategory>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              activeFilter === filter
                ? "border-[var(--accent)] bg-[var(--accent)] text-black"
                : "border-white/15 text-[var(--muted)] hover:border-white/30 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <article key={project.slug} className="panel overflow-hidden rounded-[2rem]">
            <div
              className="min-h-[18rem] bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(10,10,10,0.1), rgba(10,10,10,0.65)), url(${project.heroImage})`
              }}
            />
            <div className="space-y-4 p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
                  {project.category}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {project.industry}
                </p>
              </div>
              <div>
                <h3 className="font-heading text-3xl">{project.brand}</h3>
                <p className="mt-2 text-[var(--muted)]">{project.brief}</p>
              </div>
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex text-sm text-[var(--accent)] transition hover:text-white"
              >
                View Project →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
