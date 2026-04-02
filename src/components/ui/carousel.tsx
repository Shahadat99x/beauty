"use client";

import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Children, useCallback } from "react";
import { cn } from "@/lib/cn";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  slideClassName?: string;
  options?: EmblaOptionsType;
  showArrows?: boolean;
}

export function Carousel({
  children,
  className,
  slideClassName,
  options,
  showArrows = true,
}: CarouselProps) {
  const slideItems = Children.toArray(children);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    ...options,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className={cn("relative group", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-4">
          {slideItems.length > 1 ? (
            slideItems.map((child, index) => (
              <div key={index} className={cn("flex-none pl-4", slideClassName)}>
                {child}
              </div>
            ))
          ) : (
            <div className={cn("flex-none pl-4", slideClassName)}>
              {children}
            </div>
          )}
        </div>
      </div>

      {showArrows && slideItems.length > 1 && (
        <div className="mt-8 flex items-center justify-end gap-3 lg:absolute lg:-bottom-20 lg:right-0 lg:mt-0">
          <button
            onClick={scrollPrev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong/70 bg-white/72 text-ink shadow-sm transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_32px_rgba(69,54,48,0.12)] disabled:pointer-events-none disabled:opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={scrollNext}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong/70 bg-white/72 text-ink shadow-sm transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_14px_32px_rgba(69,54,48,0.12)] disabled:pointer-events-none disabled:opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
