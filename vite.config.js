import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, './index.ts'),
        data: resolve(__dirname, './data/index.ts'),
        generators: resolve(__dirname, './generators/index.ts'),
      },
      formats: ['es'],
    },
  },
})