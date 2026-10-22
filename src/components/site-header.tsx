import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import logoBadge from "@/assets/dilan-logo-badge.png.asset.json";

const NAV = [
  { to: "/" as const, label: "Inicio" },
  { to: "/sobre-mi" as const, label: "Sobre mí" },
  { to: "/terapias" as const, label: "Terapias" },
  { to: "/citas" as const, label: "Citas" },
  { to: "/cursos" as const, label: "Cursos" },
  { to: "/contacto" as const, label: "Contacto" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const linkClass = (to: string) =>
    `border-b pb-1 transition-colors ${
      pathname === to
        ? "border-primary text-foreground"
        : "border-transparent text-muted-foreground hover:text-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:py-4">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src={logoBadge.url}
            alt="Insignia de Dra. Gretchelle Dilán"
            className="h-11 w-11 shrink-0 rounded-full"
          />
          <span className="min-w-0">
            <span className="block truncate font-serif text-lg leading-tight text-foreground sm:text-xl">
              Dra. Gretchelle Dilán, Ph.D.
            </span>
            <span className="block text-[0.6rem] uppercase tracking-[0.28em] text-muted-foreground">
              Psicóloga · Sexóloga
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-[0.7rem] uppercase tracking-[0.2em] ${linkClass(item.to)}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/citas"
            className="rounded-sm bg-primary px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Agendar cita
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`block font-serif text-xl ${linkClass(item.to)}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/citas"
                className="inline-block rounded-sm bg-primary px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground"
                onClick={() => setOpen(false)}
              >
                Agendar cita
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
