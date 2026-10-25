import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroImg from "@/assets/dilan-plants.jpg.asset.json";
import aboutImg from "@/assets/dilan-seated.jpg.asset.json";
import videolibroImg from "@/assets/dilan-reading.jpg.asset.json";

import { BookingCard } from "@/components/booking-card";
import { WHATSAPP_URL } from "@/components/site-footer";
import { THERAPIES } from "@/lib/therapies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Psicoanalizar | Dra. Gretchelle Dilán, Ph.D." },
      {
        name: "description",
        content:
          "Terapia individual y de pareja enfocada en las relaciones. Psicóloga y sexóloga en Puerto Rico, servicios exclusivamente en línea. Comprender tus vínculos, encontrar tu voz, elegir tu camino.",
      },
      {
        property: "og:title",
        content: "Psicoanalizar | Dra. Gretchelle Dilán, Ph.D.",
      },
      {
        property: "og:description",
        content:
          "Terapia individual y de pareja enfocada en las relaciones. Servicios exclusivamente en línea, Puerto Rico.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const CREDENTIALS = [
  "≈ 20 años de experiencia",
  "Doctorado en Psicología",
  "Posgrado en Sexología · Universidad de Barcelona",
  "Método Gottman · Niveles 1, 2 y 3",
  "Mediadora y árbitro del Tribunal de Puerto Rico",
  "Licenciada por la Junta Examinadora de Psicólogos de PR",
  "Servicios únicamente en línea para adultos en Puerto Rico",
];

