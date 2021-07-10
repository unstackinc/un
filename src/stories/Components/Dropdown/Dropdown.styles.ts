// Dropdown.styles.ts

import { css } from '@emotion/react';

import theme, { fontSizes } from '../../../theme';

const {
  colors,
  fonts,
  fontWeights,
  padding,
  radii,
  margin,
  shadows,
  opacities,
  transitions,
} = theme;

export const ButtonStyles = css`
  cursor: pointer;
  display: flex;
  position: relative;
  border: none;
  background: none;
  appearance: none;
  padding: ${padding.xxs};
`;

export const TransitionStyles = css`
  display: inline-flex;
  transition: ${transitions[2]};
`;

export const DropdownStyles = css`
  display: inline-flex;
  flex-direction: column;
  gap: ${padding.xxs};
  background: ${colors.card};
  font-family: ${fonts.body};
  padding: ${padding.xxs};
  box-shadow: ${shadows.md};
  border-radius: ${radii.sm};
  transition: ${transitions[2]};
  hr {
    opacity: ${opacities[25]};
    border: none;
    border-top: 1px solid ${colors.text.secondary};
    margin: 0 ${margin.xs};
  }
`;

export const OptionStyles = css`
  appearance: none;
  background-color: ${colors.input.background.light};
  ${fontSizes[2]};
  font-family: ${fonts.body};
  font-weight: ${fontWeights[0]};
  min-width: 12rem;
  padding: ${padding.xxs} ${padding.xs};
  padding-left: ${padding.xxs};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${margin.xs};
  border-radius: ${radii.xs};
  color: ${colors.text.secondary};
  cursor: pointer;
  transition: color ${transitions[0]}, background-color ${transitions[0]};
  :hover {
    color: ${colors.text.default};
    background-color: ${colors.border};
    div {
      background-color: ${colors.text.secondary}22;
    }
  }
`;

export const BeforeStyles = css`
  background-color: ${colors.text.secondary}11;
  width: ${padding.lg};
  height: ${padding.lg};
  border-radius: ${radii.lg};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color ${transitions[0]};
`;
