// Listbox.styles.ts

import { css } from '@emotion/react';

import theme, { fontSizes } from '../../../theme';

const { colors, fonts, fontWeights, padding, radii, shadows, transitions } =
  theme;

export const ListboxStyles = css`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  width: 16rem;
  box-shadow: none;
  background-color: ${colors.input.background.default};
  ${fontSizes[2]};
  font-family: ${fonts.body};
  font-weight: ${fontWeights[0]};
  border: 1px solid ${colors.border};
  border-radius: ${radii.xs};
  padding: ${padding.xs};
  justify-content: space-between;
  color: ${colors.text.secondary};
  user-select: none;
  transition: color ${transitions[0]}, background-color ${transitions[0]};
  svg {
    position: absolute;
    user-select: none;
    pointer-events: none;
    right: 0;
    width: 1.25em;
    height: 1.25em;
    transform: translateX(100%);
  }
  :hover {
    color: ${colors.text.bold};
  }
  :focus {
    outline: none;
    box-shadow: ${shadows.focus.input.default};
    background-color: ${colors.input.background.focus};
  }
  :active {
    color: ${colors.text.default};
  }
`;

export const OptionStyles = css`
  appearance: none;
  background-color: ${colors.input.background.light};
  ${fontSizes[2]};
  font-family: ${fonts.body};
  font-weight: ${fontWeights[0]};
  padding: ${padding.xs};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${colors.text.secondary};
  cursor: pointer;
  transition: color ${transitions[0]}, background-color ${transitions[0]};
  :not(:last-child) {
    border-bottom: 1px solid ${colors.border};
  }
`;

export const FullStyles = css`
  max-width: 100%;
  width: 100%;
  svg {
    transform: translateX(-100%);
  }
`;

export const WarningStyles = css`
  box-shadow: ${shadows.focus.input.warning};
  :focus {
    box-shadow: ${shadows.focus.input.warning};
  }
`;

export const DisabledStyles = css`
  background-color: ${colors.disabled};
  border-color: ${colors.disabled};
  user-select: none;
  cursor: not-allowed;
  :hover {
    color: inherit;
  }
`;
