import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";
import {
  color, opacity,
  space,
  z
} from "../utils";
import Logo from './assets/logo.svg';


const UnHeader = styled.header`
  height: 6rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${z.front};
  &.right {
    width: calc(100% - 23rem);
    .logo-container {
      display: none;
    }
  }
  .logo-container,
  .wrapper {
    height: 100%;
    padding: 0 ${space.rem.md};
    display: flex;
    align-items: center;
  }
  .logo-container {
    background-color: ${color.grey5};
    width: 16rem;
    border-bottom: 1px solid ${color.border.light};
    box-sizing: border-box;
  }
  .wrapper {
    background-color: rgba(255, 255, 255, ${opacity[75]});
    backdrop-filter: blur(64px);
    flex-grow: 1;
    width: auto;
    border-bottom: 1px solid ${color.border.dark};
  }
`;

/**
 * Users rely on the global header to navigate and orient themselves in your UI. This pattern outlines some of the qualities that make a global header consistent, familiar, and usable.
 */

export const Header = ({ align, ...props }) => (
  <UnHeader
    className={[align].join(' ')}>
      <div className="logo-container">
        <img id="logo" src={Logo} />
      </div>
      <div className="wrapper">
        {props.children}
      </div>
  </UnHeader>
);

Header.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
};

Header.defaultProps = {
  align: 'left',
};

export default Header;