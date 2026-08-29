import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 34 8"
      aria-hidden="true"
      className={`h-2 w-8 shrink-0 overflow-visible ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      vectorEffect="non-scaling-stroke"
    >
      <path d="M0 4h32M27 0l5 4-5 4" />
    </svg>
  );
}

type ArrowLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  underline?: boolean;
};

export function ArrowLink({
  children,
  className = "",
  underline = false,
  ...props
}: ArrowLinkProps) {
  return (
    <Link
      {...props}
      className={`group inline-flex items-center gap-4 label text-foreground ${
        underline ? "border-b border-foreground/60 pb-3" : ""
      } ${className}`}
    >
      <span>{children}</span>
      <Arrow className="transition-transform duration-300 group-hover:translate-x-1.5" />
    </Link>
  );
}
