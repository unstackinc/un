// Heading.tsx

import * as React from 'react';
import { ReactNode } from 'react';
import { css } from '@emotion/react';

import {
  DisplayStyles,
  H0Styles,
  H1Styles,
  H2Styles,
  H3Styles,
} from './Typography.styles';

interface Props {
  color?: string;
  display?: boolean;
  children: ReactNode;
}

export const H3 = ({ color, display, children, ...props }: Props) => {
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

export default H1;
