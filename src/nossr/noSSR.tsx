import React, { useEffect, useState, Suspense } from 'react';
import { INoSSRProps } from './interface';

/**
 * 组件：NoSSR
 */
const NoSSR = (props: INoSSRProps) => {
  const children = props.children;

  /**
   * 状态：是否客户端
   */
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(typeof window !== 'undefined');
  }, []);

  if (!isClient) {
    return null;
  }

  return <Suspense fallback={props.loading}>{children}</Suspense>;
};

export default NoSSR;
