import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import {
  Menu,
  X,
  MessageCircle,
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  MapPin,
  Phone,
  Share2,
  TrendingUp,
  Instagram,
  Facebook,
  Mail,
  Star,
  Quote,
  ChevronRight,
  Monitor,
  Smartphone,
  ExternalLink,
  Send,
  Home,
  Stethoscope,
  UtensilsCrossed,
  Store,
  Briefcase,
  MoreHorizontal,
  Package,
  FileText,
  ShoppingCart,
  Users,
  BarChart3,
  GripVertical,
} from "lucide-react";

import projFloridaAsset from "@/assets/la-florida-01-dispositivos.png.asset.json";
import projFloridaFichaAsset from "@/assets/la-florida-02-ficha-editorial.png.asset.json";
import projVioletaAsset from "@/assets/terapia-violeta-01-dispositivos.png.asset.json";
import projAemeAsset from "@/assets/aeme-01-dispositivos.png.asset.json";
import projFiestaAsset from "@/assets/tu-fiesta-facil-02-ficha-editorial.png.asset.json";
import projQiAsset from "@/assets/el-camino-del-qi-02-ficha-editorial.png.asset.json";
const projFlorida = projFloridaAsset.url;
const projFloridaFicha = projFloridaFichaAsset.url;
const projVioleta = projVioletaAsset.url;
const projAeme = projAemeAsset.url;
const projFiesta = projFiestaAsset.url;
const projQi = projQiAsset.url;
import exCabanas from "@/assets/ex-cabanas.jpg";
import exPsicologa from "@/assets/ex-psicologa.jpg";
import exRestaurante from "@/assets/ex-restaurante.jpg";
import exTienda from "@/assets/ex-tienda.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mi Vitrina Digital · Vitrina Pro — Páginas web para negocios" },
      { name: "description", content: "Tu negocio ya está en redes. Ahora dale una vitrina profesional. Diseñamos páginas web reales para negocios locales, con estilo boutique y contacto directo por WhatsApp." },
      { property: "og:title", content: "Mi Vitrina Digital · Vitrina Pro" },
      { property: "og:description", content: "Páginas web profesionales para negocios locales. Proyectos reales, precios claros y WhatsApp directo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ───────────────────────────── helpers ───────────────────────────── */

const WHATSAPP_URL =
  "https://wa.me/529612559561?text=Hola%2C%20vi%20la%20p%C3%A1gina%20de%20Mi%20Vitrina%20Digital%20y%20quiero%20informaci%C3%B3n%20para%20crear%20mi%20p%C3%A1gina%20web.";

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

const spring = { type: "spring" as const, stiffness: 220, damping: 26, mass: 0.6 };

function Reveal({
  children,
  delay = 0,
  y = 16,
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
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}

/* ───────────────────────────── page ───────────────────────────── */

function Index() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
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
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-brand/20">
      <AnnouncementBar />
      <Header />
      <main id="inicio">
        <Hero />
        <Problema />
        <Beneficios />
        <SelectorNegocio />
        <AntesDespues />
        <FlujoRedesWebWhatsapp />
        <Proyectos />
        <FranjaHerramienta />
        <Paquetes />
        <Proceso />
        <DemoWhatsapp />
        <Testimonios />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappFab />
    </div>
  );
}

/* ───────────────────────────── chrome ───────────────────────────── */

function AnnouncementBar() {
  return (
    <div className="w-full bg-ink text-background text-[12px] tracking-wide">
      <div className="mx-auto max-w-7xl px-4 py-2 text-center">
        Tu negocio merece verse profesional en internet.
      </div>
    </div>
  );
}

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
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-background transition-transform hover:-translate-y-0.5 hover:bg-brand"
          >
            Quiero mi página
            <ArrowRight className="h-3.5 w-3.5" />
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
              href={WHATSAPP_URL}
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
      href={WHATSAPP_URL}
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-trust px-4 py-3 text-trust-foreground shadow-lg shadow-trust/30 transition-transform hover:-translate-y-0.5 hover:scale-[1.02]"
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
  { img: projFlorida, label: "Turismo", name: "La Florida · Ecoturismo" },
  { img: projVioleta, label: "Profesionistas", name: "Psic. Violeta Guillén" },
  { img: projAeme, label: "Empresas", name: "AEME · Alianza Empresarial" },
  { img: projFiesta, label: "Herramientas web", name: "Tu Fiesta Fácil" },
];

