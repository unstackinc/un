// Paragraph.tsx

import * as React from 'react';
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
  LabelStyles,
  FullStyles,
  InlineStyles,
  BeforeStyles,
  DisabledStyles,
} from './Typography.styles';

interface PProps {
  weight?: 'normal' | 'medium' | 'bold';
  color?: string;
  link?: boolean;
  display?: boolean;
  children: React.ReactNode;
}

export const P3 = ({
  weight,
  color,
  link,
  display,
  children,
  ...props
}: PProps) => {
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

export const P2: React.FunctionComponent<PProps> = ({
  weight,
  color,
  link,
  display,
  children,
  ...props
}) => {
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

export const P1: React.FunctionComponent<PProps> = ({
  weight,
  color,
  link,
  display,
  children,
  ...props
}) => {
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

export const P0: React.FunctionComponent<PProps> = ({
  weight,
  color,
  link,
  display,
  children,
  ...props
}) => {
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

interface LabelProps {
  label?: string;
  id: string;
  full?: boolean;
  inline?: boolean;
  before?: boolean;
  after?: boolean;
  disabled?: boolean;
  control?: React.ReactNode;
  css?: any;
  children?: React.ReactNode;
}

export const Label: React.FunctionComponent<LabelProps> = ({
  label,
  id,
  full,
  inline,
  before,
  after,
  disabled,
  control,
  css,
  children,
  ...props
}) => {
  return (
    <div
      css={[
        LabelStyles,
        full && FullStyles,
        inline && InlineStyles,
        disabled && DisabledStyles,
        before && BeforeStyles,
        css,
      ]}
      {...props}
    >
      {(after || before) && children}

      {label && (
        <label htmlFor={id} className="label-text">
          {after && control}
          {label}
          {!after && control}
        </label>
      )}

      {!after && !before && children}
    </div>
  );
};

Label.defaultProps = {
  full: false,
  inline: false,
  before: false,
  after: false,
  disabled: false,
};
