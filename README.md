<div align="center">

# React

This is a React component called NoSSR, and its main function is to prevent the rendering of its child components in a server-side rendering (SSR) environment. This component renders its child components normally in a client-side environment (such as a browser), but in a server-side rendering environment it does not render anything.

[![GitHub License](https://img.shields.io/github/license/kwooshung/react-no-ssr?labelColor=272e3b&color=165dff)](LICENSE)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/kwooshung/react-no-ssr?labelColor=272e3b&color=00b42A&logo=github)
![GitHub last commit](https://img.shields.io/github/last-commit/kwooshung/react-no-ssr?labelColor=272e3b&color=165dff)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/kwooshung/react-no-ssr?labelColor=272e3b&color=165dff)
![GitHub top language](https://img.shields.io/github/languages/top/kwooshung/react-no-ssr?labelColor=272e3b&color=165dff)
![GitHub pull requests](https://img.shields.io/github/issues-pr/kwooshung/react-no-ssr?labelColor=272e3b&color=165dff)
![GitHub issues](https://img.shields.io/github/issues/kwooshung/react-no-ssr?labelColor=272e3b&color=165dff)
![Github Stars](https://img.shields.io/github/stars/kwooshung/react-no-ssr?labelColor=272e3b&color=165dff)
[![NPM Version](https://img.shields.io/npm/v/@kwooshung/react-no-ssr?labelColor=272e3b&color=165dff)](https://www.npmjs.com/package/@kwooshung/react-no-ssr)
[![Npm.js Downloads/Week](https://img.shields.io/npm/dw/%40kwooshung%2Freact-no-ssr?labelColor=272e3b&labelColor=272e3b&color=165dff&logo=npm)](https://www.npmjs.com/package/@kwooshung/react-no-ssr)
[![Github CI/CD](https://github.com/kwooshung/react-no-ssr/actions/workflows/ci.yml/badge.svg)](https://github.com/kwooshung/react-no-ssr/actions/)
[![codecov](https://codecov.io/gh/kwooshung/react-no-ssr/graph/badge.svg?token=VVZJE7H0KD)](https://codecov.io/gh/kwooshung/react-no-ssr)
[![Maintainability](https://api.codeclimate.com/v1/badges/325d0881b1ca19165d35/maintainability)](https://codeclimate.com/github/kwooshung/react-no-ssr/maintainability/)
[![Gitee Repo](https://img.shields.io/badge/Gitee-react--overlay--scrollbars--smooth-165dff?logo=gitee)](https://gitee.com/kwooshung/react-no-ssr/)

<p align="center">
    <a href="README.md" style="font-weight:700;color:#165dff;text-decoration:underline;">English</a> | 
    <a href="README.zh-CN.md">中文</a>
</p>
</div>

## Why was it developed?

- Client-specific code: Some code can only run in a browser environment, such as code that depends on the window, document, or other browser APIs. Running this code in a server-side rendering (SSR) environment can cause errors. The NoSSR component can prevent this code from being rendered on the server, ensuring it only runs in the client environment.
- Performance optimization: Rendering a large number of components or complex components on the server can lead to high server load and affect performance. By using the NoSSR component, you can choose to render some non-critical or resource-intensive components only on the client side, reducing server load and improving performance.
- User experience: Some components may need to be rendered again on the client side after being rendered on the server, such as components that depend on user interaction or browser size. This can cause page flickering or layout jitter, affecting the user experience. Using the NoSSR component, you can prevent these components from being rendered on the server, avoiding page flickering or layout jitter.

## Installation

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

## Usage

### components

```tsx
import { NoSSR } from '@kwooshung/react-no-ssr';

function App() {
  return <NoSSR>The content here will only be displayed in the browser</NoSSR>;
}
```

This component has only one optional prop: `Loading`. When your component is waiting for an asynchronous operation to complete, React will render `Loading`. This is typically set to a Loading indicator, such as a spinning icon or "loading..." text, to provide feedback to the user that Loading is in progress. Once the asynchronous operation is complete, `Loading` will be replaced with your component's children.

```tsx
import { NoSSR } from '@kwooshung/react-no-ssr';

function App() {
  return <NoSSR loading={<div>loading...</div>}>The content here will only be displayed in the browser</NoSSR>;
}
```

### hooks

`useNoSSR` It accepts a callback function as a parameter. This callback function will only be executed in the browser, not on the server side.

```tsx
import { useNoSSR } from '@kwooshung/react-no-ssr';

function App() {
  useNoSSR(() => {
    console.log('The content here is displayed in the browser developer tools');
  });

  return </>;
}

export default App;
```

## LICENSE

[MIT](LICENSE)
