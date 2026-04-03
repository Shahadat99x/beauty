import type { Metadata } from "next";
import { Homepage } from "@/components/sections/homepage";
import { siteDescription, siteTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
};

export default function Home() {
  return <Homepage />;
}
