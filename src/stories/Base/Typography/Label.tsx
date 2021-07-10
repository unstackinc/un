// Paragraph.tsx

import * as React from 'react';
import { ReactNode } from 'react';

import {
  LabelStyles,
  FullStyles,
  InlineStyles,
  BeforeStyles,
  DisabledStyles,
} from './Typography.styles';

interface Props {
  label?: string;
  id: string;
  full?: boolean;
  inline?: boolean;
  before?: boolean;
  after?: boolean;
  disabled?: boolean;
  control?: ReactNode;
  css?: any;
  children?: ReactNode;
}

export const Label = ({
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
}: Props) => {
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
