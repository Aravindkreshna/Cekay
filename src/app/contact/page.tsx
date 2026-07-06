import { ContactForm } from "@/components/contact-form";
import { createMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = createMetadata({
  title: "Hire Ad Film Production Company | Contact",
  description:
    "Contact CEKAY Studio for brand films, launch campaigns, founder stories, and premium production support across India.",
  path: "/contact",
  keywords: ["hire ad film production company", "contact production house Chennai"]
});

export default function ContactPage() {
  return (
    <Section
      eyebrow="Contact"
      title="Let&apos;s Build Something Together"
      description="Tell us about your brand and what you are trying to achieve. We will come back to you within 24 hours."
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />
        <div className="space-y-6">
          <div className="panel rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              Direct Contact
            </p>
            <div className="mt-6 grid gap-4 text-lg text-[var(--muted)]">
              <a href={site.whatsappUrl}>WhatsApp: Click to chat</a>
              <a href={`mailto:${site.email}`}>Email: {site.email}</a>
              <a href="https://instagram.com">Instagram: @yourstudio</a>
              <p>Location: Chennai, Tamil Nadu, India</p>
              <p>Available for projects across India</p>
            </div>
          </div>
          <div className="panel rounded-[2rem] p-8">
            <h2 className="font-heading text-3xl">Integration Notes</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">
              The form endpoint is ready for Zapier. Add your webhook URLs in
              `.env.local` to forward submissions into email, WhatsApp, or your CRM.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
