import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Music2,
  Youtube,
} from "lucide-react";

import {
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_URL,
  WHATSAPP_URL,
} from "@/components/site-footer";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | Psicoanalizar · Dra. Gretchelle Dilán, Ph.D." },
      {
        name: "description",
        content:
          "Contacta a la Dra. Gretchelle Dilán: WhatsApp +1 (787) 409-1516, correo info@psicoanalizar.com, redes sociales y formulario. Servicios de terapia exclusivamente en línea, Puerto Rico.",
      },
      {
        property: "og:title",
        content: "Contacto | Psicoanalizar · Dra. Gretchelle Dilán, Ph.D.",
      },
      {
        property: "og:description",
        content:
          "WhatsApp, correo, teléfono y redes sociales. Servicios de terapia exclusivamente en línea para adultos en Puerto Rico.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contacto,
});

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

function Contacto() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-12 sm:px-6 md:pt-20">
        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">
          Contacto
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
          Hablemos
        </h1>
        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
          Servicios de terapia exclusivamente en línea. Área de servicio:
          Puerto Rico; las personas deben encontrarse físicamente en Puerto
          Rico durante sus sesiones.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl items-start gap-12 px-4 pb-16 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:pb-24">
        <div className="border border-border bg-card p-6 sm:p-10">
          {sent ? (
            <div className="py-10 text-center">
              <p className="font-serif text-2xl">Mensaje enviado</p>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Gracias por escribir. Te responderé lo antes posible a tu
                correo. Si prefieres coordinar más rápido, escríbeme por
                WhatsApp.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          ) : (
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                    Nombre
                  </span>
                  <input
                    type="text"
                    required
                    className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                  />
                </label>
                <label className="block">
                  <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                    Correo electrónico
                  </span>
                  <input
                    type="email"
                    required
                    className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                  Teléfono (opcional)
                </span>
                <input
                  type="tel"
                  className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                />
              </label>
              <label className="block">
                <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                  Mensaje
                </span>
                <textarea
                  required
                  rows={6}
                  placeholder="Cuéntame brevemente qué te gustaría trabajar…"
                  className="mt-2 w-full resize-none rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-sm bg-primary px-6 py-3.5 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
              >
                Enviar mensaje
              </button>
              <p className="text-xs text-muted-foreground">
                Demostración: en el sitio final este formulario enviará tu
                mensaje directamente a la consulta.
              </p>
            </form>
          )}
        </div>

        <div className="space-y-8">
          <div className="border border-border bg-card p-6">
            <h2 className="font-serif text-xl">Datos de contacto</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Teléfono: {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Página web: www.psicoanalizar.com
                </a>
              </li>
            </ul>
          </div>

          <div className="border border-border bg-card p-6">
            <h2 className="font-serif text-xl">Redes sociales</h2>
            <ul className="mt-4 space-y-3">
              {SOCIALS.map(({ label, href, handle, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="font-medium text-foreground">{label}</span>
                    <span>{handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-border bg-card p-6">
            <h2 className="font-serif text-xl">Modalidad del servicio</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Nuestro sistema de terapia psicológica es únicamente en línea,
              mediante telepsicología, con una plataforma segura bajo la ley
              HIPAA. Antes de reservar, lee la información completa en la
              página de Citas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
