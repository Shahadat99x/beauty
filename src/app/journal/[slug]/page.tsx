import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { CtaBlock } from "@/components/sections/cta-block";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | Maison de Lueur Journal`,
    description: post.excerpt,
  };
}

export default function JournalDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="pb-12 pt-8 sm:pt-14 lg:pb-16 lg:pt-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Badge>{post.category}</Badge>
            <h1 className="mt-8 text-balance font-serif text-[2.75rem] leading-[1] text-ink-strong sm:text-[4rem] lg:text-[4.5rem]">
              {post.title}
            </h1>
            <div className="mt-8 flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              <span>{post.publishedAt}</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <div className="mx-auto mt-14 max-w-5xl">
             <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2.5rem]">
               <MediaFrame
                 aspect="landscape"
                 tone={post.imageTone}
                 title={post.title}
                 subtitle="Editorial"
                 className="h-full w-full"
               />
             </div>
          </div>
          
          <div className="mx-auto mt-16 max-w-3xl">
             {post.contentBlocks ? (
                <div className="prose prose-lg prose-neutral mx-auto sm:prose-xl prose-headings:font-serif prose-headings:text-ink-strong prose-p:text-muted prose-p:leading-relaxed prose-a:text-ink prose-a:underline-offset-4 hover:prose-a:text-ink-strong prose-blockquote:border-l-accent-strong prose-blockquote:font-serif prose-blockquote:text-xl prose-blockquote:italic prose-blockquote:text-ink prose-li:text-muted prose-li:marker:text-accent-strong">
                   {post.contentBlocks.map((block, idx) => {
                      switch (block.type) {
                         case "paragraph":
                            return <p key={idx}>{block.value}</p>;
                         case "quote":
                            return <blockquote key={idx} className="my-10 pl-6 border-l-2 border-border/80"><p>"{block.value}"</p></blockquote>;
                         case "h2":
                            return <h2 key={idx} className="mt-12 mb-6 font-serif text-3xl text-ink-strong">{block.value}</h2>;
                         case "h3":
                            return <h3 key={idx} className="mt-10 mb-4 font-serif text-2xl text-ink-strong">{block.value}</h3>;
                         case "ul":
                            return (
                               <ul key={idx} className="my-8 flex flex-col gap-3 space-y-2 list-none pl-0">
                                  {block.items?.map((item, i) => (
                                     <li key={i} className="flex items-start gap-4">
                                        <span className="mt-2.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong" />
                                        <span>{item}</span>
                                     </li>
                                  ))}
                               </ul>
                            );
                         default:
                            return null;
                      }
                   })}
                </div>
             ) : (
                <div className="text-lg leading-relaxed text-muted sm:text-xl">
                   <p>{post.excerpt}</p>
                   <p className="mt-6">Full article content is currently being written by our editorial team.</p>
                </div>
             )}
          </div>
        </Container>
      </article>

      <CtaBlock
        id="book"
        eyebrow="Experience"
        title="Put philosophy into practice."
        description="Book a consultation to start implementing these principles into your own routine."
      />
    </>
  );
}
