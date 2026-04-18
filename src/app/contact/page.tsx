import { pageTitle, siteName } from "@/lib/seo";
import { ContactPageClient } from "@/components/pages/contact-page-client";

export const metadata = {
  title: pageTitle("Contact"),
  description: `Get in touch with ${siteName} to ask a question, plan your visit, or request the most suitable treatment.`,
};

export default function ContactPage() {
  return <ContactPageClient />;
}
