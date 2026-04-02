import { philosophyPillars, studioInfo } from "@/data/site";
import { CtaBlock } from "@/components/sections/cta-block";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "About | Maison de Lueur",
  description: "Our philosophy and commitment to calm, polished beauty.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pb-12 pt-8 sm:pt-14 lg:pb-16 lg:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Studio Story</Badge>
            <h1 className="mt-8 font-serif text-[3.25rem] leading-[0.92] text-ink-strong sm:text-[4.6rem] lg:text-[5.5rem]">
              Intention behind the polish.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              {studioInfo.name} was created to offer an alternative to loud, 
              rushed beauty experiences. We believe treatments should feel restorative.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-[2.5rem]">
              <MediaFrame
                aspect="portrait"
                title="Salon Interior"
                subtitle=""
                tone="taupe"
                className="h-full w-full"
              />
            </div>
            
            <div className="space-y-8 pl-0 lg:pl-10">
              <SectionHeading
                eyebrow="Our approach"
                title="Soft luxury from arrival to finish."
                description="We prioritize subtle, camera-ready results that still look incredibly natural up close. Our treatments are built around your individual features, never a template."
              />

              <div className="grid gap-3">
                {philosophyPillars.map((pillar) => (
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
                eyebrow="The environment"
                title="Designed for calm."
                description="Every element of our space is chosen to slow down your day and elevate your routine. A quiet atmosphere, signature scents, and private treatment rooms ensure focus remains entirely on you."
              />
           </div>
           <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <MediaFrame
                aspect="landscape"
                title="Treatment Room"
                subtitle=""
                tone="blush"
                className="h-[300px]"
              />
              <MediaFrame
                aspect="landscape"
                title="Consultation Area"
                subtitle=""
                tone="champagne"
                className="h-[300px]"
              />
           </div>
        </Container>
      </section>

      <CtaBlock
        id="contact"
        eyebrow="Visit us"
        title="Experience the studio."
        description="We look forward to welcoming you."
      />
    </>
  );
}
