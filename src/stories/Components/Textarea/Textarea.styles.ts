// Textarea.styles.ts

import { css } from '@emotion/react';

import theme, { fontSizes } from '../../../theme';

const { colors, fonts, fontWeights, padding, radii, shadows, transitions } =
  theme;

export const Styles = css`
  background-color: ${colors.input.background.default};
  ${fontSizes[1]};
  font-family: ${fonts.body};
  font-weight: ${fontWeights[0]};
  border: 1px solid ${colors.border};
  border-radius: ${radii.xs};
  padding: ${padding.xxs};
  max-width: 100%;
  min-width: 100%;
  min-height: 4rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.text.secondary};
  transition: color ${transitions[0]}, background-color ${transitions[0]};
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
  }
  :hover {
    color: ${colors.text.bold};
  }
  :focus {
    color: ${colors.text.default};
    outline: none;
    box-shadow: ${shadows.focus.input.default};
    background-color: ${colors.input.background.focus};
  }
  :active {
    color: ${colors.text.default};
  }
  :disabled {
    background-color: ${colors.disabled};
    border-color: ${colors.disabled};
    user-select: none;
    cursor: not-allowed;
  }
  :disabled:hover {
    color: inherit;
  }
`;

export const FullStyles = css`
  flex-grow: 1;
`;

export const WarningStyles = css`
  box-shadow: ${shadows.focus.input.warning};
  :focus {
    box-shadow: ${shadows.focus.input.warning};
  }
`;
