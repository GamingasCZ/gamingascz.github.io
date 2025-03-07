import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(mode => {

  return {
    plugins: [
      tailwindcss(),
    ],
    base: '/',
    build: {
      target: 'esnext'
    },
  }

})
