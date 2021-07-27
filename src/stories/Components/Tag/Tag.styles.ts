// Tag.styles.ts

import { css } from '@emotion/react';

import theme, { fontSizes } from '../../../theme';

const { margin, padding, fonts, fontWeights } = theme;

export const Styles = css`
  ${fontSizes[0]};
  font-family: ${fonts.body};
  font-weight: ${fontWeights[1]};
  border-radius: ${margin.xxl};
  padding: ${padding.xxs} ${padding.xs};
  display: inline-block;
`;

export const OutlineVariant = css`
  outline: 2px solid currentColor;
  outline-offset: -2px;
`;

export const SmallStyles = css`
  padding: ${padding.xxxs} ${padding.xxs};
`;
