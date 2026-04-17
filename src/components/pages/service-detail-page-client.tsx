"use client";

import { notFound } from "next/navigation";
import { specialists } from "@/data/specialists";
import { useSiteLanguage } from "@/components/providers/site-language-provider";
import {
  getLocalizedService,
  getLocalizedServices,
  getServiceDetailContent,
} from "@/data/localized-services";
import { ServiceCard } from "@/components/cards/service-card";
import { SpecialistCard } from "@/components/cards/specialist-card";
import { CtaBlock } from "@/components/sections/cta-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";

interface ServiceDetailPageClientProps {
  slug: string;
}

export function ServiceDetailPageClient({
  slug,
}: ServiceDetailPageClientProps) {
  const { locale } = useSiteLanguage();
  const service = getLocalizedService(locale, slug);
  const detailContent = getServiceDetailContent(locale);

  if (!service) {
    notFound();
  }

  const relatedSpecialists = service.recommendedSpecialists
    ? specialists.filter((item) => service.recommendedSpecialists?.includes(item.slug))
    : [];

  const otherServices = getLocalizedServices(locale)
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <section className="pb-12 pt-8 sm:pt-14 lg:pb-16 lg:pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <Badge>{service.category}</Badge>
              <h1 className="page-title text-balance font-serif text-ink-strong">
                {service.title}
              </h1>
              <p className="max-w-xl text-lg leading-8 text-muted">
                {service.excerpt}
              </p>

              <div className="space-y-4">
                <Button href="/contact" size="lg">
                  {detailContent.bookButton}
                </Button>
                <div className="grid max-w-lg gap-3 sm:grid-cols-2">
                  <div className="surface-panel rounded-full px-4 py-3 text-sm font-semibold text-ink">
                    <span className="text-muted">{detailContent.durationLabel}</span>
                    <span className="ml-2 text-ink-strong">{service.duration}</span>
                  </div>
                  <div className="surface-panel rounded-full px-4 py-3 text-sm font-semibold text-ink">
                    <span className="text-muted">{detailContent.investmentLabel}</span>
                    <span className="ml-2 text-ink-strong">{service.priceFrom}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[360px] w-full overflow-hidden rounded-[2.5rem] sm:min-h-[420px]">
              <MediaFrame
                aspect="portrait"
                title={service.title}
                subtitle={detailContent.mediaSubtitle}
                label={detailContent.mediaLabel}
                tone={service.imageTone}
                image={service.image}
                className="h-full w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8 lg:pr-6">
              <h2 className="font-serif text-3xl text-ink-strong sm:text-4xl">
                {detailContent.overviewTitle}
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted">
                {service.overview || service.excerpt}
              </p>

              {service.benefits && service.benefits.length > 0 ? (
                <div className="mt-10">
                  <h3 className="font-serif text-2xl text-ink-strong">
                    {detailContent.benefitsTitle}
                  </h3>
                  <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="surface-card flex items-start gap-4 rounded-[1.6rem] p-4 text-sm leading-6 text-ink"
                      >
                        <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-accent-strong" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="lg:col-span-4">
              <div className="surface-panel rounded-[2.5rem] p-6 sm:p-8 xl:sticky xl:top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                  {detailContent.promiseLabel}
                </p>
                <p className="mt-4 font-serif text-2xl leading-tight text-ink-strong">
                  {service.highlight}
                </p>
                <hr className="my-8 border-border/70" />
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                  {detailContent.frequencyLabel}
                </p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {detailContent.frequencyText}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {service.process && service.process.length > 0 ? (
        <section className="section-space bg-shell-soft/70">
          <Container>
            <SectionHeading
              eyebrow={detailContent.protocolEyebrow}
              title={detailContent.protocolTitle}
              description={detailContent.protocolDescription}
            />

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <div
                  key={step.title}
                  className="surface-card group relative rounded-[2.2rem] p-8 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-border-strong/70 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <span className="absolute -left-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-ink font-serif text-xl text-white shadow-lg">
                    {index + 1}
                  </span>
                  <h4 className="mt-2 font-serif text-2xl text-ink-strong">
                    {step.title}
                  </h4>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {relatedSpecialists.length > 0 ? (
        <section className="section-space">
          <Container>
            <SectionHeading
              eyebrow={detailContent.expertsEyebrow}
              title={detailContent.expertsTitle}
              description={detailContent.expertsDescription}
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedSpecialists.map((specialist) => (
                <SpecialistCard key={specialist.slug} specialist={specialist} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      {otherServices.length > 0 ? (
        <section className="section-space pt-0">
          <Container>
            <SectionHeading
              eyebrow={detailContent.moreEyebrow}
              title={detailContent.moreTitle}
              description={detailContent.moreDescription}
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((item) => (
                <ServiceCard key={item.slug} service={item} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaBlock
        id="book"
        eyebrow={detailContent.ctaEyebrow}
        title={detailContent.ctaTitle(service.title)}
        description={detailContent.ctaDescription(service.title)}
        primaryHref="/contact"
        primaryLabel={detailContent.ctaPrimaryLabel}
        secondaryHref="/pricing"
        secondaryLabel={detailContent.ctaSecondaryLabel}
      />
    </>
  );
}
