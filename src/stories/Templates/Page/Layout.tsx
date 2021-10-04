import { ReactNode } from 'react';

import { Styles, SidebarStyles } from './Layout.styles';

export type LayoutProps = {
  children: ReactNode;
  footer?: ReactNode;
  heading?: ReactNode;
  sidebar?: boolean;
};

export const Layout = ({ children, sidebar, ...props }: LayoutProps) => {
  return (
    <div css={[Styles, sidebar && SidebarStyles]} {...props}>
      {children}
    </div>
  );
};

export default Layout;
