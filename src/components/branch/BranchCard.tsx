import Link from "next/link";
import { Clock, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { DishImage } from "@/components/ui/DishImage";
import { MapsButton } from "@/components/ui/MapsButton";
import { cn } from "@/lib/utils";
import type { Branch } from "@/types/content";

export function BranchCard({ branch, className }: { branch: Branch; className?: string }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-kanvas-300/70 bg-white/75 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted",
        className,
      )}
    >
      <Link href={`/cabang/${branch.id}`} className="relative block">
        <DishImage
          tone={branch.tone}
          src={branch.image}
          alt={branch.name}
          emblem
          className="aspect-[16/10] transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink shadow-soft">
          {branch.city}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl text-ink">{branch.name}</h3>
          <Link
            href={`/cabang/${branch.id}`}
            aria-label={`Detail ${branch.name}`}
            className="text-ink-muted transition-colors hover:text-merah"
          >
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
        <ul className="mt-4 flex-1 space-y-2.5 text-sm text-ink-soft">
          <li className="flex gap-2.5">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-merah" />
            <span>{branch.address}</span>
          </li>
          <li className="flex items-center gap-2.5">
            <Clock className="h-4 w-4 shrink-0 text-merah" />
            <span>{branch.hours}</span>
          </li>
          <li className="flex items-center gap-2.5">
            <Phone className="h-4 w-4 shrink-0 text-merah" />
            <a href={`tel:${branch.phone.replace(/\s/g, "")}`} className="hover:text-merah">
              {branch.phone}
            </a>
          </li>
        </ul>
        <div className="mt-5">
          <MapsButton url={branch.mapsUrl} />
        </div>
      </div>
    </article>
  );
}
