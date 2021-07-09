// Nav.tsx

import * as React from 'react';
import { ReactNode } from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useMeasure } from 'react-use';
import { animated, useSpring } from 'react-spring';

import {
  BrowserRouter as Router,
  NavLink,
  useHistory,
  useLocation,
} from 'react-router-dom';

import { Tag } from '../../';
import {
  Styles,
  HeadingStyles,
  BodyStyles,
  SectionStyles,
  FooterStyles,
  PanelStyles,
  NavLinkStyles,
  PushStyles,
  NoIconStyles,
  IconStyles,
} from './Nav.styles';

interface NavProps {
  heading: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}

export const Nav = ({ children, ...props }: NavProps) => {
  return (
    <nav css={Styles} {...props}>
      <Router>
        <div css={HeadingStyles}></div>
        <div css={BodyStyles}>{children}</div>
        <div css={FooterStyles}></div>
      </Router>
    </nav>
  );
};

interface SectionProps {
  icon: ReactNode;
  label: string;
  to?: string;
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
  const locations = [to];
  let location = useLocation();

  useEffect(() => {
    let { pathname } = location;
    const allLocations = locations.map((i) => `/${i}`);
    allLocations.includes(pathname)
      ? setShowSection(true)
      : setShowSection(false);
  }, [location]);

  /* Use history */
  let history = useHistory();

  return (
    <ul css={[SectionStyles, push && PushStyles]} {...props}>
      {to!! ? (
        <NavLink
          to={to}
          css={[NavLinkStyles, IconStyles]}
          className={showSection && 'open'}
          activeClassName="active"
        >
          {icon}
          {label}
          {tag && <Tag small>{tag}</Tag>}
        </NavLink>
      ) : (
        <div
          css={[NavLinkStyles, IconStyles]}
          className={showSection && 'open'}
          onClick={() => history.push(locations[1])}
        >
          {icon}
          {label}
          {tag && <Tag small>{tag}</Tag>}
        </div>
      )}

      <animated.div
        style={styles}
        css={PanelStyles}
        className={showSection && links && 'active'}
      >
        <div ref={ref}>
          {links &&
            links.map((link, index) => {
              const { name, to, tag } = link;
              locations.push(to);
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
      </animated.div>
    </ul>
  );
};

Nav.defaultProps = {
  title: 'Title',
};

export default Nav;
