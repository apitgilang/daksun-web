import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "wordmark",
  className,
  href = "/",
  priority,
}: {
  variant?: "wordmark" | "monogram";
  className?: string;
  href?: string | null;
  priority?: boolean;
}) {
  const img =
    variant === "monogram" ? (
      <Image
        src="/branding/monogram.png"
        alt="Dadakan Sunda"
        width={259}
        height={259}
        priority={priority}
        className={cn("h-auto w-auto", className)}
      />
    ) : (
      <Image
        src="/branding/wordmark.png"
        alt="Dadakan Sunda"
        width={272}
        height={110}
        priority={priority}
        className={cn("h-auto w-auto", className)}
      />
    );

  if (href === null) return img;
  return (
    <Link href={href} aria-label="Dadakan Sunda — Beranda" className="inline-flex shrink-0">
      {img}
    </Link>
  );
}

/** Monogram + stacked wordmark, for dark surfaces (footer) where the script lacks contrast. */
export function LogoLockup({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/branding/monogram.png"
        alt=""
        width={259}
        height={259}
        className="h-12 w-12 rounded-full ring-1 ring-kencana/40"
      />
      <span className="leading-tight">
        <span className="block font-display text-xl text-kanvas">Dadakan Sunda</span>
        <span className="block text-[0.62rem] font-semibold uppercase tracking-brand text-kencana">
          Masakan Sunda Dadakan
        </span>
      </span>
    </div>
  );
}
