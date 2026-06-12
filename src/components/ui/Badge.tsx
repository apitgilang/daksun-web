import { cn } from "@/lib/utils";
import type { MenuTag } from "@/types/content";

const tagStyles: Record<MenuTag, string> = {
  favorit: "bg-merah/10 text-merah",
  rekomendasi: "bg-kencana/15 text-kencana-700",
  pedas: "bg-merah-500/10 text-merah-600",
  halal: "bg-daun/10 text-daun",
  baru: "bg-ink/10 text-ink",
};

const tagLabels: Record<MenuTag, string> = {
  favorit: "Favorit",
  rekomendasi: "Rekomendasi",
  pedas: "Pedas",
  halal: "Halal",
  baru: "Baru",
};

export function TagBadge({ tag }: { tag: MenuTag }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-wide",
        tagStyles[tag],
      )}
    >
      {tagLabels[tag]}
    </span>
  );
}

export function Pill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-kencana/30 bg-kencana/10 px-3 py-1 text-xs font-semibold text-kencana-700",
        className,
      )}
    >
      {children}
    </span>
  );
}
