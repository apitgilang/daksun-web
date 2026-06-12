import { DishImage } from "@/components/ui/DishImage";
import { TagBadge } from "@/components/ui/Badge";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { formatRupiah } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { MenuItem } from "@/types/content";

export function MenuItemCard({ item, className }: { item: MenuItem; className?: string }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-kanvas-300/70 bg-white/75 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted",
        className,
      )}
    >
      <div className="relative overflow-hidden">
        <DishImage
          tone={item.tone}
          src={item.image}
          alt={item.name}
          steam={item.signature}
          className="aspect-[5/4] transition-transform duration-500 group-hover:scale-105"
        />
        {item.signature && (
          <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wide text-kencana backdrop-blur">
            Signature
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        {item.tags && item.tags.length > 0 && (
          <div className="mb-2.5 flex flex-wrap gap-1.5">
            {item.tags.map((t) => (
              <TagBadge key={t} tag={t} />
            ))}
          </div>
        )}
        <h3 className="font-display text-xl leading-snug text-ink">{item.name}</h3>
        {item.description && (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{item.description}</p>
        )}
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="font-display text-xl font-bold text-merah">{formatRupiah(item.price)}</span>
          <WhatsAppButton kind="order" item={item} label="Pesan" size="sm" variant="soft" />
        </div>
      </div>
    </article>
  );
}
