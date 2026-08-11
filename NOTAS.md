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
- Identidad visual completa (paleta, Cormorant Garamond + Montserrat, formas orgánicas, botánica sutil)
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
- [ ] Número real de WhatsApp → reemplazar 595XXXXXXXXX en js/main.js (línea NUMERO) y en el footer
- [ ] URLs reales de Facebook y LinkedIn en el footer (hoy con href="#")
- [ ] Modalidad de sesiones (presencial / online) y duración → hoy el FAQ redirige a "escríbeme"
- [ ] Áreas adicionales (autoestima, relaciones/límites u otras de la lista TCC general):
      solo agregar las que Aracely confirme que atiende
- [ ] Fotografías reales de Aracely y del consultorio (hoy la web usa logo + ilustración botánica)
- [ ] Registro profesional (número de matrícula) si desea mostrarlo

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
