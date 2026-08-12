# Web Aracely Arce Blaires — versión TCC
Carpeta nueva que evoluciona la web anterior ("psicologia somatica gemini") hacia el posicionamiento
de Terapia Cognitivo-Conductual, conservando la identidad visual de marca.

## Estructura
- index.html — página completa (una sola página, 10 secciones)
- css/style.css — estilos (tokens de la guía de marca)
- js/main.js — menú móvil, animaciones, respiración 4-7-8, formulario→WhatsApp
- assets/logo-horizontal.jpg — logo principal (navegación y footer)
- assets/logo-circular.jpg — sello circular (hero)
- assets/logo-circular-blanco.jpg — variante del sello sobre fondo blanco (disponible)

## Qué se conservó de la web anterior
- Identidad visual completa (paleta, Cormorant Garamond + Karla, formas orgánicas, botánica sutil) —
  la tipografía de cuerpo cambió de Montserrat a Karla en la pasada de SEO/diseño (ver más abajo)
- Widget de respiración interactivo → adaptado de Box Breathing (4-4-4-4) a Respiración 4-7-8,
  que es la técnica confirmada en el perfil profesional de Aracely (Kit de Supervivencia Emocional)
- Las olas orgánicas de transición entre secciones (shoreline waves)
- El visual de blob orgánico animado + rama botánica flotante
- La tarjeta del widget de respiración (ondas giratorias de fondo, orbe que pulsa, barras de fase)
- El espíritu del formulario ("Si te cuesta ponerlo en palabras, está bien"), ahora enviando
  el mensaje directo por WhatsApp (funciona en hosting estático, sin backend)

## Qué se reemplazó (y por qué)
Contenido somático presentado como método clínico de Aracely, no confirmado en su perfil real:
- "Liberación fascial", "conexión vagal", "el trauma se almacena en la fascia"
- "El estrés desactiva las áreas del lenguaje" como argumento de venta
- Norma de proxémica en teleconsulta ("química del miedo en la amígdala")
- Chip "Especialista Somática · Liberación Fascial & Vago"
Se guarda este texto en la carpeta original por si en el futuro Aracely valida formación somática.

## Pendiente de validar con Aracely
- [x] Número real de WhatsApp → +595 982 135 943, actualizado en index.html (CTA final y footer)
- [x] Modalidad de sesiones (presencial / online) → agregada en FAQ, bloque de contacto y footer
- [x] Registro profesional (número de matrícula) → 13799, agregado como chip en "Sobre mí", en meta description y en `schema.json` (`identifier`)
- [x] Dirección del consultorio (Arroyo Lambaré casi Taguató 434, Asunción, Paraguay) → agregada en bloque de contacto y footer
- [x] URL real de Facebook → agregada en el footer (`facebook.com/profile.php?id=61592144711436`)
- [ ] URL real de LinkedIn → sin URL todavía, no se agregó ningún ícono; sumarlo cuando exista
- [ ] Duración de sesión y precio → todavía sin definir, no se inventaron (ver nota al final de `faq.md`)
- [ ] Horarios de atención → sin definir, por eso `schema.json` no incluye `openingHoursSpecification`
      (instrucciones de cómo agregarlo cuando estén definidos, más abajo)
- [ ] Áreas adicionales (autoestima, relaciones/límites u otras de la lista TCC general):
      solo agregar las que Aracely confirme que atiende
- [ ] Fotografías reales de Aracely y del consultorio (hoy la web usa logo + ilustración botánica)

## Sesión de SEO / AI-SEO / Schema / CRO (Fase 1 + Fase 2 completas)

Se usaron las skills `seo-audit`, `ai-seo`, `schema` y `cro` del plugin `marketing-skills` para
auditar el sitio y dejarlo listo para posicionar en Google/Bing local y ser citado por asistentes
de IA (ChatGPT, Perplexity, Gemini, Claude). Documentos generados en esta carpeta:

- **`auditoria.md`** — auditoría completa, hallazgos priorizados (crítico/importante/deseable) con
  referencia a archivo y línea. Todos los puntos críticos ya están resueltos en el código.
- **`estructura-home.md`** — arquitectura de la home: jerarquía real de headings (1 H1, 9 H2, H3
  anidados correctamente) y qué contiene cada sección.
- **`faq.md`** — banco de 12 preguntas frecuentes redactadas para ser citables por IA (respuestas
  autocontenidas de 40-60 palabras). 5 de las 8 preguntas originales del sitio se fusionaron con
  estas por ser el mismo tema; el resultado final en `index.html` tiene 14 preguntas sin duplicados.
- **`schema.json`** — JSON-LD (`Psychologist` + `FAQPage` con las 14 preguntas) ya pegado en el
  `<head>` de `index.html` dentro de `<script type="application/ld+json">`. Validado sintácticamente.

### Cambios aplicados directo en el código
- **Bug crítico**: el botón de WhatsApp tenía un número placeholder (`595XXXXXXXXX`) y no
  funcionaba. Corregido a `+595 982 135 943` en CTA final y footer.
- **Título/meta description**: ahora incluyen "Asunción" y la matrícula 13799 (antes no había
  ninguna señal geográfica en todo el sitio).
