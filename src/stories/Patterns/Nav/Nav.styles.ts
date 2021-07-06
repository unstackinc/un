// Nav.styles.ts

import { css } from '@emotion/react';

import theme, { fontSizes } from '../../../theme';

const { margin, padding, fonts, fontWeights, colors, radii, transitions } =
  theme;

export const Styles = css`
  width: 20rem;
  max-width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${colors.background};
  flex-direction: column;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const HeadingStyles = css`
  background-color: ${colors.background};
  width: 100%;
  padding: ${padding.xxs};
  padding-left: ${padding.sm};
  box-sizing: border-box;
  /* display: flex; */
  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px solid;
  border-color: ${colors.border};
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
  flex-direction: row;
  align-items: center;
  gap: ${margin.xs};
  text-decoration: none;
  color: ${colors.text.secondary};
  transition: color ${transitions[0]};

  &.active {
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
    transition: opacity ${transitions[0]};
  }
`;

export const NoIconStyles = css`
  padding: ${padding.xxs} 0;
  margin-left: calc(${margin.xs} + ${padding.xxs} + 1em);

  :last-of-type {
    padding-bottom: ${padding.xs};
  }
`;

export const IconStyles = css`
  font-weight: ${fontWeights[1]};
  color: ${colors.text.default};
  padding: ${padding.xxs};
  border-radius: ${radii.xs};
  display: inline-flex;
  transition: background-color ${transitions[0]}, color ${transitions[0]};
  :hover {
    background-color: ${colors.border};
  }
  &.active {
    background-color: ${colors.text.primary}22;
  }
`;

export const PanelStyles = css`
  overflow: hidden;
  position: relative;
  ::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: ${padding.xs};
    background: linear-gradient(
      180deg,
      ${colors.background}00 0%,
      ${colors.background} 100%
    );
  }
`;

export const FooterStyles = css`
  width: 100%;
  padding: ${padding.xs};
  box-sizing: border-box;
  /* display: flex; */
  display: none;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: ${margin.xs};
  position: relative;
  border-top: 1px solid;
  border-color: ${colors.border};
`;
