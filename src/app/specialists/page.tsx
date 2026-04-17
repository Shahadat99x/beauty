import { pageTitle, siteName } from "@/lib/seo";
import { SpecialistsPageClient } from "@/components/pages/specialists-page-client";

export const metadata = {
  title: pageTitle("Specialists"),
  description: `Meet the specialists behind ${siteName} and explore who works with facial, brow, lash, and event-prep care.`,
};

export default function SpecialistsPage() {
  return <SpecialistsPageClient />;
}
