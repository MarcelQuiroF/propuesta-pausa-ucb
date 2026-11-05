# Prototipo EC2 · Propuesta para Pausa Coffee Express

Propuesta académica UCB (Marketing Móvil MKD-314, II-2026) · Marcelo Quiroga y Florencia Pinedo.
**No es el sitio oficial de Pausa.** Todas las páginas llevan `noindex`.

## Páginas

| Página | Ruta | Estado en la defensa |
|---|---|---|
| Web liviana (vitrina que termina en WhatsApp) | `/` | FUNCIONAL |
| Consulta de puntos por número de WhatsApp | `/puntos.html` | FUNCIONAL (lee la hoja de puntos de Google Sheets) |
| Maqueta del perfil de Instagram + historia del anuncio | `/maquetas/instagram.html` (`#menu` abre la destacada) | SIMULADO |
| Maqueta del perfil de TikTok | `/maquetas/tiktok.html` | SIMULADO |
| Maqueta de la ficha de Maps | `/maquetas/maps.html` | PROPUESTO (maqueta) |
| Maqueta de la tarjeta de sellos | `/maquetas/tarjeta.html` | PROPUESTO (maqueta) |
| QR para proyectar en la defensa | `/qr.html` | — |
| QR de pago «DEMO · no válido para pagar» | `/demo/qr-demo-no-valido-para-pagar.png` | SIMULADO |

## Qué se edita y dónde (sin programar)

Todo dato de la marca vive en **`assets/js/config.js`**. En GitHub: abrir el archivo → lápiz → cambiar el valor entre comillas → *Commit changes*. La página se actualiza en 1–2 minutos.

- **Número de WhatsApp:** `WA_NUMBER`. Hoy es el número de demostración. Cuando el dueño aplique la propuesta, se cambia por `59164581332` y desaparece solo el rótulo «(número de demostración)».
- **Horario:** `HORARIO` (calcula «Abierto ahora / Cerrado»).
- **Enlaces de Maps:** `MAPS` → reemplazar por el enlace exacto de cada ficha [VERIFICAR].
- **Hoja de puntos:** `SHEET_CSV_URL` → el enlace CSV de la pestaña «Consulta».
- **Precios:** no están en la web (opción A). Se editan solo en el catálogo de WhatsApp Business.
- Textos de la página: `index.html` (buscar el texto y reemplazarlo).

## Publicación (GitHub Pages con GitHub Actions)

La web se publica sola con el flujo `.github/workflows/pages.yml`: cada cambio que llega a `main` (incluido un *Commit changes* hecho desde el navegador) se publica en 1–2 minutos.

1. Una sola vez: **Settings → Pages** → *Build and deployment* → *Source*: **GitHub Actions**.
2. Dirección: `https://marcelquirof.github.io/propuesta-pausa-ucb/`. Abrir `qr.html` en esa URL para proyectar los QR (se generan con la URL real).
3. Para ver si una publicación salió bien: pestaña **Actions** → «Publicar web en GitHub Pages». Para volver a publicar sin cambios: **Run workflow**.

## Peso y medición

Primera pantalla ≈ 80 KB (HTML, CSS, JS, fuente Manrope autoalojada, logo e imagen principal WebP). Imágenes debajo de la primera pantalla con carga diferida. Sin frameworks. Service worker mínimo (`sw.js`, red primero; nunca guarda los CSV de sellos) + manifiesto: la web es instalable. El aviso automático se suprime y, en `puntos.html`, aparece un botón «Instalar en mi celular» cuando el navegador lo permite.

## Origen de las imágenes

Fotos y logo de Pausa, con autorización verbal del dueño (ver bitácora). Convertidas a WebP y recortadas al tamaño de uso; los originales no se suben. Los íconos de la app se hicieron recortando el isotipo del logo, sin cambiarle la forma ni el color [confirmar con el equipo].
