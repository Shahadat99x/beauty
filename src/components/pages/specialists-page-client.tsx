"use client";

import { SpecialistCard } from "@/components/cards/specialist-card";
import { CtaBlock } from "@/components/sections/cta-block";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { useSiteLanguage } from "@/components/providers/site-language-provider";
import {
  getLocalizedSpecialists,
  getSpecialistsPageContent,
} from "@/data/localized-specialists";

export function SpecialistsPageClient() {
  const { locale } = useSiteLanguage();
  const specialists = getLocalizedSpecialists(locale);
  const content = getSpecialistsPageContent(locale);

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
            {specialists.map((specialist) => (
              <SpecialistCard key={specialist.slug} specialist={specialist} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock
        id="book"
        eyebrow={content.consultationEyebrow}
        title={content.consultationTitle}
        description={content.consultationDescription}
        primaryHref="/contact"
        primaryLabel={content.consultationPrimaryLabel}
        secondaryHref="/services"
        secondaryLabel={content.consultationSecondaryLabel}
      />
    </>
  );
}
