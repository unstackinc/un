// Header.tsx

import * as React from 'react';
import { ReactNode } from 'react';

import { Styles, ContainerStyles } from './Header.styles';

interface HeaderProps {
  start?: ReactNode;
  end?: ReactNode;
}

export const Header = ({ start, end, ...props }: HeaderProps) => {
  return (
    <header css={Styles} {...props}>
      <div css={ContainerStyles}>
        <span>{start}</span>
        <span>{end}</span>
      </div>
    </header>
  );
};

export default Header;
