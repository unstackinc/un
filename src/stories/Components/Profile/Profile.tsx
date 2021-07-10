// Profile.tsx

import * as React from 'react';
import { ReactNode } from 'react';

import {
  Styles,
  MediumStyles,
  LargeStyles,
  ExtraLargeStyles,
} from './Profile.styles';

interface Props {
  variant?: 'small' | 'medium' | 'large' | 'extralarge';
  children: ReactNode;
}

export const Profile = ({ variant, children, ...props }: Props) => {
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

export default Profile;
