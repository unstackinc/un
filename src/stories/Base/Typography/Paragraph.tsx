// Paragraph.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
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

const Types = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  display: PropTypes.bool,
  link: PropTypes.bool,
  weight: PropTypes.oneOf(['normal', 'medium', 'bold']),
};

type Props = InferProps<typeof Types>;

export const P3 = ({
  children,
  color,
  display,
  link,
  weight,
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
  display: false,
  link: false,
  weight: 'normal',
};

P3.propTypes = Types;

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
  display: false,
  link: false,
  weight: 'normal',
};

P2.propTypes = Types;

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
  display: false,
  link: false,
  weight: 'normal',
};

P1.propTypes = Types;

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
  display: false,
  link: false,
  weight: 'normal',
};

P0.propTypes = Types;
