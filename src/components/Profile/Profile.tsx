import { ReactNode } from 'react';

import {
  Styles,
  MediumStyles,
  LargeStyles,
  ExtraLargeStyles,
} from './Profile.styles';

type Props = {
  children: ReactNode;
  variant?: 'small' | 'medium' | 'large' | 'extralarge';
};

export const Profile = ({ children, variant, ...props }: Props) => {
  return (
    <div
      css={[
        Styles,
        variant === 'medium' && MediumStyles,
        variant === 'large' && LargeStyles,
        variant === 'extralarge' && ExtraLargeStyles,
      ]}
      {...props}
    >
      {children}
    </div>
  );
};

Profile.defaultProps = {
  variant: 'small',
};
