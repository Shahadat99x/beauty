import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
  bodyClassName?: string;
  children?: ReactNode;
}

export function PageIntro({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  bodyClassName,
  children,
}: PageIntroProps) {
  const isCentered = align === "center";

  return (
    <section className={cn("page-intro-space", className)}>
      <Container>
        <div
          className={cn(
            "space-y-7",
            isCentered && "mx-auto max-w-4xl text-center",
          )}
        >
          <Badge>{eyebrow}</Badge>
          <div className={cn("space-y-5", isCentered && "mx-auto max-w-3xl")}>
            <h1 className="text-balance font-serif text-[3rem] leading-[0.92] text-ink-strong sm:text-[4.4rem] lg:text-[5.35rem]">
              {title}
            </h1>
            <p
              className={cn(
                "text-base leading-8 text-muted sm:text-lg sm:leading-9 lg:text-xl",
                isCentered && "mx-auto max-w-2xl",
                bodyClassName,
              )}
            >
              {description}
            </p>
          </div>
          {children}
        </div>
      </Container>
    </section>
  );
}
