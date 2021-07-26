// Sidebar.tsx

import * as React from 'react';
import { ReactNode } from 'react';

import { Styles } from './Sidebar.styles';

interface Props {
  heading?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

export const Sidebar = ({ children, ...props }: Props) => {
  return (
    <aside css={Styles} {...props}>
      {children}
    </aside>
  );
};

export default Sidebar;
