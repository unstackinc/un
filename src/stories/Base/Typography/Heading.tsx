// Heading.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { css } from '@emotion/react';

import {
  DisplayStyles,
  H0Styles,
  H1Styles,
  H2Styles,
  H3Styles,
} from './Typography.styles';

const Types = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  display: PropTypes.bool,
};

type Props = InferProps<typeof Types>;

export const H3 = ({ children, color, display, ...props }: Props) => {
  return (
    <h3
      css={[
        H3Styles,
        display && DisplayStyles,
        css`
          color: ${color};
        `,
      ]}
      {...props}
    >
      {children}
    </h3>
  );
};

H3.defaultProps = {
  display: false,
};

H3.propTypes = Types;

export const H2 = ({ color, display, children, ...props }: Props) => {
  return (
    <h2
      css={[
        H2Styles,
        display && DisplayStyles,
        css`
          color: ${color};
        `,
      ]}
      {...props}
    >
      {children}
    </h2>
  );
};

H2.defaultProps = {
  display: false,
};

H2.propTypes = Types;

export const H1 = ({ color, display, children, ...props }: Props) => {
  return (
    <h1
      css={[
        H1Styles,
        display && DisplayStyles,
        css`
          color: ${color};
        `,
      ]}
      {...props}
    >
      {children}
    </h1>
  );
};

H1.defaultProps = {
  display: false,
};

H1.propTypes = Types;

export const H0 = ({ color, display, children, ...props }: Props) => {
  return (
    <h1
      css={[
        H0Styles,
        display && DisplayStyles,
        css`
          color: ${color};
        `,
      ]}
      {...props}
    >
      {children}
    </h1>
  );
};

H0.defaultProps = {
  display: false,
};

H0.propTypes = Types;

export default H1;
