"use client";

import { notFound } from "next/navigation";
import { useSiteLanguage } from "@/components/providers/site-language-provider";
import {
  getLocalizedSpecialist,
  getSpecialistDetailContent,
} from "@/data/localized-specialists";
import { getLocalizedServices } from "@/data/localized-services";
import { ServiceCard } from "@/components/cards/service-card";
import { CtaBlock } from "@/components/sections/cta-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";

interface SpecialistDetailPageClientProps {
  slug: string;
}

export function SpecialistDetailPageClient({
  slug,
}: SpecialistDetailPageClientProps) {
  const { locale } = useSiteLanguage();
  const specialist = getLocalizedSpecialist(locale, slug);
  const detailContent = getSpecialistDetailContent(locale);

  if (!specialist) {
    notFound();
  }

  const signatureTreatments = specialist.signatureServices
    ? getLocalizedServices(locale).filter((item) =>
        specialist.signatureServices?.includes(item.slug),
      )
    : [];

  return (
    <>
      <section className="pb-12 pt-8 sm:pt-14 lg:pb-16 lg:pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative h-full min-h-[380px] w-full overflow-hidden rounded-[2.5rem] sm:min-h-[460px]">
              <MediaFrame
                aspect="portrait"
                title={specialist.name}
                subtitle={detailContent.portraitSubtitle}
                label={detailContent.portraitLabel}
                tone={specialist.imageTone}
                image={specialist.image}
                className="h-full w-full"
              />
            </div>

            <div className="space-y-6 lg:pl-8">
              <Badge>{specialist.role}</Badge>
              <h1 className="page-title text-balance font-serif text-ink-strong">
                {specialist.name}
              </h1>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-strong">
                {specialist.experience}
              </p>

              <div className="surface-panel rounded-[1.7rem] p-6">
                <p className="font-serif text-xl italic text-ink">
                  &ldquo;{specialist.quote}&rdquo;
                </p>
              </div>

              {specialist.bio ? (
                <p className="mt-8 text-lg leading-relaxed text-muted lg:text-xl">
                  {specialist.bio}
                </p>
              ) : null}

              <div className="pt-8">
                <Button href="/contact" size="lg" className="w-full px-8 sm:w-auto sm:px-10">
                  {detailContent.requestButton(specialist.name.split(" ")[0] ?? specialist.name)}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {specialist.specialties && specialist.specialties.length > 0 ? (
        <section className="section-space pt-0">
          <Container>
            <div className="surface-panel rounded-[2rem] p-6 sm:p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                {detailContent.competenciesTitle}
              </h3>
              <div className="mt-5 flex flex-wrap gap-4">
                {specialist.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="rounded-full border border-border/70 bg-white/60 px-5 py-2.5 text-sm font-medium text-ink shadow-[0_4px_12px_rgba(69,54,48,0.03)]"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {signatureTreatments.length > 0 ? (
        <section className="section-space">
          <Container>
            <SectionHeading
              eyebrow={detailContent.expertiseEyebrow}
              title={detailContent.expertiseTitle}
              description={detailContent.expertiseDescription}
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {signatureTreatments.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {specialist.recentWorkImages && specialist.recentWorkImages.length > 0 ? (
        <section className="section-space bg-shell-soft/70">
          <Container>
            <SectionHeading
              eyebrow={detailContent.resultsEyebrow}
              title={detailContent.resultsTitle}
              description={detailContent.resultsDescription}
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {specialist.recentWorkImages.map((image, index) => (
                <MediaFrame
                  key={`${image.title}-${index}`}
                  aspect={image.aspect}
                  tone={image.tone}
                  title={image.title}
                  subtitle={detailContent.resultsSubtitle}
                  label={detailContent.resultsLabel}
                  image={image.image}
                  className="w-full"
                />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBlock
        id="book"
        eyebrow={detailContent.ctaEyebrow}
        title={detailContent.ctaTitle(specialist.name.split(" ")[0] ?? specialist.name)}
        description={detailContent.ctaDescription}
        primaryHref="/contact"
        primaryLabel={detailContent.ctaPrimaryLabel}
        secondaryHref="/specialists"
        secondaryLabel={detailContent.ctaSecondaryLabel}
      />
    </>
  );
}
