## Objetivo

Mejorar la página existente (`src/routes/index.tsx`, 1891 líneas) sin reconstruirla: conservar logotipo, paleta salvia/crema, tipografías y componentes que ya funcionan, pero acortar el contenido ~25%, reordenar secciones, corregir precios y textos, y hacer que cada CTA abra WhatsApp con su mensaje propio.

## Nuevo orden de secciones

1. Navegación (fija) — enlaces: Inicio, Proyectos, Qué incluye, Precios, Proceso, Preguntas frecuentes + botón "Quiero mi página"
2. Hero con sello de precio y mockup dinámico
3. Portafolio real (5 proyectos)
4. Qué puede incluir una página
5. Selector por tipo de negocio *(ya existe, se conserva y ajusta)*
6. Redes → Web → WhatsApp *(ya existe)*
7. Precios
8. Cómo funciona (5 pasos)
9. Herramientas web / proyecto especial *(se reutiliza la franja actual)*
10. Testimonios reales (3, con nombres confirmados)
11. Preguntas frecuentes (acordeón, 12 preguntas) — **nueva**
12. CTA final + Footer

## Qué se elimina o fusiona (para acortar)

- Sección "Problema" y sección "Beneficios": se fusionan en la nueva cuadrícula "Qué puede incluir una página".
- Sección "Antes / Después" (slider) y los mocks `SoloRedesMock` / `VitrinaMock`: se retiran, su mensaje ya vive en Redes → Web → WhatsApp.
- Demo de chat de WhatsApp simulado: se retira (repite el mensaje de conversión y alarga la página).
- Barra de anuncio superior: se retira si duplica el mensaje de precio del hero.
- La frase "Las redes atraen / la página convence / WhatsApp convierte" queda solo en 3 lugares: mención breve en hero, sección dedicada y CTA final.

## Hero

- Eyebrow, título con "vitrina profesional" en verde salvia, descripción con alcance México / EE. UU. / otros países.
- Sello visible "Desde $1,000 MXN" + "Dominio .com y alojamiento incluidos durante el primer año" + línea discreta "Entrega estimada de 3 a 5 días naturales".
- Botones: "Quiero ver cómo podría verse mi negocio" (WhatsApp) y "Ver proyectos reales" (ancla).
- Franja de 4 puntos: adaptable a celular · WhatsApp integrado · dominio y alojamiento incluidos · accesos entregados.
- Mockup dinámico: crossfade de 4.5 s entre La Florida (Turismo), Terapia con Violeta (Servicios profesionales), AEME (Empresas), Qi Flow Hands (Bienestar), con indicadores manuales que pausan la rotación al interactuar.

## Portafolio

Orden y datos: La Florida (Ecoturismo y hospedaje, lafloridaparaisoecoturistico.com), Terapia con Violeta (Psicología, terapiaconvioleta.com), AEME (Servicios empresariales, aeme-alianza-empresarial.lovable.app), Qi Flow Hands (Bienestar, qi-flow-hands.lovable.app), Tu Fiesta Fácil (badge "Aplicación web", tu-fiesta-facil.lovable.app, CTA "Ver herramienta real ↗" + aclaración de cotización aparte).

Cada tarjeta: captura real, nombre, categoría, descripción breve, botón "Visitar página real ↗" en pestaña nueva, `alt` descriptivo. Se conserva el hover con desplazamiento vertical lento en escritorio y el modal "Ver vista previa" con toggle Escritorio / Móvil en móvil.

Nota sobre capturas: se usan únicamente las imágenes reales ya presentes en `src/assets`. Para AEME y Qi Flow Hands solo hay una captura, así que el toggle Escritorio/Móvil aparece únicamente donde existen ambas.

## Precios

Solo dos paquetes; se eliminan por completo $1,500 / $3,000 / $5,500 y cualquier Premium.

- **Vitrina Inicial — $1,000 MXN**: lista completa del brief, hasta 2 rondas de ajustes, CTA "Elegir Vitrina Inicial" con su mensaje de WhatsApp.
- **Vitrina Pro — $1,300 MXN**, badge "Más elegido": todo lo anterior + hasta 5 rondas de ajustes, CTA propia.

Debajo: nota de "ronda de ajustes", bloque "Después de publicar tu página" (desde $200 MXN, ejemplos, cambios mayores cotizados aparte), bloque de dominio/alojamiento/accesos y bloque de pago 50/50 con anticipo no reembolsable. Sin datos bancarios, sin formulario.

## FAQ

Acordeón nuevo con las 12 preguntas del brief, usando el componente Accordion de shadcn ya disponible.

## WhatsApp

Base `https://wa.me/529612559561`. Helper que construye la URL con `encodeURIComponent` y un mensaje distinto por origen: hero, Vitrina Inicial, Vitrina Pro, portafolio, proyecto especial, actualizaciones y botón flotante. Se conserva el FAB flotante siempre visible, respetando `env(safe-area-inset-bottom)` en móvil.

## SEO y accesibilidad

- `head()` de la ruta: título "Páginas web profesionales desde $1,000 MXN | Vitrina Pro", descripción del brief, og/twitter.
- JSON-LD: ProfessionalService + FAQPage.
- Un solo H1, `alt` descriptivo en todas las capturas, `loading="lazy"` fuera del hero.

## Movimiento

Fade-in + slide-up de 10–20 px, stagger, transiciones 250–400 ms, elevación de tarjetas 4–6 px, zoom máximo 1.03, crossfade en hero. Se respeta `prefers-reduced-motion` mediante el `useReducedMotion` ya usado.

## Detalles técnicos

- Todo el trabajo ocurre en `src/routes/index.tsx` (edición por secciones, no reescritura completa) y ajustes puntuales en `src/styles.css` si hace falta un token nuevo.
- Se eliminan del código los componentes retirados y sus imports de assets ya no usados (`ex-*.jpg`, `proj-*.jpg` generados) para evitar imágenes inventadas en el bundle.
- Verificación final: build limpio, sin scroll horizontal en 390 px, todos los enlaces del portafolio con `target="_blank" rel="noopener noreferrer"`, y ninguna aparición de los precios antiguos.
