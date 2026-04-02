import { specialists } from "@/data/specialists";
import { SpecialistCard } from "@/components/cards/specialist-card";
import { CtaBlock } from "@/components/sections/cta-block";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Specialists | Maison de Lueur",
  description: "Meet our resident experts in soft luxury beauty.",
};

export default function SpecialistsPage() {
  return (
    <>
      <section className="pb-12 pt-8 sm:pt-14 lg:pb-16 lg:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Our team</Badge>
            <h1 className="mt-8 font-serif text-[3.25rem] leading-[0.92] text-ink-strong sm:text-[4.6rem] lg:text-[5.5rem]">
              Studio specialists
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              Meet the artists shaping our signature rituals. Highly trained,
              consult-led, and dedicated to refined results.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specialists.map((specialist) => (
              <SpecialistCard key={specialist.slug} specialist={specialist} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock
        id="book"
        eyebrow="Consultation"
        title="Find your perfect match."
        description="Not sure who to book with? Contact our studio concierge to be paired with the best specialist for your needs."
      />
    </>
  );
}
