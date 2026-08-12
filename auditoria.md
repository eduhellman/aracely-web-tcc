# Auditoría SEO / AI-SEO / Schema / CRO — aracely-web-tcc

Sitio auditado: `index.html`, `css/style.css`, `js/main.js` (1 sola página, aún no publicada).
Dominio definitivo: `https://aracelyarceblaires.com.py`

Metodología: lectura directa del código fuente (no hay sitio en vivo que rastrear todavía). Los hallazgos citan archivo y línea exacta.

---

## 🔴 CRÍTICO (bloquea conversión, indexación local o citación por IA)

### 1. El botón principal de contacto está roto
`index.html:348` y `index.html:373` usan el número placeholder `595XXXXXXXXX`:
```html
<a href="https://wa.me/595XXXXXXXXX?text=...">Quiero agendar por WhatsApp</a>
...
<a href="https://wa.me/595XXXXXXXXX" ... aria-label="WhatsApp">
```
Con el número real (+595 982 135 943), el link debe ser `https://wa.me/595982135943`. Hoy, el único mecanismo de conversión del sitio (no hay formulario, es 100% WhatsApp) no funciona. Esto es tanto un bug de correctitud como el hallazgo #1 de CRO: "friction points — unclear next steps".

### 2. Cero señales geográficas en el contenido visible
Ni "Asunción" ni "Paraguay" aparecen en ningún lugar del HTML: ni en `<title>` (línea 6), ni en `meta description` (línea 7), ni en el H1 (línea 41), ni en "Sobre mí" (líneas 246-261), ni en el footer (líneas 353-384).
Google y los motores de IA no pueden asociar la página a "psicóloga en Asunción" o "psicólogo online Paraguay" si el texto nunca lo dice — el algoritmo no infiere ubicación solo por el TLD `.com.py`. Esto se resuelve en la Fase 2 (estructura-home.md ya reserva texto para esto).

### 3. No hay NAP (Nombre/Dirección/Teléfono) visible en ningún lado
No existe dirección ni teléfono como texto legible en `index.html`. El único rastro de contacto es el link de WhatsApp roto. Sin NAP visible:
- No hay con qué contrastar la coherencia de un futuro Google Business Profile (la consistencia NAP es señal directa de ranking local).
- No hay contenido real que el `LocalBusiness` schema pueda "reflejar" — el principio #1 del schema skill es *"Schema must accurately represent page content"*; poner `address` en el JSON-LD sin que la dirección exista en el HTML visible es justo el error que Google penaliza como mismatch.

### 4. Cero datos estructurados (JSON-LD)
No hay ningún `<script type="application/ld+json">` en `index.html`. No hay `Psychologist`, `LocalBusiness`, `FAQPage` ni `Organization`. Esto es una pérdida directa de:
- Rich results en Google (nombre, dirección, reseñas si las hubiera).
- Contexto estructurado que las IAs (ChatGPT, Perplexity, Gemini) usan para entender entidades con precisión. Se corrige con `schema.json` en la Fase 2.

### 5. La matrícula profesional (13799) no aparece en el sitio
`NOTAS.md:38` ya lo marca como pendiente: *"Registro profesional (número de matrícula) si desea mostrarlo"*. Para un sitio de salud (categoría YMYL — Your Money or Your Life), la credencial verificable es una señal de E-E-A-T (Expertise/Authoritativeness/Trustworthiness) que tanto Google como los motores de IA ponderan fuerte. Hoy solo hay chips genéricos de credenciales (`index.html:254-259`) sin número de colegiatura.

### 6. La modalidad (online/presencial) no está declarada en ningún texto
El FAQ actual delega todo a "escríbeme":
```html
<!-- index.html:327-329 -->
<summary>¿Las sesiones son presenciales u online?</summary>
<p>Escríbeme para consultar las modalidades disponibles en este momento...</p>
```
Esto es fricción innecesaria para CRO (una pregunta básica sin responder empuja al usuario a abandonar antes de escribir) y una pérdida total en AI-SEO: un motor de IA no puede citar "atiende online y presencial en Asunción" si el texto nunca lo afirma directamente. Se corrige en `faq.md` y `estructura-home.md`.

---

## 🟡 IMPORTANTE

### 7. Title y meta description sin keyword de ubicación
`index.html:6-7` — título actual: *"Lic. Aracely Arce Blaires — Psicóloga Clínica · Terapia Cognitivo-Conductual"*. No incluye "Asunción" ni "Paraguay". Para SERP local esto reduce relevancia frente a competidores que sí lo mencionan.

### 8. Enlaces sociales rotos en el footer
`index.html:367` (Facebook) y `index.html:370` (LinkedIn) tienen `href="#"` — enlaces muertos. Es una señal de confianza negativa (trust signal) y además un enlace roto real si alguien hace clic.

