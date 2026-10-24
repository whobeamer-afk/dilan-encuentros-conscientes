import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import { WHATSAPP_URL } from "@/components/site-footer";

const SESSIONS = [
  {
    name: "Sesión individual",
    price: "$75",
    duration: "55 minutos",
  },
  {
    name: "Sesión de pareja",
    price: "$95",
    duration: "1 hora y 20 minutos",
  },
];

export function BookingCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className="border border-border bg-card p-6 sm:p-8">
      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-primary">
        Agenda tu cita
      </p>
      <h3 className="mt-2 font-serif text-2xl">Comienza tu proceso</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Servicios de terapia exclusivamente en línea, para adultos que se
        encuentran físicamente en Puerto Rico durante sus sesiones.
      </p>

      <ul className="mt-6 space-y-0 border-t border-border text-sm">
        {SESSIONS.map((s) => (
          <li
            key={s.name}
            className="flex items-baseline justify-between gap-4 border-b border-border py-3.5"
          >
            <div>
              <p className="font-serif text-lg text-foreground">{s.name}</p>
              <p className="text-xs text-muted-foreground">{s.duration}</p>
            </div>
            <p className="font-serif text-xl text-primary">{s.price}</p>
          </li>
        ))}
      </ul>

      <div
        className={
          compact ? "mt-6 space-y-3" : "mt-6 flex flex-wrap gap-3 sm:gap-4"
        }
      >
        <Link
          to="/citas"
          className="inline-flex justify-center rounded-sm bg-primary px-6 py-3 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Ver cómo funciona
        </Link>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-6 py-3 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:border-primary/60"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
        No aceptamos planes médicos. Si su plan lo permite, emitimos un recibo
        para solicitar reembolso directamente a su aseguradora.
      </p>
    </div>
  );
}