const STEPS = [
  {
    n: "01",
    t: "Agenda tu cita",
    d: "Lee la información de Citas y contáctanos por WhatsApp para coordinar fechas y horarios disponibles para tu primera sesión.",
  },
  {
    n: "02",
    t: "Primera sesión en línea",
    d: "Te conectas desde un espacio privado por la plataforma segura del consultorio, quince minutos antes de tu primera cita.",
  },
  {
    n: "03",
    t: "Plan terapéutico",
    d: "Cada caso se evalúa para determinar recomendaciones y necesidades particulares de tratamiento, individual o de pareja.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Aprendimos a hablarnos sin lastimarnos. Hoy discutimos de otra manera, y sobre todo, escuchamos de otra manera.",
    a: "Pareja en terapia · testimonio ilustrativo",
  },
  {
    quote:
      "Llegué sin saber si quería quedarme o irme. Me dio un espacio para pensarlo con claridad, sin presión, y tomar mi propia decisión.",
    a: "Terapia individual · testimonio ilustrativo",
  },
  {
    quote:
      "Después de la infidelidad pensé que todo había terminado. Reconstruimos la confianza paso a paso, con un proceso claro y respetuoso.",
    a: "Pareja en terapia · testimonio ilustrativo",
  },
];

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* retrato a sangre con fundido hacia el fondo marfil (escritorio) */}
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 hidden w-[46%] md:block"
        >
          <img
            src={heroImg.url}
            alt=""
            className="h-full w-full object-cover object-[50%_12%]"
          />
          <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 md:pb-28 md:pt-32">
          <div className="max-w-2xl">
            <p className="text-[0.7rem] uppercase tracking-[0.35em] text-foreground">
              Dra. Gretchelle Dilán · Psicóloga
            </p>
            <div aria-hidden className="mt-3 h-px w-10 bg-primary" />
            <h1 className="mt-8 font-serif text-4xl leading-[1.12] sm:text-5xl lg:text-[3.4rem]">

              <span className="block">Comprender tus vínculos.</span>
              <span className="block">Encontrar tu voz.</span>
              <span className="block">Elegir tu camino.</span>
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              Terapia individual y de pareja enfocada en las relaciones.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/terapias"
                className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 font-serif text-base text-background transition-opacity hover:opacity-85"
              >
                Conoce mis servicios
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/videolibro"
                className="group inline-flex items-center gap-3 border border-border bg-background px-7 py-4 font-serif text-base text-foreground transition-colors hover:border-primary/60"
              >
                Lee mis escritos
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <p className="mt-10 text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
              Únicamente en línea · Puerto Rico
            </p>
          </div>
        </div>

        {/* retrato en móvil, debajo del texto */}
        <div className="relative md:hidden">
          <img
            src={heroImg.url}
            alt="Retrato de la Dra. Gretchelle Dilán sentada en su consultorio"
            className="h-[420px] w-full object-cover object-[50%_15%]"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background to-transparent"
          />
        </div>
      </section>

      {/* Desde mi consultorio */}
      <section className="mx-auto max-w-3xl px-4 pb-14 pt-12 text-center sm:px-6 md:pb-20">
        <div aria-hidden className="mx-auto h-px w-10 bg-primary" />
        <p className="mt-5 text-[0.65rem] uppercase tracking-[0.35em] text-muted-foreground">
          Desde mi consultorio
        </p>
        <p className="mt-4 font-serif text-2xl leading-snug text-foreground sm:text-3xl">
          Un espacio para pensar nuestras relaciones.
        </p>
      </section>


      {/* Credenciales */}
      <section className="border-y border-border bg-secondary">
        <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-3 px-4 py-6 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground sm:px-6">
          {CREDENTIALS.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <span aria-hidden className="text-primary">
                ·
              </span>
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* Sobre mí — intro */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:gap-16 md:py-24">
        <img
          src={aboutImg.url}
          alt="La Dra. Gretchelle Dilán sentada en su consultorio"
          loading="lazy"
          width={853}
          height={1280}
          className="w-full object-cover"
        />
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">
            Sobre mí
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
            Una psicóloga que escucha cómo amas
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            La Dra. Gretchelle Dilán es psicóloga, sexóloga y terapeuta
            individual y de pareja con aproximadamente 20 años de experiencia.
            Cuenta con un doctorado en Psicología, formación de posgrado en
            Sexología de la Universidad de Barcelona y formación en los niveles
            1, 2 y 3 del Método Gottman. También es mediadora y árbitro del
            Tribunal de Puerto Rico.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Desde Psicoanalizar, acompaña a personas y parejas a comprender sus
            dinámicas relacionales, mejorar la comunicación, afrontar la
            infidelidad y tomar decisiones sobre sus relaciones. Ofrece
            servicios exclusivamente en línea para adultos que se encuentran en
            Puerto Rico.
          </p>
          <Link
            to="/sobre-mi"
            className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary transition-colors hover:text-primary/80"
          >
            Conoce mi historia
          </Link>
        </div>
      </section>

      {/* Enfoque — pull quote */}
      <section className="bg-foreground py-16 text-background md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="font-serif text-2xl italic leading-snug sm:text-3xl md:text-4xl">
            “Terapia cognitivo conductual y terapias contemporáneas con bases
            constructivistas.”
          </p>
          <p className="mt-6 text-[0.7rem] uppercase tracking-[0.3em] text-background/60">
            El enfoque del consultorio
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">
            Servicios
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
            Un espacio para cada proceso
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {THERAPIES.map((t) => (
            <article
              key={t.slug}
              className="flex flex-col border border-border bg-card p-6"
            >
              <h3 className="font-serif text-xl leading-snug">{t.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t.excerpt}
              </p>
              <Link
                to="/terapias"
                className="mt-5 text-[0.65rem] uppercase tracking-[0.25em] text-primary transition-colors hover:text-primary/80"
              >
                Leer más
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center font-serif text-3xl leading-tight sm:text-4xl">
            Cómo funciona
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="text-center">
                <p className="font-serif text-4xl text-primary">{s.n}</p>
                <h3 className="mt-4 font-serif text-xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:gap-16 md:py-24">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">
            Citas
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
            Agenda tu cita
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
            El consultorio atiende únicamente en línea, mediante
            telepsicología, con una plataforma segura bajo la ley HIPAA. Antes
            de reservar, te invito a leer la información completa sobre la
            modalidad, los documentos, los costos y las cancelaciones.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li>Sesión individual: $75 · 55 minutos</li>
            <li>Sesión de pareja: $95 · 1 hora y 20 minutos</li>
            <li>WhatsApp +1 (787) 409-1516</li>
          </ul>
        </div>
        <BookingCard compact />
      </section>

      {/* Videolibro */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:gap-16 md:py-24">
          <img
            src={videolibroImg.url}
            alt="La Dra. Gretchelle Dilán leyendo, con su collar de destellos rosa"
            loading="lazy"
            width={853}
            height={1280}
            className="w-full object-cover"
          />
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">
              Videolibro
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              ¿Me quedo o me voy de la relación?
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
              Un recurso de siete capítulos para reflexionar sobre la relación,
              reconocer las dificultades que se están viviendo y explorar los
              factores que influyen en la decisión de quedarse o irse.
            </p>
            <Link
              to="/videolibro"
              className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary transition-colors hover:text-primary/80"
            >
              Conocer el videolibro
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="text-center font-serif text-3xl leading-tight sm:text-4xl">
          Lo que dicen en sesión
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.quote}
              className="border border-border bg-card p-7"
            >
              <blockquote className="font-serif text-lg italic leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                {t.a}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Testimonios ilustrativos, anónimos y confidenciales.
        </p>
      </section>

      {/* CTA final */}
      <section className="bg-secondary py-16 text-center md:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl">
            ¿Lista o listo para comenzar?
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Escríbeme y coordinamos fechas y horarios disponibles para tu
            primera cita.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/citas"
              className="rounded-sm bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Información de citas
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-border bg-background px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:border-primary/60"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
