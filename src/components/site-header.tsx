"use client";

import Link from "next/link";
import { useEffect, useEffectEvent, useState } from "react";
import { navigation, site } from "@/lib/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = useEffectEvent(() => {
    setIsOpen(false);
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [closeMenu]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,7,7,0.78)] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="font-heading text-base uppercase tracking-[0.32em] sm:text-lg">
          {site.shortName}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[var(--foreground)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full border border-[var(--accent)] px-4 py-2 text-sm text-[var(--foreground)] transition hover:bg-[var(--accent)] hover:text-black"
          >
            Start a Project
          </Link>
        </div>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[var(--foreground)] md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-px w-5 bg-current transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`h-px w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-5 bg-current transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>
      <div
        className={`mx-4 overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/90 transition-all duration-500 md:hidden ${
          isOpen ? "mb-4 max-h-[32rem] p-4 opacity-100" : "max-h-0 border-transparent p-0 opacity-0"
        }`}
      >
        <nav className="grid gap-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.18em] text-[var(--muted)] transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-full bg-[var(--accent)] px-5 py-3 text-center text-sm font-medium text-black"
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
