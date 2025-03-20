import { defineConfig } from '@umijs/max';

export default defineConfig({
  hash: true,
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  esbuildMinifyIIFE: true,
  layout: {},
  valtio: {},
  conventionRoutes: {
    exclude: [/\/components\//, /\/models\//, /NotAgree/],
  },
  npmClient: 'pnpm',
  tailwindcss: {},
  proxy: {
    '/api': {
      target: 'http://localhost:7001',
      changeOrigin: true,
    },
  },
});
