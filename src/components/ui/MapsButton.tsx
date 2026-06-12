import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function MapsButton({
  url,
  label = "Petunjuk Arah",
  className,
}: {
  url: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/70 px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-200 hover:border-kencana hover:text-kencana-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kencana",
        className,
      )}
    >
      <MapPin className="h-4 w-4" />
      {label}
    </a>
  );
}
