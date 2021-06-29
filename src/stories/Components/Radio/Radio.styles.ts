// Radio.styles.ts

import styled from '@emotion/styled';

import { Label } from '../../';
import theme from '../../../theme';

const { colors, opacity, padding } = theme;

export const UnRadio = styled(Label)`
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    &:checked ~ label .control {
      background-color: ${colors.toggle.background.active};
      box-shadow: 0 0 0 2px ${colors.background},
        inset 0 0 0 ${padding.xxs} ${colors.toggle.border.active};
      border-color: transparent;
    }
    &:checked:hover ~ label .control {
      background-color: ${colors.toggle.background.active};
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
    display: inline-block;
    height: ${padding.sm};
    width: ${padding.sm};
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    border: 1px solid ${colors.toggle.border.default};
    background-color: ${colors.toggle.background.default};
    box-shadow: 0 0 0 2px ${colors.background},
      inset 0 1px 4px ${colors.toggle.border.default};
    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
      border-color 0.6s cubic-bezier(0.16, 1, 0.3, 1),
      background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1),
      box-shadow 0.3s cubic-bezier(0.87, 0, 0.13, 1);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: 50%;
      outline: none;
      opacity: 0;
      box-shadow: 0 0 0 2px ${colors.background},
        0 0 2px 4px ${colors.toggle.border.focus};
      transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }
`;
