import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import readingImg from "@/assets/dilan-reading.jpg.asset.json";
import { WHATSAPP_URL } from "@/components/site-footer";

export const Route = createFileRoute("/videolibro")({
  head: () => ({
    meta: [
      {
        title:
          "Videolibro: ¿Me quedo o me voy de la relación? | Dra. Gretchelle Dilán, Ph.D.",
      },
      {
        name: "description",
        content:
          "El videolibro de la Dra. Gretchelle Dilán: un recurso de siete capítulos para reflexionar sobre la relación y explorar los factores que influyen en la decisión de quedarse o irse.",
      },
      {
        property: "og:title",
        content:
          "Videolibro: ¿Me quedo o me voy de la relación? | Dra. Gretchelle Dilán, Ph.D.",
      },
      {
        property: "og:description",
        content:
          "Un recurso de siete capítulos para reflexionar sobre la relación, reconocer las dificultades y explorar la decisión de quedarse o irse.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Videolibro,
});

function Videolibro() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:gap-16 md:py-24">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">
            Videolibro
          </p>
          <h1 className="mt-4 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">
            ¿Me quedo o me voy de la relación?
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            Un recurso de siete capítulos para reflexionar sobre la relación,
            reconocer las dificultades que se están viviendo y explorar los
            factores que influyen en la decisión de quedarse o irse.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
            Escrito por la Dra. Gretchelle Dilán, psicóloga y sexóloga con
            aproximadamente 20 años de experiencia acompañando a personas y
            parejas en sus procesos de decisión.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-foreground px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-background transition-opacity hover:opacity-85"
            >
              <MessageCircle className="h-4 w-4" />
              Solicitar información
            </a>
            <Link
              to="/contacto"
              className="rounded-sm border border-border px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:border-primary/60"
            >
              Contacto
            </Link>
          </div>
        </div>
        <img
          src={readingImg.url}
          alt="La Dra. Gretchelle Dilán leyendo, con su collar de destellos rosa"
          loading="lazy"
          width={853}
          height={1280}
          className="w-full object-cover"
        />
      </section>

      <section className="border-y border-border bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">
            Sobre el videolibro
          </p>
          <p className="mt-6 font-serif text-2xl italic leading-snug text-foreground sm:text-3xl">
            “Siete capítulos para mirar tu relación con claridad y decidir con
            conciencia.”
          </p>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Cada capítulo invita a la reflexión sobre las dinámicas de pareja,
            las dificultades vividas y los factores personales y relacionales
            que pesan al momento de decidir si continuar o terminar el vínculo.
          </p>
        </div>
      </section>
    </div>
  );
}
