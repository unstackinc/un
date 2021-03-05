import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";
import {
  color, opacity,
  radius,
  space,
  d1, h3,
} from "../utils";


const UnNav = styled.aside`
  position: fixed;
  left: 0;
  height: 100vh;
  width: 16rem;
  background-color: ${color.grey5};
  padding-top: ${space.rem.xl};
  display: flex;
  .wrapper {
    padding: 0 1.25rem;
    width: 100%;
    box-sizing: border-box;
  }
`;

const UnTab = styled.div`
  .tab {
    ${h3}
    color: ${color.white};
    opacity: ${opacity[5]};
    width: auto;
    height: 3rem;
    display: flex;
    align-items: center;
    gap: .75rem;
    padding: 0 .75rem;
    border-radius: ${radius.xs};
    svg {
      user-select: none;
      min-width: 1.5rem;
      min-height: 1.5rem;
    }
  }
  .links {
    display: none;
  }
  &.active {
    .tab {
      background: ${color.primaryEdge};
      opacity: 1;
    }
    .links {
      display: block;
    }
  }
`;

const UnLink = styled.a`
  ${d1}
  display: block;
  color: ${color.white};
  text-decoration: none;
  padding: .75rem;
  padding-left: 3rem;
  &.active {
    text-decoration: underline;
  }
`;

export const Nav = ({ ...props }) => (
  <UnNav>
      <div className="wrapper">
        {props.children}
      </div>
  </UnNav>
);

export const Tab = ({ label, icon, active, ...props }) => (
    <UnTab className={active ? `active` : []}>
      <div className="tab">{icon}<span>{label}</span></div>
      <div className="links">
        {props.children}
      </div>
    </UnTab>
);

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

Tab.defaultProps = {
  active: false,
  onClick: undefined,
};

export const Link = ({ link, label, active }) => (
  <UnLink href={`/${link}`} className={active ? `active` : []}>
    {label}
  </UnLink>
);

Link.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

Link.defaultProps = {
  active: false,
  onClick: undefined,
};

export default Nav;