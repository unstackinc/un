// Tabs.styles.ts

import { css } from '@emotion/react';

import theme from '../../../theme';

const {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  padding,
  radii,
  margin,
  shadows,
  opacities,
  transitions,
} = theme;

export const TabListStyles = css`
  display: flex;
  flex-direction: row;
  gap: ${margin.sm};
  margin-bottom: -1px;
`;

export const TabStyles = css`
  appearance: none;
  -webkit-appearance: none;
  ${fontSizes[1]};
  font-family: ${fonts.body};
  font-weight: ${fontWeights[1]};
  white-space: nowrap;
  border: 2px solid ${colors.button.background.tertiary};
  padding: ${padding.xs} 0;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${colors.text.secondary};
  box-sizing: border-box;
  border-bottom: 2px solid transparent;
  background-color: ${colors.button.background.tertiary};
  transition: opacity ${transitions[0]}, color ${transitions[0]},
    background-color ${transitions[0]};
  svg {
    width: 1.25em;
    height: 1.25em;
  }
  :hover {
    color: ${colors.text.bold};
  }
  :active {
    background-color: ${colors.button.background.tertiaryHover};
  }
  :focus-visible {
    outline: none;
    box-shadow: ${shadows.focus.tertiary};
  }
  :disabled {
    user-select: none;
    cursor: not-allowed;
    opacity: ${opacities[25]};
  }
  &[data-selected] {
    border-bottom: 2px solid ${colors.accent};
  }
`;

export const TabPanelsStyles = css`
  width: 100%;
`;

export const TabsStyles = css`
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
