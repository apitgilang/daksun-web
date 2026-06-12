import { cn } from "@/lib/utils";

/**
 * Sundanese saung roof (julang ngapak) — the brand's signature silhouette.
 */
export function SaungRoof({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 64" fill="none" className={cn("h-auto w-full", className)} aria-hidden>
      <path
        d="M4 60 C 60 8, 80 8, 100 4 C 120 8, 140 8, 196 60"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M28 60 C 70 22, 86 22, 100 18 C 114 22, 130 22, 172 60"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.55"
        fill="none"
      />
      <circle cx="100" cy="6" r="4" fill="currentColor" />
    </svg>
  );
}

/**
 * Kawung-inspired batik field — a subtle repeating motif for section backgrounds.
 */
export function BatikField({
  className,
  color = "#C8902A",
  opacity = 0.06,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      aria-hidden
      style={{ opacity }}
    >
      <defs>
        <pattern id="kawung" width="56" height="56" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
          <g fill="none" stroke={color} strokeWidth="1.4">
            <ellipse cx="14" cy="14" rx="11" ry="7" />
            <ellipse cx="14" cy="14" rx="7" ry="11" />
            <ellipse cx="42" cy="42" rx="11" ry="7" />
            <ellipse cx="42" cy="42" rx="7" ry="11" />
            <ellipse cx="42" cy="14" rx="11" ry="7" />
            <ellipse cx="42" cy="14" rx="7" ry="11" />
            <ellipse cx="14" cy="42" rx="11" ry="7" />
            <ellipse cx="14" cy="42" rx="7" ry="11" />
          </g>
          <g fill={color}>
            <circle cx="28" cy="28" r="1.6" />
            <circle cx="0" cy="0" r="1.6" />
            <circle cx="56" cy="0" r="1.6" />
            <circle cx="0" cy="56" r="1.6" />
            <circle cx="56" cy="56" r="1.6" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#kawung)" />
    </svg>
  );
}

/**
 * Decorative section ornament — a gold rule with a diamond node.
 */
export function Ornament({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-3 text-kencana", className)} aria-hidden>
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-kencana/60" />
      <svg width="14" height="14" viewBox="0 0 14 14" className="shrink-0">
        <path d="M7 0 L14 7 L7 14 L0 7 Z" fill="currentColor" opacity="0.5" />
        <path d="M7 3 L11 7 L7 11 L3 7 Z" fill="currentColor" />
      </svg>
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-kencana/60" />
    </div>
  );
}

/**
 * Mountain/pesawahan horizon used as a footer/hero ground line.
 */
export function Pesawahan({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={cn("h-auto w-full", className)} aria-hidden>
      <path
        d="M0 80 C 240 30 360 30 600 70 C 840 110 1020 40 1440 70 L1440 120 L0 120 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M0 95 C 300 60 420 70 720 90 C 1020 110 1140 70 1440 95 L1440 120 L0 120 Z"
        fill="currentColor"
      />
    </svg>
  );
}
