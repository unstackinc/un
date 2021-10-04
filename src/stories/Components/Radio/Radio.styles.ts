import { css } from '@emotion/react';

import theme from '../../../theme';

const { colors, opacities, padding, shadows, transitions } = theme;

export const Styles = css`
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    :checked {
      ~ .control {
        background-color: ${colors.toggle.background.active};
        box-shadow: ${shadows.inset.active};
        border-color: transparent;
        ::after {
          opacity: 1;
          box-shadow: inset 0 0 0 ${padding.xxs} ${colors.toggle.border.active};
        }
      }
      :hover ~ .control {
        background-color: ${colors.toggle.background.active};
      }
    }
    :hover ~ .control {
      background-color: ${colors.toggle.background.hover};
    }
    :focus ~ .control::before {
      opacity: 1;
    }
    :active ~ .control::before {
      opacity: ${opacities[5]};
    }
    :disabled ~ .control {
      cursor: not-allowed;
      background-color: ${colors.toggle.background.disabled};
      box-shadow: ${shadows.inset.disabled};
      :active ~ .control::before {
        opacity: 0;
      }
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
    box-shadow: ${shadows.inset.default};
    transition: opacity ${transitions[0]}, border-color ${transitions[0]},
      background-color ${transitions[0]}, box-shadow ${transitions[0]};

    ::before,
    ::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: 50%;
      outline: none;
      opacity: 0;
    }

    ::before {
      box-shadow: ${shadows.focus.default};
      transition: opacity ${transitions[0]};
    }

    ::after {
      box-shadow: inset 0 0 0 ${colors.toggle.border.active};
      transition: opacity ${transitions[0]}, box-shadow ${transitions[2]};
    }
  }
`;
