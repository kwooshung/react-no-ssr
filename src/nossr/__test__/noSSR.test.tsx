import { render } from '@testing-library/react';
import NoSSR from '../noSSR';

describe('NoSSR 组件', () => {
  // 测试客户端渲染
  test('在客户端渲染时正确渲染子组件', () => {
    const { container } = render(<NoSSR loading={<div>Loading...</div>}>Hello World</NoSSR>);
    console.log(container.innerHTML);
    expect(container.innerHTML).toBe('Hello World');
  });
});
