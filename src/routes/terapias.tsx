import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import glassesImg from "@/assets/dilan-glasses.jpg.asset.json";
import { THERAPIES } from "@/lib/therapies";

export const Route = createFileRoute("/terapias")({
  head: () => ({
    meta: [
      { title: "Terapias | Psicoanalizar · Dra. Gretchelle Dilán, Ph.D." },
      {
        name: "description",
        content:
          "Terapia individual enfocada en las relaciones, terapia de pareja, terapia sexual, y conferencias y talleres. Servicios exclusivamente en línea para adultos en Puerto Rico.",
      },
      {
        property: "og:title",
        content: "Terapias | Psicoanalizar · Dra. Gretchelle Dilán, Ph.D.",
      },
      {
        property: "og:description",
        content:
          "Terapia individual y de pareja enfocada en las relaciones, terapia sexual y actividades educativas. Sesiones en línea.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terapias,
});

function Terapias() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-12 pt-12 sm:px-6 md:grid-cols-2 md:gap-16 md:pb-16 md:pt-20">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">
            Terapias
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Un espacio para cada proceso
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            Todas las sesiones son en línea y confidenciales. En la práctica se
            integra la terapia cognitivo-conductual, la Terapia de Aceptación y
            Compromiso (ACT), el enfoque constructivista y principios de la
            Terapia Relacional Imago.
          </p>
          <Link
            to="/citas"
            className="mt-8 inline-block rounded-sm bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Agenda tu cita
          </Link>
        </div>
        <img
          src={glassesImg.url}
          alt="La Dra. Gretchelle Dilán con sus lentes en la mano, en su consultorio"
          loading="lazy"
          width={853}
          height={1280}
          className="w-full object-cover"
        />
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-20">
        {THERAPIES.map((t, i) => (
          <article
            key={t.slug}
            className="border-t border-border py-12 first:border-t-0 first:pt-0 md:py-16"
          >
            <p className="font-serif text-sm text-primary">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 font-serif text-2xl leading-snug sm:text-3xl">
              {t.title}
            </h2>
            <p className="mt-4 text-lg italic leading-relaxed text-muted-foreground">
              {t.excerpt}
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">{t.body}</p>
            {t.topics.length > 0 && (
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {t.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>

      <section className="bg-secondary py-16 text-center">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl">
            ¿No sabes por dónde empezar?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            En la primera sesión exploramos juntos lo que necesitas y definimos
            el mejor camino para ti o para tu relación.
          </p>
          <Link
            to="/citas"
            className="mt-8 inline-block rounded-sm bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Agenda tu cita
          </Link>
        </div>
      </section>
    </div>
  );
}
