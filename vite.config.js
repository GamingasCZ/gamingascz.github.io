import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

// https://vitejs.dev/config/
export default defineConfig(mode => {

  return {
    plugins: [
      tailwindcss(),
      ViteMinifyPlugin()
    ],
    base: '/',
    build: {
      target: 'esnext',
      assetsInlineLimit: 8092
    },
  }

})
