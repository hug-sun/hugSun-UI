# hugSun-UI

## 快速上手

安装依赖,

```bash
$ npm i
```

运行 devServer,

```bash
$ npm start
```

打包文档,

```bash
$ npm run docs:build
```

打包组件库，详见`father-build`,

```bash
$ npm run build
```

## 开发规范

1. commit 信息规范

   - commit 信息必须符合 type(scope): subject 的规范
   - type 提交类型为以下类型`feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release`
   - 严禁使用--no-verify 跳过 commit 信息验证

2. 目录规范

   - ```js
     .
     ├── README.md
     ├── dist // 执行yarn build打包后的组件库代码
     │   ├── Bar
     │   │   └── index.d.ts
     │   ├── Foo
     │   │   ├── __tests__
     │   │   │   └── index.spec.d.ts
     │   │   └── index.d.ts
     │   ├── index.d.ts
     │   ├── index.esm.js
     │   └── index.js
     ├── docs // 此目录下文档均为右上菜单配置用路由
     │   └── index.md
     ├── docs-dist // 执行yarn docs:build打包后的文档代码
     │   ├── 404.html
     │   ├── images
     │   │   ├── favicon.ico
     │   │   └── logo.png
     │   ├── index.html
     │   ├── umi.css
     │   └── umi.js
     ├── jest.config.js // jest配置文件
     ├── public // 静态资源存放目录
     │   └── images // 图片资源存放目录
     │       ├── favicon.ico
     │       └── logo.png
     ├── scripts // 脚本用代码存放目录
     │   ├── setupTests.js
     │   └── verifyCommit.js
     ├── src // 组件源码目录
     │   ├── Bar
     │   │   ├── __tests__
     │   │   │   └── index.spec.tsx
     │   │   ├── index.md
     │   │   └── index.tsx
     │   └── index.ts // 组件库入口文件
     ├── tsconfig.json // ts文件
     └── typings.d.ts // 类型声明文件
     ```

   - 单个组件目录名首字母大写

   - 组件内仅有唯一出口文件，文件名为 index.tsx

3. 组件库内置 prettier，写完代码后可以执行 yarn prettier 或者通过编辑器格式化代码

4. 测试应在每个组件目录下新建一个`__tests__`的目录，测试代码存放于此，工具库等公共方法的测试放于`src/tests`目录下

5. 暂无，随时补充
