import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/service-card";
import { CtaBlock } from "@/components/sections/cta-block";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Services | Maison de Lueur",
  description: "Explore our signature beauty rituals.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pb-12 pt-8 sm:pt-14 lg:pb-16 lg:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Menu of services</Badge>
            <h1 className="mt-8 font-serif text-[3.25rem] leading-[0.92] text-ink-strong sm:text-[4.6rem] lg:text-[5.5rem]">
              Signature rituals
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              Our service system is built for calm, modern beauty results. We
              focus on subtle refinement and considered treatments.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBlock
        id="book"
        eyebrow="Consultation"
        title="Ready to begin your journey?"
        description="Schedule a studio visit or a complimentary consultation to discuss your ideal treatment plan."
      />
    </>
  );
}
