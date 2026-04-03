import { galleryItems } from "@/data/gallery";
import { CtaBlock } from "@/components/sections/cta-block";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { PageIntro } from "@/components/ui/page-intro";

export const metadata = {
  title: "Gallery | Maison de Lueur",
  description: "Browse the Maison de Lueur gallery for client results, studio atmosphere, and softly curated beauty imagery.",
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Portfolio"
        title="The visual diary."
        description="A curated selection of client results, treatment moods, and quiet studio details arranged to feel soft, polished, and editorial."
      >
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            "Results-led polish",
            "Calm studio atmosphere",
            "Editorial gallery rhythm",
          ].map((item) => (
            <div
              key={item}
              className="surface-panel rounded-[1.4rem] px-4 py-4 text-sm leading-7 text-ink"
            >
              {item}
            </div>
          ))}
        </div>
      </PageIntro>

      <section className="section-space pt-0">
        <Container>
          <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
            {galleryItems.map((item) => (
              <article
                key={item.slug}
                className="surface-card break-inside-avoid overflow-hidden rounded-[2rem] p-3 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-border-strong/70 hover:shadow-[var(--shadow-card-hover)]"
              >
                <div className="group relative w-full overflow-hidden rounded-[1.6rem]">
                  <MediaFrame
                    aspect={item.aspect}
                    tone={item.imageTone}
                    title={item.title}
                    subtitle={item.service}
                    label="Portfolio frame"
                    className="w-full"
                  />
                </div>
                <div className="px-3 pb-3 pt-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-muted">
                    {item.service}
                  </p>
                  <h2 className="mt-2 font-serif text-[1.95rem] leading-[0.95] text-ink-strong">
                    {item.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock
        id="book"
        eyebrow="Consultation"
        title="Ready for your own transformation?"
        description="Connect with our specialists for a tailored beauty plan that respects your individual needs."
        primaryHref="/contact"
        primaryLabel="Book your consultation"
        secondaryHref="/services"
        secondaryLabel="Explore treatments"
      />
    </>
  );
}
