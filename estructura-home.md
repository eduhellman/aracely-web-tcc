# Arquitectura de la home — aracelyarceblaires.com.py

Documenta la jerarquía de encabezados y el contenido de cada sección tal como está implementada hoy en `index.html` (single-page, 11 secciones + header + footer), después de los cambios de la Fase 1. Sirve como referencia para futuras ediciones y para verificar que la jerarquía semántica se mantenga correcta.

## Regla general ya cumplida
Un solo `<h1>` en toda la página, jerarquía sin saltos (H1 → H2 → H3), cada sección tiene su propio `id` para anclas de navegación. No se necesita tocar esto — se documenta para que se mantenga así en futuras ediciones.

---

## 1. Header / navegación (sin heading)
`index.html:16-34`
Logo (wordmark) + links ancla a cada sección + CTA "Quiero conocer el espacio". Menú hamburguesa en mobile.

## 2. Hero — `<h1>`
`index.html:37-63`
- Eyebrow: "Psicoterapia basada en evidencia"
- **H1**: "Entender lo que te pasa también es parte del cambio."
- Párrafo de propuesta de valor (enfoque TCC, espacio cálido)
- 2 CTAs: "Conoce mi forma de trabajar" (ancla a Proceso) / "Quiero conocer el espacio" (ancla a Contacto)

Rol SEO/CRO: primera impresión — clarifica en 5 segundos qué es el sitio y qué se puede hacer. No lleva la ubicación (se decidió no duplicarla acá; ya vive en el bloque de contacto y el footer).

## 3. "Quizás últimamente…" — `<h2>`
`id="quizas"` *(sin id actualmente — sección sin ancla propia)* · `index.html:66-87`
- Eyebrow: "Un punto de partida"
- **H2**: "Quizás últimamente…"
- Lista de 7 situaciones relatables (ansiedad, autoexigencia, patrones repetidos, límites, etc.)
- Cierre: "No tienes que tener todo claro para comenzar un proceso terapéutico." (tarjeta destacada)

Rol: conexión emocional temprana, listas de síntomas/situaciones que la gente efectivamente busca en Google ("por qué me cuesta desconectar", etc.) — buen material para ampliar contenido a futuro.

## 4. Terapia Cognitivo-Conductual — `<h2>` + 3× `<h3>`
`id="tcc"` · `index.html:90-120`
- **H2**: "Terapia Cognitivo-Conductual"
- Lema: "Comprender · Cuestionar · Practicar · Transformar"
- Intro: qué es la TCC
- Tríada con 3 **H3**: "Pensamientos", "Emociones", "Conductas"

Rol: define la entidad/enfoque clínico — clave para que una IA entienda qué tipo de terapia ofrece (bloque de definición, ver `faq.md` pregunta 4 para la versión extraíble de este mismo contenido).

## 5. Respiración 4-7-8 — `<h2>`
`id="respira"` · `index.html:124-162`
- **H2**: "Respira conmigo: 4 · 7 · 8"
- Explicación de la técnica + widget interactivo (orbe animado, temporizador)

Rol: diferenciador de marca, recurso gratuito descargable en experiencia — bueno para retención y para compartir en redes (no es prioritario para SEO local, pero suma tiempo en página).

## 6. Áreas de acompañamiento — `<h2>` + 6× `<h3>`
`id="areas"` · `index.html:165-207`
- **H2**: "¿Cómo puedo ayudarte?"
- 9 tarjetas con **H3**: Ansiedad y dificultades emocionales · Depresión y estados de ánimo bajo · Estrés y regulación emocional · Autoestima y relaciones interpersonales · Fobias y dificultades sociales · Adaptación a cambios y situaciones vitales · Adolescentes · Orientación a padres · Estimulación y rehabilitación cognitiva en adultos mayores

