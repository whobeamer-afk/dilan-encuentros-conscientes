import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import officeImg from "@/assets/consultorio.jpg.asset.json";
import { BookingCard } from "@/components/booking-card";
import { WHATSAPP_URL } from "@/components/site-footer";

export const Route = createFileRoute("/citas")({
  head: () => ({
    meta: [
      { title: "Citas | Dra. Gretchelle Dilán, Ph.D." },
      {
        name: "description",
        content:
          "Agenda tu cita en línea con la Dra. Gretchelle Dilán: terapia de pareja e individual, elige fecha y hora, confirmación por WhatsApp.",
      },
      { property: "og:title", content: "Citas | Dra. Gretchelle Dilán, Ph.D." },
      {
        property: "og:description",
        content:
          "Agenda tu sesión en línea: terapia de pareja e individual. Elige fecha y hora, confirmación por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Citas,
});

function Citas() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-12 text-center sm:px-6 md:pt-20">
        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">
          Citas
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
          Agenda tu cita en línea
        </h1>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
          Elige el tipo de sesión, la fecha y la hora. Te espero en un espacio
          cálido, seguro y completamente confidencial.
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl items-start gap-10 px-4 pb-16 sm:px-6 md:grid-cols-[1fr_0.9fr] md:gap-16 md:pb-24">
        <BookingCard />
        <div>
          <img
            src={officeImg.url}
            alt="Consultorio cálido y acogedor"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full object-cover"
          />
          <div className="mt-8 border border-border bg-card p-6">
            <h2 className="font-serif text-xl">También por WhatsApp</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Si prefieres coordinar directamente, escríbeme y con gusto te
              oriento sobre horarios y el proceso.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp +1 (787) 409-1516
            </a>
            <p className="mt-5 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
              Sesiones en línea (AST) · Ponce, Puerto Rico · 17 años de
              consulta en línea. Toda la información que compartas en sesión
              es confidencial.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
