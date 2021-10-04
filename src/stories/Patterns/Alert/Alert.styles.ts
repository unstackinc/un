import { css } from '@emotion/react';

import theme from '../../../theme';

const { margin, padding, colors, radii, shadows } = theme;

export const Styles = css`
  max-width: 24rem;
  box-shadow: ${shadows.lg};
  background: ${colors.card};
  position: relative;
  border-radius: ${radii.md};
  margin: 10vh auto;
`;

export const BodyStyles = css`
  padding: ${padding.sm};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  * {
    text-align: center;
  }
`;

export const FooterStyles = css`
  width: 100%;
  padding: ${padding.sm};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${margin.sm};
  position: relative;
`;
