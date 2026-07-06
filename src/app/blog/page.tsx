import { blogPosts } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui";

export const metadata = createMetadata({
  title: "Blog | Brand Film Insights",
  description:
    "A blog-ready page for production insights, campaign thinking, and brand storytelling strategy.",
  path: "/blog",
  keywords: ["brand film blog", "ad film insights Chennai"]
});

export default function BlogPage() {
  return (
    <Section
      eyebrow="Journal"
      title="Notes on brand storytelling, perception, and production."
      description="This page is ready to connect to Sanity later. For now, it showcases the editorial structure and tone."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {blogPosts.map((post) => (
          <article key={post.slug} className="panel rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
              {post.date}
            </p>
            <h2 className="mt-4 font-heading text-4xl">{post.title}</h2>
            <p className="mt-4 leading-8 text-[var(--muted)]">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
