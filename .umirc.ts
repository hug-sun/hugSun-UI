// @ts-ignore
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'hugSun-UI',
  favicon:
    (process.env.NODE_ENV === 'production' ? '/hugSun-UI' : '') +
    '/images/favicon.ico', // 后续再找一下有没有其他的方案 现在这个方案部署很难受 logo同理
  logo:
    (process.env.NODE_ENV === 'production' ? '/hugSun-UI' : '') +
    '/images/logo.png',
  outputPath: 'docs-dist', // 输出目录
  mode: 'site',
  history: {
    type: 'hash', // 打包后
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/hugSun-UI/' : '/', // 静态资源地址 ./其实也可以
  hash: true, // 这块是静态资源会标记hash 并不是路由中的hash 不要弄混了
  sass: {
    prependData: "@import '~@/theme/variables.scss';",
  },
  styles: [`iframe {background-color: #f5f5f9;}`],
});
