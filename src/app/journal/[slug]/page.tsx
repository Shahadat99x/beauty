import { blogPosts } from "@/data/blog-posts";
import { getDefaultLocaleBlogPost } from "@/data/localized-journal";
import { JournalDetailPageClient } from "@/components/pages/journal-detail-page-client";
import { pageTitle } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getDefaultLocaleBlogPost(slug);

  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: pageTitle(post.title),
    description: post.excerpt,
  };
}

export default async function JournalDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <JournalDetailPageClient slug={slug} />;
}
