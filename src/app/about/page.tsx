import { pageTitle, siteName } from "@/lib/seo";
import { AboutPageClient } from "@/components/pages/about-page-client";

export const metadata = {
  title: pageTitle("About"),
  description: `Learn more about ${siteName}, the studio atmosphere, and the kind of calm, professional beauty care clients can expect.`,
};

export default function AboutPage() {
  return <AboutPageClient />;
}
