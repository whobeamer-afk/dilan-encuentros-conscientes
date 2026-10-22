import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Quote } from "lucide-react";

import heroImg from "@/assets/dilan-hero.jpg.asset.json";
import aboutImg from "@/assets/dilan-seated-plants.jpg.asset.json";
import officeImg from "@/assets/consultorio.jpg.asset.json";
import { BookingCard } from "@/components/booking-card";
import { NotifySignup } from "@/components/notify-signup";
import { WHATSAPP_URL } from "@/components/site-footer";
import { THERAPIES } from "@/lib/therapies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Dra. Gretchelle Dilán, Ph.D. | Psicóloga y sexóloga · Terapia de pareja",
      },
      {
        name: "description",
        content:
          "Terapia de pareja en línea con la Dra. Gretchelle Dilán, Ph.D.: psicóloga y sexóloga en Ponce, Puerto Rico. Enfoque humano y científico, 17 años de consulta en línea.",
      },
      {
        property: "og:title",
        content: "Dra. Gretchelle Dilán, Ph.D. | Terapia de pareja",
      },
      {
        property: "og:description",
        content:
          "Terapia de pareja con enfoque humano y científico. Sesiones en línea desde Ponce, Puerto Rico.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CREDENTIALS = [
  "Doctorado en Psicología",
  "Post grado en Sexualidad, Universidad de Barcelona",
  "Certificación Gottman nivel 3",
  "Licenciada por la Junta Examinadora de Psicólogos de PR",
  "Mediadora certificada, Tribunal General de Justicia de PR",
  "17 años de consulta en línea",
];

