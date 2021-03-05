import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";
import {
  color, opacity,
  space,
  button1, button2, webkit,
} from "../utils";

const UnButton = styled.button`
  border: none;
  border-radius: ${space.em.md};
  display: inline-block;
  cursor: pointer;
  ${webkit};
  -webkit-appearance: none;
  &:hover {
    background-color: ${color.black};
  }
  &:focus {
    outline: none;
    box-shadow:
      0 0 0 2px ${color.white},
      0 0 0 4px currentColor;
  }
  &:active {
    transform: scale(0.95);
  }
  &:disabled {
    user-select: none;
    cursor: not-allowed;
    opacity: ${opacity[25]};
  }
  &.primary {
    color: ${color.white};
    background: ${color.primary};
    background: ${color.primaryEdge};
    &:focus {
      box-shadow:
        0 0 0 2px ${color.white},
        0 0 0 4px ${color.primary};
    }
  }
  &.secondary {
    background: ${color.white};
    color: ${color.grey3};
    &:hover {
      background: ${color[25]};
    }
  }
  &.warning {
    background: ${color.red};
    color: ${color.white};
    &:focus {
      box-shadow:
        0 0 0 2px ${color.white},
        0 0 0 4px ${color.red};
    }
  }
  &.small {
    ${button2}
    padding: ${space.rem.xs} ${space.rem.sm};
  }
  &.default {
    ${button1}
    padding: ${space.rem.sm} ${space.rem.md};
  }
`;

/**
 * Buttons are used to initialize an action. Button labels express what action will occur when the user interacts with it.
 */

export const Button = ({ type, size, background, disabled, label, ...props }) => {
  return (
    <UnButton
      type="button"
      className={[type, size].join(' ')}
      style={background && { background }}
      disabled={disabled}
      {...props}
    >
      {props.before}
      {label}
      {props.after}
    </UnButton>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'warning']),
  size: PropTypes.oneOf(['small', 'default']),
  background: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  size: 'default',
  background: 'radial-gradient(circle at bottom left, #3399FF 0%, #0080FF 100%)',
  disabled: false,
  onClick: undefined,
};

export default Button;