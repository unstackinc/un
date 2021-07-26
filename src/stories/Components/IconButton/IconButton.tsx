// IconButton.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { css } from '@emotion/react';

import { Styles, MediumStyles, LargeStyles } from './IconButton.styles';

const Types = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.any,
  variant: PropTypes.oneOf(['small', 'medium', 'large']),
};

type Props = InferProps<typeof Types>;

export const IconButton = ({
  children,
  color,
  disabled,
  onClick,
  variant,
  ...props
}: Props) => {
  return (
    <button
      disabled={disabled}
      css={[
        Styles,
        variant === 'medium' && MediumStyles,
        variant === 'large' && LargeStyles,
        css`
          svg {
            stroke: ${color};
          }
        `,
      ]}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

IconButton.defaultProps = {
  disabled: false,
  onClick: undefined,
  variant: 'small',
};

IconButton.propTypes = Types;

export default IconButton;
