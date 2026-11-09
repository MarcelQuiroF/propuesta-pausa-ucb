/* =====================================================================
   DATOS DE LA PROPUESTA · se editan SOLO aquí (fuente única, tabla 2.1)
   Para editar desde el celular: en GitHub, abrir este archivo, tocar el
   lápiz, cambiar el valor entre comillas y "Commit changes".
   ===================================================================== */
window.PAUSA = {
  /* --- Número de WhatsApp ---------------------------------------------
     Número real de Pausa (desde el 09/11/2026). El de demostración del
     equipo era 59157901276: si WA_NUMBER vuelve a ser distinto de
     REAL_NUMBER, la web muestra sola el rótulo «(número de demostración)». */
  WA_NUMBER: "59164581332",
  REAL_NUMBER: "59164581332",

  /* --- Textos prellenados por canal (tabla 2.2) --------------------- */
  WA_TEXTS: {
    web: "Hola, vengo de la web y quiero hacer un pedido para retirar",
    tiktok: "Hola, vi su TikTok y quiero hacer un pedido para retirar",
    maps: "Hola, los encontré en Google Maps y quiero hacer un pedido para retirar", // [propuesta nueva, falta en 12 §2.2]
    anuncio: "Hola, vi el Matcha Blue & berries en Instagram y lo quiero para retirar",
    instagram: "", // botón del perfil: el texto lo define la plataforma [VERIFICAR]
    puntos: ""     // consultas de sellos: el cliente escribe libremente
  },

  /* --- Horario (tabla 2.1) · zona America/La_Paz ---------------------
     Días: 1 = lunes … 6 = sábado, 0 = domingo. Franjas en "HH:MM".     */
  TIMEZONE: "America/La_Paz",
  HORARIO: {
    dias: [1, 2, 3, 4, 5, 6],
    franjas: [["08:00", "12:00"], ["15:00", "20:00"]]
  },

  /* --- Enlaces de Maps --------------------------------------------- */
  MAPS: {
    // [VERIFICAR] reemplazar por el enlace exacto de cada ficha (Compartir > Copiar enlace)
    principal: "https://www.google.com/maps/search/?api=1&query=F788%2B27F%20Tarija",
    sucursal: "https://www.google.com/maps/search/?api=1&query=Av.%20La%20Paz%20249%2C%20Tarija%2C%20Bolivia",
    ficha: "https://www.google.com/maps/search/?api=1&query=Pausa%20Coffee%20Express%20Tarija"
  },

  /* --- Redes reales de Pausa ----------------------------------------- */
  INSTAGRAM: "https://www.instagram.com/pausa.coffeetja/",
  TIKTOK: "https://www.tiktok.com/@pausa.coffeetja", // [VERIFICAR usuario exacto]

  /* --- Hoja de puntos -----------------------------------------------
     Pegar aquí el enlace de la pestaña «Consulta» publicada como CSV
     (Archivo > Compartir > Publicar en la web > Consulta > CSV).
     Si queda vacío, la consulta de puntos muestra un aviso de error.   */
  SHEET_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRv5ElpYGW1CR7QO4uydRfbfoQ9umkOJQt1qEhhYd8cq-c1VwHiKpxEZ6nsmX-EHwHjmDw00E1VQtr_/pub?gid=1663928436&single=true&output=csv",

  SELLOS_META: 10,
  ACTUALIZADO: "14/10/2026"
};
