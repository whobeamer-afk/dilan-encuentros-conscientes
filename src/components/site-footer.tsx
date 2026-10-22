import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Music2,
  Youtube,
} from "lucide-react";

import logoBadge from "@/assets/dilan-logo-badge.png.asset.json";

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/dragretchelledilan",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/dragretchelledilan",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dragretchelledilan",
    icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@dragretchelledilan",
    icon: Youtube,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@dragretchelledilan",
    icon: Music2,
  },
];

export const WHATSAPP_URL =
  "https://wa.me/17874091516?text=" +
  encodeURIComponent("Hola, Dra. Dilán. Me gustaría agendar una cita.");

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoBadge.url}
              alt="Insignia de Dra. Gretchelle Dilán"
              className="h-12 w-12 rounded-full"
            />
            <p className="font-serif text-lg">
              Dra. Gretchelle Dilán, Ph.D.
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-background/70">
            Psicóloga y sexóloga especializada en terapia de pareja. Consulta
            en línea desde Ponce, Puerto Rico, para todo el mundo.
          </p>
        </div>

        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-background/60">
            Explorar
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/" as const, label: "Inicio" },
              { to: "/sobre-mi" as const, label: "Sobre mí" },
              { to: "/terapias" as const, label: "Terapias" },
              { to: "/citas" as const, label: "Citas" },
              { to: "/cursos" as const, label: "Cursos" },
              { to: "/contacto" as const, label: "Contacto" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-background/80 transition-colors hover:text-background"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-background/60">
            Contacto
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp +1 (787) 409-1516
          </a>
          <p className="mt-3 text-sm text-background/70">
            Ponce, Puerto Rico · Consulta en línea
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full border border-background/25 p-2 text-background/80 transition-colors hover:border-background/60 hover:text-background"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-background/60">
            @dragretchelledilan · en todas las redes
          </p>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <p className="text-xs leading-relaxed text-background/60">
            Nota de confidencialidad: toda la información compartida en
            sesión es estrictamente confidencial y está amparada por los
            principios éticos de la práctica psicológica en Puerto Rico.
          </p>
          <p className="mt-3 text-xs text-background/50">
            © {new Date().getFullYear()} Dra. Gretchelle Dilán · Sitio
            demostrativo
          </p>
        </div>
      </div>
    </footer>
  );
}
