// Checkbox.styles.ts

import styled from '@emotion/styled';

import { Label } from '../..';
import theme from '../../../theme';

const { colors, opacity, margin, padding } = theme;

export const UnCheckbox = styled(Label)`
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    &:checked ~ label .control {
      background-color: ${colors.toggle.border.active};
      border-color: transparent;
      box-shadow: 0 0 0 2px ${colors.background}00,
        inset 0 1px 4px ${colors.toggle.border.default}00;
    }
    & ~ label svg {
      display: none;
      color: white;
    }
    &:checked ~ label svg {
      display: block;
    }
    &:checked:hover ~ label .control {
      background-color: ${colors.toggle.border.active};
    }
    &:hover ~ label .control {
      background-color: ${colors.toggle.background.hover};
    }
    &:focus ~ label .control::before {
      opacity: 1;
    }
    &:active ~ label .control::before {
      opacity: ${opacity[5]};
    }
    &:disabled ~ label .control {
      cursor: not-allowed;
      background-color: ${colors.toggle.background.disabled};
      box-shadow: 0 0 0 0 ${colors.background}00,
        inset 0 0 0 0 ${colors.toggle.background.active}00;
    }
    &:disabled:active ~ label .control::before {
      opacity: 0;
    }
  }

  .control {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: ${padding.sm};
    width: ${padding.sm};
    border-radius: ${margin.xxs};
    position: relative;
    cursor: pointer;
    border: 1px solid ${colors.toggle.border.default};
    box-shadow: 0 0 0 2px ${colors.background},
      inset 0 1px 4px ${colors.toggle.border.default};
    background-color: ${colors.toggle.background.default};
    transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
      border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1),
      background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: ${margin.xxs};
      outline: none;
      opacity: 0;
      box-shadow: 0 0 0 2px ${colors.background},
        0 0 2px 4px ${colors.toggle.border.focus};
      transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }
`;
