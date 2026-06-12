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
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-4 w-4", className)} aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.82c2.16 0 4.18.84 5.71 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.09 8.09a8.1 8.1 0 0 1-4.12-1.13l-.3-.18-3.06.8.82-2.99-.19-.31a8.03 8.03 0 0 1-1.24-4.28c0-4.46 3.63-8.08 8.09-8.08Zm-2.27 3.5c-.17 0-.45.06-.69.32-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.7c.13.17 1.82 2.78 4.42 3.9.62.27 1.1.43 1.47.55.62.2 1.18.17 1.62.1.5-.07 1.52-.62 1.74-1.22.21-.6.21-1.11.15-1.22-.06-.11-.24-.17-.5-.3-.26-.13-1.52-.75-1.76-.84-.24-.09-.41-.13-.58.13-.17.26-.67.84-.82 1.01-.15.17-.3.2-.56.07-.26-.13-1.09-.4-2.08-1.28-.77-.69-1.29-1.53-1.44-1.79-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.46.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.57-1.4-.79-1.92-.2-.49-.4-.42-.56-.43-.14-.01-.3-.01-.46-.01Z" />
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
