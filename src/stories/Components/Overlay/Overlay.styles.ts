// Overlay.styles.ts

import { css } from '@emotion/react';

import theme from '../../../theme';

const { colors } = theme;

export const Styles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.overlay};
`;
