// Toggle.styles.ts

import styled from '@emotion/styled';

import { Label } from '../..';
import theme from '../../../theme';

const { colors, opacity, margin, padding, shadows } = theme;

export const UnToggle = styled(Label)`
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    &:checked ~ label .control {
      background-color: ${colors.toggle.border.active};
      border-color: transparent;
      box-shadow: ${shadows.inset.active};
    }
    &:checked:hover ~ label .control {
      background-color: ${colors.toggle.border.active};
    }
    &:checked ~ label .control:after {
      transform: translateX(100%);
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
      box-shadow: ${shadows.inset.disabled};
      border-color: transparent;
    }
    &:disabled:active ~ label .control::before {
      opacity: 0;
    }
    &:disabled ~ label .control::after,
    &:disabled:active ~ label .control::after {
      box-shadow: ${shadows.disabled};
    }
  }

  .control {
    display: inline-block;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: calc(${padding.md} * 2);
    border: 1px solid ${colors.toggle.border.default};
    background-color: ${colors.toggle.background.default};
    padding: ${padding.xxxs};
    border-radius: ${margin.xxl};
    box-shadow: ${shadows.inset.default};
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
      border-radius: ${margin.xxl};
      outline: none;
      opacity: 0;
      box-shadow: ${shadows.focus.default};
      transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    &::after {
      content: '';
      transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      border-radius: 50%;
      box-shadow: ${shadows.sm};
      background-color: ${colors.toggle.background.active};
      width: ${padding.md};
      height: ${padding.md};
    }
  }
`;
