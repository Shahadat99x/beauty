"use client";

import { useSiteLanguage } from "@/components/providers/site-language-provider";
import { getFaqItems, getFaqPageContent } from "@/data/localized-business-pages";
import { CtaBlock } from "@/components/sections/cta-block";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";

export function FaqPageClient() {
  const { locale } = useSiteLanguage();
  const content = getFaqPageContent(locale);
  const faqItems = getFaqItems(locale);
  const categories = Array.from(new Set(faqItems.map((item) => item.category ?? "")));

  return (
    <>
      <PageIntro
        eyebrow={content.introEyebrow}
        title={content.introTitle}
        description={content.introDescription}
      />

      <section className="section-space pt-0">
        <Container>
          <div className="mx-auto max-w-4xl space-y-16">
            {categories.map((category) => (
              <div key={category} className="space-y-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <h2 className="font-serif text-3xl text-ink-strong">
                    {content.categoryTitles[category] ?? category}
                  </h2>
                  <div className="h-px flex-1 bg-border/50" />
                </div>
                <div className="grid gap-6">
                  {faqItems
                    .filter((item) => item.category === category)
                    .map((item) => (
                      <div
                        key={item.question}
                        className="surface-card rounded-3xl p-6 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-border-strong/70 hover:shadow-[var(--shadow-card-hover)] sm:p-8"
                      >
                        <h3 className="text-lg font-semibold text-ink-strong">
                          {item.question}
                        </h3>
                        <p className="mt-4 leading-8 text-muted">{item.answer}</p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-center text-center">
            <div className="max-w-xl">
              <h3 className="font-serif text-2xl text-ink-strong">{content.stillTitle}</h3>
              <p className="mt-4 text-muted">{content.stillDescription}</p>
              <div className="mt-8">
                <Button href="/contact" variant="secondary" size="lg">
                  {content.stillButtonLabel}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBlock
        id="book"
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
