import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";

import lapImg from "@/assets/dilan-lap.jpg.asset.json";
import {
  EMAIL,
  PHONE_DISPLAY,
  SITE_URL,
  WHATSAPP_URL,
} from "@/components/site-footer";

export const Route = createFileRoute("/citas")({
  head: () => ({
    meta: [
      { title: "Citas | Psicoanalizar · Dra. Gretchelle Dilán, Ph.D." },
      {
        name: "description",
        content:
          "Información completa antes de reservar: modalidad en línea, documentos, requisitos tecnológicos, costos ($75 individual · $95 pareja), cambios, cancelaciones y duración de las sesiones.",
      },
      {
        property: "og:title",
        content: "Citas | Psicoanalizar · Dra. Gretchelle Dilán, Ph.D.",
      },
      {
        property: "og:description",
        content:
          "Lee cuidadosamente la información para determinar si nuestro servicio psicológico se ajusta a sus necesidades.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Citas,
});

const SECTIONS = [
  {
    title: "Modalidad del servicio",
    items: [
      "Nuestro sistema de terapia psicológica es únicamente en línea, sin excepción, mediante telepsicología.",
      "La Dra. Gretchelle Dilán es psicóloga licenciada por la Junta Examinadora de Psicólogos de Puerto Rico.",
      "Utiliza una plataforma diseñada bajo la ley HIPAA, para el manejo seguro de documentación clínica, formularios, consentimientos y sesiones por videollamada.",
      "Una vez confirmada su primera cita, recibirá por correo electrónico las instrucciones para acceder a la plataforma.",
    ],
  },
  {
    title: "Documentos para su primera cita",
    items: [
      "Antes de comenzar los servicios deberá completar y firmar electrónicamente el Consentimiento Informado y Acuerdo de Servicios, además de los demás documentos requeridos para abrir su expediente clínico.",
      "Estos documentos se completan únicamente durante el proceso inicial de apertura de expediente.",
      "No tendrá que completarlos nuevamente en cada cita, salvo que sea necesario actualizar información o añadir algún documento.",
      "Para su primera sesión deberá conectarse 15 minutos antes para verificar documentos pendientes y aclarar cualquier duda antes de comenzar.",
    ],
  },
  {
    title: "Requisitos tecnológicos",
    items: [
      "Tener acceso adecuado a internet.",
      "Poder manejar por sí mismo(a) correo electrónico, enlaces y formularios electrónicos.",
      "Poder conectarse a una videollamada desde la plataforma.",
      "Preferiblemente utilizar un espacio privado, tranquilo y sin interrupciones.",
    ],
  },
  {
    title: "Costos y pagos",
    items: [
      "Sesión individual: $75.",
      "Sesión de pareja: $95.",
      "No aceptamos planes médicos.",
      "Si su plan lo permite, podemos emitir un recibo para que solicite reembolso directamente a su aseguradora.",
      "No se separan fechas sin el pago previo de la sesión.",
      "Los pagos pueden realizarse por ATH Móvil, PayPal o Venmo.",
      "En el concepto o “subject” debe escribir el nombre completo del paciente o de la pareja y la fecha de la cita.",
      "Debe enviar una foto del recibo para su archivo y seguimiento.",
    ],
  },
  {
    title: "Cambios y cancelaciones",
    items: [
      "Si necesita cambiar o cancelar su cita, deberá notificarlo con al menos 48 horas de anticipación. Así podrá utilizar el pago de su reservación para una nueva fecha.",
      "Si notifica con menos de 48 horas de anticipación, el pago no podrá transferirse a otra cita. Para reservar una nueva sesión, deberá realizar un nuevo depósito.",
      "La nueva fecha deberá coordinarse al momento de solicitar el cambio o la cancelación.",
      "Si llega tarde, la sesión terminará a la hora originalmente establecida.",
    ],
  },
  {
    title: "Duración aproximada",
    items: [
      "Sesiones individuales: 55 minutos.",
      "Sesiones de pareja: 1 hora y 20 minutos.",
      "No es posible establecer de antemano una cantidad exacta de sesiones, ya que cada caso es diferente.",
      "En terapia de pareja, el proceso puede incluir sesiones conjuntas e individuales según las necesidades identificadas.",
      "En terapia individual, cada caso será evaluado para determinar las recomendaciones y necesidades particulares de tratamiento.",
    ],
  },
  {
    title: "Para su sesión",
    items: [
      "Conectarse desde un lugar privado y sin interrupciones.",
      "Tener buena conexión a internet.",
      "Tener papel y lápiz disponibles.",
      "Conectarse 15 minutos antes en su primera cita para completar el proceso inicial.",
    ],
  },
];

function Citas() {
  return (
    <div>
      <section className="mx-auto max-w-4xl px-4 pb-10 pt-12 sm:px-6 md:pt-20">
        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-primary">
          Citas
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
          Antes de reservar tu cita
        </h1>
        <p className="mt-6 max-w-2xl font-serif text-xl italic leading-relaxed text-foreground/90">
          “Lea cuidadosamente la siguiente información para determinar si
          nuestro servicio psicológico se ajusta a sus necesidades.”
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl items-start gap-12 px-4 pb-16 sm:px-6 md:grid-cols-[1fr_0.65fr] md:gap-16 md:pb-24">
        <div className="order-2 md:order-1">
          {SECTIONS.map((s, i) => (
            <article key={s.title} className="border-t border-border py-10">
              <p className="font-serif text-sm text-primary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-serif text-2xl leading-snug sm:text-3xl">
                {s.title}
              </h2>
              <ul className="mt-5 space-y-3.5">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 leading-relaxed text-muted-foreground"
                  >
                    <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <article className="border-t border-border py-10">
            <p className="font-serif text-sm text-primary">09</p>
            <h2 className="mt-2 font-serif text-2xl leading-snug sm:text-3xl">
              Importante
            </h2>
            <ul className="mt-5 space-y-3.5">
              {[
                "Los servicios de telepsicología de este consultorio no están diseñados para atender emergencias o crisis que requieran atención inmediata.",
                "Si presenta una emergencia emocional o entiende que necesita ayuda inmediata, debe llamar al 911 o acudir a la sala de emergencias más cercana.",
                "Una vez confirmada su cita, recibirá las instrucciones necesarias para acceder a la plataforma y conectarse a su sesión por videollamada.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 leading-relaxed text-muted-foreground"
                >
                  <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <div className="border-t border-border pt-10">
            <p className="font-serif text-xl italic leading-relaxed text-foreground/90">
              “Si luego de leer esta información entiende que nuestros servicios
              se ajustan a sus necesidades, puede contactarnos para comenzar a
              verificar fechas y horarios alternativos disponibles para su
              primera cita.”
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp {PHONE_DISPLAY}
              </a>
              <Link
                to="/contacto"
                className="rounded-sm border border-border bg-background px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:border-primary/60"
              >
                Página de contacto
              </Link>
            </div>
          </div>
        </div>

        <aside className="order-1 md:order-2 md:sticky md:top-28">
          <img
            src={lapImg.url}
            alt="La Dra. Gretchelle Dilán, con su collar rosa, sentada en su consultorio"
            loading="lazy"
            width={853}
            height={1280}
            className="w-full object-cover"
          />
          <div className="mt-6 border border-border bg-card p-6">
            <h2 className="font-serif text-xl">Resumen</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex justify-between gap-4">
                <span>Sesión individual</span>
                <span className="font-serif text-lg text-primary">$75</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Sesión de pareja</span>
                <span className="font-serif text-lg text-primary">$95</span>
              </li>
              <li className="border-t border-border pt-3">
                Pagos: ATH Móvil, PayPal o Venmo
              </li>
              <li>Cambios y cancelaciones: 48 horas de anticipación</li>
              <li>Servicios exclusivamente en línea · Puerto Rico</li>
            </ul>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-5 block border-t border-border pt-4 text-sm text-primary hover:text-primary/80"
            >
              {EMAIL}
            </a>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-1.5 block text-sm text-muted-foreground hover:text-foreground"
            >
              www.psicoanalizar.com
            </a>
          </div>
        </aside>
      </section>
    </div>
  );
}
