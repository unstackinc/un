/** @jsxImportSource @emotion/react */
// Nav.tsx

import * as React from 'react';
import { ReactNode } from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useMeasure } from 'react-use';
import { animated, useSpring } from 'react-spring';

import {
  BrowserRouter as Router,
  NavLink,
  useLocation,
} from 'react-router-dom';

import { Tag } from '../../';
import {
  UnNav,
  UnNavHeading,
  UnNavBody,
  UnNavSection,
  UnNavFooter,
  UnNavPanel,
  NavLinkStyles,
  PushStyles,
  NoIconStyles,
  IconStyles,
} from './Nav.styles';

interface NavProps {
  children: ReactNode;
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
  icon: ReactNode;
  label: string;
  to: string;
  tag?: ReactNode;
  links?: LinksProps[];
  push?: boolean;
  children?: ReactNode;
}

interface LinksProps {
  name: string;
  to: string;
  tag?: string;
}

export const NavSection = ({
  icon,
  label,
  to,
  tag,
  links,
  push,
  children,
  ...props
}: SectionProps) => {
  /* Animate height */
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

  /* Track location */
  const linkSet = [`/${to}`];
  let location = useLocation();

  useEffect(() => {
    let { pathname } = location;
    linkSet.includes(pathname)!! ? setShowSection(true) : setShowSection(false);
  }, [location]);

  return (
    <UnNavSection css={push && PushStyles} {...props}>
      <NavLink
        to={to}
        css={[NavLinkStyles, IconStyles]}
        activeClassName="active"
      >
        {icon}
        {label}
        {tag && <Tag small>{tag}</Tag>}
      </NavLink>
      <AnimatedUnNavPanel style={styles}>
        <div ref={ref}>
          {links &&
            links.map((link, index) => {
              const { name, to, tag } = link;
              linkSet.push(`/${to}`);
              return (
                <NavLink
                  to={to}
                  css={[NavLinkStyles, NoIconStyles]}
                  activeClassName="active"
                  key={`${link.toString()}-${index}`}
                >
                  {name}
                  {tag && <Tag small>{tag}</Tag>}
                </NavLink>
              );
            })}
          {children}
        </div>
      </AnimatedUnNavPanel>
    </UnNavSection>
  );
};

Nav.defaultProps = {
  title: 'Title',
};

export default Nav;
