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
  conventionRoutes: {
    exclude: [/\/components\//, /\/models\//, /NotAgree/],
  },
  npmClient: 'pnpm',
});
