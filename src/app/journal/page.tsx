import { pageTitle, siteName } from "@/lib/seo";
import { JournalPageClient } from "@/components/pages/journal-page-client";

export const metadata = {
  title: pageTitle("Journal"),
  description: `Read practical beauty advice, treatment guidance, and everyday care tips from ${siteName}.`,
};

export default function JournalPage() {
  return <JournalPageClient />;
}
