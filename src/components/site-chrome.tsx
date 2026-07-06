"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomeTwo = pathname === "/home-2";

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {isHomeTwo ? null : <SiteHeader />}
      <main>{children}</main>
      {isHomeTwo ? null : <SiteFooter />}
    </div>
  );
}
