import { css } from '@emotion/react';

import { theme } from '../../theme';

const {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  margin,
  opacities,
  padding,
  shadows,
} = theme;

export const Styles = css`
  margin-top: ${margin.sm};
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: ${fonts.body};
    list-style: none;
  }
  a {
    appearance: none;
    -webkit-appearance: none;
    ${fontSizes[1]};
    font-family: ${fonts.body};
    font-weight: ${fontWeights[1]};
    border: 2px solid ${colors.button.background.tertiary};
    border-radius: 0.5em;
    padding: ${padding.xxs};
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: ${colors.text.secondary};
    background-color: ${colors.button.background.tertiary};
    :hover {
      color: ${colors.text.bold};
    }
    :focus-visible {
      outline: none;
      box-shadow: ${shadows.focus.tertiary};
    }
  }
  li {
    &.active a {
      background-color: ${colors.accent};
      color: ${colors.background};
    }
    &.disabled a {
      user-select: none;
      cursor: not-allowed;
      opacity: ${opacities[25]};
    }
  }
`;
