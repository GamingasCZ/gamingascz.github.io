import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(mode => {
  return {
    build: {
      terserOptions: {
        parse: {
          html5_comments: false,
        }
      }
    }
  }

})
