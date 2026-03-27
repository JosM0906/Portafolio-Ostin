import React from "react";
import {
  Briefcase,
  ChevronRight,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Target,
  TrendingUp,
  Users,
  Award,
  ClipboardList,
  BarChart3,
} from "lucide-react";
import fotoOstin from "./assets/ostin.jpeg";

const experience = [
  {
    role: "Ejecutivo de Ventas",
    company: "FIFCO",
    period: "Abr 2021 – Mar 2025",
    description:
      "Gestión y seguimiento de clientes, impulso de productos, apertura de mercado y cumplimiento de metas comerciales en consumo masivo.",
    bullets: [
      "Seguimiento efectivo de cartera y cierre de ventas.",
      "Negociación comercial y atención personalizada a clientes.",
      "Apertura de mercado y fortalecimiento de relaciones comerciales.",
    ],
  },
  {
    role: "Vendedor de Mercado Abierto (Preventa)",
    company: "Embotelladora La Mariposa (CBC)",
    period: "Experiencia previa",
    description:
      "Visita a clientes en ruta, toma de pedidos, promoción de productos y seguimiento comercial para ampliar cobertura y asegurar cumplimiento de objetivos.",
    bullets: [
      "Cobertura de ruta y mantenimiento de cartera activa.",
      "Promoción de productos y seguimiento de pedidos.",
      "Cumplimiento de metas de ventas en mercado abierto.",
    ],
  },
  {
    role: "Vendedor de Funcionales – Fuerza Verde",
    company: "Embotelladora La Mariposa (CBC)",
    period: "Experiencia previa",
    description:
      "Promoción y colocación de productos funcionales, impulso de marca y desarrollo de oportunidades de venta en la zona asignada.",
    bullets: [
      "Fortalecimiento de la presencia de marca.",
      "Seguimiento comercial y atención a clientes.",
      "Enfoque en resultados y posicionamiento de línea.",
    ],
  },
];

const technicalSkills = [
  "Gestión de ventas",
  "Negociación comercial",
  "Seguimiento de cartera de clientes",
  "Control de pedidos e inventarios",
  "Atención y servicio al cliente",
  "Elaboración de reportes de ventas",
  "Microsoft Office",
  "Excel intermedio",
];

const softSkills = [
  "Comunicación efectiva",
  "Trabajo en equipo",
  "Responsabilidad",
  "Proactividad",
  "Organización",
  "Adaptabilidad",
  "Resolución de problemas",
  "Orientación a resultados",
];

const strengths = [
  {
    icon: TrendingUp,
    title: "Enfoque comercial",
    text: "Orientado al cumplimiento de metas, seguimiento de clientes y crecimiento de ventas.",
  },
  {
    icon: Users,
    title: "Relación con clientes",
    text: "Capacidad para construir relaciones sólidas y sostenibles con clientes y equipos.",
  },
  {
    icon: Target,
    title: "Resultados medibles",
    text: "Experiencia en cobertura, apertura de mercado y ejecución comercial en campo.",
  },
  {
    icon: ClipboardList,
    title: "Gestión organizada",
    text: "Control de rutas, pedidos, seguimiento y apoyo administrativo con enfoque práctico.",
  },
];

const stats = [
  { value: "15+", label: "Años de experiencia", icon: Briefcase },
  { value: "2024", label: "Licenciatura finalizada", icon: GraduationCap },
  { value: "100%", label: "Compromiso laboral", icon: Award },
  { value: "Alta", label: "Orientación comercial", icon: BarChart3 },
];

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
        {subtitle}
      </p>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#D4DEE8] bg-[#EAF0F6] px-4 py-2 text-sm font-semibold text-[#1E3A5F]">
      {children}
    </span>
  );
}