### 9. Falta robots.txt y sitemap.xml
No existen en el proyecto (`ls` de la carpeta lo confirma). Necesarios antes de publicar para controlar rastreo e indexación desde el día uno, y para declarar explícitamente qué bots de IA permitir (ver punto 19).

### 10. Falta canonical, Open Graph y Twitter Card en `<head>`
`index.html:1-12` no tiene `<link rel="canonical">`, ni `og:title/og:description/og:image/og:url`, ni `twitter:card`. Sin Open Graph, cualquier link compartido en WhatsApp/Instagram/Facebook se ve sin preview — alto impacto dado que WhatsApp es el canal principal del sitio.

### 11. No hay favicon declarado
Existe `assets/logo-icono.png` pero no hay `<link rel="icon">` en el `<head>` (líneas 1-12). Pestaña del navegador queda sin ícono.

### 12. Imágenes sin optimizar para rendimiento
`assets/*.jpg` pesan 28–101 KB sin versión WebP, y ninguna imagen en `index.html` (líneas 19, 358, etc.) declara `width`/`height` (riesgo de layout shift / CLS) ni `loading="lazy"` para las que están fuera del viewport inicial (logo del footer, por ejemplo).

### 13. FAQ actual no cubre las preguntas reales de intención local/transaccional
Las 8 preguntas de `index.html:306-337` son buenas para objeciones terapéuticas, pero ninguna responde "¿dónde queda el consultorio?", "¿cuánto cuesta la sesión?", "¿atienden online?" de forma extraíble (una IA necesita la respuesta completa en el bloque, no un "escríbeme"). Se reemplaza/complementa en `faq.md`.

### 14. Copy de CTA inconsistente entre nav y sección final
Nav: *"Quiero conocer el espacio"* (`index.html:28`) vs. CTA final: *"Quiero agendar por WhatsApp"* (`index.html:348`). No es un error grave, pero rompe la coherencia de mensaje que CRO recomienda entre puntos de decisión.

---

## 🟢 DESEABLE

### 15. Sin señal de frescura ("última actualización")
No hay fecha visible de actualización de contenido en ninguna sección — ayuda a IA (pondera recencia) y a Google.

### 16. Sin `llms.txt`
No es obligatorio (Google lo confirma explícitamente), pero ayuda a ChatGPT/Perplexity/Claude a entender rápido de qué trata el sitio. Bajo costo, se puede agregar en el lanzamiento.

### 17. Sin estadísticas ni citas en el copy
El brief profesional (PDF compartido) tiene datos concretos (modelo de Beck, hallazgos sobre burnout, neurociencia del trauma) que hoy no se reflejan en el sitio. Según el estudio Princeton GEO citado por el skill ai-seo, agregar estadísticas con fuente sube la visibilidad en IA ~37-40%. No es urgente para el lanzamiento, pero es una palanca de contenido a futuro.

### 18. Sin fotografías reales
`NOTAS.md:37` ya lo señala como pendiente. Hoy el hero y "Sobre mí" usan ilustraciones botánicas SVG. Afecta confianza/E-E-A-T pero es contenido, no código — fuera del alcance de este sprint técnico.

### 19. Cuando se cree el robots.txt, no bloquear bots de IA
Nota para el momento de publicar: permitir explícitamente `GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `Google-Extended` y `Bingbot` si el objetivo es aparecer citada por asistentes de IA. Bloquearlos por defecto (algunos generadores de robots.txt lo hacen) anula el objetivo planteado.

### 20. HTTPS / hosting aún no verificable
El sitio no está desplegado, así que no se puede confirmar SSL, cabeceras de cache, ni Core Web Vitals reales. Repetir estos chequeos (PageSpeed Insights, Rich Results Test) una vez publicado en `aracelyarceblaires.com.py`.

---

## Resumen ejecutivo

El sitio tiene una base de contenido y diseño sólida (jerarquía de encabezados correcta, un solo H1, copy cálido y bien estructurado, widget de respiración diferenciador). El problema no es "falta contenido" — es que **el sitio nunca dice dónde está, no se puede contactar, y no tiene ningún dato estructurado**. Esos tres huecos (ubicación, NAP funcional, schema) son exactamente lo que separa a "sitio bonito" de "sitio que aparece en búsquedas locales y que una IA puede citar con confianza".

Prioridad de arranque antes de publicar: puntos 1, 2, 3, 4, 5 y 6 (los seis críticos). El resto puede resolverse en paralelo o inmediatamente después del lanzamiento.

---

**Quedo a la espera de tu confirmación para pasar a la Fase 2** (estructura-home.md, faq.md, schema.json).
