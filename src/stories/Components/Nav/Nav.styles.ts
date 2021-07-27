// Nav.styles.ts

import { css } from '@emotion/react';

import theme, { fontSizes } from '../../../theme';

const { margin, padding, fonts, fontWeights, colors, radii, transitions } =
  theme;

export const Styles = css`
  width: 16rem;
  max-width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  top: 0;
  left: 0;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const BodyStyles = css`
  height: 100%;
  padding: ${padding.md};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${margin.xs};
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const SectionStyles = css`
  font-family: ${fonts.body};
  width: 100%;
  display: block;
  margin: 0;
  padding: 0;
  color: ${colors.text.bold};
`;

export const PushStyles = css`
  margin-top: ${margin.sm};
`;

export const NavLinkStyles = css`
  ${fontSizes[1]}
  font-family: ${fonts.body};
  font-weight: ${fontWeights[0]};
  user-select: none;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  flex-direction: row;
  align-items: center;
  gap: ${margin.xs};
  cursor: pointer;
  text-decoration: none;
  padding: ${padding.xxs};
  border-radius: ${radii.xs};
  transition: background-color ${transitions[0]}, color ${transitions[0]};
  :hover,
  :focus {
    background-color: ${colors.border};
    outline: none;
  }
  &.active {
    background-color: ${colors.text.primary}22;
    color: ${colors.text.primary};
    font-weight: ${fontWeights[1]};
    svg {
      opacity: 1;
    }
  }
  svg {
    opacity: 0.5;
    width: 1em;
    height: 1em;
    transition: opacity ${transitions[0]}, color ${transitions[0]};
  }
`;

export const NoIconStyles = css`
  color: ${colors.text.secondary};
  padding-left: calc(${margin.xs} + ${padding.xxs} + 1em);
  &.active {
    font-weight: ${fontWeights[1]};
    ::before {
      content: '';
      position: absolute;
      width: ${padding.xxs};
      height: ${padding.xxs};
      background-color: ${colors.primary};
      border-radius: ${radii.lg};
      transform: translateX(calc(-100% - ${margin.xs}));
    }
  }
  :first-of-type {
    margin-top: ${margin.xxs};
  }
`;

export const IconStyles = css`
  font-weight: ${fontWeights[1]};
  color: ${colors.text.default};
  &.open svg {
    color: ${colors.primary};
    opacity: 1;
  }
`;

export const PanelStyles = css`
  overflow: hidden;
  position: relative;
  width: 100%;
  display: block;
  > div {
    display: flex;
    flex-direction: column;
    gap: ${margin.xxs};
    ::after {
      content: '';
      display: block;
      transform: scaleY(0%);
      transition: transform ${transitions[0]};
    }
  }
  &.active > div::after {
    height: ${padding.xs};
    transform: scaleY(100%);
  }
  ::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${padding.xs};
    background: linear-gradient(
      180deg,
      ${colors.sidemenu}00 0%,
      ${colors.sidemenu} 100%
    );
  }
`;
