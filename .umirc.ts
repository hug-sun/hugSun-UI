// @ts-ignore
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'hugSun-UI',
  favicon:
    (process.env.NODE_ENV === 'production' ? '/hugSun-UI' : '') +
    '/images/favicon.ico',
  logo:
    (process.env.NODE_ENV === 'production' ? '/hugSun-UI' : '') +
    '/images/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  history: {
    type: 'hash',
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/hugSun-UI/' : '/',
  hash: true,
});
