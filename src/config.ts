// Configuración central del sitio. Edita aquí los datos reales de Legal Educa.

export const site = {
  name: "LegalEduca",
  legalName: "Legal Educa",
  tagline: "Asesoría jurídica educacional en Chile",
  description:
    "Asesoría jurídica educacional en Chile. Abogadas expertas en derecho educacional y auditores en rendición de subvenciones para tu establecimiento.",
  url: "https://legaleduca.cl",
  // Contacto real:
  email: "contactolegaleduca@gmail.com",
  contactPerson: "Equipo Legal Educa",
  contactRole: "Abogadas especialistas en Derecho Educacional",
  instagram: "https://www.instagram.com/legaleduca",
  // Completar cuando se tengan (se ocultan si quedan vacíos):
  phone: "",
  phoneHref: "",
  address: "",
};
// El formulario de contacto se envía a través de api/contact.ts (Resend).
// Configura RESEND_API_KEY y CONTACT_RECIPIENTS en Vercel > Environment Variables.

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contacto", href: "/contacto" },
];

export type ServiceArea = {
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  audience: string;
  summary: string;
  areas: ServiceArea[];
  icon: "balance" | "shield" | "users" | "landmark" | "audit";
};

export const services: Service[] = [
  {
    slug: "asesoria-juridica",
    title: "Asesoría Jurídica",
    audience: "Establecimientos educacionales",
    summary:
      "A cargo de abogadas ex funcionarias de la Superintendencia de Educación. Brindamos el apoyo necesario en la interpretación y aplicación de la normativa vigente, así como en la elaboración y actualización de reglamentos internos, protocolos y documentos oficiales ajustados a la legislación.",
    areas: [
      {
        title: "Convivencia escolar",
        description:
          "Acompañamiento técnico, capacitación de equipos, charlas y actualización de instrumentos. Apoyo en la gestión de casos y elaboración de presentaciones, descargos y planes de mejora según las necesidades de cada establecimiento.",
      },
      {
        title: "Representación ante organismos públicos",
        description:
          "Superintendencia de Educación, Ministerio de Educación, Contraloría, Juzgados de Policía Local, Tribunales de Familia (por vulneraciones de derecho), Corte de Apelaciones y otros organismos públicos.",
      },
      {
        title: "Materias laborales",
        description:
          "Apoyo especializado en materias laborales propias de un establecimiento educacional: contratos y anexos, Ley Karin, desvinculaciones, pago de finiquitos, entre otras.",
      },
      {
        title: "Responsabilidad penal adolescente",
        description:
          "Contamos con especialista en responsabilidad penal adolescente, a la que se ven expuestos los alumnos que cometan hechos susceptibles de ser juzgados por materias penales.",
      },
    ],
    icon: "balance",
  },
  {
    slug: "asesoria-contable",
    title: "Asesoría Jurídica Contable",
    audience: "Sostenedores y administraciones",
    summary:
      "Equipo de auditores y contadores especialistas en rendición de cuentas y uso de subvenciones, que han demostrado avances reales en la gestión económica de los establecimientos educacionales.",
    areas: [
      {
        title: "Rendición de cuentas y recursos",
        description:
          "Auditoría y acompañamiento en el uso de subvenciones, evitando la aplicación de multas y saldos iniciales negativos al momento de acreditar saldos.",
      },
      {
        title: "Remuneraciones y asignaciones",
        description:
          "Asesoría en remuneraciones, pagos de bonos y asignaciones recibidas por los trabajadores del establecimiento, descuentos legales y pago de servicios.",
      },
    ],
    icon: "audit",
  },
];

// Texto real de "Quiénes somos" entregado por la clienta.
export const aboutText =
  "Somos un equipo formado por abogadas expertas en educación y contamos con auditores especializados en rendición de subvenciones. Realizamos asesorías a establecimientos educacionales en distintos ámbitos, tales como revisión de reglamentos internos, aplicación de la normativa vigente, ley de inclusión y convivencia escolar, entre otros.";

// Diferenciadores reales (en lugar de métricas inventadas).
export const differentiators = [
  {
    title: "Liderazgo experto",
    text: "Asesoría liderada por una abogada ex funcionaria de la Superintendencia de Educación.",
    icon: "balance",
  },
  {
    title: "Auditores especializados",
    text: "Auditores expertos en rendición de subvenciones que previenen observaciones y multas.",
    icon: "audit",
  },
  {
    title: "Enfoque preventivo",
    text: "Anticipamos los riesgos legales antes de que se transformen en sanciones.",
    icon: "shield",
  },
  {
    title: "Representación integral",
    text: "Te acompañamos ante la Superintendencia, el Mineduc y los Tribunales.",
    icon: "landmark",
  },
];

export const values = [
  {
    title: "Compromiso",
    text: "Tomamos cada caso como propio, con dedicación y cercanía en todo el proceso.",
    icon: "heart",
  },
  {
    title: "Transparencia",
    text: "Honestidad y claridad en cada paso: sin letra chica ni sorpresas.",
    icon: "eye",
  },
  {
    title: "Especialización",
    text: "Foco exclusivo en derecho educacional, no somos generalistas.",
    icon: "spark",
  },
  {
    title: "Equipo experto",
    text: "Abogadas en educación y auditores en subvenciones trabajando para ti.",
    icon: "users",
  },
];
