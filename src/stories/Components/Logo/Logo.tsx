// Logo.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import {
  Styles,
  MediumStyles,
  LargeStyles,
  ExtraLargeStyles,
} from './Logo.styles';

const Types = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['small', 'medium', 'large', 'extralarge']),
};

type Props = InferProps<typeof Types>;

export const Logo = ({ children, variant, ...props }: Props) => {
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

Logo.defaultProps = {
  variant: 'medium',
};

Logo.propTypes = Types;

export default Logo;
