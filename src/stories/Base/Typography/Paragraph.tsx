// Paragraph.tsx

import * as React from 'react';
import { ReactNode } from 'react';
import { css } from '@emotion/react';

import {
  DisplayStyles,
  NormalStyles,
  MediumStyles,
  BoldStyles,
  LinkStyles,
  P0Styles,
  P1Styles,
  P2Styles,
  P3Styles,
} from './Typography.styles';

interface Props {
  weight?: 'normal' | 'medium' | 'bold';
  color?: string;
  link?: boolean;
  display?: boolean;
  children: ReactNode;
}

export const P3 = ({
  weight,
  color,
  link,
  display,
  children,
  ...props
}: Props) => {
  return (
    <p
      css={[
        P3Styles,
        weight === 'normal' && NormalStyles,
        weight === 'medium' && MediumStyles,
        weight === 'bold' && BoldStyles,
        display && DisplayStyles,
        link && LinkStyles,
        css`
          color: ${color};
        `,
      ]}
      {...props}
    >
      {children}
    </p>
  );
};

P3.defaultProps = {
  weight: 'normal',
  link: false,
  display: false,
};

export const P2 = ({
  weight,
  color,
  link,
  display,
  children,
  ...props
}: Props) => {
  return (
    <p
      css={[
        P2Styles,
        weight === 'normal' && NormalStyles,
        weight === 'medium' && MediumStyles,
        weight === 'bold' && BoldStyles,
        display && DisplayStyles,
        link && LinkStyles,
        css`
          color: ${color};
        `,
      ]}
      {...props}
    >
      {children}
    </p>
  );
};

P2.defaultProps = {
  weight: 'normal',
  link: false,
  display: false,
};

export const P1 = ({
  weight,
  color,
  link,
  display,
  children,
  ...props
}: Props) => {
  return (
    <p
      css={[
        P1Styles,
        weight === 'normal' && NormalStyles,
        weight === 'medium' && MediumStyles,
        weight === 'bold' && BoldStyles,
        display && DisplayStyles,
        link && LinkStyles,
        css`
          color: ${color};
        `,
      ]}
      {...props}
    >
      {children}
    </p>
  );
};

P1.defaultProps = {
  weight: 'normal',
  link: false,
  display: false,
};

export const P0 = ({
  weight,
  color,
  link,
  display,
  children,
  ...props
}: Props) => {
  return (
    <p
      css={[
        P0Styles,
        weight === 'normal' && NormalStyles,
        weight === 'medium' && MediumStyles,
        weight === 'bold' && BoldStyles,
        display && DisplayStyles,
        link && LinkStyles,
        css`
          color: ${color};
        `,
      ]}
      {...props}
    >
      {children}
    </p>
  );
};

P0.defaultProps = {
  weight: 'normal',
  link: false,
  display: false,
};
