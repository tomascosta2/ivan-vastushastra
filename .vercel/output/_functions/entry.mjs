import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_By9w_2IS.mjs';
import { manifest } from './manifest_C1r2B-0C.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/meta-capi.astro.mjs');
const _page2 = () => import('./pages/api/qualify.astro.mjs');
const _page3 = () => import('./pages/calendar.astro.mjs');
const _page4 = () => import('./pages/thankyou.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/meta-capi.ts", _page1],
    ["src/pages/api/qualify.ts", _page2],
    ["src/pages/calendar.astro", _page3],
    ["src/pages/thankyou.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "40f23d1f-d456-43b1-a11d-f6d9fcd11740",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
