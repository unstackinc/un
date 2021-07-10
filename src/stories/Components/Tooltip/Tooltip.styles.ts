// Toggle.styles.ts

import { css } from '@emotion/react';

import theme, { fontSizes } from '../../../theme';

const { fonts } = theme;

export const Styles = css`
  font-family: ${fonts.body};
  ${fontSizes[0]};
`;
