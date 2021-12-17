import { css } from '@emotion/react';

import { theme } from '../../theme';

const {
  colors,
  opacities,
  fonts,
  fontSizes,
  fontWeights,
  margin,
  padding,
  shadows,
  transitions,
} = theme;

export const Styles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${margin.xs};
  cursor: pointer;
  font-family: ${fonts.body};
  position: relative;
  ${fontSizes[1]};
  font-weight: ${fontWeights[1]};
  border-radius: 0.5em;
  padding: ${padding.md} 0;
  color: ${colors.accent};
  background-color: ${colors.accent}22;
  border: 2px dashed currentColor;
  width: 16rem;
  transition: opacity ${transitions[0]};
  svg {
    width: 6em;
    height: 6em;
    path {
      stroke-width: 1rem;
    }
  }
  :hover {
    opacity: ${opacities[5]};
  }
  :focus-visible {
    outline: none;
    box-shadow: ${shadows.focus.tertiary};
  }
`;

export const InputStyles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const FullStyles = css`
  width: 100%;
`;
