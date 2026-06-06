import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
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
} from "lucide-react";

import heroMockup from "@/assets/hero-mockup.jpg";
import exPsicologa from "@/assets/ex-psicologa.jpg";
import exCabanas from "@/assets/ex-cabanas.jpg";
import exRestaurante from "@/assets/ex-restaurante.jpg";
import exSalon from "@/assets/ex-salon.jpg";
import exTaller from "@/assets/ex-taller.jpg";
import exTienda from "@/assets/ex-tienda.jpg";
import exTour from "@/assets/ex-tour.jpg";
import exMarca from "@/assets/ex-marca.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vitrina Pro — Páginas web rápidas para negocios locales" },
      { name: "description", content: "Tu negocio ya está en redes. Vitrina Pro le da una página web profesional, económica y lista para compartir por WhatsApp." },
      { property: "og:title", content: "Vitrina Pro — Tu negocio se ve formal" },
      { property: "og:description", content: "Páginas web rápidas, económicas y profesionales para negocios locales." },
    ],
  }),
  component: Index,
});

/* ───────────────────────────── helpers ───────────────────────────── */

const WHATSAPP_URL =
  "https://wa.me/525555555555?text=Hola%20Vitrina%20Pro%2C%20quiero%20mi%20p%C3%A1gina%20web";

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Paquetes", href: "#paquetes" },
  { label: "Proceso", href: "#proceso" },
  { label: "Ejemplos", href: "#ejemplos" },
  { label: "Contacto", href: "#contacto" },
];

const spring = { type: "spring" as const, stiffness: 220, damping: 26, mass: 0.6 };

