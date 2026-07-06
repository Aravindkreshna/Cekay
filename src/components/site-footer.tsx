import Link from "next/link";
import { navigation, site } from "@/lib/site";

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://vimeo.com", label: "Vimeo" },
  { href: "https://youtube.com", label: "YouTube" }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div className="space-y-4">
          <div className="font-heading text-xl uppercase tracking-[0.32em]">
            {site.shortName}
          </div>
          <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
            Premium ad film production for brands that want to look remembered,
            not merely noticed.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            Navigation
          </p>
          <div className="grid grid-cols-2 gap-3 text-sm text-[var(--muted)]">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            Follow
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-[var(--muted)]">
        © 2025 {site.name} · Chennai, India · Privacy Policy | Terms
      </div>
    </footer>
  );
}
