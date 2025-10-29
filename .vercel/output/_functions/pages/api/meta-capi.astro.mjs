import crypto from 'node:crypto';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const PIXEL_ID = "3556102084520342";
const ACCESS_TOKEN = "EABzk8PZBj2XQBPwxZCAijjjrYk0IUiG3ayGwl7rkeYpOal4REZClZBcsE3Ps3A18jyy8hBakwVjgTFBJn3AT8BPB5JBoqe8nbYDMCvuyetOoj7YusosBZAW3nLJAXEfT4tJstRnwchNDGViBAJ2LltgedXnuhQSCs47GKZAQ9o285FebHd2s8fSAtAW6ugsKsoTwZDZD";
function normalizeEmail(email) {
  return (email || "").trim().toLowerCase();
}
function normalizePhone(phone) {
  const digits = (phone || "").replace(/\D/g, "");
  return digits;
}
function sha256(str) {
  return crypto.createHash("sha256").update(str, "utf8").digest("hex");
}
const POST = async ({ request }) => {
  try {
    const {
      eventName = "Schedule",
      eventTime,
      // unix seconds (number)
      eventSourceUrl,
      // string
      actionSource = "website",
      eventId = "",
      // Opcionales (sin hash)
      email = "",
      phone = "",
      // Opcionales de atribución
      fbp = "",
      fbc = ""
    } = await request.json();
    const user_data = {};
    const normalizedEmail = normalizeEmail(email);
    if (normalizedEmail) user_data.em = sha256(normalizedEmail);
    const normalizedPhone = normalizePhone(phone);
    if (normalizedPhone) user_data.ph = sha256(normalizedPhone);
    if (fbp) user_data.fbp = fbp;
    if (fbc) user_data.fbc = fbc;
    const payload = {
      data: [
        {
          event_name: eventName,
          // e.g., 'Schedule'
          event_time: Number(eventTime) || Math.floor(Date.now() / 1e3),
          action_source: actionSource,
          // 'website'
          event_source_url: eventSourceUrl,
          // página donde ocurrió
          event_id: eventId,
          // útil para deduplicación
          user_data
        }
      ]
      //test_event_code: 'TEST98961'
    };
    const fbRes = await fetch(`https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const fbJson = await fbRes.json();
    console.log("Facebook Response: ", fbJson);
    const ok = fbRes.ok;
    return new Response(JSON.stringify({ ok, fb: fbJson }), {
      status: ok ? 200 : 400
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: err?.message || "Unknown error" }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
