// Tag.styles.ts

import { css } from '@emotion/react';

import theme from '../../../theme';

const { margin, padding, fonts, fontSizes, fontWeights } = theme;

export const Styles = css`
  ${fontSizes[0]};
  font-family: ${fonts.body};
  font-weight: ${fontWeights[1]};
  border-radius: ${margin.xxl};
  padding: ${padding.xxs} ${padding.xs};
  display: inline-block;
`;

export const SmallStyles = css`
  padding: ${padding.xxxs} ${padding.xxs};
`;
