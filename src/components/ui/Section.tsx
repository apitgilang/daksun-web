import { cn } from "@/lib/utils";
import { Ornament } from "@/components/brand/motifs";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  light,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow", light && "text-kencana")}>
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-4 font-display text-3xl leading-tight sm:text-4xl md:text-[2.75rem]",
          light ? "text-kanvas" : "text-ink",
        )}
      >
        {title}
      </h2>
      {align === "center" && <Ornament className="mt-5" />}
      {intro && (
        <p className={cn("mt-5 text-base leading-relaxed", light ? "text-kanvas/70" : "text-ink-soft")}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
