"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Animated counter that triggers when scrolled into view. Accepts values like
 * "12+", "250rb+", "4" — animates the leading number and keeps any suffix.
 */
export function Stat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const [display, setDisplay] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, target, reduce]);

  const shown = Number.isInteger(target) ? Math.round(display) : display.toFixed(0);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-4xl text-merah sm:text-5xl">
        {shown}
        <span className="text-kencana">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium text-ink-soft">{label}</div>
    </div>
  );
}
