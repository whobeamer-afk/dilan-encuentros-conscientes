export type Therapy = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  topics: string[];
};

export const THERAPIES: Therapy[] = [
  {
    slug: "terapia-individual-relaciones",
    title: "Terapia individual enfocada en las relaciones",
    excerpt:
      "Acompañamiento psicológico para adultos que desean trabajar dificultades relacionadas con sus vínculos afectivos.",
    body: "Se abordan temas como rupturas, infidelidad, dependencia emocional, celos, límites, autoestima dentro de la relación y decisiones sobre continuar o terminar un vínculo. El proceso permite comprender patrones relacionales, elaborar experiencias dolorosas y desarrollar maneras más saludables de relacionarse.",
    topics: [
      "Rupturas y decisiones sobre continuar o terminar",
      "Infidelidad",
      "Dependencia emocional",
      "Celos y límites",
      "Relaciones tóxicas",
      "Ansiedad y depresión por vínculos amorosos",
    ],
  },
  {
    slug: "terapia-pareja",
    title: "Terapia de pareja",
    excerpt:
      "Un espacio para trabajar dificultades de comunicación, conflictos recurrentes, infidelidad, pérdida de confianza y desconexión emocional.",
    body: "Se ayuda a cada integrante a comprender sus dinámicas, expresar sus necesidades y desarrollar herramientas para manejar las diferencias y fortalecer el vínculo.",
    topics: [
      "Comunicación de pareja",
      "Conflictos recurrentes",
      "Infidelidad y pérdida de confianza",
      "Desconexión emocional",
      "Decisiones sobre el futuro de la relación",
      "Separación y divorcio con mediación",
    ],
  },
  {
    slug: "terapia-sexual",
    title: "Terapia sexual",
    excerpt:
      "Atención a personas y parejas que presentan preocupaciones relacionadas con el deseo sexual, la intimidad, la conexión erótica y el funcionamiento sexual.",
    body: "El proceso considera los aspectos emocionales, personales y relacionales de la sexualidad, en un espacio de respeto y absoluta confidencialidad.",
    topics: [
      "Deseo sexual",
      "Intimidad y conexión erótica",
      "Funcionamiento sexual",
      "Sexualidad en la relación de pareja",
    ],
  },
  {
    slug: "conferencias-talleres",
    title: "Conferencias y talleres",
    excerpt:
      "Actividades educativas sobre relaciones de pareja, comunicación, salud mental, sexualidad, límites y bienestar emocional.",
    body: "Dirigidas a organizaciones, instituciones y grupos, adaptadas a las necesidades de cada audiencia.",
    topics: [
      "Relaciones de pareja y comunicación",
      "Salud mental",
      "Sexualidad",
      "Límites y bienestar emocional",
    ],
  },
];
