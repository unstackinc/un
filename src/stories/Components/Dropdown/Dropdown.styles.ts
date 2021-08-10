// Dropdown.styles.ts

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

export const Styles = css`
  position: relative;
  display: inline-block;
  z-index: 1;

  // Dropdown.transitions.css

  .enter {
    transition: 0.3s cubic-bezier(0.87, 0, 0.13, 1);
  }

  .enterFrom {
    opacity: 0;
    transform: scale(0.95) translateY(-0.5rem);
  }

  .enterTo {
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  .leave {
    transition: 0.3s cubic-bezier(0.87, 0, 0.13, 1);
  }
  .leaveFrom {
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  .leaveTo {
    opacity: 0;
    transform: scale(0.95) translateY(-0.5rem);
  }
`;

export const ButtonStyles = css`
  cursor: pointer;
  display: flex;
  position: relative;
  border: none;
  background: none;
  appearance: none;
  width: 100%;
`;

export const TransitionStyles = css`
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
  ${fontSizes[1]};
  font-family: ${fonts.body};
  font-weight: ${fontWeights[1]};
  white-space: nowrap;
  min-width: 10rem;
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
  width: ${padding.md};
  height: ${padding.md};
  border-radius: ${radii.lg};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color ${transitions[0]};
`;

export const FullStyles = css`
  width: 100%;
`;
