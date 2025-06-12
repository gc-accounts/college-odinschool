import dynamic from 'next/dynamic';
import { ComponentType } from 'react';


export function lazyLoad<P = {}>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  loadingComponent?: ComponentType<P>
) {
  return dynamic(importFunc, {
    // @ts-ignore
    loading: loadingComponent ? (props) => <loadingComponent {...props} /> : undefined,
    ssr: false
  });
}
