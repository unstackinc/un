import { css } from '@emotion/react';

import { theme } from '../../theme';

const { margin, padding, colors, radii, shadows } = theme;

export const Styles = css`
  max-width: 37.5rem;
  box-shadow: ${shadows.lg};
  background: ${colors.card};
  position: relative;
  border-radius: ${radii.md};
  margin: 10vh auto;
`;

export const HeadingStyles = css`
  width: 100%;
  padding: ${padding.sm};
  padding-left: ${padding.md};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px solid;
  border-color: ${colors.border};
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
  justify-content: flex-end;
  align-items: center;
  gap: ${margin.sm};
  position: relative;
`;
