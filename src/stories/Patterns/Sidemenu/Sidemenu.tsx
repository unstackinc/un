// Sidemenu.tsx

import * as React from 'react';
import { ReactNode } from 'react';

import {
  Styles,
  HeadingStyles,
  BodyStyles,
  FooterStyles,
} from './Sidemenu.styles';

interface Props {
  heading?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

export const Sidemenu = ({ children, ...props }: Props) => {
  return (
    <aside css={Styles} {...props}>
      <div css={HeadingStyles}></div>
      <div css={BodyStyles}>{children}</div>
      <div css={FooterStyles}></div>
    </aside>
  );
};

Sidemenu.defaultProps = {
  title: 'Title',
};

export default Sidemenu;
