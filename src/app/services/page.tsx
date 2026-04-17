import { pageTitle, siteName } from "@/lib/seo";
import { ServicesPageClient } from "@/components/pages/services-page-client";

export const metadata = {
  title: pageTitle("Services"),
  description: `Explore the main facial, brow, and lash services at ${siteName} in Vilnius.`,
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
