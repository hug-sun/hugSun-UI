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
  publicPath: process.env.NODE_ENV === 'production' ? '/hugSun-UI/' : '/',
  hash: true,
});
