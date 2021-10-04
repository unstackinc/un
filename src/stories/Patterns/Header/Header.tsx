import { ReactNode } from 'react';
import { css } from '@emotion/react';

import { Styles, ContainerStyles, TabsStyles } from './Header.styles';

export type HeaderProps = {
  children?: ReactNode;
  end?: ReactNode;
  padding?: string;
  start?: ReactNode;
  tabs?: ReactNode;
};

export const Header = ({
  children,
  end,
  padding,
  start,
  tabs,
  ...props
}: HeaderProps) => {
  return (
    <header
      css={[
        Styles,
        css`
          padding: 0 ${padding};
        `,
      ]}
      {...props}
    >
      <div css={ContainerStyles}>
        <span>{start}</span>
        <span
          css={css`
            flex-grow: 1;
          `}
        >
          {children}
        </span>
        <span>{end}</span>
      </div>
      <div css={TabsStyles}>{tabs}</div>
    </header>
  );
};

export default Header;
