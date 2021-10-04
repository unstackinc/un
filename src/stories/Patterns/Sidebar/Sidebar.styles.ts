import { css } from '@emotion/react';

import theme from '../../../theme';

const { margin, padding, colors } = theme;

export const Styles = css`
  max-width: 100%;
  height: 100vh;
  border-right: 1px solid;
  border-color: ${colors.border};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${margin.xxs};
  padding: ${padding.xs};
  padding-top: 0;
  box-sizing: border-box;
  background-color: ${colors.sidebar};
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
