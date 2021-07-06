// Search.styles.ts

import { css } from '@emotion/react';

import theme, { fontSizes } from '../../../theme';

const { colors, fonts, fontWeights, padding, radii, shadows, transitions } =
  theme;

export const LabelStyles = css`
  border-radius: ${radii.lg};
  color: ${colors.text.secondary};
  transition: color ${transitions[0]};
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 16rem;
  :hover {
    color: ${colors.text.default};
  }
  svg {
    position: absolute;
    left: 0;
    top: 50%;
    width: 1.25em;
    height: 1.25em;
    transform: translateX(calc(100% - ${padding.xxs})) translateY(-50%);
  }
`;

export const InputStyles = css`
  background-color: ${colors.input.background.default};
  ${fontSizes[2]};
  font-family: ${fonts.body};
  font-weight: ${fontWeights[0]};
  border: 1px solid ${colors.border};
  border-radius: ${radii.lg};
  padding: ${padding.xs};
  padding-left: ${padding.xl};
  color: ${colors.text.secondary};
  width: 100%;
  transition: color ${transitions[0]}, background-color ${transitions[0]};
  ::before {
    content: url(../../../assets/search.svg);
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
  width: 100%;
  max-width: 100%;
`;

export const WarningStyles = css`
  box-shadow: ${shadows.focus.input.warning};
  :focus {
    box-shadow: ${shadows.focus.input.warning};
  }
`;
