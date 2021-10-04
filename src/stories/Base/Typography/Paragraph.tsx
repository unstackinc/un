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

export type ParagraphProps = {
  children: ReactNode;
  color?: string;
  display?: boolean;
  link?: boolean;
  weight?: 'normal' | 'medium' | 'bold';
};

export const P3 = ({
  children,
  color,
  display,
  link,
  weight,
  ...props
}: ParagraphProps) => {
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
  display: false,
  link: false,
  weight: 'normal',
};

export const P2 = ({
  weight,
  color,
  link,
  display,
  children,
  ...props
}: ParagraphProps) => {
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
  display: false,
  link: false,
  weight: 'normal',
};

export const P1 = ({
  weight,
  color,
  link,
  display,
  children,
  ...props
}: ParagraphProps) => {
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
  display: false,
  link: false,
  weight: 'normal',
};

export const P0 = ({
  weight,
  color,
  link,
  display,
  children,
  ...props
}: ParagraphProps) => {
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
  display: false,
  link: false,
  weight: 'normal',
};
