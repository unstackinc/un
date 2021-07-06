// Tag.variants.ts

import { css } from '@emotion/react';

import theme from '../../../theme';

const { colors } = theme;

export const PrimaryVariant = css`
  color: ${colors.text.reversed};
  background-color: ${colors.tag.default.purple};
`;

export const YellowVariant = css`
  color: ${colors.text.reversed};
  background-color: ${colors.tag.default.yellow};
`;

export const GreenVariant = css`
  color: ${colors.text.reversed};
  background-color: ${colors.tag.default.green};
`;

export const OutlineVariant = css`
  color: ${colors.tag.outline.default};
  outline: 2px solid currentColor;
  outline-offset: -2px;
  background-color: ${colors.tag.outline.background};
`;

export const OutlineBlueVariant = css`
  color: ${colors.tag.outline.blue};
  outline: 2px solid currentColor;
  outline-offset: -2px;
  background-color: ${colors.tag.outline.background};
`;
