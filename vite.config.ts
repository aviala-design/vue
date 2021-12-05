import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'

import postcssConfig from './.postcssrc'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      localsConvention: "dashes"
    },
    postcss: {
      ...postcssConfig
    },
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  plugins: [jsx(), vue()]
})
