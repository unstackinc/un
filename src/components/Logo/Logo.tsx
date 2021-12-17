import { ReactNode } from 'react';

import {
  Styles,
  MediumStyles,
  LargeStyles,
  ExtraLargeStyles,
} from './Logo.styles';

export type LogoProps = {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large' | 'extralarge';
};

export const Logo = ({ children, size, ...props }: LogoProps) => {
  return (
    <div
      css={[
        Styles,
        size === 'medium' && MediumStyles,
        size === 'large' && LargeStyles,
        size === 'extralarge' && ExtraLargeStyles,
      ]}
      {...props}
    >
      {children}
    </div>
  );
};

Logo.defaultProps = {
  size: 'medium',
};
