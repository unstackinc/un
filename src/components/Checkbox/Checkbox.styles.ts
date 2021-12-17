import { css } from '@emotion/react';

import { theme } from '../../theme';

const { colors, opacities, margin, padding, shadows, transitions } = theme;

export const Styles = css`
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    :checked,
    :indeterminate {
      ~ .control {
        background-color: ${colors.toggle.border.active};
        border-color: transparent;
        box-shadow: ${shadows.inset.active};
      }
      :hover ~ .control {
        background-color: ${colors.toggle.background.hover};
      }
    }
    :hover ~ .control {
      background-color: ${colors.toggle.background.hover};
    }
    ~ .control svg {
      display: none;
      color: white;
    }
    :checked {
      ~ .control .checked {
        display: block;
      }
      :indeterminate ~ .control .checked {
        display: none;
      }
      :hover ~ .control {
        background-color: ${colors.toggle.border.active};
      }
    }
    :indeterminate {
      ~ .control .indeterminate {
        display: block;
      }
      :hover ~ .control {
        background-color: ${colors.toggle.border.active};
      }
    }
    :focus ~ .control::before {
      opacity: 1;
    }
    :active ~ .control::before {
      opacity: ${opacities[5]};
    }
    :disabled {
      ~ .control {
        cursor: not-allowed;
        background-color: ${colors.toggle.background.disabled};
        box-shadow: ${shadows.inset.disabled};
      }
      :active ~ .control::before {
        opacity: 0;
      }
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
    box-shadow: ${shadows.inset.default};
    background-color: ${colors.toggle.background.default};
    transition: opacity ${transitions[1]}, border-color ${transitions[1]},
      background-color ${transitions[1]};

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: ${margin.xxs};
      outline: none;
      opacity: 0;
      box-shadow: ${shadows.focus.default};
      transition: opacity ${transitions[0]};
    }
  }
`;
