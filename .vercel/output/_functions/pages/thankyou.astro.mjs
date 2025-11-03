import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BHQwKeS7.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_B_ZMlYiY.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Thankyou = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", `<section class="py-[60px] md:py-[90px] relative bg-[#111] overflow-clip"> <div class="tcp-container relative px-4"> <h5 class="text-white text-balance font-semibold text-center text-[16px] md:text-[18px] mb-4 md:mb-4">
Ya estas un paso m\xE1s cerca de poder Equilibrar y Armonizar cualquier tipo de Espacio.
</h5> <h1 class="text-white font-bold text-[22px] leading-[120%] md:text-[34px] text-center max-w-[1200px] mx-auto mb-8 md:text-balance">
\xA1Bienvenido y gracias por agendar! Vas a recibir un correo con toda la
				informaci\xF3n para conectarte a llamada que agendaste.
</h1> <p class="text-center max-w-[800px] text-white mx-auto md:text-[20px]">
Necesito que confirmes la llamada para asegurar tu lugar.
				Hace clic en el bot\xF3n de abajo y confirma tu asistencia.
</p> <a class="py-3 bg-green-500 block text-center mx-auto md:w-fit mt-8 px-8 text-white font-bold" target="_blank" href="https://wa.me/+5491125440011?text=Hola%20Ivan!%2C%20quiero%20confirmar%20mi%20consulta">Confirmar mi asistencia</a> <p class="text-center my-8 text-white/80 max-w-[500px] mx-auto">
(En caso de no poder asistir por favor avisar con anticipaci\xF3n
				para no quitarle lugar a otra persona).
</p> <iframe class="w-full max-w-[500px] mx-auto aspect-video mb-4" src="https://www.youtube.com/embed/8yi6D2Nkx04?si=AC5Ye1a63UoFQ1pK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <iframe class="w-full max-w-[500px] mx-auto aspect-video mb-4" src="https://www.youtube.com/embed/W1L5Yg8L0Bg?si=47uwsH6uCPeHyoD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <img class="mx-auto w-[250px] mix-blend-screen mt-[80px]" src="/images/vastu-shastra.webp" alt="Ivan Dacharry"> <p class="text-white/80 text-center mt-8 text-[14px] md:text-[16px]">
\xA9 Formaci\xF3n Vastu Shastra 2025. Todos los derechos reservados.
</p> </div> </section> <script>
		window.addEventListener('load', () => {
			fbq('track', 'CompleteRegistration');
			fbq('track', 'Schedule', {}, {eventId: 'schedule-' + Date.now()});
		})
	<\/script> `])), maybeRenderHead()) })}`;
}, "/media/tomas/DATOS/callfunnels/ivan-vastushastra/src/pages/thankyou.astro", void 0);

const $$file = "/media/tomas/DATOS/callfunnels/ivan-vastushastra/src/pages/thankyou.astro";
const $$url = "/thankyou";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Thankyou,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
