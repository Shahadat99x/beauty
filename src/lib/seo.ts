export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

export const siteName = "Maison de Lueur";

export const siteTitle = "Maison de Lueur | Soft Luxury Beauty Studio";

export const siteDescription =
  "A premium beauty studio website with signature treatments, refined specialists, an editorial journal, and a calm soft luxury presentation.";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
