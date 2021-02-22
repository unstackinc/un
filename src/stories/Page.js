import React from 'react';
import PropTypes from 'prop-types';

import styled from "styled-components";

const UnPage = styled.main`
  &.left {
    width: calc(100% - 16rem);
  }
  &.right {
    width: calc(100% - 23rem);
  }
`;

export const Page = ({ align, ...props }) => (
  <UnPage
    className={[align].join(' ')}>
      {props.children}
  </UnPage>
);

Page.propTypes = {
  align: PropTypes.oneOf(['left', 'right']),
};

Page.defaultProps = {
  align: 'left',
};

export default Page;

