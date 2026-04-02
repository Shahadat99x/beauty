import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { CtaBlock } from "@/components/sections/cta-block";

export const metadata = {
  title: "Journal | Maison de Lueur",
  description: "Editorial insights, studio news, and slow beauty philosophy.",
};

export default function JournalPage() {
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <>
      <section className="pb-12 pt-8 sm:pt-14 lg:pb-16 lg:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Editorial</Badge>
            <h1 className="mt-8 font-serif text-[3.25rem] leading-[0.92] text-ink-strong sm:text-[4.6rem] lg:text-[5.5rem]">
              The Journal.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              Insights, slow beauty philosophy, and guidance from our studio experts to elevate your home routine.
            </p>
          </div>
        </Container>
      </section>

      {featuredPost && (
        <section className="section-space pt-0">
          <Container>
            <Link href={`/journal/${featuredPost.slug}`} className="group block">
              <div className="grid gap-10 rounded-[3rem] bg-shell-soft p-6 lg:grid-cols-2 lg:p-10 lg:items-center transition-all duration-300 hover:shadow-md">
                <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-[2rem] lg:min-h-[400px]">
                  <MediaFrame
                    aspect="landscape"
                    tone={featuredPost.imageTone}
                    title={featuredPost.title}
                    subtitle="Featured Edit"
                    className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-6 lg:pl-6">
                  <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    <span>{featuredPost.category}</span>
                    <span className="h-1 w-1 rounded-full bg-border" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="font-serif text-3xl leading-tight text-ink-strong sm:text-4xl lg:text-5xl">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg leading-8 text-muted">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-ink">
                    Read article
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </Container>
        </section>
      )}

      {regularPosts.length > 0 && (
        <section className="section-space">
          <Container>
            <div className="grid gap-10 sm:grid-cols-2 lg:gap-14">
              {regularPosts.map((post) => (
                <Link key={post.slug} href={`/journal/${post.slug}`} className="group block space-y-6">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-shell-soft shadow-sm transition-shadow duration-300 group-hover:shadow-md">
                    <MediaFrame
                      aspect="landscape"
                      tone={post.imageTone}
                      title={post.title}
                      subtitle="Article"
                      className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                      <span>{post.category}</span>
                      <span className="h-1 w-1 rounded-full bg-border" />
                      <span>{post.publishedAt}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-ink-strong group-hover:text-ink">
                      {post.title}
                    </h3>
                    <p className="line-clamp-2 text-muted">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBlock
        id="newsletter"
        eyebrow="Stay Connected"
        title="Join the letters."
        description="Receive curated advice, priority booking access, and invitations to private studio events."
      />
    </>
  );
}
