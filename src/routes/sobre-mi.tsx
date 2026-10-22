import { createFileRoute, Link } from "@tanstack/react-router";

import portraitImg from "@/assets/dilan-portrait-clasped-v2.jpg.asset.json";
import writingImg from "@/assets/dilan-writing.jpg.asset.json";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí | Dra. Gretchelle Dilán, Ph.D." },
      {
        name: "description",
        content:
          "Conoce a la Dra. Gretchelle Dilán: psicóloga, sexóloga, profesora universitaria, investigadora y mediadora certificada en Ponce, Puerto Rico.",
      },
      {
        property: "og:title",
        content: "Sobre mí | Dra. Gretchelle Dilán, Ph.D.",
      },
      {
        property: "og:description",
        content:
          "Psicóloga, sexóloga, profesora universitaria, investigadora y mediadora certificada. Ponce, Puerto Rico.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SobreMi,
});

const TIMELINE = [
  {
    t: "Doctorado en Psicología",
    d: "Formación doctoral con especial atención a los vínculos y la salud emocional de las relaciones.",
  },
  {
    t: "Post grado en Sexualidad · Universidad de Barcelona",
    d: "Especialización en sexualidad humana en una de las universidades más reconocidas de Europa.",
  },
  {
    t: "Certificación Gottman · Nivel 3",
    d: "Entrenamiento clínico avanzado en el método Gottman para terapia de pareja, basado en décadas de investigación.",
  },
  {
    t: "Licencia · Junta Examinadora de Psicólogos de Puerto Rico",
    d: "Ejercicio autorizado de la psicología bajo los estándares éticos y legales de Puerto Rico.",
  },
  {
    t: "Mediadora certificada · Tribunal General de Justicia de PR",
    d: "Certificación oficial para acompañar procesos de mediación, incluidos separación y divorcio.",
  },
  {
    t: "17 años de consulta en línea",
    d: "Una década y media acompañando procesos terapéuticos a distancia, desde antes de que fuera común.",
  },
];

function SobreMi() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-20">
        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">
          Sobre mí
        </p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          Psicóloga, sexóloga y, sobre todo, una aliada de tu relación
        </h1>
      </section>

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div>
          <img
            src={portraitImg.url}
            alt="Retrato de la Dra. Gretchelle Dilán"
            loading="lazy"
            className="w-full object-cover"
          />
          <p className="mt-4 text-center text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
            Ponce, Puerto Rico · Consulta en línea
          </p>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            Soy la Dra. Gretchelle Dilán, psicóloga y sexóloga especializada
            en terapia de pareja. Mi consulta nace en Ponce, Puerto Rico, y
            desde hace <strong className="text-foreground">17 años</strong>{" "}
            acompaño a parejas y personas de todo el mundo a través de sesiones
            en línea.
          </p>
          <p>
            Mi trabajo se sostiene sobre tres pilares: la ciencia, con
            terapia cognitivo conductual y terapias contemporáneas con bases
            constructivistas; la formación continua, con un doctorado en
            Psicología y un post grado en Sexualidad de la Universidad de
            Barcelona; y la experiencia práctica, con la certificación Gottman
            nivel 3 y la mediación certificada por el Tribunal General de
            Justicia de Puerto Rico.
          </p>
          <p>
            Además de la consulta privada, soy profesora universitaria e
            investigadora. Ese vínculo con la academia mantiene mi práctica
            viva, actual y fundamentada en lo que la evidencia dice que
            funciona.
          </p>
          <p>
            Creo que las relaciones no se arreglan con fórmulas: se
            reconstruyen con honestidad, herramientas y acompañamiento
            respetuoso. Eso es lo que ofrezco en cada sesión.
          </p>
          <Link
            to="/citas"
            className="mt-2 inline-block rounded-sm bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Agendar cita
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-serif text-3xl sm:text-4xl">
          Trayectoria y credenciales
        </h2>
        <ol className="mt-10 space-y-0 border-l border-border">
          {TIMELINE.map((item) => (
            <li key={item.t} className="relative pb-10 pl-10 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border-2 border-primary bg-background"
              />
              <h3 className="font-serif text-xl leading-snug">{item.t}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {item.d}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
          <img
            src={writingImg.url}
            alt="Dra. Dilán tomando notas clínicas"
            loading="lazy"
            className="w-full object-cover"
          />
          <div>
            <h2 className="font-serif text-3xl leading-snug sm:text-4xl">
              “Cada relación tiene su propia historia. Mi trabajo es ayudar a
              escribirla de nuevo.”
            </h2>
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
              Dra. Gretchelle Dilán
            </p>
            <Link
              to="/terapias"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary transition-colors hover:text-primary/80"
            >
              Ver las terapias
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
