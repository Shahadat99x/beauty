import { studioInfo } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { MediaFrame } from "@/components/ui/media-frame";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact | Maison de Lueur",
  description: "Get in touch or book an appointment at our studio.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pb-12 pt-8 sm:pt-14 lg:pb-16 lg:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Studio Connect</Badge>
            <h1 className="mt-8 font-serif text-[3.25rem] leading-[0.92] text-ink-strong sm:text-[4.6rem] lg:text-[5.5rem]">
              Let's craft your beauty plan.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              We operate exclusively by appointment to ensure every client 
              experiences complete focus and calm throughout their visit.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-space pt-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="surface-card rounded-[2.5rem] p-8 sm:p-10">
              <h2 className="font-serif text-3xl text-ink-strong sm:text-4xl">Booking Request</h2>
              <p className="mt-3 text-sm leading-6 text-muted">
                Our reservation system requires a quick confirmation step to ensure the 
                ideal timeline and specialist fit for you. Phase 1 provides this form as a polished UI shell.
              </p>

              <form className="mt-10 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                   <div className="space-y-2">
                      <label htmlFor="first_name" className="text-xs font-semibold uppercase tracking-widest text-ink">First Name</label>
                      <input id="first_name" type="text" className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink" placeholder="Jane" />
                   </div>
                   <div className="space-y-2">
                      <label htmlFor="last_name" className="text-xs font-semibold uppercase tracking-widest text-ink">Last Name</label>
                      <input id="last_name" type="text" className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink" placeholder="Doe" />
                   </div>
                </div>

                <div className="space-y-2">
                   <label htmlFor="email" className="text-xs font-semibold uppercase tracking-widest text-ink">Email Address</label>
                   <input id="email" type="email" className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink" placeholder="hello@example.com" />
                </div>

                <div className="space-y-2">
                   <label htmlFor="service" className="text-xs font-semibold uppercase tracking-widest text-ink">Interested In</label>
                   <select id="service" className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink">
                     <option>Skin Rituals</option>
                     <option>Brow & Lash Sculpting</option>
                     <option>Bridal Prep Plan</option>
                     <option>Not sure yet</option>
                   </select>
                </div>

                <div className="space-y-2">
                   <label htmlFor="message" className="text-xs font-semibold uppercase tracking-widest text-ink">Any Specific Goals?</label>
                   <textarea id="message" rows={4} className="w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm focus:border-ink focus:outline-none focus:ring-1 focus:ring-ink" placeholder="Tell us what you're hoping to achieve..."></textarea>
                </div>

                <div className="pt-2">
                  <Button type="button" size="lg" fullWidth>Request Appointment</Button>
                </div>
              </form>
            </div>

            <div className="space-y-10 pl-0 lg:pl-4">
               <div>
                 <h3 className="font-serif text-2xl text-ink-strong">Studio Information</h3>
                 <div className="mt-6 flex flex-col gap-5">
                   <div>
                     <p className="text-xs font-semibold uppercase tracking-widest text-muted">Location</p>
                     <div className="mt-2 text-sm leading-6 text-ink">
                        {studioInfo.addressLines.map(line => (
                           <p key={line}>{line}</p>
                        ))}
                     </div>
                   </div>
                   <div>
                     <p className="text-xs font-semibold uppercase tracking-widest text-muted">Contact</p>
                     <p className="mt-2 text-sm text-ink">{studioInfo.phone}</p>
                     <p className="text-sm text-ink">{studioInfo.email}</p>
                   </div>
                 </div>
               </div>

               <div>
                 <h3 className="font-serif text-2xl text-ink-strong">Business Hours</h3>
                 <div className="mt-6 flex flex-col gap-3">
                   {studioInfo.hours.map(hour => (
                     <div key={hour.day} className="flex justify-between border-b border-border/70 pb-3 text-sm last:border-0 last:pb-0">
                        <span className="text-muted">{hour.day}</span>
                        <span className="font-medium text-ink">{hour.value}</span>
                     </div>
                   ))}
                 </div>
               </div>

               <div className="relative h-64 overflow-hidden rounded-3xl">
                 <MediaFrame aspect="landscape" tone="mocha" className="h-full w-full" title="Studio Entrance" subtitle="" />
               </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