export default function PortfolioOstin() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <button
            onClick={() => scrollTo("inicio")}
            className="text-3xl font-extrabold tracking-tight text-[#1E3A5F]"
          >
            Portafolio
          </button>

          <nav className="hidden gap-8 text-base font-medium text-slate-800 md:flex">
            <button
              onClick={() => scrollTo("inicio")}
              className="transition-colors hover:text-[#1E3A5F]"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollTo("experiencia")}
              className="transition-colors hover:text-[#1E3A5F]"
            >
              Experiencia
            </button>
            <button
              onClick={() => scrollTo("habilidades")}
              className="transition-colors hover:text-[#1E3A5F]"
            >
              Habilidades
            </button>
            <button
              onClick={() => scrollTo("sobre-mi")}
              className="transition-colors hover:text-[#1E3A5F]"
            >
              Sobre Mí
            </button>
          </nav>

          <button
            onClick={() => scrollTo("contacto")}
            className="rounded-xl bg-[#0F172A] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1E293B] hover:shadow-lg"
          >
            Contacto
          </button>
        </div>
      </header>

      <main>
        <section id="inicio" className="px-6 pb-20 pt-20 lg:px-10 lg:pt-24">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div>
              <Badge>Licenciado en Administración de Empresas</Badge>

              <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-[#0F172A] md:text-6xl xl:text-7xl">
                Impulsando resultados
                <span className="block text-[#1E3A5F]">
                  comerciales con experiencia
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
                Profesional con más de 15 años de trayectoria en ventas, preventa,
                atención al cliente, negociación comercial y seguimiento de cartera
                en consumo masivo. Enfoque en resultados, cobertura de mercado y
                relaciones comerciales sólidas.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo("experiencia")}
                  className="group inline-flex items-center rounded-2xl bg-[#0F172A] px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1E293B] hover:shadow-lg"
                >
                  Ver experiencia
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => scrollTo("contacto")}
                  className="rounded-2xl border border-[#CBD5E1] bg-white px-6 py-4 text-base font-semibold text-[#1E293B] transition hover:border-[#1E3A5F] hover:text-[#1E3A5F]"
                >
                  Contactar
                </button>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute inset-0 rounded-[2rem] bg-[#DCE6F1] blur-3xl opacity-70" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white p-4 shadow-2xl">
                <img
                  src={fotoOstin}
                  alt="Ostin Osorio"
                  className="h-[520px] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="experiencia" className="px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              title="Experiencia Destacada"
              subtitle="Trayectoria orientada a ventas, cobertura comercial, preventa y fortalecimiento de relaciones con clientes."
            />

            <div className="grid gap-8 lg:grid-cols-3">
              {experience.map((job) => (
                <article
                  key={job.role}
                  className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 inline-flex rounded-full bg-[#EAF0F6] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1E3A5F]">
                    {job.period}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F172A]">{job.role}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {job.company}
                  </p>
                  <p className="mt-5 text-base leading-8 text-slate-600">
                    {job.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-slate-700">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#1E3A5F]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="habilidades" className="px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              title="Habilidades y Competencias"
              subtitle="Conocimientos técnicos y fortalezas personales que respaldan la gestión comercial y administrativa."
            />

            <div className="mx-auto max-w-8xl space-y-8">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  Habilidades técnicas
                </h3>
                <p className="mt-3 text-slate-600">
                  Capacidades aplicadas en ventas, seguimiento comercial y gestión operativa.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {technicalSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#D4DEE8] bg-[#EAF0F6] px-4 py-2 text-sm font-medium text-[#1E3A5F]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  Habilidades blandas
                </h3>
                <p className="mt-3 text-slate-600">
                  Cualidades clave para trabajar con clientes, equipos y objetivos de negocio.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
                  >
                    <div className="inline-flex rounded-2xl bg-[#EAF0F6] p-4 text-[#1E3A5F]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="mt-5 text-xl font-bold text-[#0F172A]">
                      {item.title}
                    </h4>
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="px-6 py-20 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
              <SectionTitle
                title="Sobre Mí"
                subtitle="Una trayectoria construida con disciplina, servicio al cliente y orientación constante a resultados."
              />

              <div className="space-y-6 text-lg leading-9 text-slate-700">
                <p>
                  Soy un profesional con experiencia en ventas, preventa y gestión
                  comercial, enfocado en aportar valor a cada empresa a través del
                  cumplimiento de metas, la atención personalizada al cliente y el
                  seguimiento efectivo de oportunidades de negocio.
                </p>
                <p>
                  Me caracterizo por la responsabilidad, la organización, la
                  proactividad y la capacidad de adaptación en entornos dinámicos.
                  He trabajado en consumo masivo, desarrollando relaciones
                  comerciales sólidas y fortaleciendo la presencia de productos en
                  el mercado.
                </p>
                <p>
                  En 2024 finalicé la Licenciatura en Administración de Empresas en
                  Universidad Galileo, consolidando una base académica que
                  complementa mi experiencia práctica en campo y gestión operativa.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-[#0F172A] to-[#1E3A5F] p-8 text-white shadow-xl lg:p-10">
              <div className="flex items-center gap-3 text-[#D8E3EE]">
                <Briefcase className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Perfil Ejecutivo
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-bold leading-tight">
                Ostin Osorio
              </h3>
              <p className="mt-2 text-lg text-slate-200">
                Ventas • Administración • Consumo masivo
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {stats.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <Icon className="h-6 w-6 text-[#D8E3EE]" />
                      <div className="mt-4 text-3xl font-extrabold text-white">
                        {item.value}
                      </div>
                      <div className="mt-1 text-sm text-slate-300">
                        {item.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
            <SectionTitle
              title="Contacto"
              subtitle="Disponible para oportunidades laborales, entrevistas y nuevas propuestas profesionales."
            />

            <div className="grid gap-6 md:grid-cols-3">
              <a
                href="tel:+50247403412"
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition hover:border-[#1E3A5F] hover:bg-[#EAF0F6]"
              >
                <Phone className="h-6 w-6 text-[#1E3A5F]" />
                <h4 className="mt-4 text-lg font-bold">Teléfono</h4>
                <p className="mt-2 text-slate-600">+502 4740-3412</p>
              </a>

              <a
                href="mailto:ostinosorio007@gmail.com"
                className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 transition hover:border-[#1E3A5F] hover:bg-[#EAF0F6]"
              >
                <Mail className="h-6 w-6 text-[#1E3A5F]" />
                <h4 className="mt-4 text-lg font-bold">Correo</h4>
                <p className="mt-2 break-all text-slate-600">
                  ostinosorio007@gmail.com
                </p>
              </a>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <MapPin className="h-6 w-6 text-[#1E3A5F]" />
                <h4 className="mt-4 text-lg font-bold">Ubicación</h4>
                <p className="mt-2 text-slate-600">Ciudad de Guatemala</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-10 bg-[#0F172A] px-6 py-12 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-3xl font-black text-[#D8E3EE]">Portafolio</h3>
            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              Perfil profesional diseñado para presentar experiencia comercial,
              formación y propuesta de valor de forma clara y elegante.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold">Navegación</h4>
            <ul className="mt-4 space-y-3 text-slate-400">
              <li>
                <button onClick={() => scrollTo("inicio")} className="hover:text-white">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("experiencia")} className="hover:text-white">
                  Experiencia
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("habilidades")} className="hover:text-white">
                  Habilidades
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("sobre-mi")} className="hover:text-white">
                  Sobre Mí
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold">Perfil</h4>
            <ul className="mt-4 space-y-3 text-slate-400">
              <li>Ventas y negociación comercial</li>
              <li>Atención al cliente</li>
              <li>Consumo masivo</li>
              <li>Administración de Empresas</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}