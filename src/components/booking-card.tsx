import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

const SESSION_TYPES = [
  "Terapia de pareja",
  "Terapia individual",
  "Primera consulta",
];

const HOURS = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

export function BookingCard({ compact = false }: { compact?: boolean }) {
  const [sessionType, setSessionType] = useState(SESSION_TYPES[0]);
  const [date, setDate] = useState("");
  const [hour, setHour] = useState(HOURS[0]);
  const [minDate, setMinDate] = useState<string | undefined>(undefined);
  const [submitted, setSubmitted] = useState(false);

  // avoid SSR/client hydration mismatch with the current date
  useEffect(() => {
    const today = new Date();
    const iso = today.toISOString().slice(0, 10);
    setMinDate(iso);
    setDate(iso);
  }, []);

  const whatsappLink =
    "https://wa.me/17874091516?text=" +
    encodeURIComponent(
      `Hola, Dra. Dilán. Solicité una cita en línea:\n· Servicio: ${sessionType}\n· Fecha: ${date || "por confirmar"}\n· Hora: ${hour} (AST)\n¿Me confirman disponibilidad, por favor?`,
    );

  return (
    <div className="border border-border bg-card p-6 sm:p-8">
      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-primary">
        Reserva en línea
      </p>
      <h3 className="mt-2 font-serif text-2xl">Agenda tu cita</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Sesiones en línea desde la comodidad de tu hogar.
      </p>

      {submitted ? (
        <div className="mt-6 border border-border bg-secondary p-5">
          <p className="font-serif text-lg text-foreground">
            ¡Solicitud recibida!
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Solicitaste <strong>{sessionType}</strong> el{" "}
            <strong>{date || "—"}</strong> a las <strong>{hour}</strong> (AST).
            Confirma tu cita por WhatsApp para bloquear el espacio.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <MessageCircle className="h-4 w-4" />
            Confirmar por WhatsApp
          </a>
        </div>
      ) : (
        <form
          className="mt-6 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div>
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
              Tipo de sesión
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {SESSION_TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSessionType(t)}
                  className={`rounded-sm border px-4 py-2 text-sm transition-colors ${
                    sessionType === t
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-primary/60"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className={compact ? "space-y-5" : "grid gap-5 sm:grid-cols-2"}>
            <label className="block">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                Fecha
              </span>
              <input
                type="date"
                value={date}
                min={minDate}
                onChange={(e) => setDate(e.target.value)}
                className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary"
                required
              />
            </label>
            <label className="block">
              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                Hora (AST)
              </span>
              <select
                value={hour}
                onChange={(e) => setHour(e.target.value)}
                className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary"
              >
                {HOURS.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button
            type="submit"
            className="w-full rounded-sm bg-primary px-6 py-3 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Solicitar cita
          </button>
          <p className="text-center text-xs text-muted-foreground">
            Demostración: la reserva se confirma por WhatsApp.
          </p>
        </form>
      )}
    </div>
  );
}
