// Layout.tsx

import * as React from 'react';
import { ReactNode } from 'react';

import { Styles, SidebarStyles } from './Layout.styles';

interface Props {
  heading: ReactNode;
  footer: ReactNode;
  sidebar: boolean;
  children: ReactNode;
}

export const Layout = ({ children, sidebar, ...props }: Props) => {
  return (
    <div css={[Styles, sidebar && SidebarStyles]} {...props}>
      {children}
    </div>
  );
};

export default Layout;
