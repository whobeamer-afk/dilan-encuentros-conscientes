export type Therapy = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
};

export const THERAPIES: Therapy[] = [
  {
    slug: "terapia-pareja",
    title: "Terapia de pareja",
    excerpt:
      "Reconstruyan la comunicación, la confianza y la intimidad con un proceso guiado y basado en evidencia.",
    body: "Un espacio neutral donde ambos pueden ser escuchados. Trabajamos con el modelo Gottman y herramientas de terapia cognitivo conductual para transformar los patrones que han dañado la relación en oportunidades de reconexión.",
  },
  {
    slug: "terapia-individual",
    title: "Terapia individual",
    excerpt:
      "Un acompañamiento personal para comprender tus emociones, tus vínculos y tus decisiones.",
    body: "Sesiones uno a uno en línea para trabajar ansiedad, autoestima, duelo o cualquier proceso personal, siempre desde un enfoque humano, cálido y científico.",
  },
  {
    slug: "infidelidad",
    title: "Infidelidad",
    excerpt:
      "Un camino estructurado para sanar la traición, decidir el futuro de la relación y recuperar la confianza.",
    body: "La infidelidad no tiene que ser el final. Con un proceso cuidadoso y confidencial, ayudamos a la pareja a procesar el dolor, comprender lo ocurrido y decidir, con claridad, si desean reconstruir juntos.",
  },
  {
    slug: "dependencia-emocional",
    title: "Dependencia emocional",
    excerpt:
      "Aprende a relacionarte desde el amor propio, no desde el miedo a la separación.",
    body: "Exploramos el origen de la dependencia emocional y desarrollamos herramientas para construir vínculos más sanos, donde el cariño no signifique perderse a uno mismo.",
  },
  {
    slug: "relaciones-toxicas",
    title: "Relaciones tóxicas",
    excerpt:
      "Identifica los patrones que te hacen daño y recupera el control de tu bienestar emocional.",
    body: "Reconocer una relación tóxica no siempre es sencillo. Ofrecemos claridad, herramientas prácticas y apoyo profesional para establecer límites sanos y tomar decisiones que protejan tu salud emocional.",
  },
  {
    slug: "separacion-divorcio",
    title: "Separación y divorcio",
    excerpt:
      "Atraviesa el proceso de separación con acompañamiento profesional y mediación certificada.",
    body: "Como mediadora certificada, acompaño a las parejas en el proceso de separación o divorcio de forma respetuosa, reduciendo el conflicto y priorizando el bienestar de todos los involucrados, incluidos los hijos.",
  },
  {
    slug: "ansiedad-depresion",
    title: "Ansiedad y depresión por vínculos amorosos",
    excerpt:
      "Cuando el amor duele: tratamiento para la ansiedad y la depresión nacidas de las relaciones.",
    body: "Las heridas del corazón también afectan la mente. Tratamos la ansiedad y la depresión que surgen de vínculos amorosos difíciles, combinando terapia cognitivo conductual con un enfoque constructivista.",
  },
];
