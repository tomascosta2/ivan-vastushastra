import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_BHQwKeS7.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_oHWuJpCh.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///media/tomas/DATOS/callfunnels/ivan-vastushastra/","cacheDir":"file:///media/tomas/DATOS/callfunnels/ivan-vastushastra/node_modules/.astro/","outDir":"file:///media/tomas/DATOS/callfunnels/ivan-vastushastra/dist/","srcDir":"file:///media/tomas/DATOS/callfunnels/ivan-vastushastra/src/","publicDir":"file:///media/tomas/DATOS/callfunnels/ivan-vastushastra/public/","buildClientDir":"file:///media/tomas/DATOS/callfunnels/ivan-vastushastra/dist/client/","buildServerDir":"file:///media/tomas/DATOS/callfunnels/ivan-vastushastra/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"calendar/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/calendar","isIndex":false,"type":"page","pattern":"^\\/calendar\\/?$","segments":[[{"content":"calendar","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/calendar.astro","pathname":"/calendar","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"thankyou/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/thankyou","isIndex":false,"type":"page","pattern":"^\\/thankyou\\/?$","segments":[[{"content":"thankyou","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thankyou.astro","pathname":"/thankyou","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/meta-capi","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/meta-capi\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"meta-capi","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/meta-capi.ts","pathname":"/api/meta-capi","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/qualify","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/qualify\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"qualify","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/qualify.ts","pathname":"/api/qualify","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/media/tomas/DATOS/callfunnels/ivan-vastushastra/src/pages/calendar.astro",{"propagation":"none","containsHead":true}],["/media/tomas/DATOS/callfunnels/ivan-vastushastra/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/media/tomas/DATOS/callfunnels/ivan-vastushastra/src/pages/thankyou.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/api/meta-capi@_@ts":"pages/api/meta-capi.astro.mjs","\u0000@astro-page:src/pages/api/qualify@_@ts":"pages/api/qualify.astro.mjs","\u0000@astro-page:src/pages/thankyou@_@astro":"pages/thankyou.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/calendar@_@astro":"pages/calendar.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/media/tomas/DATOS/callfunnels/ivan-vastushastra/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CMYLOUah.mjs","\u0000@astrojs-manifest":"manifest_0W1Mry7s.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/titillium-web-latin-700-normal.Di5EoujO.woff2","/_astro/titillium-web-latin-300-normal.s-jqhHo6.woff2","/_astro/titillium-web-latin-ext-300-normal.BIhTBvkT.woff2","/_astro/titillium-web-latin-ext-900-normal.CKgCShiI.woff2","/_astro/titillium-web-latin-600-normal.DHyIPOJp.woff2","/_astro/titillium-web-latin-900-normal.DnXbrTk3.woff2","/_astro/titillium-web-latin-ext-400-normal.CkwGgFuy.woff2","/_astro/titillium-web-latin-ext-600-normal.BQTO9iNT.woff2","/_astro/titillium-web-latin-ext-700-normal.D-L48GtO.woff2","/_astro/titillium-web-latin-400-normal.CZgtkewL.woff2","/_astro/titillium-web-latin-700-normal.CI17UwKE.woff","/_astro/titillium-web-latin-ext-300-normal.CJ1uG0wm.woff","/_astro/titillium-web-latin-ext-900-normal.Bsd-9RMr.woff","/_astro/titillium-web-latin-300-normal.DNAHS399.woff","/_astro/titillium-web-latin-ext-600-normal.nm5mqO-T.woff","/_astro/titillium-web-latin-600-normal.Dr3U_j_N.woff","/_astro/titillium-web-latin-900-normal.Diz1dGqE.woff","/_astro/titillium-web-latin-ext-400-normal.DcQt_AWo.woff","/_astro/titillium-web-latin-ext-700-normal.DcPuKOmY.woff","/_astro/titillium-web-latin-400-normal.Vvkd3AOK.woff","/_astro/calendar.DUIHF7ni.css","/favicon.svg","/images/AGUSTINA-VANZULLI.jpg","/images/CECILIA-RAMADORI.jpeg","/images/Customer-Journey.pdf","/images/FERNANDA-CHEDID.jpeg","/images/FERNANDA-MARCÓ-DE-PONT.jpeg","/images/FLAVIA-ROMERO.jpeg","/images/LUCÍA-DELLEA.jpg","/images/YAEL-HOCSMAN.jpeg","/images/YAKELÍN-REGALADO.jpg","/images/estrellas.webp","/images/testimonio-profile.webp","/images/vastu-shastra-og.jpg","/images/vastu-shastra.webp","/programa/formacion-vastu-shastra.pdf","/calendar/index.html","/thankyou/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"ftQHEs2PZCdpluhT2XXtt/vqynHc4W9aq71nw/a6GRQ="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