Rol: es la lista de servicios de facto del sitio. Cada H3 es una keyword de intención real ("psicólogo para ansiedad Asunción", "psicólogo para adolescentes Paraguay"). Se refleja en `schema.json` como `knowsAbout`/servicios.

## 7. Mi forma de trabajar — `<h2>` + 5× `<h3>`
`id="proceso"` · `index.html:210-226`
- **H2**: "¿Cómo es trabajar conmigo?"
- 5 pasos numerados (**H3** cada uno): Comprendemos → Identificamos → Trabajamos → Practicamos → Avanzamos

Rol: los números acá sí tienen sentido (es una secuencia real de proceso terapéutico) — reduce la incertidumbre de "no sé qué esperar", un objeción típica antes de agendar.

## 8. Sobre mí — `<h2>`
`id="sobre"` · `index.html:229-263`
- **H2**: "Hola, soy Aracely."
- Bio profesional (enfoque, filosofía)
- Frase destacada (cita, en tarjeta con borde suave)
- Chips de credenciales: Psicóloga Clínica · **Matrícula Profesional N.° 13799** · Enfoque Cognitivo-Conductual · Psicóloga clínica y miembro del Departamento de Psicología, Hospital de Clínicas FCM–UNA · Psicología basada en evidencia

Rol: E-E-A-T — es la sección que más pesa para credibilidad, tanto en Google (YMYL) como para que una IA cite el nombre completo + credencial con precisión.

## 9. "No es un examen" — `<h2>` + 2× `<h3>`
`id` no definido · `index.html:266-295`
- **H2**: "La terapia no tiene que sentirse como un examen."
- 2 columnas con **H3** "No tienes que…" / "Sí puedes…"

Rol: manejo de objeciones (CRO) — reduce ansiedad anticipatoria antes de agendar la primera sesión.

## 10. Preguntas frecuentes — `<h2>`
`id="faq"` · `index.html:298-341`
- **H2**: "Antes de empezar, quizás te preguntes…"
- Acordeón `<details>` con 8 preguntas (una ya reescrita en la Fase 1 para responder modalidad directamente)

**Pendiente de esta Fase 2**: reemplazar o ampliar este bloque con las 12 preguntas de `faq.md`, que están redactadas específicamente para extracción por IA (respuesta autocontenida de 40-60 palabras) y para alimentar el `FAQPage` de `schema.json`.

## 11. CTA final / Contacto — `<h2>`
`id="contacto"` · `index.html:344-351`
- **H2**: "Quizás este sea un buen momento para empezar."
- Botón WhatsApp + bloque NAP (dirección, teléfono, modalidad) agregado en la Fase 1

## Footer (sin heading)
`index.html:353-384`
Logo, tagline, NAP repetido, íconos Instagram + Facebook + WhatsApp, línea legal.

---

## Resumen de jerarquía

```
H1  Entender lo que te pasa también es parte del cambio.
 H2 Quizás últimamente…
 H2 Terapia Cognitivo-Conductual
   H3 Pensamientos
   H3 Emociones
   H3 Conductas
 H2 Respira conmigo: 4 · 7 · 8
 H2 ¿Cómo puedo ayudarte?
   H3 Ansiedad y dificultades emocionales
   H3 Depresión y estados de ánimo bajo
   H3 Estrés y regulación emocional
   H3 Autoestima y relaciones interpersonales
   H3 Fobias y dificultades sociales
   H3 Adaptación a cambios y situaciones vitales
   H3 Adolescentes
   H3 Orientación a padres
   H3 Estimulación y rehabilitación cognitiva en adultos mayores
 H2 ¿Cómo es trabajar conmigo?
   H3 Comprendemos / Identificamos / Trabajamos / Practicamos / Avanzamos
 H2 Hola, soy Aracely.
 H2 La terapia no tiene que sentirse como un examen.
   H3 No tienes que… / Sí puedes…
 H2 Antes de empezar, quizás te preguntes…
 H2 Quizás este sea un buen momento para empezar.
```
