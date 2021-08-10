// Nav.tsx

import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
import PropTypes, { InferProps } from 'prop-types';
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
  BodyStyles,
  EndStyles,
  SectionStyles,
  PanelStyles,
  NavLinkStyles,
  PushStyles,
  NoIconStyles,
  IconStyles,
} from './Nav.styles';

const Types = {
  children: PropTypes.node.isRequired,
  end: PropTypes.node,
};

type Props = InferProps<typeof Types>;

export const Nav = ({ children, end, ...props }: Props) => {
  return (
    <nav css={Styles} {...props}>
      <Router>
        <div css={BodyStyles}>{children}</div>
        <div css={EndStyles}>{end}</div>
      </Router>
    </nav>
  );
};

Nav.propTypes = Types;

const LinksTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  to: PropTypes.string.isRequired,
};

const SectionTypes = {
  children: PropTypes.node,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(LinksTypes),
  push: PropTypes.bool,
  tag: PropTypes.node,
  to: PropTypes.string,
};

type SectionProps = InferProps<typeof SectionTypes>;

export const NavSection = ({
  children,
  icon,
  label,
  links,
  push,
  tag,
  to,
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
          {tag && <Tag size="small">{tag}</Tag>}
        </NavLink>
      ) : (
        <div
          css={[NavLinkStyles, IconStyles]}
          className={showSection && 'open'}
          onClick={() => history.push(locations[1])}
        >
          {icon}
          {label}
          {tag && <Tag size="small">{tag}</Tag>}
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
                  {tag && <Tag size="small">{tag}</Tag>}
                </NavLink>
              );
            })}
          {children}
        </div>
      </animated.div>
    </ul>
  );
};

NavSection.propTypes = SectionTypes;

export default Nav;
