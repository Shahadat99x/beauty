import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SharedProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  fullWidth?: boolean;
}

type ButtonProps = SharedProps & ComponentPropsWithoutRef<"button">;
type ButtonLinkProps = SharedProps & { href: string };

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-[0.02em] transition-[transform,background-color,border-color,color,box-shadow] duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-strong/60 focus-visible:ring-offset-2 focus-visible:ring-offset-shell disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary:
    "border border-transparent bg-ink text-shell-soft shadow-[0_16px_38px_rgba(69,54,48,0.18)] hover:-translate-y-0.5 hover:bg-ink-strong hover:shadow-[0_20px_44px_rgba(69,54,48,0.22)]",
  secondary:
    "border border-border-strong/70 bg-white/72 text-ink shadow-[0_10px_26px_rgba(69,54,48,0.08)] hover:-translate-y-0.5 hover:border-border-strong hover:bg-white hover:shadow-[0_16px_36px_rgba(69,54,48,0.12)]",
  ghost:
    "border border-transparent bg-transparent text-ink hover:bg-white/70 hover:text-ink-strong",
};

const sizes = {
  md: "min-h-11 px-5 py-3",
  lg: "min-h-12 px-6 py-3.5",
};

function getClassName({
  className,
  fullWidth,
  size = "md",
  variant = "primary",
}: SharedProps) {
  return cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className,
  );
}

export function Button(props: ButtonProps | ButtonLinkProps) {
  if ("href" in props) {
    const { children, className, fullWidth, href, size, variant } = props;

    return (
      <Link
        href={href}
        className={getClassName({
          className,
          children,
          fullWidth,
          size,
          variant,
        })}
      >
        {children}
      </Link>
    );
  }

  const {
    children,
    className,
    fullWidth,
    size,
    type = "button",
    variant,
    ...rest
  } = props;

  return (
    <button
      type={type}
      className={getClassName({
        className,
        children,
        fullWidth,
        size,
        variant,
      })}
      {...rest}
    >
      {children}
    </button>
  );
}
