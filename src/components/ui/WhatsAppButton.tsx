"use client";

import { useBranch } from "@/context/BranchContext";
import { cn } from "@/lib/utils";
import {
  waLink,
  orderMessage,
  reservationMessage,
  eventMessage,
  partnerMessage,
  genericMessage,
} from "@/lib/whatsapp";
import type { Branch, MenuItem } from "@/types/content";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" className={cn("h-4 w-4", className)} aria-hidden>
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.2-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.7 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

type Kind = "order" | "reservation" | "event" | "partner" | "generic";

function build(kind: Kind, branch: Branch, item?: MenuItem): string {
  switch (kind) {
    case "order":
      return item ? orderMessage(item, branch) : genericMessage(branch);
    case "reservation":
      return reservationMessage(branch);
    case "event":
      return eventMessage(branch);
    case "partner":
      return partnerMessage();
    default:
      return genericMessage(branch);
  }
}

const variants = {
  primary: "bg-merah text-kanvas shadow-glow hover:bg-merah-600 hover:-translate-y-0.5",
  whatsapp: "bg-[#1FA855] text-white hover:bg-[#178d46] hover:-translate-y-0.5 shadow-soft",
  outline: "border border-ink/15 bg-white/70 text-ink hover:border-[#1FA855] hover:text-[#178d46]",
  soft: "bg-merah/10 text-merah hover:bg-merah hover:text-kanvas",
} as const;

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
} as const;

export function WhatsAppButton({
  kind = "generic",
  item,
  label,
  variant = "whatsapp",
  size = "md",
  className,
  fullWidth,
  branchOverride,
}: {
  kind?: Kind;
  item?: MenuItem;
  label: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  fullWidth?: boolean;
  branchOverride?: Branch;
}) {
  const { branch: active } = useBranch();
  const branch = branchOverride ?? active;
  const href = waLink(branch.whatsapp, build(kind, branch, item));

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1FA855]",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className,
      )}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}
