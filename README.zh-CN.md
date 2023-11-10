<div align="center">

# React NoSSR

这是一个名为NoSSR的React组件，它的主要功能是在服务器端渲染（SSR）环境中阻止其子组件的渲染。这个组件在客户端环境中（如浏览器）正常渲染其子组件，但在服务器端渲染环境中，它不会渲染任何内容。

[![GitHub License](https://img.shields.io/github/license/kwooshung/react-no-ssr?labelColor=272e3b&color=165dff)](LICENSE)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/kwooshung/react-no-ssr?labelColor=272e3b&color=00b42A&logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/kwooshung/react-no-ssr?labelColor=272e3b&color=165dff)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kwooshung/react-no-ssr?labelColor=272e3b&color=165dff)
![GitHub top language](https://img.shields.io/github/languages/top/kwooshung/react-no-ssr?labelColor=272e3b&color=165dff)
![GitHub pull requests](https://img.shields.io/github/issues-pr/kwooshung/react-no-ssr?labelColor=272e3b&color=165dff)
![GitHub issues](https://img.shields.io/github/issues/kwooshung/react-no-ssr?labelColor=272e3b&color=165dff)
![Github Stars](https://img.shields.io/github/stars/kwooshung/react-no-ssr?labelColor=272e3b&color=165dff)
[![NPM Version](https://img.shields.io/npm/v/@kwooshung/react-no-ssr?labelColor=272e3b&color=165dff)](https://www.npmjs.com/package/@kwooshung/react-no-ssr)
[![Npm.js Downloads/Week](https://img.shields.io/npm/dw/@kwooshung/react-no-ssr?labelColor=272e3b&labelColor=272e3b&color=165dff&logo=npm)](https://www.npmjs.com/package/@kwooshung/react-no-ssr)
[![Github CI/CD](https://github.com/kwooshung/react-no-ssr/actions/workflows/ci.yml/badge.svg)](https://github.com/kwooshung/react-no-ssr/actions/)
[![codecov](https://codecov.io/gh/kwooshung/react-no-ssr/graph/badge.svg?token=VVZJE7H0KD)](https://codecov.io/gh/kwooshung/react-no-ssr)
[![Maintainability](https://api.codeclimate.com/v1/badges/325d0881b1ca19165d35/maintainability)](https://codeclimate.com/github/kwooshung/react-no-ssr/maintainability/)
[![Gitee Repo](https://img.shields.io/badge/Gitee-react--overlay--scrollbars--smooth-165dff?logo=gitee)](https://gitee.com/kwooshung/react-no-ssr/)

<p align="center">
    <a href="README.md">English</a> | 
    <a href="README.zh-CN.md" style="font-weight:700;color:#165dff;text-decoration:underline;">中文</a>
</p>
</div>

## 为什么开发它？

- 客户端特定代码：有些代码只能在浏览器环境中运行，例如，依赖于window、document或其他浏览器API的代码。在服务器端渲染（SSR）环境中运行这些代码会导致错误。NoSSR组件可以阻止这些代码在服务器端渲染，确保它们只在客户端环境中运行。
- 性能优化：在服务器端渲染大量的组件或复杂的组件可能会导致服务器负载过大，影响性能。使用NoSSR组件，你可以选择只在客户端渲染一些非关键的或资源密集型的组件，从而减轻服务器负载，提高性能。
- 用户体验：有些组件在服务器端渲染后可能需要在客户端再次渲染，例如，依赖于用户交互或浏览器尺寸的组件。这可能会导致页面闪烁或布局抖动，影响用户体验。使用NoSSR组件，你可以阻止这些组件在服务器端渲染，避免页面闪烁或布局抖动。

## 安装

### npm

```bash
npm install @kwooshung/react-no-ssr
```

### yarn

```bash
yarn add @kwooshung/react-no-ssr
```

### pnpm

```bash
pnpm add @kwooshung/react-no-ssr
```

## 使用方法

### 组件

```tsx
import { NoSSR } from '@kwooshung/react-no-ssr';

function App() {
  return <NoSSR>这里的内容，只会在浏览器中显示</NoSSR>;
}
```

此组件，只有一个可选属性：`Loading`，在你的组件等待异步操作完成时，`React` 会渲染 `loading`。这通常被设置为一个加载指示器，例如一个旋转的图标或者"加载中..."的文本，以给用户一个正在加载的反馈。当异步操作完成，`loading` 将被替换为你的组件的子组件。

```tsx
import { NoSSR } from '@kwooshung/react-no-ssr';

function App() {
  return <NoSSR loading={<div>loading...</div>}>这里的内容，只会在浏览器中显示</NoSSR>;
}
```

### hooks

`useNoSSR` 它接受一个回调函数作为参数，这个回调函数只会在浏览器中执行，而不会在服务器端执行。

```tsx
import { useNoSSR } from '@kwooshung/react-no-ssr';

function App() {
  useNoSSR(() => {
    console.log('这里的内容，在浏览器开发者工具中显示');
  });

  return </>;
}

export default App;
```

## 许可证

[MIT](LICENSE)
