export const prerender = false;

// src/pages/api/meta-capi.ts
import type { APIRoute } from 'astro';
import crypto from 'node:crypto';

const PIXEL_ID = import.meta.env.META_PIXEL_ID;
const ACCESS_TOKEN = import.meta.env.META_ACCESS_TOKEN;

// Normalizaciones recomendadas por Meta
function normalizeEmail(email?: string) {
  return (email || '').trim().toLowerCase();
}
function normalizePhone(phone?: string) {
  // Quita todo lo que no sea dígito. Si es AR y querés, podés forzar prefijo 54.
  const digits = (phone || '').replace(/\D/g, '');
  return digits;
}
function sha256(str: string) {
  return crypto.createHash('sha256').update(str, 'utf8').digest('hex');
}

export const POST: APIRoute = async ({ request }) => {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return new Response(
      JSON.stringify({ ok: false, error: 'Faltan META_PIXEL_ID o META_ACCESS_TOKEN en .env' }),
      { status: 500 }
    );
  }

  try {
    const {
      eventName = 'Schedule',
      eventTime,          // unix seconds (number)
      eventSourceUrl,     // string
      actionSource = 'website',
      eventId = 'schedule-' + Date.now(),

      // Opcionales (sin hash)
      email = '',
      phone = '',

      // Opcionales de atribución
      fbp = '',
      fbc = ''
    } = await request.json();

    const user_data: Record<string, unknown> = {};

    // Hashing como exige Meta
    const normalizedEmail = normalizeEmail(email);
    if (normalizedEmail) user_data.em = sha256(normalizedEmail);

    const normalizedPhone = normalizePhone(phone);
    if (normalizedPhone) user_data.ph = sha256(normalizedPhone);

    if (fbp) user_data.fbp = fbp;
    if (fbc) user_data.fbc = fbc;

    const payload = {
      data: [
        {
          event_name: eventName,            // e.g., 'Schedule'
          event_time: Number(eventTime) || Math.floor(Date.now() / 1000),
          action_source: actionSource,      // 'website'
          event_source_url: eventSourceUrl, // página donde ocurrió
          event_id: eventId,                // útil para deduplicación
          user_data
        }
      ],
	  //test_event_code: 'TEST40489'
    };

    const fbRes = await fetch(`https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const fbJson = await fbRes.json();
	console.log("Facebook Response: ", fbJson)
    const ok = fbRes.ok;

    return new Response(JSON.stringify({ ok, fb: fbJson }), {
      status: ok ? 200 : 400
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ ok: false, error: err?.message || 'Unknown error' }), {
      status: 500
    });
  }
};
