import Link from "next/link";
import { Instagram, Mail, Music2, Facebook, Clock } from "lucide-react";
import { LogoLockup } from "@/components/brand/Logo";
import { SaungRoof, Pesawahan, BatikField } from "@/components/brand/motifs";
import { navLinks } from "@/content/site";
import type { Branch, SiteConfig } from "@/types/content";

export function Footer({ settings, branches }: { settings: SiteConfig; branches: Branch[] }) {
  return (
    <footer className="relative mt-10 overflow-hidden bg-ink text-kanvas">
      <Pesawahan className="block w-full text-kanvas" />
      <BatikField color="#C8902A" opacity={0.05} />

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-4">
          <LogoLockup />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-kanvas/65">
            Masakan Sunda yang selalu dimasak dadakan — segar, hangat, dan penuh rasa. Sangu
            haneut, sambel ngageugeuh. Hatur nuhun sudah mampir.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[
              { href: settings.socials.instagram, icon: Instagram, label: "Instagram" },
              { href: settings.socials.tiktok, icon: Music2, label: "TikTok" },
              { href: settings.socials.facebook, icon: Facebook, label: "Facebook" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-kanvas/15 text-kanvas/80 transition-colors hover:border-kencana hover:bg-kencana hover:text-ink"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="md:col-span-3 md:col-start-6">
          <h3 className="font-display text-lg text-kencana">Jelajahi</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-kanvas/70 transition-colors hover:text-kanvas">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Branches */}
        <div className="md:col-span-4">
          <h3 className="font-display text-lg text-kencana">Cabang Kami</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {branches.map((b) => (
              <li key={b.id}>
                <Link href={`/cabang/${b.id}`} className="group block">
                  <span className="font-semibold text-kanvas transition-colors group-hover:text-kencana">
                    {b.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-kanvas/55">{b.address}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-2 text-sm text-kanvas/70">
            <a href={`mailto:${settings.email}`} className="inline-flex items-center gap-2 hover:text-kencana">
              <Mail className="h-4 w-4 text-kencana" /> {settings.email}
            </a>
            <p className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-kencana" /> Buka setiap hari · {settings.hours}
            </p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-kanvas/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-kanvas/50 sm:flex-row">
          <SaungRoof className="h-5 w-16 text-kencana/60" />
          <p>© {new Date().getFullYear()} Dadakan Sunda. Sadaya hak cipta dilindungi.</p>
          <p>
            Dibuat dengan <span className="text-merah-400">cinta</span> di Tatar Sunda
          </p>
        </div>
      </div>

      {/* spacer so the mobile CTA bar never covers footer content */}
      <div className="h-16 lg:hidden" />
    </footer>
  );
}