function Reveal({
  children,
  delay = 0,
  y = 24,
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
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

/* ───────────────────────────── page ───────────────────────────── */

function Index() {
  // Smooth scroll with Lenis
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
        <Paquetes />
        <Proceso />
        <Ejemplos />
        <Comparacion />
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
        Páginas web rápidas, económicas y profesionales para negocios locales.
      </div>
    </div>
  );
}

function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2.5 group">
      <span
        aria-hidden
        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border hairline bg-background shadow-sm transition-transform group-hover:-rotate-3"
      >
        <span className="grid h-4 w-4 grid-cols-2 grid-rows-2 gap-[2px]">
          <span className="rounded-[1px] bg-brand" />
          <span className="rounded-[1px] bg-hairline" />
          <span className="rounded-[1px] bg-hairline" />
          <span className="rounded-[1px] bg-trust" />
        </span>
      </span>
      <span className="font-display text-[17px] font-extrabold tracking-tight">
        Vitrina<span className="text-brand"> Pro</span>
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
        scrolled
          ? "backdrop-blur-md bg-background/85 border-b hairline"
          : "bg-background/60"
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

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const float = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* soft grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--hairline) 1px, transparent 1px), linear-gradient(to bottom, var(--hairline) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 50% 0%, black 30%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-20 sm:px-6 lg:px-8 lg:pt-20 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border hairline bg-background/70 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-trust animate-pulse" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
                  Para negocios reales
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
                Creamos páginas web rápidas, económicas y profesionales para que
                tus clientes encuentren tu información, confíen en tu negocio y
                te contacten fácilmente por WhatsApp.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WHATSAPP_URL}
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-brand-foreground shadow-[0_10px_30px_-12px_rgba(37,99,235,0.55)] transition-transform hover:-translate-y-0.5"
                >
                  Quiero mi página web
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#paquetes"
                  className="inline-flex items-center gap-2 rounded-full border hairline bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-surface transition-colors"
                >
                  Ver paquetes
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] text-ink-soft">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-trust" /> Entrega rápida
                </span>
                <span className="inline-flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-trust" /> Botón de WhatsApp
                </span>
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand" /> Diseño profesional
                </span>
              </div>
            </Reveal>
          </div>

          {/* Mockup column */}
          <Reveal delay={0.15} y={32}>
            <motion.div style={{ y: float }} className="relative">
              <motion.div
                initial={reduce ? false : { scale: 0.96, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...spring, delay: 0.1 }}
                className="relative rounded-[28px] border hairline bg-background p-3 shadow-[0_30px_80px_-30px_rgba(30,30,30,0.25)]"
              >
                <div className="overflow-hidden rounded-[20px] bg-surface">
                  <img
                    src={heroMockup}
                    alt="Página web de un negocio local mostrada en celular y laptop"
                    width={1280}
                    height={1024}
                    className="aspect-[5/4] w-full object-cover"
                  />
                </div>
              </motion.div>

              {/* floating tags */}
              <FloatingTag
                className="left-[-12px] top-8 sm:left-[-28px]"
                delay={0.4}
                icon={<Share2 className="h-3.5 w-3.5" />}
                label="Lista para compartir"
              />
              <FloatingTag
                className="right-[-10px] top-24 sm:right-[-28px]"
                delay={0.55}
                icon={<MessageCircle className="h-3.5 w-3.5 text-trust" />}
                label="Botón de WhatsApp"
              />
              <FloatingTag
                className="left-4 bottom-10 sm:left-[-18px]"
                delay={0.7}
                icon={<Sparkles className="h-3.5 w-3.5 text-brand" />}
                label="Diseño profesional"
              />
              <FloatingTag
                className="right-2 bottom-[-10px] sm:right-[-22px]"
                delay={0.85}
                icon={<MapPin className="h-3.5 w-3.5" />}
                label="Ideal para negocios locales"
              />
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FloatingTag({
  className = "",
  icon,
  label,
  delay = 0,
}: {
  className?: string;
  icon: ReactNode;
  label: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute inline-flex items-center gap-2 rounded-full border hairline bg-background px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground shadow-[0_8px_24px_-12px_rgba(30,30,30,0.2)] ${className}`}
    >
      {icon}
      {label}
    </motion.div>
  );
}

/* ───────────────────────────── 02 problema ───────────────────────────── */

function Problema() {
  const items = [
    {
      n: "01",
      title: "Me preguntan siempre lo mismo",
      desc: "Horarios, precios, ubicación, servicios y formas de pago pueden estar claros en tu página.",
    },
    {
      n: "02",
      title: "Mi negocio se ve poco formal",
      desc: "Una web profesional ayuda a que el cliente te perciba como una opción más seria y confiable.",
    },
    {
      n: "03",
      title: "Mis redes no están ordenadas",
      desc: "Tu página funciona como el centro de tu presencia digital: redes, WhatsApp, Google Maps y catálogo.",
    },
  ];
  return (
    <section className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>El problema</Eyebrow>
        </Reveal>
        <div className="mt-4 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <Reveal delay={0.05}>
            <h2 className="font-display text-[32px] leading-[1.1] tracking-tight sm:text-[44px] lg:text-[52px]">
              Instagram muestra tu negocio.
              <br />
              <span className="text-ink-soft">
                Tu página web lo presenta con claridad.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-[16px] leading-relaxed text-ink-soft lg:max-w-md">
              Las redes sociales sirven para atraer atención, pero la información
              importante se pierde entre publicaciones, historias y mensajes. Una
              página web organiza todo en un solo lugar: servicios, precios,
              ubicación, fotos, testimonios y contacto.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={spring}
                className="group h-full rounded-3xl border hairline bg-background p-7 shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_-25px_rgba(30,30,30,0.25)] transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{it.n}</span>
                  <span className="h-8 w-8 rounded-full border hairline grid place-items-center text-ink-soft group-hover:bg-brand group-hover:text-brand-foreground group-hover:border-brand transition-colors">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[22px] leading-snug tracking-tight">
                  {it.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink-soft">
                  {it.desc}
                </p>
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
    { icon: TrendingUp, title: "Base para crecer", desc: "Después puedes agregar catálogo, reservas, pagos o blog." },
  ];
  return (
    <section id="beneficios" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <Reveal>
              <Eyebrow>Beneficios</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-[32px] leading-[1.08] tracking-tight sm:text-[44px] lg:text-[54px]">
                Convierte tus redes en una{" "}
                <span className="text-brand">presencia digital</span> más confiable.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-[16px] leading-relaxed text-ink-soft lg:max-w-md">
              Una página web no reemplaza tus redes. Las vuelve más fuertes:
              ordena tu información, da confianza y abre nuevas formas de
              contacto sin complicarte.
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
                  <h3 className="mt-5 font-display text-[20px] tracking-tight">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                    {it.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 rounded-3xl bg-foreground px-8 py-14 text-center text-background sm:py-16">
            <p className="mx-auto max-w-3xl font-display text-[28px] leading-tight tracking-tight sm:text-[40px]">
              “Las redes atraen.{" "}
              <span className="text-background/70">La página web</span> convence.”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── 04 paquetes ───────────────────────────── */

type Paquete = {
  name: string;
  tag: string;
  price: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const PAQUETES: Paquete[] = [
  {
    name: "Vitrina Básica",
    tag: "Para empezar formal",
    price: "Desde $1,500 MXN",
    features: [
      "Página de una sección",
      "Información del negocio",
      "Botón de WhatsApp",
      "Redes sociales",
      "Ubicación en Google Maps",
      "Diseño adaptable a celular",
    ],
    cta: "Elegir Básica",
  },
  {
    name: "Vitrina Pro",
    tag: "El más recomendado",
    price: "Desde $3,000 MXN",
    features: [
      "Página completa",
      "Inicio, servicios, galería y contacto",
      "Testimonios",
      "Preguntas frecuentes",
      "Botón de WhatsApp",
      "SEO básico",
      "Diseño profesional personalizado",
    ],
    cta: "Quiero esta opción",
    featured: true,
  },
  {
    name: "Vitrina Premium",
    tag: "Para crecer mejor",
    price: "Desde $5,500 MXN",
    features: [
      "Sitio más completo",
      "Textos mejorados",
      "Catálogo o paquetes",
      "Formulario de contacto",
      "Optimización para Google",
      "QR para compartir",
      "Integración con redes",
    ],
    cta: "Solicitar Premium",
  },
];

function Paquetes() {
  return (
    <section id="paquetes" className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal><Eyebrow>Paquetes</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[32px] leading-[1.1] tracking-tight sm:text-[44px] lg:text-[52px]">
              Páginas web profesionales sin precios de agencia grande.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[16px] text-ink-soft">
              Elige el paquete que mejor se adapta a tu negocio. Todo incluye diseño limpio, adaptado a celular y listo para compartir.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-stretch">
          {PAQUETES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <PaqueteCard p={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-[12.5px] text-ink-soft">
            Los precios pueden variar según el contenido, dominio, hosting y funciones adicionales.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function PaqueteCard({ p }: { p: Paquete }) {
  const featured = !!p.featured;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={spring}
      className={`relative flex h-full flex-col rounded-3xl border bg-background p-7 transition-shadow ${
        featured
          ? "border-brand shadow-[0_30px_60px_-30px_rgba(37,99,235,0.4)]"
          : "hairline hover:border-brand/40 hover:shadow-[0_20px_50px_-25px_rgba(30,30,30,0.18)]"
      }`}
    >
      {featured && (
        <motion.span
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-foreground"
        >
          Recomendado
        </motion.span>
      )}
      <div>
        <Eyebrow>{p.tag}</Eyebrow>
        <h3 className="mt-3 font-display text-[26px] tracking-tight">{p.name}</h3>
        <p className="mt-3 text-[20px] font-semibold text-foreground">
          {p.price}
        </p>
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
        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] transition-transform hover:-translate-y-0.5 ${
          featured
            ? "bg-brand text-brand-foreground hover:bg-foreground"
            : "border hairline bg-background text-foreground hover:bg-surface"
        }`}
      >
        {p.cta}
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </motion.div>
  );
}

