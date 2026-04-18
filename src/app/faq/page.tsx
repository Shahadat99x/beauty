import { pageTitle, siteName } from "@/lib/seo";
import { FaqPageClient } from "@/components/pages/faq-page-client";

export const metadata = {
  title: pageTitle("FAQ"),
  description: `Read common questions about appointments, treatment preparation, payments, and the ${siteName} studio experience.`,
};

export default function FaqPage() {
  return <FaqPageClient />;
}
