import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import {
  Menu,
  X,
  MessageCircle,
  ArrowRight,
  Check,
  MapPin,
  Instagram,
  Facebook,
  Quote,
  Monitor,
  Smartphone,
  ExternalLink,
  Home,
  Stethoscope,
  UtensilsCrossed,
  Store,
  Briefcase,
  MoreHorizontal,
  Images,
  Clock,
  Star,
  HelpCircle,
  Share2,
  Search,
  Map as MapIcon,
  Wrench,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import projFlorida from "@/assets/la-florida-01-dispositivos.jpg";
import projFloridaFicha from "@/assets/la-florida-02-ficha-editorial.jpg";
import projVioleta from "@/assets/terapia-violeta-01-dispositivos.jpg";
import projAeme from "@/assets/aeme-01-dispositivos.jpg";
import projFiesta from "@/assets/tu-fiesta-facil-02-ficha-editorial.jpg";
import projQi from "@/assets/el-camino-del-qi-02-ficha-editorial.jpg";

/* ───────────────────────────── datos ───────────────────────────── */

const WA_BASE = "https://wa.me/529612559561";
const wa = (msg: string) => `${WA_BASE}?text=${encodeURIComponent(msg)}`;

const WA = {
  hero: wa("Hola, vi su página y quiero saber cómo podría verse mi negocio en internet."),
  inicial: wa("Hola, me interesa el paquete Vitrina Inicial de $1,000 MXN."),
  pro: wa("Hola, me interesa el paquete Vitrina Pro de $1,300 MXN."),
  portafolio: wa("Hola, vi sus proyectos y quiero saber qué tipo de página recomiendan para mi negocio."),
  especial: wa("Hola, necesito una función o herramienta especial para mi negocio y quisiera saber si pueden desarrollarla."),
  actualizacion: wa("Hola, ya tengo una página y necesito solicitar una actualización."),
  flotante: wa("Hola, quiero información sobre las páginas de Mi Vitrina Digital."),
};

const FAQ = [
  {
    q: "¿Qué necesito enviar para comenzar?",
    a: "Fotografías, logotipo si lo tienes, información de tu negocio, servicios, horarios, ubicación y datos de contacto. Si tu material está incompleto, te ayudamos a ordenarlo, mejorarlo y redactarlo.",
  },
  {
    q: "¿Cuánto tarda la creación?",
    a: "El tiempo estimado es de 3 a 5 días naturales, contados a partir de que recibimos el material necesario.",
  },
  {
    q: "¿Qué es una ronda de ajustes?",
    a: "Una ronda de ajustes es un conjunto de cambios reunidos y enviados en una sola ocasión. Vitrina Inicial incluye hasta 2 rondas y Vitrina Pro hasta 5, antes de publicar.",
  },
  {
    q: "¿El dominio está incluido?",
    a: "Sí. Ambos paquetes incluyen el dominio .com durante el primer año.",
  },
  {
    q: "¿El alojamiento está incluido?",
    a: "Sí. El alojamiento también está incluido durante el primer año, por lo que tu página permanece publicada durante ese periodo.",
  },
  {
    q: "¿Qué sucede después del primer año?",
    a: "Puedes solicitar la renovación con Mi Vitrina Digital o realizarla por tu cuenta. También puedes mover tu página si así lo prefieres.",
  },
  {
    q: "¿Recibiré los accesos de mi página?",
    a: "Sí. Te entregamos las llaves o accesos necesarios para que tengas control sobre tu proyecto.",
  },
  {
    q: "¿Puedo solicitar modificaciones después?",
    a: "Sí. Las actualizaciones sencillas tienen un costo desde $200 MXN por solicitud: horarios, fotografías, teléfono, precios, textos o dirección.",
  },
  {
    q: "¿Qué no está incluido en los paquetes?",
    a: "No están incluidas las aplicaciones, sistemas, automatizaciones ni integraciones especiales. Tampoco los rediseños, nuevas páginas o nuevas secciones posteriores a la publicación: se revisan y cotizan antes de comenzar.",
  },
  {
    q: "¿Pueden crear funciones especiales?",
    a: "Primero revisamos si podemos implementarla y te explicamos el alcance y el costo. No prometemos desarrollar cualquier sistema sin revisarlo antes.",
  },
  {
    q: "¿Trabajan solamente en San Cristóbal?",
    a: "No. Partimos de San Cristóbal de Las Casas, Chiapas, y atendemos clientes de México, Estados Unidos y otros países. Todo el proceso puede realizarse a distancia.",
  },
  {
    q: "¿Cómo se realiza el pago?",
    a: "50% para iniciar y 50% antes de publicar. El anticipo inicial no es reembolsable, ya que se utiliza para adquirir el dominio y el alojamiento y para comenzar el trabajo. Los datos de pago se proporcionan por WhatsApp.",
  },
];

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Qué incluye", href: "#incluye" },
  { label: "Precios", href: "#precios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Preguntas frecuentes", href: "#faq" },
];

