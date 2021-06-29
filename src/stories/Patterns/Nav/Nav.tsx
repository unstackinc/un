// Nav.tsx

import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useMeasure } from 'react-use';
import { animated, useSpring, config } from 'react-spring';
import { css } from '@emotion/react';

import { BrowserRouter as Router } from 'react-router-dom';

import {
  UnNav,
  UnNavHeading,
  UnNavBody,
  UnNavSection,
  UnNavLink,
  UnNavFooter,
  UnNavPanel,
} from './Nav.styles';
import theme, { fontSizes } from '../../../theme';

const { margin, padding, fonts, fontWeights, colors, radii } = theme;

interface NavProps {
  children: React.ReactNode;
}

export const Nav = ({ children, ...props }: NavProps) => {
  return (
    <UnNav {...props}>
      <Router>
        <UnNavHeading></UnNavHeading>

        <UnNavBody>{children}</UnNavBody>
        <UnNavFooter></UnNavFooter>
      </Router>
    </UnNav>
  );
};

interface SectionProps {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const NavSection = ({
  label,
  icon,
  children,
  ...props
}: SectionProps) => {
  const defaultHeight = 0;
  const [showSection, setShowSection] = useState(false);
  const [contentHeight, setContentHeight] = useState(defaultHeight);
  const [ref, { height }] = useMeasure();

  const AnimatedUnNavPanel = animated(UnNavPanel);
  const styles = useSpring({
    height: showSection ? `${contentHeight}px` : `${defaultHeight}px`,
  });

  const resize = useCallback(
    (e) => {
      if (e.key === 'Escape' && contentHeight) {
        setContentHeight(height);
      }
    },
    [setContentHeight, contentHeight],
  );

  useEffect(() => {
    setContentHeight(height);
    document.addEventListener('resize', resize);
    return () => document.removeEventListener('resize', resize);
  }, [height]);

  return (
    <UnNavSection {...props}>
      <span
        className={showSection && 'active'}
        onClick={() => setShowSection((prev) => !prev)}
      >
        {icon}
        {label}
      </span>
      <AnimatedUnNavPanel style={styles}>
        <div ref={ref}>{children}</div>
      </AnimatedUnNavPanel>
    </UnNavSection>
  );
};

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

export const NavLink = ({ to, children, ...props }: LinkProps) => {
  return (
    <UnNavLink to={to} activeClassName="active" {...props}>
      {children}
    </UnNavLink>
  );
};

Nav.defaultProps = {
  showNav: false,
  title: 'Title',
};

export default Nav;
