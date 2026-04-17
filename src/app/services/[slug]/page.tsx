import { services } from "@/data/services";
import { defaultLocale } from "@/data/site";
import { getLocalizedService } from "@/data/localized-services";
import { ServiceDetailPageClient } from "@/components/pages/service-detail-page-client";
import { pageTitle } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getLocalizedService(defaultLocale, slug);

  if (!service) {
    return { title: "Not Found" };
  }

  return {
    title: pageTitle(service.title),
    description: service.excerpt,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ServiceDetailPageClient slug={slug} />;
}
