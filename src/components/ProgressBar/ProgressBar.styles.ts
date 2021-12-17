import { css } from '@emotion/react';

import { theme } from '../../theme';

const { colors, padding, radii, transitions } = theme;

export const Styles = css`
  background-color: ${colors.border};
  border-radius: ${radii.lg};
  height: ${padding.xxs};
  overflow: hidden;
  position: relative;
  width: 16rem;
  &::before {
    content: '';
    background-color: ${colors.accent};
    display: block;
    transition: width ${transitions[1]};
    height: 100%;
  }
`;

export const FullStyles = css`
  width: 100%;
`;
