// Button.variants.ts

import { css } from '@emotion/react';

import theme from '../../../theme';

const { colors, shadows } = theme;

export const PrimaryVariant = css`
  color: ${colors.text.reversed};
  background-color: ${colors.button.background.primary};
  :focus {
    box-shadow: ${shadows.focus.primary};
  }
`;

export const SecondaryVariant = css`
  color: ${colors.text.reversed};
  background-color: ${colors.button.background.secondary};
  :focus {
    box-shadow: ${shadows.focus.secondary};
  }
`;

export const TertiaryVariant = css`
  color: ${colors.button.background.primary};
  background-color: ${colors.button.background.tertiary};
  border-color: ${colors.button.background.tertiary};
  :hover {
    opacity: 1;
    background-color: ${colors.button.background.tertiaryHover};
  }
  :focus {
    box-shadow: ${shadows.focus.tertiary};
  }
`;

export const OutlineVariant = css`
  color: ${colors.button.background.primary};
  border: 2px solid;
  border-color: currentColor;
  background-color: ${colors.button.background.outline};
  :focus {
    box-shadow: ${shadows.focus.color};
  }
`;
