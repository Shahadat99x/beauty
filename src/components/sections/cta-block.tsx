import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

interface CtaBlockProps {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function CtaBlock({
  id,
  eyebrow,
  title,
  description,
  primaryHref = "/services",
  primaryLabel = "Explore signature services",
  secondaryHref = "/contact",
  secondaryLabel = "Start a consultation",
}: CtaBlockProps) {
  return (
    <section id={id} className="section-space">
      <Container>
        <div className="surface-panel overflow-hidden rounded-[2.5rem] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">
                {eyebrow}
              </p>
              <h2 className="text-balance font-serif text-4xl leading-none text-ink-strong sm:text-5xl lg:text-6xl">
                {title}
              </h2>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button href={primaryHref} size="lg">
                {primaryLabel}
              </Button>
              <Button href={secondaryHref} size="lg" variant="secondary">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
