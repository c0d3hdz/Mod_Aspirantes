import { defineConfig } from 'astro/config'
import node from '@astrojs/node' // Nombre correcto del adaptador

export default defineConfig({
    output: 'server', // Habilita SSR
    adapter: node({
        mode: 'standalone', // o 'middleware'
    }),
})
