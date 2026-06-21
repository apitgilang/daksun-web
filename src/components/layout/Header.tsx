"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, Instagram, Menu as MenuIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { BranchSelector } from "./BranchSelector";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { navLinks } from "@/content/site";
import type { SiteConfig } from "@/types/content";
import { cn } from "@/lib/utils";

const primaryNav = navLinks.filter((l) =>
  ["/menu", "/cabang", "/tentang", "/galeri", "/acara", "/kontak"].includes(l.href),
);

export function Header({ settings }: { settings: SiteConfig }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40">
      {/* Top info strip */}
      <div className="hidden bg-ink text-kanvas/80 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <span className="inline-flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-kencana" />
            Buka setiap hari · {settings.hours}
          </span>
          <span className="inline-flex items-center gap-4">
            <span className="text-kencana">Sampurasun — wilujeng sumping di Dadakan Sunda</span>
            <a
              href={settings.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:text-kencana"
            >
              <Instagram className="h-3.5 w-3.5" /> @dadakansunda
            </a>
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-kanvas-300/70 bg-kanvas/85 shadow-soft backdrop-blur-md"
            : "border-transparent bg-kanvas/40 backdrop-blur-sm",
        )}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 sm:h-20">
          <Logo priority className="h-10 w-auto sm:h-12" />

          <nav className="hidden items-center gap-7 lg:flex">
            {primaryNav.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative text-sm font-semibold transition-colors",
                    active ? "text-merah" : "text-ink hover:text-merah",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-merah transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <BranchSelector className="hidden sm:block" />
            <WhatsAppButton
              kind="reservation"
              label="Reservasi"
              size="sm"
              variant="primary"
              className="hidden md:inline-flex"
            />
            <button
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-ink/12 bg-white/70 text-ink lg:hidden"
              aria-label="Buka menu"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-ink/50 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-kanvas shadow-lifted lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-kanvas-300 px-5 py-4">
                <Logo className="h-10 w-auto" href={null} />
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ink/12 text-ink"
                  aria-label="Tutup menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-5 py-6">
                <ul className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center justify-between rounded-2xl px-4 py-3.5 font-display text-lg transition-colors",
                          pathname === link.href ? "bg-merah/10 text-merah" : "text-ink hover:bg-kanvas-200",
                        )}
                      >
                        {link.label}
                        <span className="text-kencana">→</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="space-y-3 border-t border-kanvas-300 p-5">
                <BranchSelector className="w-full" />
                <WhatsAppButton kind="reservation" label="Reservasi via WhatsApp" fullWidth variant="primary" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
