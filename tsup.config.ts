import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  target: 'esnext',
  format: ['esm'],
  sourcemap: true,
  minify: true,
  outDir: 'dist',
  clean: true,
  dts: true,
});
