import { createFileRoute, Link } from "@tanstack/react-router";

import plantsImg from "@/assets/dilan-plants.jpg.asset.json";
import tableImg from "@/assets/dilan-table.jpg.asset.json";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí | Psicoanalizar · Dra. Gretchelle Dilán, Ph.D." },
      {
        name: "description",
        content:
          "La Dra. Gretchelle Dilán es psicóloga, sexóloga y terapeuta individual y de pareja con aproximadamente 20 años de experiencia. Doctorado en Psicología, posgrado en Sexología (Universidad de Barcelona) y Método Gottman niveles 1, 2 y 3.",
      },
      {
        property: "og:title",
        content: "Sobre mí | Psicoanalizar · Dra. Gretchelle Dilán, Ph.D.",
      },
      {
        property: "og:description",
        content:
          "Psicóloga, sexóloga y terapeuta individual y de pareja. Fundadora de Psicoanalizar. Servicios exclusivamente en línea, Puerto Rico.",
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
    t: "Posgrado en Sexología · Universidad de Barcelona",
    d: "Formación de posgrado en sexualidad humana.",
  },
  {
    t: "Método Gottman · Niveles 1, 2 y 3",
    d: "Formación en los tres niveles del método para terapia de pareja.",
  },
  {
    t: "Licencia · Junta Examinadora de Psicólogos de Puerto Rico",
    d: "Ejercicio autorizado de la psicología bajo los estándares éticos y legales de Puerto Rico.",
  },
  {
    t: "Mediadora y árbitro del Tribunal de Puerto Rico",
    d: "Acompaña procesos de mediación, incluidos separación y divorcio, y también es profesora y conferenciante.",
  },
  {
    t: "Fundadora de Psicoanalizar",
    d: "Un espacio dedicado a ayudar a las personas a comprender sus experiencias afectivas y desarrollar formas más saludables de vincularse.",
  },
  {
    t: "Autora del videolibro “¿Me quedo o me voy de la relación?”",
    d: "Contenido educativo sobre relaciones y decisiones conscientes, en siete capítulos.",
  },
];

function SobreMi() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 md:pb-20 md:pt-20">
        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">
          Sobre mí
        </p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          Comprender tus vínculos. Encontrar tu voz. Elegir tu camino.
        </h1>
      </section>

      <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        <div className="md:sticky md:top-28">
          <img
            src={plantsImg.url}
            alt="Retrato de la Dra. Gretchelle Dilán entre plantas, con su collar rosa"
            loading="lazy"
            width={853}
            height={1280}
            className="w-full object-cover"
          />
          <p className="mt-4 text-center text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
            Consulta en línea · Puerto Rico
          </p>
        </div>
        <div className="space-y-5 leading-relaxed text-muted-foreground">
          <p>
            La Dra. Gretchelle Dilán es psicóloga, sexóloga y terapeuta
            individual y de pareja con aproximadamente{" "}
            <strong className="text-foreground">20 años de experiencia</strong>{" "}
            profesional. Es fundadora de Psicoanalizar, un espacio dedicado a
            ayudar a las personas a comprender sus experiencias afectivas,
            afrontar dificultades en sus relaciones y desarrollar formas más
            saludables de vincularse.
          </p>
          <p>
            Cuenta con un doctorado en Psicología y formación de posgrado en
            Sexología de la Universidad de Barcelona. Su preparación incluye los
            niveles 1, 2 y 3 del Método Gottman para terapia de pareja. En su
            práctica integra la terapia cognitivo-conductual, la Terapia de
            Aceptación y Compromiso (ACT), el enfoque constructivista y
            principios de la Terapia Relacional Imago, adaptando el proceso a
            las necesidades y objetivos de cada persona o pareja.
          </p>
          <p>
            Su trabajo se centra en los asuntos de las relaciones, tanto en
            terapia individual como de pareja. Acompaña a adultos que enfrentan
            dificultades de comunicación, infidelidad, pérdida de confianza,
            dependencia emocional, celos, problemas con los límites, rupturas y
            dudas sobre continuar o terminar una relación. Como sexóloga,
            también atiende preocupaciones relacionadas con el deseo sexual, la
            intimidad y el funcionamiento sexual.
          </p>
          <p>
            En terapia individual, facilita la exploración de patrones
            relacionales, la elaboración de experiencias dolorosas y el
            fortalecimiento del autoconcepto y los límites dentro de los
            vínculos. En terapia de pareja, ayuda a identificar los conflictos
            recurrentes, expresar necesidades y trabajar en la conexión
            emocional y sexual.
          </p>
          <p>
            Además de su práctica terapéutica, es mediadora y árbitro del
            Tribunal de Puerto Rico, profesora y conferenciante. También
            desarrolla contenido educativo sobre salud mental, relaciones y
            sexualidad, y es autora del videolibro “¿Me quedo o me voy de la
            relación?”.
          </p>
          <p>
            Desde Psicoanalizar, ofrece un espacio de escucha, reflexión y
            acompañamiento para tomar decisiones conscientes y construir
            relaciones más saludables. Los servicios terapéuticos se ofrecen
            exclusivamente en línea para adultos que se encuentran físicamente
            en Puerto Rico durante sus sesiones.
          </p>
          <Link
            to="/citas"
            className="mt-2 inline-block rounded-sm bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Agenda tu cita
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
            src={tableImg.url}
            alt="La Dra. Gretchelle Dilán sentada frente a la cámara, con su collar de destellos rosa"
            loading="lazy"
            width={853}
            height={1280}
            className="w-full object-cover"
          />
          <div>
            <h2 className="font-serif text-3xl leading-snug sm:text-4xl">
              “Un espacio de escucha, reflexión y acompañamiento para tomar
              decisiones conscientes.”
            </h2>
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
              Dra. Gretchelle Dilán
            </p>
            <Link
              to="/terapias"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary transition-colors hover:text-primary/80"
            >
              Ver los servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
