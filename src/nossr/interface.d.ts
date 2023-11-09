import { ReactNode } from 'react';

/**
 * 组件Props属性：NoSSR
 */
export interface INoSSRProps {
  /**
   * 加载节点
   */
  loading?: ReactNode;
  /**
   * 子元素
   */
  children?: ReactNode;
}
