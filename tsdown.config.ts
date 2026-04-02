import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  dts: {
    emitDtsOnly: true,
  },
  outDir: 'dist',
  clean: true,
})
