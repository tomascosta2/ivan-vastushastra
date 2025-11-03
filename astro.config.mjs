// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// 👇 elegí uno de estos dos imports según tu caso
import vercel from '@astrojs/vercel/serverless'   // <-- Serverless (Node/Lambda)
// import vercel from '@astrojs/vercel/edge'      // <-- Edge Runtime

export default defineConfig({
  output: 'server',           // 👈 necesario para generar dist/server/entry.mjs
  adapter: vercel({}),          // 👈 sin props extra
  vite: {
    plugins: [tailwindcss()]
  }
})
