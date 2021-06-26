/** @jsxImportSource @emotion/react */
// Heading.tsx

import * as React from 'react';
import { css } from '@emotion/react';

import { UnH0, UnH1, UnH2, UnH3 } from './Typography.styles';

interface HProps {
  color?: string;
  display?: boolean;
  children: React.ReactNode;
}

export const H3 = ({ color, display, children, ...props }: HProps) => {
  return (
    <UnH3
      className={display ? 'display' : ''}
      css={css`
        color: ${color} !important;
      `}
      {...props}
    >
      {children}
    </UnH3>
  );
};

H3.defaultProps = {
  color: 'null',
  display: false,
};

export const H2: React.FunctionComponent<HProps> = ({
  color,
  display,
  children,
  ...props
}) => {
  return (
    <UnH2
      className={display ? 'display' : ''}
      css={css`
        color: ${color} !important;
      `}
      {...props}
    >
      {children}
    </UnH2>
  );
};

H2.defaultProps = {
  color: 'null',
  display: false,
};

export const H1: React.FunctionComponent<HProps> = ({
  color,
  display,
  children,
  ...props
}) => {
  return (
    <UnH1
      className={display ? 'display' : ''}
      css={css`
        color: ${color} !important;
      `}
      {...props}
    >
      {children}
    </UnH1>
  );
};

H1.defaultProps = {
  color: 'null',
  display: false,
};

export const H0: React.FunctionComponent<HProps> = ({
  color,
  display,
  children,
  ...props
}) => {
  return (
    <UnH0
      className={display ? 'display' : ''}
      css={css`
        color: ${color} !important;
      `}
      {...props}
    >
      {children}
    </UnH0>
  );
};

H0.defaultProps = {
  color: 'null',
  display: false,
};

export default H1;
