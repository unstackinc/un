// Nav.styles.ts

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import theme, { fontSizes } from '../../../theme';

const { margin, padding, fonts, fontWeights, colors, radii } = theme;

export const UnNav = styled.nav({
  width: '20rem',
  maxWidth: '100%',
  height: '100%',
  overflowY: 'scroll',
  display: 'flex',
  position: 'fixed',
  top: 0,
  left: 0,
  background: colors.background,
  flexDirection: 'column',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    width: '0',
  },
});

export const UnNavHeading = styled.div({
  display: 'none',
  background: colors.background,
  width: '100%',
  padding: `${padding.xxs}`,
  paddingLeft: padding.sm,
  boxSizing: 'border-box',
  // display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  borderBottom: '1px solid',
  borderColor: colors.border,
});

export const UnNavBody = styled.div({
  height: '100%',
  padding: padding.md,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: margin.xs,
  overflowY: 'scroll',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    width: '0',
  },
});

export const UnNavSection = styled.ul`
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
  transition: color 0.6s cubic-bezier(0.16, 1, 0.3, 1);

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
    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const NoIconStyles = css`
  padding: ${padding.xxs} 0;
  margin-left: calc(${margin.xs} + ${padding.xxs} + 1em);

  &:last-of-type {
    padding-bottom: ${padding.xs};
  }
`;

export const IconStyles = css`
  font-weight: ${fontWeights[1]};
  color: ${colors.text.default};
  padding: ${padding.xxs};
  border-radius: ${radii.xs};
  display: inline-flex;
  transition: background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    color 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  &:hover {
    background-color: ${colors.border};
  }
  &.active {
    background-color: ${colors.text.primary}22;
  }
`;

export const UnNavPanel = styled.div`
  overflow: hidden;
  position: relative;
  &::after {
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

export const UnNavFooter = styled.div({
  display: 'none',
  width: '100%',
  padding: padding.xs,
  boxSizing: 'border-box',
  // display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: margin.xs,
  position: 'relative',
  borderTop: '1px solid',
  borderColor: colors.border,
});

export const UnNavSpacer = styled.div`
  padding: ${padding.xxs};
`;
