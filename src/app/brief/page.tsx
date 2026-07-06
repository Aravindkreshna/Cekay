import { BriefForm } from "@/components/brief-form";
import { createMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui";

export const metadata = createMetadata({
  title: "Client Discovery Form | Brief",
  description:
    "A premium 10-question client discovery form for brands planning a cinematic ad film or campaign.",
  path: "/brief",
  keywords: ["creative brief form production house", "ad film brief form"]
});

export default function BriefPage() {
  return (
    <Section
      eyebrow="Discovery Form"
      title="Tell Us About Your Brand"
      description="This takes around 8 minutes. The more detail you give us, the better the film."
    >
      <BriefForm />
    </Section>
  );
}
