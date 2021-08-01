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
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extralarge']),
};

type Props = InferProps<typeof Types>;

export const Logo = ({ children, size, ...props }: Props) => {
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

Logo.propTypes = Types;

export default Logo;
