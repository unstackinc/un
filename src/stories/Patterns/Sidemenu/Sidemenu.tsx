import { ReactNode } from 'react';

import {
  Styles,
  HeadingStyles,
  BodyStyles,
  FooterStyles,
} from './Sidemenu.styles';

export type Sidemenu = {
  children: ReactNode;
  footer?: ReactNode;
  heading?: ReactNode;
};

export const Sidemenu = ({ children, ...props }: Sidemenu) => {
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
