import { createMetadata } from "@/lib/metadata";
import { WorkFilter } from "@/components/work-filter";
import { Section } from "@/components/ui";

export const metadata = createMetadata({
  title: "Brand Films Chennai | The Work",
  description:
    "Portfolio of brand films, launch campaigns, product films, and founder stories designed around real business problems.",
  path: "/work",
  keywords: ["brand films Chennai", "portfolio production house Chennai"]
});

export default function WorkPage() {
  return (
    <Section
      eyebrow="Portfolio"
      title="The Work"
      description="Every film here started with a business problem."
    >
      <WorkFilter />
    </Section>
  );
}
