import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_By9w_2IS.mjs';
import { manifest } from './manifest_Cbd-1uht.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/meta-capi.astro.mjs');
const _page2 = () => import('./pages/b.astro.mjs');
const _page3 = () => import('./pages/c.astro.mjs');
const _page4 = () => import('./pages/d.astro.mjs');
const _page5 = () => import('./pages/thankyou.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/meta-capi.ts", _page1],
    ["src/pages/b/index.astro", _page2],
    ["src/pages/c/index.astro", _page3],
    ["src/pages/d/index.astro", _page4],
    ["src/pages/thankyou.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0e41d5ec-4b84-453b-9024-f693257e3981",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
