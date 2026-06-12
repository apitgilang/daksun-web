"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Star, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { useBranch } from "@/context/BranchContext";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { DishImage } from "@/components/ui/DishImage";
import { SaungRoof, BatikField } from "@/components/brand/motifs";
import { formatRupiah } from "@/lib/format";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const { branch } = useBranch();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    <section className="relative overflow-hidden bg-ink text-kanvas">
      {/* background layers */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80% 60% at 80% 0%, rgba(200,144,42,0.22), transparent 55%), radial-gradient(70% 60% at 0% 100%, rgba(200,22,29,0.30), transparent 55%), linear-gradient(160deg, #2a1410, #241712 55%, #1a0f0c)",
          }}
        />
        <BatikField color="#E8B23C" opacity={0.07} />
        <SaungRoof className="absolute left-1/2 top-6 h-16 w-[min(680px,80%)] -translate-x-1/2 text-kencana/30" />
      </div>

      <div className="container-x relative grid items-center gap-12 pb-24 pt-16 sm:pt-20 lg:grid-cols-2 lg:gap-8 lg:pb-28 lg:pt-24">
        {/* Copy */}
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-kencana/30 bg-kencana/10 px-4 py-1.5 text-xs font-bold uppercase tracking-brand text-kencana"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-kencana" />
            Wilujeng Sumping
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-[2.7rem] font-bold leading-[1.05] sm:text-6xl lg:text-[4.2rem]"
          >
            Masakan Sunda,
            <br />
            dimasak <span className="text-gold-grad italic">dadakan</span>.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-md text-lg leading-relaxed text-kanvas/75">
            Setiap hidangan diolah saat dipesan — sangu haneut, sambel diulek dadakan, lalapan
            segar. Rasa rumah Tatar Sunda, kini sedekat WhatsApp.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <WhatsAppButton kind="reservation" label="Reservasi Sekarang" size="lg" variant="whatsapp" />
            <Link
              href="/menu"
              className="group inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-kanvas/25 px-8 py-4 text-base font-semibold text-kanvas transition-all duration-200 hover:border-kencana hover:text-kencana"
            >
              <UtensilsCrossed className="h-4 w-4" />
              Lihat Menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5 text-sm">
            <div className="flex items-center gap-1 text-kencana">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-kanvas/70">
              <span className="font-bold text-kanvas">4,9</span> rata-rata dari{" "}
              <span className="font-bold text-kanvas">250rb+</span> pelanggan bahagia
            </p>
          </motion.div>
        </motion.div>

        {/* Visual composition */}
        <div className="relative h-[420px] sm:h-[500px] lg:h-[560px]">
          {/* glow */}
          <div className="absolute right-4 top-10 h-72 w-72 rounded-full bg-kencana/20 blur-3xl" />

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="absolute right-0 top-4 w-[68%] max-w-[340px]"
          >
            <div className="rounded-[2rem] border border-kanvas/15 bg-kanvas/5 p-3 shadow-lifted backdrop-blur-sm">
              <DishImage tone="ayam" steam emblem caption="Bakakak Ayam Kampung" className="aspect-[4/5] rounded-[1.4rem]" />
              <div className="flex items-center justify-between px-1 py-3">
                <div>
                  <p className="font-display text-lg text-kanvas">Signature</p>
                  <p className="text-xs text-kanvas/60">Hidangan istimewa kami</p>
                </div>
                <span className="rounded-full bg-kencana px-3 py-1.5 text-sm font-bold text-ink">
                  {formatRupiah(98000)}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.45 }}
            className="absolute left-0 top-24 w-[52%] max-w-[230px] sm:top-40"
          >
            <div className={reduce ? "" : "animate-float"}>
              <div className="overflow-hidden rounded-3xl border border-kanvas/15 shadow-lifted">
                <DishImage tone="sayur" emblem caption="Karedok" className="aspect-square" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.6 }}
            className="absolute bottom-2 left-6 w-[46%] max-w-[200px]"
          >
            <div className="rounded-2xl border border-kanvas/15 bg-kanvas/10 p-3 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl">
                  <DishImage tone="minuman" emblem={false} className="h-full w-full" />
                </div>
                <div>
                  <p className="text-sm font-bold text-kanvas">Es Goyobod</p>
                  <p className="text-xs text-kanvas/60">Segar khas Bandung</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* branch ribbon */}
      <div className="relative border-t border-kanvas/10 bg-ink/60">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-4 text-center text-sm text-kanvas/70">
          <span className="text-kencana">Melayani di</span>
          <span className="font-semibold text-kanvas">{branch.name}</span>
          <span className="text-kanvas/30">·</span>
          <span>{branch.hours}</span>
          <span className="text-kanvas/30">·</span>
          <span>Ganti cabang kapan saja di pojok kanan atas</span>
        </div>
      </div>
    </section>
  );
}
