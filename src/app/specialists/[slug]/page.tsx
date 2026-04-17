import { specialists } from "@/data/specialists";
import { getDefaultLocaleSpecialist } from "@/data/localized-specialists";
import { SpecialistDetailPageClient } from "@/components/pages/specialist-detail-page-client";
import { pageTitle } from "@/lib/seo";

export function generateStaticParams() {
  return specialists.map((specialist) => ({ slug: specialist.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const specialist = getDefaultLocaleSpecialist(slug);

  if (!specialist) {
    return { title: "Not Found" };
  }

  return {
    title: pageTitle(specialist.name),
    description: specialist.role,
  };
}

export default async function SpecialistDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <SpecialistDetailPageClient slug={slug} />;
}
