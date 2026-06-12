"use client";

import { Phone } from "lucide-react";
import { useBranch } from "@/context/BranchContext";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function MobileCTABar() {
  const { branch } = useBranch();
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-kanvas-300 bg-kanvas/90 px-4 py-3 backdrop-blur-md lg:hidden">
      <div className="flex items-center gap-2.5">
        <a
          href={`tel:${branch.phone.replace(/\s/g, "")}`}
          className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-ink/12 bg-white text-ink"
          aria-label={`Telepon ${branch.name}`}
        >
          <Phone className="h-5 w-5" />
        </a>
        <WhatsAppButton kind="reservation" label="Pesan / Reservasi" fullWidth variant="whatsapp" />
      </div>
    </div>
  );
}
