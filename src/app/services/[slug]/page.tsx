import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { specialists } from "@/data/specialists";
import { ServiceCard } from "@/components/cards/service-card";
import { SpecialistCard } from "@/components/cards/specialist-card";
import { CtaBlock } from "@/components/sections/cta-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { SectionHeading } from "@/components/ui/section-heading";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return { title: "Not Found" };
  return {
    title: `${service.title} | Maison de Lueur`,
    description: service.excerpt,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const relatedSpecialists = service.recommendedSpecialists
    ? specialists.filter((s) => service.recommendedSpecialists!.includes(s.slug))
    : [];

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="pb-12 pt-8 sm:pt-14 lg:pb-16 lg:pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <Badge>{service.category}</Badge>
              <h1 className="text-balance font-serif text-[3.25rem] leading-[0.95] text-ink-strong sm:text-[4.6rem]">
                {service.title}
              </h1>
              <p className="max-w-xl text-lg leading-8 text-muted sm:text-xl">
                {service.excerpt}
              </p>
              
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                 <Button href="/contact" size="lg">Request Booking</Button>
                 <div className="ml-0 mt-4 flex items-center gap-4 text-sm font-semibold text-ink sm:ml-4 sm:mt-0">
                    <span className="flex items-center gap-2">
                       <svg className="h-4 w-4 text-accent-strong" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                       {service.duration}
                    </span>
                    <span className="flex items-center gap-2">
                       <svg className="h-4 w-4 text-accent-strong" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                       </svg>
                       {service.priceFrom}
                    </span>
                 </div>
              </div>
            </div>

            <div className="relative h-full min-h-[420px] w-full overflow-hidden rounded-[2.5rem]">
              <MediaFrame
                aspect="portrait"
                title={service.title}
                subtitle="Signature Ritual"
                tone={service.imageTone}
                className="h-full w-full"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
           <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-8 lg:pr-10">
                 <h2 className="font-serif text-3xl text-ink-strong sm:text-4xl">Treatment Overview</h2>
                 <p className="mt-6 text-lg leading-8 text-muted">{service.overview || service.excerpt}</p>
                 
                 {service.benefits && service.benefits.length > 0 && (
                   <div className="mt-10">
                     <h3 className="font-serif text-2xl text-ink-strong">Key Benefits</h3>
                     <ul className="mt-6 flex flex-col gap-4">
                        {service.benefits.map((benefit, i) => (
                           <li key={i} className="flex items-start gap-4 rounded-2xl bg-shell-soft p-4 text-sm leading-6 text-ink">
                             <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-accent-strong" />
                             {benefit}
                           </li>
                        ))}
                     </ul>
                   </div>
                 )}
              </div>
              
              <div className="lg:col-span-4">
                 <div className="sticky top-32 rounded-[2.5rem] bg-shell-soft p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">The Promise</p>
                    <p className="mt-4 font-serif text-2xl leading-tight text-ink-strong">
                      {service.highlight}
                    </p>
                    <hr className="my-8 border-border/70" />
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">Recommended Frequency</p>
                    <p className="mt-2 text-sm text-ink text-muted">Every 4 to 6 weeks depending on goals.</p>
                 </div>
              </div>
           </div>
        </Container>
      </section>

      {service.process && service.process.length > 0 && (
         <section className="section-space bg-shell-soft">
            <Container>
               <SectionHeading 
                 eyebrow="The Protocol"
                 title="Step-by-step refinement."
                 description="Every phase of this treatment is purposefully designed to build upon the last, maximizing both efficacy and relaxation."
               />
               
               <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                 {service.process.map((step, idx) => (
                    <div key={idx} className="relative rounded-[2rem] bg-white p-6 shadow-sm">
                       <span className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink font-serif text-lg text-white">
                          {idx + 1}
                       </span>
                       <h4 className="mt-2 font-serif text-xl text-ink-strong">{step.title}</h4>
                       <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
                    </div>
                 ))}
               </div>
            </Container>
         </section>
      )}

      {relatedSpecialists.length > 0 && (
        <section className="section-space">
          <Container>
             <SectionHeading 
               eyebrow="Expert matching"
               title="Certified Specialists"
               description="These studio resident artists have completed advanced certification in this exact protocol."
             />
             <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {relatedSpecialists.map((specialist) => (
                 <SpecialistCard key={specialist.slug} specialist={specialist} />
               ))}
             </div>
          </Container>
        </section>
      )}
      
      {otherServices.length > 0 && (
        <section className="section-space pt-0">
           <Container>
             <h3 className="mb-8 font-serif text-2xl text-ink-strong">Explore More Services</h3>
             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {otherServices.map((s) => (
                  <ServiceCard key={s.slug} service={s} />
               ))}
             </div>
           </Container>
        </section>
      )}

      <CtaBlock
        id="book"
        eyebrow="Consultation"
        title="Begin your journey."
        description={`Secure your appointment for the ${service.title} and experience the difference of unhurried, custom-tailored care.`}
      />
    </>
  );
}
