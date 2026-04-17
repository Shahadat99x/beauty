"use client";

import { CtaBlock } from "@/components/sections/cta-block";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { PageIntro } from "@/components/ui/page-intro";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteLanguage } from "@/components/providers/site-language-provider";
import { getAboutPageContent } from "@/data/localized-specialists";

export function AboutPageClient() {
  const { locale } = useSiteLanguage();
  const content = getAboutPageContent(locale);

  return (
    <>
      <PageIntro
        eyebrow={content.introEyebrow}
        title={content.introTitle}
        description={content.introDescription}
      />

      <section className="section-space pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative h-full min-h-[340px] w-full overflow-hidden rounded-[2.5rem] sm:min-h-[400px]">
              <MediaFrame
                aspect="portrait"
                title={content.imageTitle}
                subtitle={content.imageSubtitle}
                label={content.imageLabel}
                tone="taupe"
                className="h-full w-full"
              />
            </div>

            <div className="space-y-8 pl-0 lg:pl-10">
              <SectionHeading
                eyebrow={content.approachEyebrow}
                title={content.approachTitle}
                description={content.approachDescription}
              />

              <div className="grid gap-3">
                {content.pillars.map((pillar) => (
                  <div
                    key={pillar}
                    className="surface-card flex items-start gap-3 rounded-[1.5rem] px-5 py-4"
                  >
                    <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-accent-strong" />
                    <p className="text-sm leading-7 text-ink">{pillar}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-shell-soft">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading
              eyebrow={content.environmentEyebrow}
              title={content.environmentTitle}
              description={content.environmentDescription}
              align="center"
            />
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            <MediaFrame
              aspect="landscape"
              title={content.roomTitle}
              subtitle={content.roomSubtitle}
              label={content.imageLabel}
              tone="blush"
              className="min-h-[260px] sm:h-[300px]"
            />
            <MediaFrame
              aspect="landscape"
              title={content.consultationTitle}
              subtitle={content.consultationSubtitle}
              label={content.imageLabel}
              tone="champagne"
              className="min-h-[260px] sm:h-[300px]"
            />
          </div>
        </Container>
      </section>

      <CtaBlock
        id="contact"
        eyebrow={content.ctaEyebrow}
        title={content.ctaTitle}
        description={content.ctaDescription}
        primaryHref="/contact"
        primaryLabel={content.ctaPrimaryLabel}
        secondaryHref="/services"
        secondaryLabel={content.ctaSecondaryLabel}
      />
    </>
  );
}
