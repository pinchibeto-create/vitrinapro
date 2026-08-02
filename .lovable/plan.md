## Problema

Seis imágenes del portafolio no están en el repositorio: son punteros `.asset.json` que apuntan al CDN de Lovable (`/__l5e/assets-v1/...`).

- `la-florida-01-dispositivos.png`
- `la-florida-02-ficha-editorial.png`
- `terapia-violeta-01-dispositivos.png`
- `aeme-01-dispositivos.png`
- `tu-fiesta-facil-02-ficha-editorial.png`
- `el-camino-del-qi-02-ficha-editorial.png`

Esa ruta `/__l5e/` solo existe en la infraestructura de Lovable. En Netlify el navegador pide `https://tudominio.netlify.app/__l5e/assets-v1/...`, no hay nada ahí y la imagen queda rota. Las demás imágenes (`proj-*.jpg`, `hero-mockup.jpg`, `ex-*.jpg`) sí son archivos reales y por eso sí se ven.

## Solución propuesta

Traer esas 6 imágenes al repositorio para que Vite las empaquete como cualquier otra imagen.

1. Descargar los 6 archivos originales desde el CDN (usando la URL absoluta del sitio publicado en Lovable) y guardarlos en `src/assets/`.
2. Optimizarlos a `.jpg`/`.webp` con ancho máximo ~1600px, ya que varios pesan más de 1 MB en PNG y ralentizarían la carga en Netlify.
3. Reemplazar en `src/routes/index.tsx` los imports de `*.asset.json` + uso de `.url` por imports directos de imagen (`import laFlorida from "@/assets/la-florida-01.jpg"`).
4. Borrar los archivos `.asset.json` que queden sin uso.
5. Compilar (`npm run build`) y verificar que las imágenes aparecen en `dist/client/assets` y que la página se ve bien en la vista previa.

## Detalles técnicos

- Vite convierte `import img from "...png"` en una URL con hash dentro de `dist/client/assets`, que Netlify sirve sin configuración extra.
- Alternativa descartada: dejar los assets en el CDN con URL absoluta (`https://vitrinapro.lovable.app/__l5e/...`). Funcionaría, pero deja tu sitio de Netlify dependiendo de que el proyecto de Lovable siga publicado.
- Tu `netlify.toml` (`command = npm run build`, `publish = dist/client`) ya es correcto; no hay que tocarlo.
- Después de aplicar esto, haces push a GitHub y Netlify reconstruye con las imágenes incluidas.
