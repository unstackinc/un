/** @jsxImportSource @emotion/react */
// Paragraph.tsx

import * as React from 'react';
import { css } from '@emotion/react';

import {
  UnP0,
  UnP1,
  UnP2,
  UnP3,
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
    <UnP3
      className={[weight, link ? 'link' : '', display ? 'display' : ''].join(
        ' ',
      )}
      css={css`
        color: ${color} !important;
      `}
      {...props}
    >
      {children}
    </UnP3>
  );
};

P3.defaultProps = {
  weight: 'normal',
  link: false,
  display: false,
  color: 'null',
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
    <UnP2
      className={[weight, link ? 'link' : '', display ? 'display' : ''].join(
        ' ',
      )}
      css={css`
        color: ${color} !important;
      `}
      {...props}
    >
      {children}
    </UnP2>
  );
};

P2.defaultProps = {
  weight: 'normal',
  link: false,
  display: false,
  color: 'null',
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
    <UnP1
      className={[weight, link ? 'link' : '', display ? 'display' : ''].join(
        ' ',
      )}
      css={css`
        color: ${color} !important;
      `}
      {...props}
    >
      {children}
    </UnP1>
  );
};

P1.defaultProps = {
  weight: 'normal',
  link: false,
  display: false,
  color: 'null',
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
    <UnP0
      className={[weight, link ? 'link' : '', display ? 'display' : ''].join(
        ' ',
      )}
      css={css`
        color: ${color} !important;
      `}
      {...props}
    >
      {children}
    </UnP0>
  );
};

P0.defaultProps = {
  weight: 'normal',
  link: false,
  display: false,
  color: 'null',
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
  children,
  ...props
}) => {
  return (
    <div
      css={[
        LabelStyles,
        full && FullStyles,
        inline && InlineStyles,
        before && BeforeStyles,
      ]}
      {...props}
    >
      {(after || before) && children}

      {label && (
        <label
          htmlFor={id}
          className="label-text"
          css={disabled && DisabledStyles}
        >
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
