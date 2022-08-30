import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  server: {
    host: true,
    port: 8001
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      // https://rollupjs.org/guide/en/#outputmanualchunks
      output: {
        manualChunks: {
          'home': ['./src/views/home/index.vue'],
          'analysis': ['./src/views/analysis/index.vue'],
          'datasync': ['./src/views/datasync/index.vue'],
          'login': ['./src/views/login/index.vue'],
        },
      },
    },
  }
})
