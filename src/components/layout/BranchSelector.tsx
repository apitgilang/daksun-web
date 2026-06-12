"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useBranch } from "@/context/BranchContext";
import { cn } from "@/lib/utils";

export function BranchSelector({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const { branch, branches, setBranchId } = useBranch();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex w-full cursor-pointer items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors duration-200",
          tone === "light"
            ? "border-ink/12 bg-white/70 text-ink hover:border-merah/40"
            : "border-kanvas/20 bg-kanvas/5 text-kanvas hover:border-kencana/50",
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <MapPin className={cn("h-4 w-4", tone === "light" ? "text-merah" : "text-kencana")} />
        <span className="max-w-[10rem] truncate">{branch.name}</span>
        <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 z-50 mt-2 w-64 overflow-hidden rounded-2xl border border-kanvas-300 bg-white p-1.5 shadow-lifted"
            role="listbox"
          >
            <li className="px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-brand text-ink-muted">
              Pilih Cabang
            </li>
            {branches.map((b) => (
              <li key={b.id}>
                <button
                  onClick={() => {
                    setBranchId(b.id);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full cursor-pointer items-start gap-2 rounded-xl px-3 py-2.5 text-left transition-colors",
                    b.id === branch.id ? "bg-merah/5" : "hover:bg-kanvas-100",
                  )}
                  role="option"
                  aria-selected={b.id === branch.id}
                >
                  <span className="flex-1">
                    <span className="block text-sm font-semibold text-ink">{b.name}</span>
                    <span className="block text-xs text-ink-muted">{b.hours}</span>
                  </span>
                  {b.id === branch.id && <Check className="mt-0.5 h-4 w-4 shrink-0 text-merah" />}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
