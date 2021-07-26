// Main.styles.ts

import { css } from '@emotion/react';

import theme from '../../../theme';

const { margin, padding, sizes } = theme;

export const Styles = css`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${margin.sm};
  box-sizing: border-box;
  padding: 0 5vw;
  padding-top: ${padding.md};
  > * {
    max-width: ${sizes.wide};
    margin: 0 auto;
  }
`;
