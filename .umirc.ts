// @ts-ignore
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'hugSun-UI',
  favicon: '/images/favicon.ico',
  logo: '/images/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  history: {
    type: 'hash',
  },
  base: './',
  hash: true,
});
