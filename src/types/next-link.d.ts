declare module 'next/link' {
  import { ComponentType, ReactNode } from 'react';
  
  export interface LinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    target?: string;
    rel?: string;
  }
  
  const Link: ComponentType<LinkProps>;
  export default Link;
}
