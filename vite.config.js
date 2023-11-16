import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  build:{
    target: 'esnext',
    minify: 'terser',
    lib:{
      entry:'./lib/index.js',
      name:'youloge.custom',
      formats:['es','umd','iife'],
      fileName: (format) => `youloge.custom.${format}.js`,
    },
    rollupOptions:{
    }
  },
  plugins: [],
})