const spring = { type: "spring" as const, stiffness: 220, damping: 26, mass: 0.6 };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Páginas web profesionales desde $1,000 MXN | Vitrina Pro" },
      {
        name: "description",
        content:
          "Creamos páginas web profesionales y accesibles para negocios de México, Estados Unidos y otros países. Dominio y alojamiento incluidos durante el primer año.",
      },
      { property: "og:title", content: "Páginas web profesionales desde $1,000 MXN | Vitrina Pro" },
      {
        property: "og:description",
        content:
          "Mi Vitrina Digital · Vitrina Pro. Páginas profesionales a precio accesible, con dominio y alojamiento incluidos el primer año.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              name: "Mi Vitrina Digital · Vitrina Pro",
              description:
                "Creación de páginas web profesionales y accesibles para negocios, profesionistas y prestadores de servicios.",
              telephone: "+529612559561",
              areaServed: ["MX", "US"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Cristóbal de Las Casas",
                addressRegion: "Chiapas",
                addressCountry: "MX",
              },
              offers: {
                "@type": "Offer",
                price: "1000",
                priceCurrency: "MXN",
                name: "Vitrina Inicial",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

/* ───────────────────────────── utilidades UI ───────────────────────────── */

function Reveal({
  children,
  delay = 0,
  y = 14,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}

/* ───────────────────────────── página ───────────────────────────── */

function Index() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased selection:bg-brand/20">
      <Header />
      <main id="inicio">
        <Hero />
        <Proyectos />
        <QueIncluye />
        <SelectorNegocio />
        <FlujoRedesWebWhatsapp />
        <Precios />
        <Proceso />
        <HerramientasWeb />
        <Testimonios />
        <Preguntas />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}

/* ───────────────────────────── chrome ───────────────────────────── */

function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-3 group">
      <span
        aria-hidden
        className="relative inline-flex h-10 w-9 items-center justify-center rounded-md border-[1.5px] border-brand bg-background transition-transform group-hover:-rotate-2"
      >
        <span className="absolute left-1 top-1 flex gap-[2px]">
          <span className="h-[3px] w-[3px] rounded-full bg-brand/70" />
          <span className="h-[3px] w-[3px] rounded-full bg-brand/70" />
          <span className="h-[3px] w-[3px] rounded-full bg-brand/70" />
        </span>
        <span className="mt-2 flex h-4 w-5 flex-col overflow-hidden rounded-[2px] border-[1.5px] border-brand">
          <span className="h-1 w-full border-b-[1.5px] border-brand" />
          <span className="flex flex-1">
            <span className="flex-1 border-r-[1.5px] border-brand" />
            <span className="flex-1" />
          </span>
        </span>
      </span>
      <span className="leading-[1.05]">
        <span className="block font-display text-[15px] font-bold tracking-tight text-foreground">
          Mi Vitrina <span className="text-ink-soft font-medium">Digital</span>
        </span>
        <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.28em] text-brand">
          — Vitrina Pro —
        </span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        scrolled ? "backdrop-blur-md bg-background/85 border-b hairline" : "bg-background/60"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WA.hero}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-background transition-transform hover:-translate-y-0.5 hover:bg-brand"
          >
            Quiero mi página
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={WA.flotante}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribir por WhatsApp"
            className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-trust text-trust-foreground"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border hairline"
            aria-label="Abrir menú"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28 }}
          className="lg:hidden border-t hairline bg-background"
        >
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-surface"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WA.hero}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-background"
            >
              Quiero mi página
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function WhatsappFab() {
  return (
    <a
      href={WA.flotante}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      style={{ bottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
      className="fixed right-4 z-50 inline-flex items-center gap-2 rounded-full bg-trust px-4 py-3 text-trust-foreground shadow-lg shadow-trust/30 transition-transform hover:-translate-y-0.5"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-[12px] font-semibold uppercase tracking-[0.14em]">
        WhatsApp
      </span>
    </a>
  );
}

/* ───────────────────────────── 01 hero ───────────────────────────── */

const HERO_SLIDES = [
  { img: projFlorida, label: "Turismo", name: "La Florida Paraíso Ecoturístico" },
  { img: projVioleta, label: "Servicios profesionales", name: "Terapia con Violeta" },
  { img: projAeme, label: "Empresas", name: "AEME — Alianza Empresarial" },
  { img: projQi, label: "Bienestar", name: "Qi Flow Hands" },
];

function Hero() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 4500);
    return () => clearInterval(t);
  }, [reduce, paused]);

  const slide = HERO_SLIDES[idx];

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--hairline) 1px, transparent 1px), linear-gradient(to bottom, var(--hairline) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-16 sm:px-6 lg:px-8 lg:pt-18 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1.1fr]">
          <div>
            <Reveal>
              <Eyebrow>Páginas web para negocios y profesionistas</Eyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-[34px] leading-[1.06] tracking-tight sm:text-[52px] lg:text-[62px]">
                Tu negocio ya está en redes.
                <br />
                Ahora dale una{" "}
                <span className="text-brand">vitrina profesional.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-soft">
                Creamos páginas rápidas, profesionales y fáciles de contactar para
                negocios de México, Estados Unidos y cualquier parte del mundo.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-7 inline-flex flex-col gap-1 rounded-2xl border border-brand/30 bg-brand/8 px-5 py-4">
                <span className="font-display text-[30px] font-semibold leading-none tracking-tight text-brand sm:text-[34px]">
                  Desde $1,000 MXN
                </span>
                <span className="text-[13.5px] text-ink-soft">
                  Dominio .com y alojamiento incluidos durante el primer año.
                </span>
                <span className="text-[12px] text-ink-soft/80">
                  Entrega estimada de 3 a 5 días naturales.
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={WA.hero}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-[0_10px_30px_-12px_rgba(124,137,98,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-[#6b7855]"
                >
                  Quiero ver cómo podría verse mi negocio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#proyectos"
                  className="inline-flex items-center gap-2 rounded-full border hairline bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-surface transition-colors"
                >
                  Ver proyectos reales
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-ink-soft">
                {[
                  "Adaptable a celular",
                  "WhatsApp integrado",
                  "Dominio y alojamiento incluidos",
                  "Accesos entregados al cliente",
                ].map((t) => (
                  <li key={t} className="inline-flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-brand" strokeWidth={3} />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.12} y={20}>
            <div className="relative">
              <div className="relative rounded-[28px] border hairline bg-background p-3 shadow-[0_30px_80px_-30px_rgba(30,30,30,0.25)]">
                <div className="relative overflow-hidden rounded-[20px] bg-surface aspect-[5/4]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={idx}
                      src={slide.img}
                      alt={`Captura real del sitio web de ${slide.name}`}
                      width={1280}
                      height={1024}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute left-4 bottom-4 rounded-full border hairline bg-background/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground backdrop-blur">
                    {slide.name}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                {HERO_SLIDES.map((s, i) => (
                  <button
                    key={s.label}
                    onClick={() => {
                      setIdx(i);
                      setPaused(true);
                    }}
                    aria-label={`Mostrar ${s.name}`}
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-all ${
                      i === idx
                        ? "border-brand bg-brand text-brand-foreground"
                        : "hairline bg-background text-ink-soft hover:text-foreground"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${i === idx ? "bg-brand-foreground" : "bg-brand/60"}`} />
                    {s.label}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-center text-[12.5px] italic text-ink-soft">
                Cada negocio necesita una página diferente.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 02 portafolio ───────────────────────────── */

type Proyecto = {
  slug: string;
  name: string;
  category: string;
  img: string;
  mobileImg?: string;
  url: string;
  description: string;
  cta: string;
  badge?: string;
  nota?: string;
};

const PROYECTOS: Proyecto[] = [
  {
    slug: "florida",
    name: "La Florida Paraíso Ecoturístico",
    category: "Ecoturismo y hospedaje",
    img: projFlorida,
    mobileImg: projFloridaFicha,
    url: "https://lafloridaparaisoecoturistico.com/",
    description:
      "Sitio para un proyecto ecoturístico: presenta el lugar, sus espacios y experiencias, con contacto directo por WhatsApp.",
    cta: "Visitar página real ↗",
  },
  {
    slug: "violeta",
    name: "Terapia con Violeta",
    category: "Psicología y servicios profesionales",
    img: projVioleta,
    url: "https://terapiaconvioleta.com/",
    description:
      "Página profesional de servicios de terapia, pensada para presentar el enfoque de atención y facilitar el contacto.",
    cta: "Visitar página real ↗",
  },
  {
    slug: "aeme",
    name: "AEME — Alianza Empresarial",
    category: "Servicios empresariales",
    img: projAeme,
    url: "https://aeme-alianza-empresarial.lovable.app/",
    description:
      "Página institucional que organiza la presentación de la alianza, sus servicios y sus medios de contacto.",
    cta: "Visitar página real ↗",
  },
  {
    slug: "qi",
    name: "Qi Flow Hands",
    category: "Bienestar y terapias",
    img: projQi,
    url: "https://qi-flow-hands.lovable.app/",
    description:
      "Sitio de bienestar y terapias con una presentación cálida de los servicios y acceso directo al contacto.",
    cta: "Visitar página real ↗",
  },
  {
    slug: "fiesta",
    name: "Tu Fiesta Fácil",
    category: "Aplicación web / proyecto especial",
    img: projFiesta,
    url: "https://tu-fiesta-facil.lovable.app/",
    description:
      "Proyecto especial con funciones que van más allá de una página informativa.",
    cta: "Ver herramienta real ↗",
    badge: "Aplicación web",
    nota: "Las funciones especiales, sistemas e integraciones se revisan y cotizan por separado.",
  },
];

function Proyectos() {
  const [preview, setPreview] = useState<Proyecto | null>(null);
  return (
    <section id="proyectos" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <Reveal><Eyebrow>Portafolio</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-[30px] leading-[1.1] tracking-tight sm:text-[42px] lg:text-[50px]">
                Páginas reales que ya hemos creado.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-[15.5px] leading-relaxed text-ink-soft lg:max-w-md">
              Cada negocio tiene necesidades distintas. Organizamos la información
              y diseñamos una experiencia adecuada para cada proyecto.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {PROYECTOS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.06}>
              <ProyectoCard p={p} onPreview={() => setPreview(p)} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 text-center">
            <a
              href={WA.portafolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border hairline bg-background px-6 py-3 text-[13px] font-semibold text-foreground hover:bg-brand hover:text-brand-foreground hover:border-brand transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              ¿Qué página recomiendan para mi negocio?
            </a>
          </div>
        </Reveal>
      </div>

      <AnimatePresence>
        {preview && <PreviewModal p={preview} onClose={() => setPreview(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProyectoCard({ p, onPreview }: { p: Proyecto; onPreview: () => void }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={spring}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border hairline bg-background"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative overflow-hidden bg-surface aspect-[16/10]">
        <motion.img
          src={p.img}
          alt={`Captura real del sitio ${p.name}`}
          loading="lazy"
          width={1280}
          height={800}
          animate={{ y: hover ? "-18%" : "0%" }}
          transition={{ duration: 3.2, ease: "easeInOut" }}
          className="absolute inset-0 h-[130%] w-full object-cover object-top"
        />
        {p.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-trust px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-trust-foreground">
            {p.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <Eyebrow>{p.category}</Eyebrow>
        <h3 className="mt-2 font-display text-[22px] leading-snug tracking-tight">{p.name}</h3>
        <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{p.description}</p>
        {p.nota && (
          <p className="mt-3 rounded-xl bg-surface/70 px-3 py-2 text-[12.5px] leading-relaxed text-ink-soft">
            {p.nota}
          </p>
        )}
        <div className="mt-6 flex flex-wrap items-center gap-3 pt-0">
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-[12.5px] font-semibold text-brand-foreground transition-colors hover:bg-foreground"
          >
            {p.cta}
          </a>
          <button
            onClick={onPreview}
            className="inline-flex items-center gap-1.5 rounded-full border hairline px-4 py-2.5 text-[12.5px] font-semibold text-foreground hover:bg-surface transition-colors"
          >
            Ver vista previa
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function PreviewModal({ p, onClose }: { p: Proyecto; onClose: () => void }) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const src = device === "mobile" && p.mobileImg ? p.mobileImg : p.img;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-ink/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={spring}
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto w-full max-w-3xl rounded-3xl border hairline bg-background p-4 shadow-[0_40px_100px_-30px_rgba(30,30,30,0.5)] sm:p-6"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <Eyebrow>{p.category}</Eyebrow>
            <h3 className="mt-1 font-display text-[21px] leading-snug tracking-tight">{p.name}</h3>
          </div>
          <div className="flex items-center gap-2">
            {p.mobileImg && (
              <div className="inline-flex rounded-full border hairline bg-surface/60 p-1">
                {(["desktop", "mobile"] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDevice(d)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                      device === d ? "bg-background text-foreground shadow-sm" : "text-ink-soft"
                    }`}
                  >
                    {d === "desktop" ? <Monitor className="h-3.5 w-3.5" /> : <Smartphone className="h-3.5 w-3.5" />}
                    {d === "desktop" ? "Escritorio" : "Móvil"}
                  </button>
                ))}
              </div>
            )}
            <button
              onClick={onClose}
              aria-label="Cerrar vista previa"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border hairline hover:bg-surface"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-5 flex justify-center rounded-2xl bg-surface p-3 sm:p-5">
          <div className="w-full overflow-hidden rounded-xl border hairline bg-background">
            <img
              src={src}
              alt={`Captura real del sitio ${p.name}`}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <p className="mt-5 text-[14px] leading-relaxed text-ink-soft">{p.description}</p>

        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[12.5px] font-semibold text-brand-foreground transition-colors hover:bg-foreground"
        >
          {p.cta} <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </motion.div>
    </motion.div>
  );
}

/* ───────────────────────────── 03 qué puede incluir ───────────────────────────── */

function QueIncluye() {
  const items = [
    { icon: Briefcase, label: "Servicios" },
    { icon: Images, label: "Galería" },
    { icon: MapPin, label: "Dirección" },
    { icon: MapIcon, label: "Mapa" },
    { icon: Clock, label: "Horarios" },
    { icon: Star, label: "Opiniones" },
    { icon: HelpCircle, label: "Preguntas frecuentes" },
    { icon: Share2, label: "Enlaces a redes" },
    { icon: MessageCircle, label: "Botón de WhatsApp" },
    { icon: Search, label: "SEO básico" },
  ];
  return (
    <section id="incluye" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal><Eyebrow>Qué puede incluir</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[30px] leading-[1.1] tracking-tight sm:text-[42px] lg:text-[50px]">
              Todo lo que tu cliente necesita, en un solo lugar.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border hairline bg-hairline sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.label} delay={(i % 5) * 0.05}>
                <div className="flex h-full items-center gap-3 bg-background p-5 transition-colors hover:bg-surface/60">
                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-surface text-brand">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-[14px] font-medium">{it.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-[14px] text-ink-soft">
            Seleccionamos y organizamos las secciones que realmente necesita cada negocio.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── 04 selector ───────────────────────────── */

const NEGOCIOS = [
  {
    id: "hospedaje",
    label: "Hospedaje",
    icon: Home,
    items: ["Habitaciones", "Galería", "Tarifas", "Ubicación", "Opiniones", "Reservar por WhatsApp"],
    cta: "Reservar por WhatsApp",
  },
  {
    id: "restaurante",
    label: "Restaurante",
    icon: UtensilsCrossed,
    items: ["Menú", "Galería", "Horarios", "Mapa", "Opiniones", "Reservaciones"],
    cta: "Reservar una mesa",
  },
  {
    id: "consultorio",
    label: "Consultorio",
    icon: Stethoscope,
    items: ["Perfil profesional", "Servicios", "Horarios", "Preguntas frecuentes", "Ubicación", "Agendar por WhatsApp"],
    cta: "Agendar una cita",
  },
  {
    id: "tienda",
    label: "Tienda",
    icon: Store,
    items: ["Catálogo", "Categorías", "Precios", "Formas de pago", "Ubicación", "Pedidos por WhatsApp"],
    cta: "Hacer un pedido",
  },
  {
    id: "servicios",
    label: "Servicios profesionales",
    icon: Briefcase,
    items: ["Presentación", "Servicios", "Experiencia", "Testimonios", "Preguntas frecuentes", "Solicitar información"],
    cta: "Solicitar información",
  },
  {
    id: "otro",
    label: "Otro",
    icon: MoreHorizontal,
    items: ["Nos cuentas de tu negocio", "Definimos las secciones", "Organizamos la información", "Fotografías y textos", "Botón de WhatsApp", "Publicación"],
    cta: "Contar mi caso",
  },
];

function SelectorNegocio() {
  const [active, setActive] = useState(NEGOCIOS[0].id);
  const current = NEGOCIOS.find((n) => n.id === active)!;
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal><Eyebrow>Interactivo</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[30px] leading-[1.1] tracking-tight sm:text-[42px] lg:text-[50px]">
              ¿Qué tipo de negocio tienes?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[15.5px] text-ink-soft">
              Elige una opción para ver cómo podría organizarse tu página.
            </p>
          </Reveal>
        </div>

        <div className="mt-9 flex flex-wrap gap-2">
          {NEGOCIOS.map((n) => {
            const Icon = n.icon;
            const on = n.id === active;
            return (
              <button
                key={n.id}
                onClick={() => setActive(n.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[13px] font-semibold transition-all ${
                  on
                    ? "border-brand bg-brand text-brand-foreground shadow-[0_10px_24px_-14px_rgba(124,137,98,0.6)]"
                    : "hairline bg-background text-foreground hover:border-brand/40"
                }`}
              >
                <Icon className="h-4 w-4" />
                {n.label}
              </button>
            );
          })}
        </div>

        <div className="mt-9 grid gap-7 lg:grid-cols-[1.05fr_1fr]">
          <div className="rounded-[28px] border hairline bg-background p-3 shadow-[0_30px_80px_-40px_rgba(30,30,30,0.25)]">
            <div className="overflow-hidden rounded-[20px] border hairline">
              <div className="flex items-center gap-1.5 border-b hairline bg-surface/60 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-brand/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand/40" />
                <span className="ml-3 text-[11px] text-ink-soft">tunegocio.com</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.32 }}
                  className="space-y-3 bg-background p-5 sm:p-6"
                >
                  <div className="font-display text-[20px] leading-tight tracking-tight sm:text-[24px]">
                    {current.label}
                  </div>
                  <div className="h-24 rounded-2xl bg-surface" />
                  <div className="grid grid-cols-3 gap-2">
                    {current.items.slice(0, 3).map((it) => (
                      <div key={it} className="rounded-xl border hairline p-3">
                        <div className="text-[11px] font-semibold text-foreground">{it}</div>
                        <div className="mt-2 h-1.5 w-10/12 rounded-full bg-brand/20" />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {current.items.slice(3).map((it) => (
                      <div key={it} className="flex items-center justify-between rounded-xl border hairline px-3.5 py-2.5">
                        <span className="text-[12.5px] text-foreground">{it}</span>
                        <span className="h-1.5 w-14 rounded-full bg-brand/20" />
                      </div>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-trust px-4 py-2 text-[12px] font-semibold text-trust-foreground">
                    <MessageCircle className="h-3.5 w-3.5" /> {current.cta}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[28px] border hairline bg-background p-7 sm:p-8">
            <Eyebrow>Módulos recomendados</Eyebrow>
            <h3 className="mt-3 font-display text-[24px] tracking-tight">{current.label}</h3>
            <ul className="mt-6 space-y-3">
              <AnimatePresence mode="popLayout">
                {current.items.map((it, i) => (
                  <motion.li
                    key={`${current.id}-${it}`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.28 }}
                    className="flex items-center gap-3 text-[15px]"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/12 text-brand">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {it}
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
            <a
              href={WA.portafolio}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-[13px] font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> {current.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 05 redes → web → whatsapp ───────────────────────────── */

function FlujoRedesWebWhatsapp() {
  const steps = [
    { icon: Instagram, label: "Instagram y Facebook", text: "Te descubren.", dark: false },
    { icon: Monitor, label: "Página web", text: "Conocen y entienden tu negocio.", dark: false },
    { icon: MessageCircle, label: "WhatsApp", text: "Te escriben.", dark: true },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.label} delay={i * 0.12}>
                <div
                  className={`flex h-full flex-col items-start rounded-3xl border p-7 ${
                    s.dark ? "border-transparent bg-trust text-trust-foreground" : "hairline bg-surface"
                  }`}
                >
                  <span className={`eyebrow ${s.dark ? "!text-trust-foreground/70" : ""}`}>Paso {i + 1}</span>
                  <span
                    className={`mt-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                      s.dark ? "bg-trust-foreground/15 text-trust-foreground" : "bg-brand/12 text-brand"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className={`mt-5 font-display text-[21px] tracking-tight ${s.dark ? "text-trust-foreground" : ""}`}>
                    {s.label}
                  </h3>
                  <p className={`mt-2 text-[14.5px] ${s.dark ? "text-trust-foreground/85" : "text-ink-soft"}`}>
                    {s.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-center font-display text-[24px] leading-tight tracking-tight sm:text-[36px]">
            Las redes atraen.{" "}
            <span className="text-brand">Tu página web convence.</span>{" "}
            <span className="text-trust">WhatsApp convierte.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── 06 precios ───────────────────────────── */

type Paquete = {
  name: string;
  tag: string;
  price: string;
  intro: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

const PAQUETES: Paquete[] = [
  {
    name: "Vitrina Inicial",
    tag: "Para comenzar",
    price: "$1,000 MXN",
    intro: "Todo lo necesario para comenzar a verte profesional en internet.",
    features: [
      "Llamada inicial para conocer el negocio",
      "Página informativa de una sola vista larga",
      "Diseño adaptable a computadora, tablet y celular",
      "Organización de la información",
      "Integración de fotografías, logotipo y datos proporcionados por el cliente",
      "Ayuda para ordenar, mejorar y redactar el contenido",
      "Secciones acordadas según las necesidades del negocio",
      "Botón de WhatsApp",
      "SEO básico",
      "Dominio .com durante el primer año",
      "Alojamiento durante el primer año",
      "Hasta 2 rondas de ajustes antes de publicar",
    ],
    cta: "Elegir Vitrina Inicial",
    href: WA.inicial,
  },
  {
    name: "Vitrina Pro",
    tag: "Más elegido",
    price: "$1,300 MXN",
    intro: "Mayor flexibilidad para revisar y afinar tu página antes de publicarla.",
    features: [
      "Todo lo incluido en Vitrina Inicial",
      "Hasta 5 rondas de ajustes antes de publicar",
      "Más oportunidades para afinar textos, fotografías, orden de secciones y detalles visuales",
    ],
    cta: "Elegir Vitrina Pro",
    href: WA.pro,
    featured: true,
  },
];

function Precios() {
  const simples = [
    "Cambiar horarios",
    "Cambiar fotografías",
    "Actualizar teléfono",
    "Cambiar precios",
    "Corregir o sustituir textos",
    "Actualizar dirección",
    "Modificar información existente",
  ];
  return (
    <section id="precios" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><Eyebrow>Precios</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[30px] leading-[1.1] tracking-tight sm:text-[42px] lg:text-[50px]">
              Dos formas de comenzar tu página.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[15.5px] text-ink-soft">
              La diferencia principal entre ambos paquetes es el número de rondas
              de ajustes y el tiempo de revisión dedicado al proyecto.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2 md:items-stretch">
          {PAQUETES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <PaqueteCard p={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-4xl rounded-2xl border hairline bg-background px-5 py-4 text-[13.5px] leading-relaxed text-ink-soft">
            <span className="font-semibold text-foreground">¿Qué es una ronda de ajustes?</span>{" "}
            Una ronda de ajustes es un conjunto de cambios reunidos y enviados en una sola ocasión.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-8 max-w-4xl rounded-3xl border hairline bg-background p-7 sm:p-9">
            <Eyebrow>Después de publicar tu página</Eyebrow>
            <p className="mt-3 font-display text-[21px] leading-snug tracking-tight sm:text-[25px]">
              Las actualizaciones sencillas tienen un costo{" "}
              <span className="text-brand">desde $200 MXN por solicitud.</span>
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {simples.map((s) => (
                <span key={s} className="rounded-full border hairline bg-surface/60 px-3 py-1.5 text-[12.5px]">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-7 grid gap-4 border-t hairline pt-6 text-[13.5px] leading-relaxed text-ink-soft sm:grid-cols-2">
              <p>
                Cambios mayores, nuevas páginas, nuevas secciones, rediseños,
                herramientas, funciones adicionales o integraciones especiales se
                revisan y cotizan antes de comenzar.
              </p>
              <p>
                Si necesitas una función especial, primero revisamos si podemos
                implementarla y te explicamos el alcance y el costo.
              </p>
            </div>
            <a
              href={WA.actualizacion}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border hairline px-5 py-2.5 text-[12.5px] font-semibold hover:bg-surface transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Solicitar una actualización
            </a>
          </div>
        </Reveal>

        <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="h-full rounded-3xl border hairline bg-background p-7">
              <Eyebrow>Dominio, alojamiento y accesos</Eyebrow>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                Tu página incluye dominio .com y alojamiento durante el primer año.
                Te entregamos los accesos para que tengas control sobre tu proyecto.
                Al terminar el año puedes renovar con nosotros o administrarlo por tu cuenta.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border hairline bg-background p-7">
              <Eyebrow>Pago</Eyebrow>
              <p className="mt-3 font-display text-[20px] tracking-tight">
                50% para iniciar y 50% antes de publicar.
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                El anticipo inicial no es reembolsable, ya que se utiliza para
                adquirir el dominio y el alojamiento y para comenzar el trabajo.
                Los datos de pago se proporcionan por WhatsApp.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PaqueteCard({ p }: { p: Paquete }) {
  const featured = !!p.featured;
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={spring}
      className={`relative flex h-full flex-col rounded-3xl border bg-background p-7 transition-shadow sm:p-8 ${
        featured
          ? "border-brand shadow-[0_30px_60px_-30px_rgba(124,137,98,0.4)]"
          : "hairline hover:border-brand/40 hover:shadow-[0_20px_50px_-25px_rgba(30,30,30,0.18)]"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-foreground">
          Más elegido
        </span>
      )}
      <Eyebrow>{p.tag}</Eyebrow>
      <h3 className="mt-3 font-display text-[26px] tracking-tight">{p.name}</h3>
      <p className="mt-3 font-display text-[32px] font-semibold">{p.price}</p>
      <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{p.intro}</p>

      <div className="my-6 h-px bg-hairline" />

      <ul className="space-y-3 text-[14.5px]">
        {p.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span
              className={`mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                featured ? "bg-brand text-brand-foreground" : "bg-surface text-trust"
              }`}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className="text-ink-soft">{f}</span>
          </li>
        ))}
      </ul>

      <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 ${
          featured
            ? "bg-brand text-brand-foreground hover:bg-foreground"
            : "border hairline bg-background text-foreground hover:bg-surface"
        }`}
        style={{ marginTop: "auto", marginBlockStart: "2rem" }}
      >
        {p.cta}
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </motion.div>
  );
}

/* ───────────────────────────── 07 proceso ───────────────────────────── */

function Proceso() {
  const steps = [
    { n: "01", title: "Cuéntanos sobre tu negocio.", desc: "Realizamos una llamada inicial para conocer tus necesidades." },
    { n: "02", title: "Envíanos tu material.", desc: "Fotografías, logotipo, información, servicios y datos principales." },
    { n: "03", title: "Ordenamos y diseñamos.", desc: "Ayudamos a organizar, mejorar y redactar el contenido." },
    { n: "04", title: "Revisamos contigo.", desc: "Aplicamos las rondas de ajustes incluidas en tu paquete." },
    { n: "05", title: "Publicamos tu página.", desc: "Pagas el 50% restante y ponemos la página en línea." },
  ];
  return (
    <section id="proceso" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal><Eyebrow>Proceso</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[30px] leading-[1.1] tracking-tight sm:text-[42px] lg:text-[50px]">
              Comenzar es fácil.
            </h2>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-8 lg:grid-cols-5 lg:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <li className="relative pl-16 lg:pl-0">
                <span className="absolute left-0 top-0 grid h-14 w-14 place-items-center rounded-full border hairline bg-background font-display text-[14px] font-bold tracking-tight lg:relative lg:left-auto lg:top-auto">
                  {s.n}
                </span>
                <h3 className="mt-0 font-display text-[18px] leading-snug tracking-tight lg:mt-6">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{s.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.1}>
          <p className="mt-10 text-[13.5px] text-ink-soft">
            Tiempo estimado de entrega: de 3 a 5 días naturales, una vez recibido el material necesario.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── 08 herramientas web ───────────────────────────── */

function HerramientasWeb() {
  return (
    <section className="bg-trust py-20 text-trust-foreground sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <span className="eyebrow !text-trust-foreground/70">
              No todo tiene que ser una página informativa
            </span>
            <h2 className="mt-4 font-display text-[30px] leading-[1.1] tracking-tight sm:text-[42px] lg:text-[48px]">
              También podemos revisar <span className="text-brand">herramientas</span> para tu negocio.
            </h2>
            <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-trust-foreground/80">
              Algunos proyectos requieren funciones especiales. Revisamos cada idea
              para confirmar si podemos desarrollarla y preparamos una cotización
              independiente.
            </p>
            <p className="mt-5 max-w-lg rounded-2xl border border-trust-foreground/20 bg-trust-foreground/5 px-4 py-3 text-[13.5px] leading-relaxed text-trust-foreground/85">
              Las aplicaciones, sistemas, automatizaciones e integraciones no están
              incluidas en Vitrina Inicial ni en Vitrina Pro.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA.especial}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
              >
                <Wrench className="h-4 w-4" /> Consultar un proyecto especial
              </a>
              <a
                href="https://tu-fiesta-facil.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-trust-foreground/30 px-6 py-3.5 text-sm font-semibold text-trust-foreground transition-colors hover:bg-trust-foreground/10"
              >
                Ver herramienta real ↗
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-trust-foreground/15 bg-[#3a2c25] p-3 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.6)]">
            <div className="overflow-hidden rounded-[20px] bg-background">
              <img
                src={projFiesta}
                alt="Captura real de la herramienta web Tu Fiesta Fácil"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="px-2 pb-1 pt-3 text-[12px] text-trust-foreground/70">
              Tu Fiesta Fácil — proyecto especial cotizado por separado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 09 testimonios ───────────────────────────── */

function Testimonios() {
  const items = [
    {
      quote: "Mi página le da mayor certeza a mis consultantes y demuestra mi profesionalismo y experiencia.",
      name: "Psicóloga Violeta",
      project: "Terapia con Violeta",
    },
    {
      quote: "Me ha ayudado mucho a aclarar dudas desde antes de que me pregunten, sobre todo acerca de nuestros servicios.",
      name: "Omero",
      project: "La Florida Paraíso Ecoturístico",
    },
    {
      quote: "La información se muestra de forma más clara y evita confusiones.",
      name: "Ana Solís",
      project: "",
    },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal><Eyebrow>Testimonios</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[30px] leading-[1.1] tracking-tight sm:text-[42px] lg:text-[50px]">
              Lo que dicen quienes ya tienen su página.
            </h2>
          </Reveal>
        </div>

        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={spring}
                className="h-full rounded-3xl border hairline bg-background p-7"
              >
                <Quote className="h-6 w-6 text-brand" />
                <p className="mt-4 font-display text-[17px] leading-snug tracking-tight">“{t.quote}”</p>
                <div className="mt-6">
                  <p className="text-[13px] font-semibold text-foreground">{t.name}</p>
                  {t.project && <p className="text-[12.5px] text-ink-soft">{t.project}</p>}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 10 preguntas frecuentes ───────────────────────────── */

function Preguntas() {
  return (
    <section id="faq" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal><Eyebrow>Preguntas frecuentes</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[30px] leading-[1.1] tracking-tight sm:text-[42px]">
              Resolvemos las dudas más comunes.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-10 rounded-3xl border hairline bg-background px-5 sm:px-7">
            {FAQ.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-[16.5px] tracking-tight hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[14.5px] leading-relaxed text-ink-soft">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── 11 cta final ───────────────────────────── */

function CtaFinal() {
  return (
    <section id="contacto" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-brand px-7 py-16 text-center text-brand-foreground sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.25), transparent 40%)",
            }}
          />
          <div className="relative mx-auto max-w-3xl">
            <Reveal>
              <h2 className="font-display text-[30px] leading-[1.08] tracking-tight sm:text-[46px]">
                Tu negocio ya existe.
                <br />
                <span className="text-brand-foreground/85">
                  Hagamos que también se vea profesional en internet.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-5 text-[16px] text-brand-foreground/90">
                Páginas profesionales a precio accesible, desde $1,000 MXN.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <a
                href={WA.hero}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-trust px-7 py-4 text-sm font-semibold text-trust-foreground transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> Quiero mi página
              </a>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-[13px] text-brand-foreground/80">
                Dominio y alojamiento incluidos durante el primer año.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 12 footer ───────────────────────────── */

function Footer() {
  const links = [
    { label: "Proyectos", href: "#proyectos" },
    { label: "Precios", href: "#precios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Preguntas frecuentes", href: "#faq" },
  ];
  return (
    <footer className="border-t hairline bg-background pb-24 sm:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-ink-soft">
              Mi Vitrina Digital · Vitrina Pro. Páginas profesionales a precio accesible.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-[13.5px] text-ink-soft">
              <MapPin className="h-4 w-4 text-brand" /> San Cristóbal de Las Casas, Chiapas
            </p>
            <p className="mt-2 text-[13.5px] text-ink-soft">
              Atención a México, Estados Unidos y otros países.
            </p>
          </div>

          <div>
            <h4 className="eyebrow">Secciones</h4>
            <ul className="mt-4 space-y-3 text-[14px] text-ink-soft">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-foreground transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={WA.flotante}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow">Contacto</h4>
            <ul className="mt-4 space-y-3 text-[14px] text-ink-soft">
              <li>
                <a
                  href={WA.flotante}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground"
                >
                  <MessageCircle className="h-4 w-4 text-trust" /> WhatsApp +52 961 255 9561
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Instagram className="h-4 w-4" /> <Facebook className="h-4 w-4" /> Próximamente
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t hairline pt-6 text-[12.5px] text-ink-soft">
          © 2026 Mi Vitrina Digital · Vitrina Pro.
        </div>
      </div>
    </footer>
  );
}