/* ───────────────────────────── 05 proceso ───────────────────────────── */

function Proceso() {
  const steps = [
    { n: "01", title: "Nos cuentas de tu negocio", desc: "Servicios, fotos, ubicación, redes y datos de contacto." },
    { n: "02", title: "Ordenamos la información", desc: "Convertimos lo que ya tienes en una estructura clara y profesional." },
    { n: "03", title: "Diseñamos tu vitrina", desc: "Creamos una página bonita, rápida y adaptada a celular." },
    { n: "04", title: "Revisas y ajustamos", desc: "Hacemos cambios básicos para que represente bien tu negocio." },
    { n: "05", title: "Publicamos y compartes", desc: "Tu página queda lista para enviarla por WhatsApp, redes, QR o Google." },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
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
          {/* Desktop horizontal line */}
          <div className="hidden lg:block absolute left-0 right-0 top-7 h-px bg-hairline" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="hidden lg:block absolute left-0 right-0 top-7 h-px origin-left bg-brand"
          />
          {/* Mobile vertical line */}
          <div className="lg:hidden absolute left-[27px] top-0 bottom-0 w-px bg-hairline" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="lg:hidden absolute left-[27px] top-0 bottom-0 w-px origin-top bg-brand"
          />

          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <li className="relative pl-16 lg:pl-0">
                  <span className="absolute left-0 top-0 grid h-14 w-14 place-items-center rounded-full border hairline bg-background font-display text-[14px] font-bold tracking-tight text-foreground lg:relative lg:left-auto lg:top-auto lg:h-14 lg:w-14">
                    {s.n}
                  </span>
                  <h3 className="mt-0 lg:mt-6 font-display text-[18px] leading-snug tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                    {s.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 06 ejemplos ───────────────────────────── */

function Ejemplos() {
  const items = [
    { img: exPsicologa, name: "Espacio Sereno", giro: "Psicóloga", desc: "Enfoque, horarios y contacto en una sola página." },
    { img: exCabanas, name: "Cabañas del Bosque", giro: "Ecoturismo", desc: "Galería, ubicación y reserva por WhatsApp." },
    { img: exRestaurante, name: "Mesa 12", giro: "Restaurante", desc: "Menú, horarios y reservaciones claras." },
    { img: exSalon, name: "Estudio Lina", giro: "Salón de belleza", desc: "Servicios, precios y citas directas." },
    { img: exTaller, name: "Taller Norte", giro: "Servicio técnico", desc: "Servicios, garantía y cotización rápida." },
    { img: exTienda, name: "Tienda Origen", giro: "Tienda local", desc: "Catálogo simple y pedidos por WhatsApp." },
    { img: exTour, name: "Rutas Vivas", giro: "Tour turístico", desc: "Experiencias, fechas y reservas." },
    { img: exMarca, name: "Ana Robles", giro: "Marca personal", desc: "Trayectoria, servicios y contacto." },
  ];
  return (
    <section id="ejemplos" className="bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <Reveal><Eyebrow>Ejemplos de uso</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-[32px] leading-[1.1] tracking-tight sm:text-[44px] lg:text-[52px]">
                Una vitrina para cada tipo de negocio.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-[16px] leading-relaxed text-ink-soft lg:max-w-md">
              Adaptamos la estructura al tipo de negocio: servicios, galería, ubicación, reservas, menú, catálogo o WhatsApp.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={(i % 4) * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={spring}
                className="group overflow-hidden rounded-3xl border hairline bg-background"
              >
                <div className="overflow-hidden bg-surface">
                  <img
                    src={it.img}
                    alt={`Ejemplo de página web para ${it.giro}`}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <Eyebrow>{it.giro}</Eyebrow>
                  <h3 className="mt-2 font-display text-[18px] tracking-tight">
                    {it.name}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] text-ink-soft leading-relaxed">
                    {it.desc}
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand"
                  >
                    Ver ejemplo <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── 07 comparación ───────────────────────────── */

function Comparacion() {
  const left = [
    "La información se pierde",
    "Dependes del algoritmo",
    "El cliente debe buscar entre publicaciones",
    "Menos formal para cotizaciones o clientes grandes",
    "Difícil compartir toda la información en un solo lugar",
  ];
  const right = [
    "Información clara y ordenada",
    "Link profesional para compartir",
    "Mayor confianza",
    "Botones directos a WhatsApp y ubicación",
    "Base para aparecer mejor en Google",
    "Imagen más formal y profesional",
  ];
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Reveal><Eyebrow>Comparación</Eyebrow></Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-[32px] leading-[1.1] tracking-tight sm:text-[44px] lg:text-[52px]">
              Redes sociales + página web ={" "}
              <span className="text-brand">presencia completa.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 md:items-stretch">
          <Reveal>
            <div className="h-full rounded-3xl border hairline bg-background p-7">
              <Eyebrow>Solo redes</Eyebrow>
              <h3 className="mt-3 font-display text-[22px] tracking-tight text-ink-soft">
                Información dispersa
              </h3>
              <ul className="mt-6 space-y-3 text-[14.5px] text-ink-soft">
                {left.map((l) => (
                  <li key={l} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-surface text-ink-soft">
                      <X className="h-3 w-3" />
                    </span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-full rounded-3xl border bg-foreground p-7 text-background border-foreground shadow-[0_30px_60px_-30px_rgba(30,30,30,0.45)]">
              <span className="eyebrow !text-background/70">Redes + Vitrina Pro</span>
              <h3 className="mt-3 font-display text-[22px] tracking-tight">
                Presencia clara y confiable
              </h3>
              <ul className="mt-6 space-y-3 text-[14.5px]">
                {right.map((l) => (
                  <li key={l} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-trust text-trust-foreground">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-background/90">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <p className="mt-12 text-center font-display text-[24px] leading-snug tracking-tight sm:text-[32px]">
            No necesitas dejar tus redes.{" "}
            <span className="text-ink-soft">
              Necesitas una página que las respalde.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────────── 08 testimonios ───────────────────────────── */

function Testimonios() {
  const items = [
    { quote: "Antes mandaba solo mi Facebook. Ahora mando mi página y la gente entiende rápido mis servicios.", role: "Dueña de salón de belleza" },
    { quote: "Nos ayudó a presentar las cabañas con fotos, ubicación y botón de reserva por WhatsApp.", role: "Proyecto ecoturístico" },
    { quote: "Mis pacientes encuentran horarios, enfoque de atención y contacto sin tener que preguntarme todo por mensaje.", role: "Psicóloga" },
  ];
  return (
    <section className="bg-surface py-24 sm:py-28">
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
                whileHover={{ y: -6 }}
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
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-foreground">
                      Cliente
                    </p>
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

/* ───────────────────────────── 09 cta final ───────────────────────────── */

function CtaFinal() {
  const checks = [
    "Entrega rápida",
    "Diseño adaptable a celular",
    "Botón de WhatsApp",
    "Información clara",
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
              <Reveal>
                <span className="eyebrow !text-brand-foreground/80">
                  Empieza hoy
                </span>
              </Reveal>
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
                  Creamos tu página web de forma rápida, económica y clara, para
                  que tus clientes confíen más y te contacten fácil.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={WHATSAPP_URL}
                    className="inline-flex items-center gap-2 rounded-full bg-trust px-6 py-3.5 text-sm font-semibold text-trust-foreground transition-transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Cotizar por WhatsApp
                  </a>
                  <a
                    href="#paquetes"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/30 bg-transparent px-6 py-3.5 text-sm font-semibold text-brand-foreground hover:bg-brand-foreground/10 transition-colors"
                  >
                    Ver paquetes
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

/* ───────────────────────────── 10 footer ───────────────────────────── */

function Footer() {
  return (
    <footer className="border-t hairline bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-ink-soft">
              Páginas web rápidas, económicas y profesionales para negocios locales.
            </p>
          </div>
          <FooterCol title="Servicios" items={["Página básica", "Página profesional", "Página premium", "Rediseño web", "Landing page"]} />
          <FooterCol title="Negocios" items={["Restaurantes", "Psicólogos", "Cabañas", "Tiendas", "Servicios locales"]} />
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
                <a href="mailto:hola@vitrinapro.mx" className="inline-flex items-center gap-2 hover:text-foreground">
                  <Mail className="h-4 w-4" /> Correo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t hairline pt-6 text-[12.5px] text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vitrina Pro. Todos los derechos reservados.</p>
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
