import { useEffect } from 'react';

/**
 * Hook：判断是否为客户端渲染
 */
const useNoSSR = (callback: () => void) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      callback();
    }
  }, [callback]);
};

export default useNoSSR;
