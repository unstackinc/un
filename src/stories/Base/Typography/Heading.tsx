import { ReactNode } from 'react';
import { css } from '@emotion/react';

import {
  DisplayStyles,
  H0Styles,
  H1Styles,
  H2Styles,
  H3Styles,
} from './Typography.styles';

export type HeadingProps = {
  children: ReactNode;
  color?: string;
  display?: boolean;
};

export const H3 = ({ children, color, display, ...props }: HeadingProps) => {
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

export const H2 = ({ color, display, children, ...props }: HeadingProps) => {
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

export const H1 = ({ color, display, children, ...props }: HeadingProps) => {
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

export const H0 = ({ color, display, children, ...props }: HeadingProps) => {
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
