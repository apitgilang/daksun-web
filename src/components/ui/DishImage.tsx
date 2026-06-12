import Image from "next/image";
import { cn } from "@/lib/utils";
import { getTone } from "@/lib/tones";

/**
 * Renders a real photo when `src` (a Sanity image URL) is provided; otherwise
 * an art-directed warm gradient placeholder with a woven texture and plated
 * emblem so the layout always looks intentional.
 */
export function DishImage({
  tone,
  caption,
  className,
  emblem = true,
  steam = false,
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: {
  tone?: string;
  caption?: string;
  className?: string;
  emblem?: boolean;
  steam?: boolean;
  src?: string | null;
  alt?: string;
  sizes?: string;
}) {
  const t = getTone(tone);

  if (src) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image src={src} alt={alt ?? caption ?? "Foto hidangan"} fill sizes={sizes} className="object-cover" />
        {caption && (
          <>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
            <span className="absolute bottom-3 left-4 right-4 font-display text-sm text-white drop-shadow">
              {caption}
            </span>
          </>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ backgroundImage: `linear-gradient(150deg, ${t.from}, ${t.to})` }}
      role="img"
      aria-label={caption ? `${caption} (foto placeholder)` : "Foto placeholder"}
    >
      <div className="anyaman absolute inset-0 opacity-40" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(60% 50% at 50% 38%, rgba(255,255,255,0.30), transparent 70%)" }}
      />
      {steam && (
        <div className="absolute left-1/2 top-[26%] -translate-x-1/2" aria-hidden>
          <span className="absolute h-10 w-1.5 rounded-full bg-white/40 blur-[2px] animate-steam" style={{ left: -10 }} />
          <span className="absolute h-12 w-1.5 rounded-full bg-white/40 blur-[2px] animate-steam [animation-delay:0.6s]" />
          <span className="absolute h-10 w-1.5 rounded-full bg-white/40 blur-[2px] animate-steam [animation-delay:1.2s]" style={{ left: 10 }} />
        </div>
      )}
      {emblem && (
        <svg
          viewBox="0 0 120 120"
          className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2"
          style={{ color: t.ring }}
          aria-hidden
        >
          <circle cx="60" cy="60" r="46" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
          <circle cx="60" cy="60" r="34" fill="rgba(255,255,255,0.10)" stroke="currentColor" strokeWidth="1" opacity="0.7" />
          <path d="M60 44 C 50 52, 50 66, 60 76 C 70 66, 70 52, 60 44 Z" fill="currentColor" opacity="0.85" />
          <path d="M60 48 L60 74" stroke={t.to} strokeWidth="1.2" opacity="0.5" />
        </svg>
      )}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent" />
      {caption && (
        <span className="absolute bottom-3 left-4 right-4 font-display text-sm text-white/95 drop-shadow">
          {caption}
        </span>
      )}
    </div>
  );
}