function Index() {
  return (
    <div>
      {/* 1 · Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 md:grid-cols-[1fr_0.9fr] md:gap-16 md:pb-24 md:pt-16">
        <div className="order-2 md:order-1">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">
            Psicología · Sexualidad · Pareja
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.15] text-foreground sm:text-5xl lg:text-6xl">
            Terapia de pareja con enfoque humano y científico
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Soy la Dra. Gretchelle Dilán, psicóloga y sexóloga. Acompaño a
            parejas y personas a reconstruir sus vínculos desde Ponce, Puerto
            Rico, con sesiones en línea para todo el mundo.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/citas"
              className="rounded-sm bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Agendar cita
            </Link>
            <Link
              to="/sobre-mi"
              className="rounded-sm border border-foreground/30 px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:border-foreground"
            >
              Conocer más
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative mx-auto max-w-md md:max-w-none">
            <div className="absolute -right-3 -top-3 h-full w-full border border-primary/40" />
            <img
              src={heroImg.url}
              alt="Dra. Gretchelle Dilán, psicóloga y sexóloga"
              className="relative w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2 · Credentials strip */}
      <section className="bg-secondary py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 text-center sm:px-6">
          {CREDENTIALS.map((c, i) => (
            <span key={c} className="flex items-center gap-6">
              <span className="text-[0.7rem] uppercase tracking-[0.18em] text-secondary-foreground/80">
                {c}
              </span>
              {i < CREDENTIALS.length - 1 && (
                <span aria-hidden className="text-primary">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* 3 · About intro */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:gap-16 md:py-24">
        <img
          src={aboutImg.url}
          alt="Dra. Gretchelle Dilán en su consultorio"
          loading="lazy"
          className="w-full object-cover"
        />
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">
            Sobre mí
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug sm:text-4xl">
            Una terapeuta con raíces en Ponce y una práctica sin fronteras
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Desde Ponce, Puerto Rico, ofrezco sesiones de terapia en línea
            hace 17 años. Mi trabajo combina la ciencia de la psicología con
            una mirada profundamente humana sobre las relaciones.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Además de mi consulta privada, soy profesora universitaria,
            investigadora y mediadora certificada. Cada sesión refleja esa
            triple experiencia: académica, clínica y humana.
          </p>
          <Link
            to="/sobre-mi"
            className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary transition-colors hover:text-primary/80"
          >
            Conoce mi historia
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 4 · Approach pull quote */}
      <section className="bg-secondary/60 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <Quote aria-hidden className="mx-auto h-8 w-8 text-primary/50" />
          <blockquote className="mt-6 font-serif text-2xl italic leading-relaxed text-foreground sm:text-3xl md:text-4xl">
            “Terapia cognitivo conductual y terapias contemporáneas con bases
            constructivistas”
          </blockquote>
          <p className="mt-6 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
            El enfoque de la Dra. Dilán
          </p>
        </div>
      </section>

      {/* 5 · Therapies */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">
            Terapias
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Áreas de acompañamiento
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Cada proceso terapéutico se diseña a la medida de tu historia y
            tus metas.
          </p>
        </div>
        <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {THERAPIES.map((t, i) => (
            <Link
              key={t.slug}
              to="/terapias"
              className="group bg-card p-8 transition-colors hover:bg-secondary/50"
            >
              <p className="font-serif text-sm text-primary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif text-xl leading-snug">
                {t.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Ver más <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 6 · How it works */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-24">
        <div className="border-y border-border py-16">
          <h2 className="text-center font-serif text-3xl sm:text-4xl">
            Cómo funciona
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {[
              {
                n: "1",
                t: "Agenda tu cita",
                d: "Elige el tipo de sesión, la fecha y la hora que prefieras desde esta página.",
              },
              {
                n: "2",
                t: "Primera sesión en línea",
                d: "Nos encontramos por videollamada desde donde estés, en un espacio seguro y confidencial.",
              },
              {
                n: "3",
                t: "Plan terapéutico",
                d: "Diseñamos juntas un plan con metas claras y pasos concretos para tu proceso.",
              },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <p className="font-serif text-5xl italic text-primary/70">
                  {s.n}
                </p>
                <h3 className="mt-4 font-serif text-xl">{s.t}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · Booking */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 sm:px-6 md:grid-cols-2 md:gap-16 md:pb-24">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">
            Citas
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
            Reserva tu espacio hoy
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            Con 17 años de consulta en línea, agendar es sencillo: elige tu
            sesión, tu fecha y tu hora, y te espero en un espacio cálido y
            confidencial.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-sm border border-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:border-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp +1 (787) 409-1516
          </a>
        </div>
        <BookingCard />
      </section>

      {/* 8 · Courses */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-16">
          <img
            src={officeImg.url}
            alt="Consultorio cálido y acogedor"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full object-cover"
          />
          <div className="text-center md:text-left">
            <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">
              Cursos
            </p>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Próximamente
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Estoy preparando cursos en línea sobre relaciones sanas,
              comunicación de pareja y bienestar emocional. Déjame tu correo
              y serás la primera persona en enterarte.
            </p>
            <div className="mt-6">
              <NotifySignup />
            </div>
          </div>
        </div>
      </section>

      {/* 9 · Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="text-center font-serif text-3xl sm:text-4xl">
          Lo que dicen mis consultantes
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              q: "Aprendimos a hablarnos de nuevo. La terapia nos devolvió la calma y la esperanza.",
              a: "Pareja en terapia · Ponce, PR",
            },
            {
              q: "Por primera vez alguien me explicó qué me pasaba sin juzgarme. Ese fue el comienzo de mi cambio.",
              a: "Terapia individual · Consulta en línea",
            },
            {
              q: "Después de la infidelidad pensé que todo estaba perdido. Hoy tenemos una relación más honesta que nunca.",
              a: "Pareja en terapia · Consulta en línea",
            },
          ].map((t) => (
            <figure key={t.a} className="border border-border bg-card p-8">
              <Quote aria-hidden className="h-5 w-5 text-primary/60" />
              <blockquote className="mt-4 font-serif text-lg italic leading-relaxed text-foreground">
                “{t.q}”
              </blockquote>
              <figcaption className="mt-5 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                {t.a}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          Testimonios ilustrativos — se sustituirán por testimonios reales con
          consentimiento de cada consultante.
        </p>
      </section>
    </div>
  );
}
