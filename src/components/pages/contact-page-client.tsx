"use client";

import { useSiteLanguage } from "@/components/providers/site-language-provider";
import {
  getContactPageContent,
  getContactStudioInfo,
} from "@/data/localized-business-pages";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { PageIntro } from "@/components/ui/page-intro";

export function ContactPageClient() {
  const { locale } = useSiteLanguage();
  const content = getContactPageContent(locale);
  const studioInfo = getContactStudioInfo(locale);

  const fieldClassName =
    "w-full rounded-[1.15rem] border border-border bg-white/85 px-4 py-3.5 text-sm text-ink shadow-[0_6px_18px_rgba(69,54,48,0.03)] transition-[border-color,box-shadow] duration-300 placeholder:text-muted focus:border-border-strong focus:outline-none focus:ring-2 focus:ring-accent-strong/25";

  return (
    <>
      <PageIntro
        eyebrow={content.introEyebrow}
        title={content.introTitle}
        description={content.introDescription}
      />

      <section className="section-space pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="surface-card rounded-[2.5rem] p-6 sm:p-10">
              <h2 className="font-serif text-3xl text-ink-strong sm:text-4xl">
                {content.formTitle}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
                {content.formDescription}
              </p>

              <form className="mt-10 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first_name"
                      className="text-xs font-semibold uppercase tracking-widest text-ink"
                    >
                      {content.labels.firstName}
                    </label>
                    <input
                      id="first_name"
                      type="text"
                      className={fieldClassName}
                      placeholder={content.placeholders.firstName}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last_name"
                      className="text-xs font-semibold uppercase tracking-widest text-ink"
                    >
                      {content.labels.lastName}
                    </label>
                    <input
                      id="last_name"
                      type="text"
                      className={fieldClassName}
                      placeholder={content.placeholders.lastName}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-widest text-ink"
                  >
                    {content.labels.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={fieldClassName}
                    placeholder={content.placeholders.email}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-xs font-semibold uppercase tracking-widest text-ink"
                  >
                    {content.labels.service}
                  </label>
                  <select id="service" className={fieldClassName} defaultValue={content.serviceOptions[0]}>
                    {content.serviceOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-widest text-ink"
                  >
                    {content.labels.message}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={fieldClassName}
                    placeholder={content.placeholders.message}
                  />
                </div>

                <div className="flex flex-col gap-4 pt-2">
                  <p className="max-w-md text-sm leading-7 text-muted">
                    {content.responseNote}
                  </p>
                  <Button type="button" size="lg" fullWidth>
                    {content.submitLabel}
                  </Button>
                </div>
              </form>
            </div>

            <div className="space-y-10 pl-0 lg:pl-4">
              <div className="surface-panel rounded-[2rem] p-6">
                <h3 className="font-serif text-2xl text-ink-strong">
                  {content.infoTitle}
                </h3>
                <div className="mt-6 flex flex-col gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                      {content.locationLabel}
                    </p>
                    <div className="mt-2 text-sm leading-6 text-ink">
                      {studioInfo.addressLines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                      {content.contactLabel}
                    </p>
                    <p className="mt-2 text-sm text-ink">{studioInfo.phone}</p>
                    <p className="text-sm text-ink">{studioInfo.email}</p>
                  </div>
                </div>
              </div>

              <div className="surface-panel rounded-[2rem] p-6">
                <h3 className="font-serif text-2xl text-ink-strong">
                  {content.hoursTitle}
                </h3>
                <div className="mt-6 flex flex-col gap-3">
                  {studioInfo.hours.map((hour) => (
                    <div
                      key={hour.day}
                      className="flex flex-col gap-1.5 border-b border-border/70 pb-3 text-sm last:border-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                    >
                      <span className="text-muted">{hour.day}</span>
                      <span className="font-medium text-ink sm:text-right">{hour.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-64 overflow-hidden rounded-3xl">
                <MediaFrame
                  aspect="landscape"
                  tone="mocha"
                  className="h-full w-full"
                  title={content.mediaTitle}
                  subtitle={content.mediaSubtitle}
                  label={studioInfo.name}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
