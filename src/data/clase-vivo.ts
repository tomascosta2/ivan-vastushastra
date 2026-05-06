// ─── CONFIG DE LA LANDING /clase-en-vivo ─────────────────────────────────────
// Editá este archivo para cambiar fechas, precio, links, anchor, etc.
// El resto de los componentes leen de acá — no toques nada más.

// ── Fechas en vivo ───────────────────────────────────────────────────────────
// Cambialas cuando definas la próxima cohorte. La página muestra ambas.
export const FECHAS = [
  { label: "Miércoles 27 de Mayo", time: "19:30 hs (Argentina)", iso: "2026-05-27T22:30:00Z" },
  { label: "Sábado 30 de Mayo",    time: "10:00 hs (Argentina)", iso: "2026-05-30T13:00:00Z" },
] as const;

// La fecha "más cercana" — se usa para el countdown en el hero.
// Por defecto, la primera del array de arriba.
export const FECHA_PROXIMA_ISO = FECHAS[0].iso;

// ── Precio + checkout ────────────────────────────────────────────────────────
export const PRECIO_USD = 65;
export const PRECIO_LABEL = "USD 65";
export const CUOTAS = "hasta 3 cuotas";

// Link del checkout de Hotmart (pegá acá el link del producto al precio nuevo)
export const HOTMART_URL = "https://pay.hotmart.com/REPLACE-WITH-NEW-PRODUCT-LINK";

// ── Anchor de precio (justifica el "$65 es regalado") ────────────────────────
// Precio de la formación en EEUU que hizo Iván — se usa como referencia para
// mostrar que esta clase es la puerta de entrada al mismo conocimiento.
export const ANCHOR_USD = 5000;

// ── Video del hero ───────────────────────────────────────────────────────────
// Cuando tengas el link de YouTube, pegá el ID acá (parte después de v=).
// Ej: para https://youtube.com/watch?v=abc123 → "abc123".
// Si lo dejás null, el hero muestra una imagen estática en lugar del video.
export const YOUTUBE_VIDEO_ID: string | null = null;

// ── Cupos por sesión (escasez visual; ajustá si ya vendiste algunos) ─────────
export const CUPOS_POR_SESION = 50;
export const CUPOS_RESTANTES = 23; // mostrá un número creíble; subilo cuando agregues sesiones

// ── Producto ─────────────────────────────────────────────────────────────────
export const TITULO_CLASE = "Vastu Shastra: Armonía y Bienestar";
export const SUBTITULO_CORTO = "Clase en vivo · 2 horas + Q&A";

// ── Notificaciones de "social proof" en la landing ───────────────────────────
// Nombres + ciudad de personas que "acaban de reservar". Aparecen como toast
// abajo-izquierda cada 12-25 seg. Editá la lista para que parezca tu audiencia.
export const RESERVAS_FAKE: { nombre: string; ciudad: string }[] = [
  { nombre: "Julieta R.",    ciudad: "Buenos Aires" },
  { nombre: "Florencia M.",  ciudad: "Córdoba" },
  { nombre: "Camila B.",     ciudad: "Rosario" },
  { nombre: "Sofía L.",      ciudad: "Mendoza" },
  { nombre: "Agustina V.",   ciudad: "La Plata" },
  { nombre: "Martina G.",    ciudad: "Mar del Plata" },
  { nombre: "Lucía P.",      ciudad: "Buenos Aires" },
  { nombre: "Valentina S.",  ciudad: "Tucumán" },
  { nombre: "Carolina F.",   ciudad: "Salta" },
  { nombre: "Belén N.",      ciudad: "Neuquén" },
  { nombre: "Romina A.",     ciudad: "Bariloche" },
  { nombre: "Paula T.",      ciudad: "Santa Fe" },
  { nombre: "Daniela K.",    ciudad: "Montevideo" },
  { nombre: "Andrea C.",     ciudad: "Punta del Este" },
  { nombre: "Verónica D.",   ciudad: "CDMX" },
  { nombre: "Natalia Q.",    ciudad: "Guadalajara" },
  { nombre: "Florencia W.",  ciudad: "Madrid" },
  { nombre: "María Eugenia", ciudad: "Buenos Aires" },
  { nombre: "Yael H.",       ciudad: "Córdoba" },
  { nombre: "Cecilia O.",    ciudad: "Rosario" },
];
