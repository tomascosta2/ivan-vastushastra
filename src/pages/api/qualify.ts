export const prerender = false;

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const data = await request.json();
    const variant = cookies.get("ab_vastu_title")?.value ?? "unknown";

    console.log(variant)

    const payload = {
      ...data,
      variant
    }

    // TODO: enviar a Make/Zapier/DB si querés
    const response = await fetch('https://hook.us2.make.com/yni3jq2qvs9j8wxh3b2mo2f1limgf1vb', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload), credentials: "include" });

    console.log(response)
    
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