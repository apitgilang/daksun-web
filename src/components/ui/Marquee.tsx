import { cn } from "@/lib/utils";

/**
 * Seamless CSS marquee. Renders children twice and slides -50% — pauses on hover.
 */
export function Marquee({
  children,
  className,
  reverse,
}: {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={cn("group mask-fade-x overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max animate-marquee items-stretch group-hover:paused",
          reverse && "[animation-direction:reverse]",
        )}
      >
        <div className="flex items-stretch">{children}</div>
        <div className="flex items-stretch" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
