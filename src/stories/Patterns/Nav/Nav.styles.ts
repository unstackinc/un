// Nav.styles.ts

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { NavLink } from 'react-router-dom';

import theme, { fontSizes } from '../../../theme';

const { margin, padding, fonts, fontWeights, colors, radii } = theme;

export const UnNav = styled.nav({
  width: '20rem',
  maxWidth: '100%',
  height: '100%',
  backgroundColor: colors.background,
  position: 'fixed',
  top: 0,
  left: 0,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
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
  padding: padding.lg,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: margin.sm,
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

  span {
    ${fontSizes[2]}
    font-weight: ${fontWeights[1]};
    padding: ${padding.xxs};
    border-radius: ${radii.xs};
    display: inline-flex;
    color: ${colors.text.default};
    flex-direction: row;
    align-items: center;
    user-select: none;
    cursor: pointer;
    gap: ${margin.sm};
    transition: background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1),
      color 0.6s cubic-bezier(0.16, 1, 0.3, 1),
      background-color 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    &:hover {
      background-color: ${colors.border};
    }
    &.active {
      color: ${colors.text.primary};
      svg {
        opacity: 1;
      }
    }
  }

  svg {
    opacity: 0.5;
    width: 1.25rem;
    height: 1.25rem;
    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
`;

export const UnNavLink = styled(NavLink)`
  ${fontSizes[1]}
  font-family: ${fonts.body};
  font-weight: ${fontWeights[0]};
  user-select: none;
  display: block;
  text-decoration: none;
  color: ${colors.text.default};
  padding: ${padding.xxs} 0;
  margin-left: calc(${margin.sm} + ${padding.xxs} + 1.25rem);
  &.active {
    font-weight: ${fontWeights[1]};
    color: ${colors.text.primary};
  }
  &:last-of-type {
    padding-bottom: ${padding.sm};
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
    height: ${padding.sm};
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
