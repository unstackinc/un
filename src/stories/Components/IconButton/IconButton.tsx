// IconButton.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { css } from '@emotion/react';

import { Styles, MediumStyles, LargeStyles } from './IconButton.styles';

const Types = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

type Props = InferProps<typeof Types>;

export const IconButton = ({
  children,
  color,
  disabled,
  onChange,
  onClick,
  size,
  ...props
}: Props) => {
  return (
    <button
      disabled={disabled}
      css={[
        Styles,
        size === 'medium' && MediumStyles,
        size === 'large' && LargeStyles,
        css`
          svg {
            stroke: ${color};
          }
        `,
      ]}
      onChange={onChange}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

IconButton.defaultProps = {
  disabled: false,
  onChange: undefined,
  onClick: undefined,
  size: 'small',
};

IconButton.propTypes = Types;

export default IconButton;