function Hero() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 4500);
    return () => clearInterval(t);
  }, [reduce]);

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
      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-20 sm:px-6 lg:px-8 lg:pt-20 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1.1fr]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border hairline bg-background/70 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-trust animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  Estudio boutique de páginas web
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-[40px] leading-[1.05] tracking-tight sm:text-[56px] lg:text-[68px]">
                Tu negocio ya está en redes.
                <br />
                Ahora dale una{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-brand">vitrina profesional.</span>
                  <motion.span
                    aria-hidden
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                    className="absolute left-0 bottom-1 sm:bottom-2 h-[6px] w-full origin-left rounded-full bg-brand/15"
                  />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-soft">
                Creamos páginas web reales para negocios reales: ecoturismo,
                profesionistas, empresas y herramientas a medida. Cada proyecto
                se piensa para lo que ese negocio realmente necesita.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-[0_10px_30px_-12px_rgba(124,137,98,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-[#6b7855]"
                >
                  Quiero mi página web
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
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] text-ink-soft">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-trust" /> Proyectos publicados
                </span>
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-trust" /> Contacto por WhatsApp
                </span>
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand" /> Diseño editorial
                </span>
              </div>
            </Reveal>
          </div>

          {/* Rotating mockup */}
          <Reveal delay={0.15} y={24}>
            <div className="relative">
              <div className="relative rounded-[28px] border hairline bg-background p-3 shadow-[0_30px_80px_-30px_rgba(30,30,30,0.25)]">
                <div className="relative overflow-hidden rounded-[20px] bg-surface aspect-[5/4]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={idx}
                      src={slide.img}
                      alt={slide.name}
                      width={1280}
                      height={1024}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute left-4 bottom-4 rounded-full bg-background/90 backdrop-blur px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground border hairline">
                    {slide.name}
                  </div>
                </div>
              </div>

              {/* Manual indicators + labels */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                {HERO_SLIDES.map((s, i) => (
                  <button
                    key={s.label}
                    onClick={() => setIdx(i)}
                    aria-label={`Mostrar ${s.label}`}
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

/* ───────────────────────────── 02 problema ───────────────────────────── */

function Problema() {
  const items = [
    { n: "01", title: "Me preguntan siempre lo mismo", desc: "Horarios, precios, ubicación y servicios pueden estar claros en tu página." },
    { n: "02", title: "Mi negocio se ve poco formal", desc: "Una web profesional ayuda a que el cliente te perciba como una opción más seria y confiable." },
    { n: "03", title: "Mis redes no están ordenadas", desc: "Tu página funciona como el centro de tu presencia digital: redes, WhatsApp, mapa y catálogo." },
  ];
  return (
    <section className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal><Eyebrow>El problema</Eyebrow></Reveal>
        <div className="mt-4 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <Reveal delay={0.05}>
            <h2 className="font-display text-[32px] leading-[1.1] tracking-tight sm:text-[44px] lg:text-[52px]">
              Instagram muestra tu negocio.
              <br />
              <span className="text-ink-soft">Tu página web lo presenta con claridad.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[16px] leading-relaxed text-ink-soft lg:max-w-md">
              Las redes sociales atraen atención, pero la información importante se
              pierde entre publicaciones e historias. Una página web organiza todo
              en un solo lugar: servicios, precios, ubicación, fotos y contacto.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={spring}
                className="group h-full rounded-3xl border hairline bg-background p-7 hover:shadow-[0_20px_50px_-25px_rgba(30,30,30,0.25)] transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{it.n}</span>
                  <span className="h-8 w-8 rounded-full border hairline grid place-items-center text-ink-soft group-hover:bg-brand group-hover:text-brand-foreground group-hover:border-brand transition-colors">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[22px] leading-snug tracking-tight">{it.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{it.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 03 beneficios ───────────────────────────── */

function Beneficios() {
  const items = [
    { icon: ShieldCheck, title: "Más formalidad", desc: "Tu negocio se percibe más serio y establecido." },
    { icon: Sparkles, title: "Información clara", desc: "Todo lo importante en un solo enlace." },
    { icon: Star, title: "Más confianza", desc: "Fotos, testimonios, servicios y ubicación bien presentados." },
    { icon: MessageCircle, title: "Más contactos", desc: "Botones directos a WhatsApp, llamada, mapa y redes." },
    { icon: Share2, title: "Mejor presentación", desc: "Comparte un link profesional en tarjetas, QR, Instagram o Facebook." },
    { icon: TrendingUp, title: "Base para crecer", desc: "Después puedes agregar catálogo, reservas o funciones a medida." },
  ];
  return (
    <section id="beneficios" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <Reveal><Eyebrow>Beneficios</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-[32px] leading-[1.08] tracking-tight sm:text-[44px] lg:text-[54px]">
                Convierte tus redes en una <span className="text-brand">presencia digital</span> más confiable.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-[16px] leading-relaxed text-ink-soft lg:max-w-md">
              Una página web no reemplaza tus redes. Las vuelve más fuertes:
              ordena tu información, da confianza y abre nuevas formas de contacto.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={(i % 3) * 0.06}>
                <div className="h-full bg-background p-7 transition-colors hover:bg-surface/60">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-[20px] tracking-tight">{it.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{it.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 04 selector interactivo ───────────────────────────── */

const NEGOCIOS = [
  {
    id: "hospedaje",
    label: "Hospedaje",
    icon: Home,
    img: exCabanas,
    items: ["Habitaciones", "Galería", "Tarifas", "Cómo llegar", "Opiniones", "Reservar por WhatsApp"],
  },
  {
    id: "consultorio",
    label: "Consultorio",
    icon: Stethoscope,
    img: exPsicologa,
    items: ["Perfil profesional", "Servicios", "Horarios", "FAQ", "Ubicación", "Agendar"],
  },
  {
    id: "restaurante",
    label: "Restaurante",
    icon: UtensilsCrossed,
    img: exRestaurante,
    items: ["Menú", "Galería", "Horarios", "Maps", "Opiniones", "Reservaciones"],
  },
  {
    id: "tienda",
    label: "Tienda",
    icon: Store,
    img: exTienda,
    items: ["Catálogo", "Categorías", "Precios", "Formas de pago", "Envíos", "Pedidos por WhatsApp"],
  },
  {
    id: "servicios",
    label: "Servicios profesionales",
    icon: Briefcase,
    img: projAeme,
    items: ["Servicios", "Sectores", "Proceso", "Recursos", "Contacto", "Agendar"],
  },
  {
    id: "otro",
    label: "Otro",
    icon: MoreHorizontal,
    img: projVioleta,
    items: ["Nos cuentas tu negocio", "Diseñamos la estructura ideal", "Contenido y fotografías", "Contacto claro", "Botón de WhatsApp", "Publicación"],
  },
];

function SelectorNegocio() {
  const [active, setActive] = useState(NEGOCIOS[0].id);
  const current = NEGOCIOS.find((n) => n.id === active)!;
  return (
    <section className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal><Eyebrow>Interactivo</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[32px] leading-[1.1] tracking-tight sm:text-[44px] lg:text-[52px]">
              ¿Qué tipo de negocio tienes?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[15.5px] text-ink-soft">
              Elige uno para ver cómo podría estructurarse tu página.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
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

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-stretch">
          <div className="rounded-[28px] border hairline bg-background p-3 shadow-[0_30px_80px_-40px_rgba(30,30,30,0.25)]">
            <div className="relative overflow-hidden rounded-[20px] bg-surface aspect-[5/4]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.img}
                  alt={`Página tipo para ${current.label}`}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-[28px] border hairline bg-background p-8">
            <Eyebrow>Estructura sugerida</Eyebrow>
            <h3 className="mt-3 font-display text-[26px] tracking-tight">{current.label}</h3>
            <ul className="mt-6 space-y-3">
              <AnimatePresence mode="popLayout">
                {current.items.map((it, i) => (
                  <motion.li
                    key={`${current.id}-${it}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                    className="flex items-center gap-3 text-[15px] text-foreground"
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand/12 text-brand">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {it}
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
            <p className="mt-8 text-[13px] italic text-ink-soft">
              Así podría verse tu negocio en internet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 05 antes / después ───────────────────────────── */

function AntesDespues() {
  const [pos, setPos] = useState(52);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const onMove = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(6, Math.min(94, p)));
  };

  useEffect(() => {
    const up = () => (dragging.current = false);
    const move = (e: MouseEvent) => dragging.current && onMove(e.clientX);
    const tmove = (e: TouchEvent) => dragging.current && onMove(e.touches[0].clientX);
    window.addEventListener("mouseup", up);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchend", up);
    window.addEventListener("touchmove", tmove);
    return () => {
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchend", up);
      window.removeEventListener("touchmove", tmove);
    };
  }, []);

  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal><Eyebrow>Antes · Después</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[32px] leading-[1.1] tracking-tight sm:text-[44px] lg:text-[52px]">
              De estar en redes a tener una presencia profesional.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-[15.5px] text-ink-soft">
              Arrastra el control para comparar.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div
            ref={ref}
            className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-[28px] border hairline bg-surface select-none"
          >
            {/* AFTER (right) */}
            <div className="absolute inset-0">
              <VitrinaMock />
            </div>
            {/* BEFORE (left, clipped) */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <SoloRedesMock />
            </div>

            {/* labels */}
            <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-foreground/85 backdrop-blur px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-background">
              Solo redes
            </div>
            <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-brand px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-brand-foreground">
              Tu Vitrina Digital
            </div>

            {/* handle */}
            <div
              className="absolute top-0 bottom-0 w-px bg-background"
              style={{ left: `${pos}%` }}
            >
              <button
                onMouseDown={() => (dragging.current = true)}
                onTouchStart={() => (dragging.current = true)}
                aria-label="Comparar antes y después"
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-background border-2 border-brand shadow-[0_8px_24px_-8px_rgba(30,30,30,0.35)] cursor-ew-resize"
              >
                <GripVertical className="h-5 w-5 text-brand" />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 text-center font-display text-[22px] leading-snug tracking-tight sm:text-[28px]">
            No reemplazamos tus redes.{" "}
            <span className="text-ink-soft">Las convertimos en una presencia digital más completa.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function SoloRedesMock() {
  const chips = ["Horarios", "Servicios", "Ubicación", "Fotos", "Precios", "Contacto"];
  return (
    <div className="h-full w-full bg-[#EFE7DA] p-6 sm:p-10">
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-soft">Feed disperso</div>
      <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
        {chips.map((c, i) => (
          <div
            key={c}
            className="aspect-square rounded-2xl bg-background border hairline p-3 flex flex-col justify-between"
            style={{ transform: `rotate(${(i % 3) - 1}deg)` }}
          >
            <div className="text-[10px] uppercase tracking-[0.14em] text-ink-soft">Post {i + 1}</div>
            <div className="font-display text-[13px] sm:text-[15px] leading-tight text-foreground">{c}</div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-[12.5px] italic text-ink-soft max-w-xs">
        La información importante queda enterrada entre publicaciones.
      </p>
    </div>
  );
}

function VitrinaMock() {
  const rows = [
    { label: "Servicios", w: "w-11/12" },
    { label: "Galería", w: "w-10/12" },
    { label: "Horarios", w: "w-9/12" },
    { label: "Ubicación", w: "w-11/12" },
    { label: "Opiniones", w: "w-8/12" },
  ];
  return (
    <div className="h-full w-full bg-background p-6 sm:p-10">
      <div className="flex items-center justify-between">
        <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">Tu Vitrina Digital</div>
        <div className="text-[10.5px] text-ink-soft">mivitrina.mx</div>
      </div>
      <div className="mt-5 font-display text-[20px] sm:text-[26px] leading-tight tracking-tight text-foreground">
        Un solo enlace con toda tu información.
      </div>
      <div className="mt-6 space-y-3">
        {rows.map((r) => (
          <div key={r.label} className="rounded-2xl border hairline p-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[12.5px] font-semibold text-foreground">{r.label}</span>
              <span className="text-[10.5px] text-ink-soft">Sección</span>
            </div>
            <div className={`mt-2 h-1.5 rounded-full bg-brand/20 ${r.w}`} />
          </div>
        ))}
      </div>
      <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-trust px-4 py-2 text-[12px] font-semibold text-trust-foreground">
        <MessageCircle className="h-3.5 w-3.5" /> Contactar por WhatsApp
      </div>
    </div>
  );
}

/* ───────────────────────────── 06 redes → web → whatsapp ───────────────────────────── */

function FlujoRedesWebWhatsapp() {
  const steps = [
    { icon: Instagram, label: "Instagram · Facebook", verb: "atraen", tint: "bg-[#EFE7DA]" },
    { icon: Monitor, label: "Página web", verb: "convence", tint: "bg-background" },
    { icon: MessageCircle, label: "WhatsApp", verb: "convierte", tint: "bg-trust text-trust-foreground" },
  ];
  return (
    <section className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal><Eyebrow>El flujo</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[32px] leading-[1.1] tracking-tight sm:text-[44px] lg:text-[52px]">
              Redes, web y WhatsApp funcionan juntos.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-stretch">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const dark = s.tint.includes("trust");
            return (
              <Reveal key={s.label} delay={i * 0.15}>
                <div
                  className={`relative flex h-full flex-col items-start rounded-3xl border hairline p-7 ${s.tint} ${dark ? "border-transparent" : ""}`}
                >
                  <span className={`eyebrow ${dark ? "!text-trust-foreground/70" : ""}`}>Paso {i + 1}</span>
                  <span
                    className={`mt-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                      dark ? "bg-trust-foreground/15 text-trust-foreground" : "bg-brand/12 text-brand"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className={`mt-5 font-display text-[22px] tracking-tight ${dark ? "text-trust-foreground" : ""}`}>
                    {s.label}
                  </h3>
                  <p className={`mt-2 text-[14.5px] ${dark ? "text-trust-foreground/85" : "text-ink-soft"}`}>
                    {s.verb}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-center font-display text-[26px] leading-tight tracking-tight sm:text-[38px]">
            Las redes atraen.{" "}
            <span className="text-brand">Tu página web convence.</span>{" "}
            <span className="text-trust">WhatsApp convierte.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── 07 proyectos reales ───────────────────────────── */

type Proyecto = {
  slug: string;
  name: string;
  category: string;
  img: string;
  gallery?: string[];
  url: string;
  description: string;
  chips: string[];
  cta: string;
  badge?: string;
  variant?: "tool";
};

const PROYECTOS: Proyecto[] = [
  {
    slug: "florida",
    name: "La Florida Paraíso Ecoturístico",
    category: "Ecoturismo · Hospedaje",
    img: projFlorida,
    gallery: [projFlorida, projFloridaFicha],
    url: "https://lafloridaparaisoecoturistico.com",
    description:
      "Sitio web para un proyecto ecoturístico ubicado en la región de Lagos de Montebello, con información sobre hospedaje, naturaleza, experiencias y formas de contacto.",
    chips: ["Cabañas", "Tarifas", "Galería", "Cómo llegar", "FAQ", "Reservas por WhatsApp"],
    cta: "Ver página",
  },
  {
    slug: "violeta",
    name: "Terapia con Violeta",
    category: "Psicología · Servicios profesionales",
    img: projVioleta,
    url: "https://terapiaconvioleta.com",
    description:
      "Página profesional de servicios de terapia, diseñada para presentar el enfoque de atención, generar confianza y facilitar el contacto con pacientes.",
    chips: ["Perfil profesional", "Psicoterapia", "Evaluaciones", "Talleres", "Recursos", "Agenda"],
    cta: "Ver página",
  },
  {
    slug: "aeme",
    name: "AEME — Alianza Empresarial",
    category: "Asesoría empresarial · Sitio corporativo",
    img: projAeme,
    url: "https://preview--aeme-alianza-empresarial.lovable.app/",
    description:
      "Página institucional para una alianza empresarial, con presentación de servicios, objetivos, información organizacional y medios de contacto.",
    chips: ["Servicios", "Proceso", "Sectores", "Recursos", "Trayectoria", "WhatsApp"],
    cta: "Ver página",
  },
  {
    slug: "fiesta",
    name: "Tu Fiesta Fácil",
    category: "Aplicación web · Herramienta para negocio",
    img: projFiesta,
    url: "https://preview--tu-fiesta-facil.lovable.app/",
    description:
      "Página comercial para presentar servicios y soluciones para fiestas, con información organizada, imágenes y botones de contacto.",
    chips: ["Inventario", "Presupuestos", "Pedidos", "Clientes", "Estadísticas"],
    cta: "Ver página",
    badge: "Aplicación web",
    variant: "tool",
  },
  {
    slug: "qi",
    name: "Qi Flow Hands",
    category: "Bienestar · Terapias corporales",
    img: projQi,
    url: "https://qi-flow-hands.lovable.app",
    description:
      "Sitio de bienestar y terapias corporales con una identidad visual cálida, información sobre servicios y acceso directo a medios de contacto.",
    chips: ["Terapias", "Horarios", "Ubicación", "WhatsApp"],
    cta: "Ver página",
  },
];

function Proyectos() {
  const [preview, setPreview] = useState<Proyecto | null>(null);
  return (
    <section id="proyectos" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Reveal><Eyebrow>Portafolio</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-[32px] leading-[1.1] tracking-tight sm:text-[44px] lg:text-[52px]">
                Páginas reales que ya hemos creado.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-[16px] leading-relaxed text-ink-soft lg:max-w-md">
              Cada negocio tiene necesidades distintas. Diseñamos la estructura,
              la información y la experiencia según lo que realmente necesita.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {PROYECTOS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <ProyectoCard p={p} onPreview={() => setPreview(p)} />
            </Reveal>
          ))}
        </div>
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
      whileHover={{ y: -4 }}
      transition={spring}
      className="group overflow-hidden rounded-3xl border hairline bg-background"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative overflow-hidden bg-surface aspect-[16/10]">
        <motion.img
          src={p.img}
          alt={`Captura del proyecto ${p.name}`}
          loading="lazy"
          width={1280}
          height={960}
          animate={{ y: hover ? "-18%" : "0%" }}
          transition={{ duration: 4, ease: "easeInOut" }}
          className="absolute inset-0 h-[130%] w-full object-cover object-top"
        />
        {p.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-trust px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-trust-foreground">
            {p.badge}
          </span>
        )}
        <button
          onClick={onPreview}
          className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur px-3.5 py-2 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-foreground border hairline hover:bg-brand hover:text-brand-foreground hover:border-brand transition-colors"
        >
          Vista previa <Monitor className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="p-7">
        <Eyebrow>{p.category}</Eyebrow>
        <h3 className="mt-2 font-display text-[24px] tracking-tight">{p.name}</h3>
        <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.chips.map((c) => (
            <span
              key={c}
              className="rounded-full border hairline bg-surface/60 px-2.5 py-1 text-[11.5px] text-ink-soft"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-brand hover:text-foreground transition-colors"
          >
            Ver página <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={onPreview}
            className="sm:hidden inline-flex items-center gap-1.5 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft"
          >
            Vista previa
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10 }}
        transition={spring}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl rounded-3xl border hairline bg-background p-4 sm:p-6 shadow-[0_40px_100px_-30px_rgba(30,30,30,0.5)]"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <Eyebrow>{p.category}</Eyebrow>
            <h3 className="mt-1 font-display text-[22px] tracking-tight">{p.name}</h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="inline-flex rounded-full border hairline p-1 bg-surface/60">
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
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border hairline hover:bg-surface"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-5 rounded-2xl bg-surface p-4 sm:p-6 flex justify-center">
          <div
            className={`overflow-hidden rounded-xl border hairline bg-background ${
              device === "desktop" ? "w-full aspect-[16/10]" : "w-[240px] aspect-[9/19]"
            }`}
          >
            <img
              src={p.img}
              alt={p.name}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[13px] text-ink-soft">
            Proyecto: <span className="text-foreground font-medium">{p.name}</span>
          </p>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-foreground hover:bg-foreground transition-colors"
          >
            Ver página <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ───────────────────────────── 08 franja herramienta ───────────────────────────── */

const HERRAMIENTA_TABS = [
  { id: "Inventario", icon: Package },
  { id: "Presupuestos", icon: FileText },
  { id: "Pedidos", icon: ShoppingCart },
  { id: "Clientes", icon: Users },
  { id: "Estadísticas", icon: BarChart3 },
];

function FranjaHerramienta() {
  const [tab, setTab] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTab((i) => (i + 1) % HERRAMIENTA_TABS.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="bg-trust text-trust-foreground py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow !text-trust-foreground/70">
              No todo tiene que ser una página informativa
            </span>
            <h2 className="mt-4 font-display text-[32px] leading-[1.1] tracking-tight sm:text-[44px] lg:text-[52px]">
              También podemos construir <span className="text-brand">herramientas</span> para tu negocio.
            </h2>
            <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-trust-foreground/80">
              Algunos negocios necesitan algo más. Podemos revisar contigo si tu
              proyecto requiere funciones especiales y decirte si podemos
              implementarlas antes de cotizar.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {HERRAMIENTA_TABS.map((t, i) => {
                const Icon = t.icon;
                const on = i === tab;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTab(i)}
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[12px] font-semibold transition-colors ${
                      on
                        ? "border-brand bg-brand text-brand-foreground"
                        : "border-trust-foreground/25 text-trust-foreground/80 hover:text-trust-foreground"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {t.id}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[28px] border border-trust-foreground/15 bg-[#3a2c25] p-3 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.6)]">
            <div className="rounded-[20px] bg-background overflow-hidden">
              <div className="flex items-center gap-1.5 border-b hairline px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#E76F51]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#E9C46A]/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#7C8962]/70" />
                <span className="ml-4 text-[11px] text-ink-soft">Tu Fiesta Fácil · panel</span>
              </div>
              <div className="grid grid-cols-[130px_1fr] min-h-[340px]">
                <div className="border-r hairline p-3 space-y-1">
                  {HERRAMIENTA_TABS.map((t, i) => {
                    const Icon = t.icon;
                    const on = i === tab;
                    return (
                      <button
                        key={t.id}
                        onClick={() => setTab(i)}
                        className={`w-full flex items-center gap-2 rounded-lg px-2.5 py-2 text-left text-[12px] transition-colors ${
                          on ? "bg-brand/12 text-brand font-semibold" : "text-ink-soft hover:bg-surface"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {t.id}
                      </button>
                    );
                  })}
                </div>
                <div className="p-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={tab}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-display text-[17px] tracking-tight text-foreground">
                          {HERRAMIENTA_TABS[tab].id}
                        </h4>
                        <span className="text-[10.5px] text-ink-soft uppercase tracking-[0.14em]">
                          Panel demo
                        </span>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        {[0, 1, 2].map((k) => (
                          <div key={k} className="rounded-xl border hairline p-3">
                            <div className="text-[10px] uppercase tracking-[0.14em] text-ink-soft">
                              Métrica {k + 1}
                            </div>
                            <div className="mt-2 font-display text-[18px] text-foreground">
                              {["45", "128", "12"][k]}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 space-y-2">
                        {[0, 1, 2, 3].map((r) => (
                          <div key={r} className="flex items-center justify-between rounded-lg border hairline px-3 py-2">
                            <div className="flex items-center gap-2">
                              <div className="h-6 w-6 rounded-md bg-brand/12" />
                              <div className="h-2 w-24 rounded bg-surface" />
                            </div>
                            <div className="h-2 w-14 rounded bg-brand/25" />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-[13.5px] text-trust-foreground/70">
          Nota: las herramientas, integraciones o funciones especiales no están
          incluidas en Vitrina Inicial ni Vitrina Pro. Se revisan y cotizan por
          separado antes de comenzar.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────────── 09 paquetes ───────────────────────────── */

type Paquete = {
  name: string;
  tag: string;
  price: string;
  intro: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const PAQUETES: Paquete[] = [
  {
    name: "Vitrina Inicial",
    tag: "Para comenzar",
    price: "$1,000 MXN",
    intro:
      "Una página profesional para darle a tu negocio un espacio propio en internet.",
    features: [
      "Llamada inicial para conocer el negocio",
      "Diseño profesional adaptable a celular",
      "Información principal del negocio",
      "Servicios",
      "Fotografías o galería",
      "Ubicación",
      "Formas de contacto",
      "Botón de WhatsApp",
      "Hasta 2 rondas de ajustes antes de publicar",
    ],
    cta: "Quiero comenzar",
  },
  {
    name: "Vitrina Pro",
    tag: "Más elegido",
    price: "$1,300 MXN",
    intro:
      "Para quienes quieren mayor flexibilidad para revisar y afinar su página antes de publicarla.",
    features: [
      "Todo lo incluido en Vitrina Inicial",
      "Hasta 5 rondas de ajustes antes de publicar",
      "Más oportunidades para afinar textos, fotografías, orden de secciones y detalles visuales",
    ],
    cta: "Quiero Vitrina Pro",
    featured: true,
  },
];

function Paquetes() {
  const simples = [
    "Cambios de horarios",
    "Fotografías",
    "Teléfonos",
    "Precios",
    "Textos",
    "Dirección",
    "Información que ya existe dentro de la página",
  ];
  return (
    <section id="paquetes" className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal><Eyebrow>Paquetes</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[32px] leading-[1.1] tracking-tight sm:text-[44px] lg:text-[52px]">
              Dos formas de comenzar tu página.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[16px] text-ink-soft">
              La diferencia principal entre ambos paquetes es el número de rondas
              de ajustes y el tiempo de atención dedicado al proyecto.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:items-stretch max-w-4xl mx-auto">
          {PAQUETES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <PaqueteCard p={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 rounded-3xl border hairline bg-background p-8 sm:p-10 max-w-4xl mx-auto">
            <Eyebrow>Después de publicar tu página</Eyebrow>
            <p className="mt-3 font-display text-[22px] leading-snug tracking-tight text-foreground sm:text-[26px]">
              Las actualizaciones sencillas tienen un costo{" "}
              <span className="text-brand">desde $200 MXN por solicitud.</span>
            </p>
            <p className="mt-4 text-[14px] text-ink-soft">Consideramos actualizaciones sencillas:</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {simples.map((s) => (
                <span key={s} className="rounded-full border hairline bg-surface/60 px-3 py-1.5 text-[12.5px] text-foreground">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-4 border-t hairline pt-6 sm:grid-cols-2">
              <p className="text-[13.5px] text-ink-soft leading-relaxed">
                <span className="text-foreground font-semibold">Cambios mayores</span>,
                nuevas secciones, nuevas páginas, funciones adicionales, rediseños
                o integraciones especiales se revisan y cotizan antes de comenzar.
              </p>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">
                Si necesitas una <span className="text-foreground font-semibold">función especial</span>,
                primero revisamos si podemos implementarla y te indicamos alcance
                y costo antes de comenzar.
              </p>
            </div>
          </div>
        </Reveal>
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
      className={`relative flex h-full flex-col rounded-3xl border bg-background p-7 sm:p-8 transition-shadow ${
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
      <div>
        <Eyebrow>{p.tag}</Eyebrow>
        <h3 className="mt-3 font-display text-[28px] tracking-tight">{p.name}</h3>
        <p className="mt-3 font-display text-[32px] font-semibold text-foreground">{p.price}</p>
        <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">{p.intro}</p>
      </div>

      <div className="my-6 h-px bg-hairline" />

      <ul className="space-y-3 text-[14.5px] text-foreground">
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
        href={WHATSAPP_URL}
        className={`mt-auto pt-8 inline-flex items-center justify-center gap-2 text-[13px] font-semibold uppercase tracking-[0.14em] ${
          featured ? "" : ""
        }`}
      >
        <span
          className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 transition-transform hover:-translate-y-0.5 ${
            featured
              ? "bg-brand text-brand-foreground hover:bg-foreground"
              : "border hairline bg-background text-foreground hover:bg-surface"
          }`}
        >
          {p.cta}
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </a>
    </motion.div>
  );
}

/* ───────────────────────────── 10 proceso ───────────────────────────── */

function Proceso() {
  const steps = [
    { n: "01", title: "Nos cuentas de tu negocio", desc: "Servicios, fotos, ubicación, redes y datos de contacto." },
    { n: "02", title: "Ordenamos la información", desc: "Convertimos lo que ya tienes en una estructura clara y profesional." },
    { n: "03", title: "Diseñamos tu vitrina", desc: "Creamos una página bonita, rápida y adaptada a celular." },
    { n: "04", title: "Revisas y ajustamos", desc: "Rondas de ajustes según tu paquete para afinar cada detalle." },
    { n: "05", title: "Publicamos y compartes", desc: "Tu página queda lista para enviarla por WhatsApp, redes, QR o Google." },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 30%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="proceso" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal><Eyebrow>Proceso</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[32px] leading-[1.1] tracking-tight sm:text-[44px] lg:text-[52px]">
              De tu negocio a tu página en pocos pasos.
            </h2>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-16">
          <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-hairline" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="hidden lg:block absolute left-0 right-0 top-7 h-px origin-left bg-brand"
          />
          <div className="lg:hidden absolute left-[27px] top-0 bottom-0 w-px bg-hairline" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="lg:hidden absolute left-[27px] top-0 bottom-0 w-px origin-top bg-brand"
          />

          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <li className="relative pl-16 lg:pl-0">
                  <span className="absolute left-0 top-0 grid h-14 w-14 place-items-center rounded-full border hairline bg-background font-display text-[14px] font-bold tracking-tight text-foreground lg:relative lg:left-auto lg:top-auto">
                    {s.n}
                  </span>
                  <h3 className="mt-0 lg:mt-6 font-display text-[18px] leading-snug tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 11 demo whatsapp ───────────────────────────── */

function DemoWhatsapp() {
  const [step, setStep] = useState(0); // 0 initial, 1 opened, 2+ messages
  const messages = useMemo(
    () => [
      { from: "cliente", text: "Hola 👋 vi su página y quisiera conocer sus servicios." },
      { from: "negocio", text: "¡Hola! Con gusto te comparto la información 😊" },
    ],
    [],
  );

  useEffect(() => {
    if (step === 1) {
      const t = setTimeout(() => setStep(2), 900);
      return () => clearTimeout(t);
    }
    if (step === 2) {
      const t = setTimeout(() => setStep(3), 1400);
      return () => clearTimeout(t);
    }
  }, [step]);

  return (
    <section className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Reveal><Eyebrow>Demostración</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-[32px] leading-[1.1] tracking-tight sm:text-[44px] lg:text-[52px]">
                Del interés al primer mensaje, en un clic.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-[15.5px] leading-relaxed text-ink-soft max-w-md">
                Cada página termina en un botón que abre WhatsApp con un mensaje
                listo. Sin formularios largos ni fricción.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <a
                href={WHATSAPP_URL}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-trust px-6 py-3.5 text-sm font-semibold text-trust-foreground transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="h-4 w-4" /> Escribir por WhatsApp
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mx-auto w-full max-w-sm rounded-[36px] border hairline bg-background p-3 shadow-[0_30px_80px_-30px_rgba(30,30,30,0.3)]">
              <div className="rounded-[28px] bg-[#E9E2D7] p-4 min-h-[420px] flex flex-col">
                {step === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="m-auto text-center"
                  >
                    <p className="font-display text-[20px] leading-snug tracking-tight text-foreground">
                      ¿Te interesa este negocio?
                    </p>
                    <button
                      onClick={() => setStep(1)}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-trust px-5 py-3 text-[13px] font-semibold text-trust-foreground shadow-md hover:-translate-y-0.5 transition-transform"
                    >
                      <MessageCircle className="h-4 w-4" /> Escribir por WhatsApp
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 border-b border-foreground/10 pb-3">
                      <div className="h-9 w-9 rounded-full bg-trust text-trust-foreground grid place-items-center text-[11px] font-semibold">
                        TN
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-foreground">Tu Negocio</div>
                        <div className="text-[10.5px] text-ink-soft">en línea</div>
                      </div>
                    </div>
                    <div className="mt-4 flex-1 space-y-2 overflow-hidden">
                      {step >= 2 && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="max-w-[85%] rounded-2xl rounded-br-sm bg-brand text-brand-foreground px-3 py-2 text-[13px] ml-auto"
                        >
                          {messages[0].text}
                        </motion.div>
                      )}
                      {step >= 3 && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="max-w-[85%] rounded-2xl rounded-bl-sm bg-background text-foreground px-3 py-2 text-[13px]"
                        >
                          {messages[1].text}
                        </motion.div>
                      )}
                    </div>
                    <a
                      href={WHATSAPP_URL}
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-trust px-4 py-2.5 text-[12.5px] font-semibold text-trust-foreground"
                    >
                      <Send className="h-3.5 w-3.5" /> Abrir WhatsApp
                    </a>
                  </>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 12 testimonios ───────────────────────────── */

function Testimonios() {
  const items = [
    { quote: "Antes mandaba solo mi Facebook. Ahora mando mi página y la gente entiende rápido mis servicios.", role: "Dueña de salón de belleza" },
    { quote: "Nos ayudó a presentar las cabañas con fotos, ubicación y botón de reserva por WhatsApp.", role: "Proyecto ecoturístico" },
    { quote: "Mis pacientes encuentran horarios, enfoque de atención y contacto sin tener que preguntar todo por mensaje.", role: "Psicóloga" },
  ];
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal><Eyebrow>Testimonios</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[32px] leading-[1.1] tracking-tight sm:text-[44px] lg:text-[52px]">
              Negocios que se ven más claros, serios y confiables.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.role} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={spring}
                className="h-full rounded-3xl border hairline bg-background p-7"
              >
                <Quote className="h-6 w-6 text-brand" />
                <p className="mt-4 font-display text-[17.5px] leading-snug tracking-tight">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-surface" />
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-foreground">Cliente</p>
                    <p className="text-[12.5px] text-ink-soft">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 13 cta final ───────────────────────────── */

function CtaFinal() {
  const checks = [
    "Proyectos reales publicados",
    "Diseño adaptable a celular",
    "Botón de WhatsApp",
    "Rondas de ajustes claras",
    "Precio accesible",
  ];
  return (
    <section id="contacto" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-brand px-7 py-16 text-brand-foreground sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.25), transparent 40%)",
            }}
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <Reveal><span className="eyebrow !text-brand-foreground/80">Empieza hoy</span></Reveal>
              <Reveal delay={0.05}>
                <h2 className="mt-4 font-display text-[34px] leading-[1.05] tracking-tight sm:text-[48px] lg:text-[58px]">
                  Tu negocio ya existe.
                  <br />
                  <span className="text-brand-foreground/80">
                    Ahora dale una presentación profesional.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-brand-foreground/85">
                  Creamos tu página web de forma clara, económica y con criterio
                  de diseño para que tus clientes confíen más y te contacten fácil.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={WHATSAPP_URL}
                    className="inline-flex items-center gap-2 rounded-full bg-trust px-6 py-3.5 text-sm font-semibold text-trust-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4 w-4" /> Escribir por WhatsApp
                  </a>
                  <a
                    href="#paquetes"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-brand-foreground hover:bg-brand-foreground/10 transition-colors"
                  >
                    Quiero mi página
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <ul className="grid gap-3 rounded-2xl border border-brand-foreground/20 bg-brand-foreground/5 p-5 backdrop-blur-sm">
                {checks.map((c) => (
                  <li key={c} className="flex items-center gap-3 text-[14.5px]">
                    <span className="inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-foreground text-brand">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 14 footer ───────────────────────────── */

function Footer() {
  return (
    <footer className="border-t hairline bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-ink-soft">
              Páginas web con criterio editorial para negocios locales y proyectos
              profesionales.
            </p>
          </div>
          <FooterCol title="Paquetes" items={["Vitrina Inicial", "Vitrina Pro", "Actualizaciones", "Herramientas a medida"]} />
          <FooterCol title="Proyectos" items={["La Florida Ecoturístico", "Terapia con Violeta", "AEME Empresarial", "Tu Fiesta Fácil"]} />
          <div>
            <h4 className="eyebrow">Contacto</h4>
            <ul className="mt-4 space-y-3 text-[14px] text-ink-soft">
              <li>
                <a href={WHATSAPP_URL} className="inline-flex items-center gap-2 hover:text-foreground">
                  <MessageCircle className="h-4 w-4 text-trust" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:text-foreground">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 hover:text-foreground">
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
              </li>
              <li>
                <a href="mailto:hola@mivitrinadigital.mx" className="inline-flex items-center gap-2 hover:text-foreground">
                  <Mail className="h-4 w-4" /> Correo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t hairline pt-6 text-[12.5px] text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Mi Vitrina Digital · Vitrina Pro. Todos los derechos reservados.</p>
          <p className="inline-flex items-center gap-2">
            <Phone className="h-3.5 w-3.5" /> Hecho para pequeños negocios.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="eyebrow">{title}</h4>
      <ul className="mt-4 space-y-3 text-[14px] text-ink-soft">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="hover:text-foreground transition-colors">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}