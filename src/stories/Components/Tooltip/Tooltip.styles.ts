// Toggle.styles.ts

import { css } from '@emotion/react';

import theme from '../../../theme';

const { fonts, fontSizes } = theme;

export const Styles = css`
  font-family: ${fonts.body};
  ${fontSizes[0]};
`;
