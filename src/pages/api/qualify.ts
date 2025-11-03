export const prerender = false;

// src/pages/api/qualify.ts
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // TODO: enviar a Make/Zapier/DB si querés
    await fetch('https://hook.us2.make.com/yni3jq2qvs9j8wxh3b2mo2f1limgf1vb', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data) });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: "bad_request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
};