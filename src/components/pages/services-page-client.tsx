"use client";

import { ServiceCard } from "@/components/cards/service-card";
import { CtaBlock } from "@/components/sections/cta-block";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { useSiteLanguage } from "@/components/providers/site-language-provider";
import {
  getLocalizedServices,
  getServicesPageContent,
} from "@/data/localized-services";

export function ServicesPageClient() {
  const { locale } = useSiteLanguage();
  const services = getLocalizedServices(locale);
  const content = getServicesPageContent(locale);

  return (
    <>
      <PageIntro
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <section className="section-space pt-0">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock
        id="book"
        eyebrow={content.consultationEyebrow}
        title={content.consultationTitle}
        description={content.consultationDescription}
        primaryHref="/pricing"
        primaryLabel={content.consultationPrimaryLabel}
        secondaryHref="/contact"
        secondaryLabel={content.consultationSecondaryLabel}
      />
    </>
  );
}
