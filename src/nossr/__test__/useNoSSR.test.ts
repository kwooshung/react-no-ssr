import { renderHook } from '@testing-library/react-hooks';
import useNoSSR from '../useNoSSR';

describe('useNoSSR', () => {
  test('检查是否调用了Hook', () => {
    let called = false;
    const callback = () => {
      called = true;
    };
    renderHook(() => useNoSSR(callback));

    expect(called).toBe(true);
  });
});
