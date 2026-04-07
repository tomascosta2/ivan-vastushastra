export const prerender = false;

import type { APIRoute } from 'astro';

const FFA_API_KEY = import.meta.env.FFA_API_KEY;
// TODO: confirmar con FFA que este clientName/clientId es correcto para Ivan Dacharry
const FFA_CLIENT_NAME = 'Ivan Dacharry';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const payload = {
      clientName: FFA_CLIENT_NAME,
      lead: {
        nombre: body.name,
        correo: body.email,
        telefono: body.phone,
        campana: body.ad ?? '',
        splitTest: body.variant ?? '',
        ...(body.agendo !== undefined && { agendo: body.agendo }),
        ...(body.startTime !== undefined && { startTime: body.startTime }),
        ...(body.edad !== undefined && { edad: body.edad }),
        ...(body.ocupacion !== undefined && { ocupacion: body.ocupacion }),
        ...(body.compromiso !== undefined && { compromiso: body.compromiso }),
        ...(body.presupuesto !== undefined && { presupuesto: body.presupuesto }),
        ...(body.objetivo !== undefined && { objetivo: body.objetivo }),
        ...(body.fbc != null && { fbc: body.fbc }),
        ...(body.fbp != null && { fbp: body.fbp }),
      },
    };

    console.log('[FFA] Enviando payload:', JSON.stringify(payload, null, 2));

    const response = await fetch('https://fit-funnels-analytics.vercel.app/api/webhook/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': FFA_API_KEY ?? '',
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();
    console.log('[FFA] Respuesta:', response.status, text);

    if (!response.ok) {
      console.error('[FFA] Error al enviar lead:', response.status, text);
      return new Response(JSON.stringify({ success: false, status: response.status, body: text }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error('[FFA] Error:', e);
    return new Response(JSON.stringify({ success: false, error: 'bad_request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
