import { pageTitle, siteName } from "@/lib/seo";
import { PricingPageClient } from "@/components/pages/pricing-page-client";

export const metadata = {
  title: pageTitle("Pricing & Memberships"),
  description: `Explore ${siteName} pricing, treatment options, and practical booking information before your visit.`,
};

export default function PricingPage() {
  return <PricingPageClient />;
}
