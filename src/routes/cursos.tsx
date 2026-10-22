import { createFileRoute } from "@tanstack/react-router";

import officeImg from "@/assets/consultorio.jpg.asset.json";
import { NotifySignup } from "@/components/notify-signup";

export const Route = createFileRoute("/cursos")({
  head: () => ({
    meta: [
      { title: "Cursos | Dra. Gretchelle Dilán, Ph.D." },
      {
        name: "description",
        content:
          "Cursos en línea sobre relaciones sanas, comunicación de pareja y bienestar emocional. Próximamente: déjanos tu correo para avisarte.",
      },
      { property: "og:title", content: "Cursos | Dra. Gretchelle Dilán, Ph.D." },
      {
        property: "og:description",
        content:
          "Cursos en línea sobre relaciones y bienestar emocional. Próximamente.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Cursos,
});

const TOPICS = [
  "Comunicación de pareja sin heridas",
  "Relaciones sanas y límites",
  "Sexualidad y pareja: hablar sin tabúes",
  "Superar la dependencia emocional",
];

function Cursos() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:gap-16 md:py-24">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">
            Cursos
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Próximamente
          </h1>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            Estoy preparando cursos en línea para aprender, a tu ritmo, a
            construir relaciones más sanas y conscientes. Déjame tu correo y
            te aviso en cuanto abran las inscripciones.
          </p>
          <div className="mt-8">
            <NotifySignup />
          </div>
          <p className="mt-8 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
            Temas en preparación
          </p>
          <ul className="mt-4 space-y-3">
            {TOPICS.map((topic) => (
              <li key={topic} className="flex items-baseline gap-3">
                <span aria-hidden className="text-primary">
                  ·
                </span>
                <span className="font-serif text-lg">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
        <img
          src={officeImg.url}
          alt="Espacio de aprendizaje cálido y acogedor"
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full object-cover"
        />
      </section>
    </div>
  );
}
