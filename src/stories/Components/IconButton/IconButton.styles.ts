// IconButton.styles.ts

import { css } from '@emotion/react';

import theme from '../../../theme';

const {
  colors,
  opacities,
  fonts,
  fontSizes,
  fontWeights,
  shadows,
  transitions,
} = theme;

export const Styles = css`
  appearance: none;
  -webkit-appearance: none;
  ${fontSizes[1]};
  font-family: ${fonts.body};
  font-weight: ${fontWeights[1]};
  border: 2px solid ${colors.button.background.tertiary};
  border-radius: 0.5em;
  padding: 0.25em;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${colors.text.secondary};
  background-color: ${colors.button.background.tertiary};
  transition: opacity ${transitions[0]}, color ${transitions[0]},
    background-color ${transitions[0]};
  svg {
    width: 1.25em;
    height: 1.25em;
  }
  :hover {
    color: ${colors.text.bold};
  }
  :active {
    background-color: ${colors.button.background.tertiaryHover};
  }
  :focus-visible {
    outline: none;
    box-shadow: ${shadows.focus.tertiary};
  }
  :disabled {
    user-select: none;
    cursor: not-allowed;
    opacity: ${opacities[25]};
  }
`;

export const MediumStyles = css`
  ${fontSizes[3]};
`;

export const LargeStyles = css`
  ${fontSizes[3]};
  border-radius: 0.7em;
  padding: 0.5em;
`;