- **NAP visible**: se agregó dirección + teléfono como texto plano en un bloque nuevo junto al CTA
  final y en el footer (antes no existía en ningún lado, solo el link de WhatsApp).
- **FAQ**: modalidad (online/presencial) ahora se responde de forma directa en vez de redirigir a
  "escríbeme"; se amplió de 8 a 14 preguntas sin duplicados (ver `faq.md`).
- **Chip de credenciales**: se agregó "Matrícula Profesional N.° 13799"; se cambió "Colaboradora ·
  Dpto. de Psicología, Hospital de Clínicas FCM–UNA" por "Psicóloga clínica y miembro del
  Departamento de Psicología, Hospital de Clínicas FCM–UNA" (mismo cambio reflejado en las
  respuestas de FAQ que mencionan esto, en `schema.json` y en `faq.md`).
- **Tipografía**: Montserrat → Karla en todo el sitio (`index.html` link de Google Fonts +
  5 referencias en `css/style.css`). Cormorant Garamond (títulos) no se tocó.
- **Bordes-acento laterales** ("side-tab", patrón típico de UI generada por IA) reemplazados por
  bordes finos perimetrales con esquinas parejas en 3 elementos: cierre de "Quizás últimamente…",
  cita destacada de "Sobre mí", y lista de pasos de la respiración 4-7-8 (`css/style.css`).
- **Facebook**: se agregó la URL real al footer; LinkedIn se dejó sin ícono (sin URL todavía).

### Cómo agregar los horarios cuando estén definidos
Dentro del primer objeto del `@graph` en `schema.json` (y en el `<script>` idéntico dentro de
`index.html`), agregar:
```json
"openingHoursSpecification": {
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
  "opens": "HH:MM",
  "closes": "HH:MM"
}
```

### Actualización de áreas de atención (revisión posterior)
Aracely revisó la lista de áreas y la reemplazó por una más precisa. Se dieron de baja "Agotamiento
y burnout", "Adultos" (genérico) y la vieja "Estimulación cognitiva" (ahora específica a adultos
mayores) por decisión de Aracely, no por error.

Con 7 tarjetas el grid de 3 columnas (`css/style.css:168`) quedaba con una tarjeta huérfana en la
última fila. En vez de fusionar (perdiendo especificidad de keywords) se separaron las dos
categorías más "empaquetadas" en 2 tarjetas cada una, llegando a 9 (3 filas de 3 exactas en
desktop):
- "Ansiedad, depresión..." → **Ansiedad y dificultades emocionales** + **Depresión y estados de
  ánimo bajo**
- "Adolescentes y orientación a padres" → **Adolescentes** + **Orientación a padres**

Lista final (9): Ansiedad y dificultades emocionales · Depresión y estados de ánimo bajo · Estrés y
regulación emocional · Autoestima y relaciones interpersonales · Fobias y dificultades sociales ·
Adaptación a cambios y situaciones vitales · Adolescentes · Orientación a padres · Estimulación y
rehabilitación cognitiva en adultos mayores.

Actualizado en los 5 lugares donde vive esta lista: tarjetas de "¿Cómo puedo ayudarte?" en
`index.html`, la respuesta de FAQ correspondiente (visible + JSON-LD embebido), `schema.json`
(`knowsAbout`/`makesOffer` + `FAQPage`), `faq.md` y `estructura-home.md`.

### Pasos post-publicación pendientes (con el mismo NAP en todos lados)
Nombre: **Lic. Aracely Arce Blaires — Psicóloga Clínica** · Dirección: **Arroyo Lambaré casi
Taguató 434, Asunción, Paraguay** · Teléfono: **+595 982 135 943**
1. Google Business Profile (categoría "Psicólogo/a", modalidad online+presencial)
2. Bing Places (se puede importar desde Google Business Profile)
3. Google Search Console (verificar propiedad, enviar sitemap.xml, revisar detección del schema
   con Rich Results Test una vez el dominio esté en línea)
4. Confirmar que Instagram y Facebook tengan el mismo NAP en su bio/info
5. Directorios locales de Paraguay (páginas amarillas, gremios de psicología)

## Publicación
Sitio 100% estático → Cloudflare Pages / Netlify / GitHub Pages gratis + dominio .com.py vía NIC-PY.
Subir el contenido de esta carpeta tal cual (index.html en la raíz).

## Cómo modificar los textos más adelante
Todos los textos están en un solo archivo: index.html. Cada sección está marcada con un
comentario grande, por ejemplo:  <!-- ============ HERO ============ -->
Opciones (de más simple a más potente):
1. Abrir index.html con un editor de texto (VS Code recomendado, gratis), buscar la frase
   que se quiere cambiar (Ctrl+F) y editarla. Guardar y volver a subir el archivo al hosting.
2. Pedir los cambios en el chat de Claude adjuntando esta carpeta (o el index.html).
3. Usar Claude Code en la app de escritorio apuntando a esta carpeta: se le pide el cambio
   en lenguaje natural ("cambia el titular del hero por...") y edita el archivo directamente.
No hace falta tocar css/style.css ni js/main.js para cambiar textos.
