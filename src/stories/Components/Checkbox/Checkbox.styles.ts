// Checkbox.styles.ts

import { css } from '@emotion/react';

// import { Label } from '../..';
import theme from '../../../theme';

const { colors, opacities, margin, padding, shadows, transitions } = theme;

export const Styles = css`
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    :checked ~ label .control {
      background-color: ${colors.toggle.border.active};
      border-color: transparent;
      box-shadow: ${shadows.inset.active};
    }
    ~ label svg {
      display: none;
      color: white;
    }
    :checked ~ label svg {
      display: block;
    }
    :checked:hover ~ label .control {
      background-color: ${colors.toggle.border.active};
    }
    :hover ~ label .control {
      background-color: ${colors.toggle.background.hover};
    }
    :focus ~ label .control::before {
      opacity: 1;
    }
    :active ~ label .control::before {
      opacity: ${opacities[5]};
    }
    :disabled ~ label .control {
      cursor: not-allowed;
      background-color: ${colors.toggle.background.disabled};
      box-shadow: ${shadows.inset.disabled};
    }
    :disabled:active ~ label .control::before {
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
