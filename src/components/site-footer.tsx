import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Music2,
  Youtube,
} from "lucide-react";

import logoBadge from "@/assets/psicoanalizar-seal.png.asset.json";

export const SITE_URL = "https://www.psicoanalizar.com";
export const PHONE_DISPLAY = "+1 (787) 409-1516";
export const PHONE_TEL = "+17874091516";
export const EMAIL = "info@psicoanalizar.com";

export const WHATSAPP_URL =
  "https://wa.me/17874091516?text=" +
  encodeURIComponent("Hola, Dra. Dilán. Me gustaría agendar una cita.");

const SOCIALS = [
  {
    label: "Instagram",
    handle: "@dragretchelledilan",
    href: "https://www.instagram.com/dragretchelledilan/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    handle: "@dragretchelledilan",
    href: "https://www.facebook.com/dragretchelledilan/",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    handle: "Dra. Gretchelle Dilán",
    href: "https://www.linkedin.com/in/dragretchelledil%C3%A1n/",
    icon: Linkedin,
  },
  {
    label: "YouTube",
    handle: "@psicologagretchelledilan",
    href: "https://www.youtube.com/@psicologagretchelledilan",
    icon: Youtube,
  },
  {
    label: "TikTok",
    handle: "@dragretchelledilan",
    href: "https://www.tiktok.com/@dragretchelledilan",
    icon: Music2,
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoBadge.url}
              alt="Sello de Psicoanalizar · Dra. Gretchelle Dilán"
              className="h-12 w-12 rounded-full bg-background/90 p-0.5"
            />
            <p className="font-serif text-base tracking-[0.25em]">
              PSICOANALIZAR
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-background/70">
            Espacio de la Dra. Gretchelle Dilán, psicóloga y sexóloga, para
            acompañar a personas y parejas a comprender sus dinámicas
            relacionales y tomar decisiones conscientes.
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
              { to: "/videolibro" as const, label: "Videolibro" },
              { to: "/citas" as const, label: "Citas" },
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
            WhatsApp {PHONE_DISPLAY}
          </a>
          <ul className="mt-4 space-y-2 text-sm text-background/80">
            <li>
              <a href={`tel:${PHONE_TEL}`} className="hover:text-background">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 hover:text-background"
              >
                <Mail className="h-3.5 w-3.5" />
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={SITE_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-background"
              >
                www.psicoanalizar.com
              </a>
            </li>
          </ul>
          <p className="mt-3 text-sm text-background/70">
            Servicios de terapia exclusivamente en línea · Puerto Rico
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
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
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
          <p className="text-xs leading-relaxed text-background/60">
            Nota de confidencialidad: toda la información compartida en sesión
            es estrictamente confidencial y está amparada por los principios
            éticos de la práctica psicológica en Puerto Rico.
          </p>
          <p className="mt-3 text-xs text-background/50">
            © {new Date().getFullYear()} Psicoanalizar · Dra. Gretchelle Dilán
            · Área de servicio: Puerto Rico
          </p>
        </div>
      </div>
    </footer>
  );
}
