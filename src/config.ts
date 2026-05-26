// Configuración central del sitio. Edita aquí los datos reales de Legal Educa.

export const site = {
  name: "LegalEduca",
  legalName: "Legal Educa",
  tagline: "Asesoría jurídica educacional en Chile",
  description:
    "Asesoría jurídica educacional en Chile. Abogadas expertas en derecho educacional y auditores en rendición de subvenciones para tu establecimiento.",
  url: "https://legaleduca.cl",
  // Contacto real:
  email: "abogadapriscilameza@gmail.com",
  contactPerson: "Priscila Meza Quioza",
  contactRole: "Abogada · Especialista en Derecho Educacional",
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

export type Service = {
  slug: string;
  title: string;
  audience: string;
  summary: string;
  benefits: string[];
  icon: "balance" | "shield" | "users" | "landmark" | "audit";
};

export const services: Service[] = [
  {
    slug: "asesoria-juridica",
    title: "Asesoría Jurídica de Alto Nivel",
    audience: "Establecimientos educacionales",
    summary:
      "Asesoría liderada por una abogada ex funcionaria de la Superintendencia de Educación, para garantizar el cumplimiento legal de tu institución.",
    benefits: [
      "Cumplimiento de la normativa educacional vigente",
      "Mirada experta desde la fiscalización",
      "Aplicación de la Ley de Inclusión",
      "Prevención de riesgos legales",
    ],
    icon: "balance",
  },
  {
    slug: "subvenciones",
    title: "Control Riguroso de Subvenciones",
    audience: "Sostenedores y administraciones",
    summary:
      "Auditorías especializadas en rendición de cuentas para prevenir observaciones y multas en el uso de la subvención.",
    benefits: [
      "Auditoría de rendición de subvenciones",
      "Prevención de observaciones y multas",
      "Ordenamiento de respaldos y procesos",
      "Auditores especializados",
    ],
    icon: "audit",
  },
  {
    slug: "convivencia-escolar",
    title: "Fortalecimiento de la Convivencia Escolar",
    audience: "Equipos directivos y docentes",
    summary:
      "Capacitación de equipos, gestión de casos y actualización de protocolos internos para una sana convivencia escolar.",
    benefits: [
      "Capacitación de equipos",
      "Gestión y seguimiento de casos",
      "Actualización de protocolos internos",
      "Revisión de reglamentos internos",
    ],
    icon: "users",
  },
  {
    slug: "representacion",
    title: "Representación ante Organismos Públicos",
    audience: "Instituciones educativas",
    summary:
      "Gestión experta ante la Superintendencia de Educación, el Ministerio de Educación y los Tribunales de Justicia.",
    benefits: [
      "Representación ante la Superintendencia",
      "Gestiones ante el Ministerio de Educación",
      "Defensa en Tribunales",
      "Respuesta a fiscalizaciones",
    ],
    icon: "landmark",
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
