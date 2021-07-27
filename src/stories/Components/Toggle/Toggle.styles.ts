// Toggle.styles.ts

import { css } from '@emotion/react';

import theme from '../../../theme';

const { colors, opacities, margin, padding, shadows, transitions } = theme;

export const Styles = css`
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    :checked {
      ~ .control {
        background-color: ${colors.toggle.border.active};
        border-color: transparent;
        box-shadow: ${shadows.inset.active};
        :after {
          transform: translateX(100%);
        }
      }
      :hover ~ .control {
        background-color: ${colors.toggle.border.active};
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
    :disabled {
      ~ .control,
      :hover ~ .control {
        cursor: not-allowed;
        background-color: ${colors.toggle.background.disabled};
        box-shadow: ${shadows.inset.disabled};
        border-color: transparent;
        ::after {
          box-shadow: ${shadows.disabled};
        }
      }
      :active ~ .control {
        ::before {
          opacity: 0;
        }
        ::after {
          box-shadow: ${shadows.disabled};
        }
      }
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
    box-sizing: content-box;
    border-radius: ${margin.xxl};
    box-shadow: ${shadows.inset.default};
    transition: opacity ${transitions[0]}, border-color ${transitions[0]},
      background-color ${transitions[0]}, box-shadow ${transitions[2]};

    ::before {
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
      transition: opacity ${transitions[0]};
    }
    ::after {
      content: '';
      transition: all ${transitions[0]};
      border-radius: 50%;
      box-shadow: ${shadows.sm};
      background-color: ${colors.toggle.background.active};
      width: ${padding.md};
      height: ${padding.md};
    }
  }
`;
