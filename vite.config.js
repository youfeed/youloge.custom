import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template:{
      compilerOptions:{
        isCustomElement: (tag) => tag.startsWith('youloge-'),
      }
    }
  })],
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
  resolve:{
    alias:{
      '@': resolve(__dirname, 'src'),
      '#': resolve(__dirname, 'lib'),
    }
  }
})
