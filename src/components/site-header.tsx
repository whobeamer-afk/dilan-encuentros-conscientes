import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const NAV = [
  { to: "/sobre-mi" as const, label: "Sobre mí" },
  { to: "/terapias" as const, label: "Terapias" },
  { to: "/videolibro" as const, label: "Videolibro" },
  { to: "/citas" as const, label: "Citas" },
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
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 md:py-5">
        <Link
          to="/"
          className="flex min-w-0 items-baseline gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="truncate font-serif text-lg tracking-[0.35em] text-foreground sm:text-xl">
            PSICOANALIZAR
          </span>
          <span className="hidden text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground lg:inline">
            Dra. Gretchelle Dilán
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
            className="rounded-full bg-foreground px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-85"
          >
            Agenda tu cita
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
        <nav className="border-t border-border bg-background px-4 py-5 md:hidden">
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
                className="inline-block rounded-full bg-foreground px-6 py-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-background"
                onClick={() => setOpen(false)}
              >
                Agenda tu cita
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
