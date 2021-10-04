import { ReactNode } from 'react';
import { css } from '@emotion/react';

import { Header } from '../..';

import { Styles } from './Sidebar.styles';

export type SidebarProps = {
  children?: ReactNode;
  end?: ReactNode;
  start?: ReactNode;
};

export const Sidebar = ({ children, end, start, ...props }: SidebarProps) => {
  return (
    <aside css={Styles} {...props}>
      <Header
        css={css`
          border-color: rgba(255, 255, 255, 0.25);
        `}
      >
        {start}
      </Header>
      <div>{children}</div>
      <div>{end}</div>
    </aside>
  );
};

export default Sidebar;
