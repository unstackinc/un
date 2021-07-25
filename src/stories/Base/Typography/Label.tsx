// Paragraph.tsx

import * as React from 'react';
import { ReactNode } from 'react';

import {
  LabelContainerStyles,
  LabelStyles,
  FullStyles,
  InlineStyles,
  BeforeStyles,
  DisabledStyles,
  TextStyles,
  WarningTextStyles,
} from './Typography.styles';

interface Props {
  label?: string;
  id?: string;
  full?: boolean;
  inline?: boolean;
  before?: boolean;
  after?: boolean;
  nested?: boolean;
  disabled?: boolean;
  control?: ReactNode;
  warningText?: string;
  helpText?: string;
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
  nested,
  disabled,
  control,
  warningText,
  helpText,
  css,
  children,
  ...props
}: Props) => {
  return (
    <div css={[LabelContainerStyles, full && FullStyles, css]} {...props}>
      <label
        htmlFor={id}
        css={[
          LabelStyles,
          full && FullStyles,
          inline && InlineStyles,
          disabled && DisabledStyles,
          before && BeforeStyles,
        ]}
      >
        {label ? (
          <>
            {(after || before) && children}

            {after && control}
            {label}
            {!after && control}

            {!after && !before && !nested && children}

            {warningText && (
              <div css={[TextStyles, WarningTextStyles]}>{warningText}</div>
            )}
            {helpText && <div css={TextStyles}>{helpText}</div>}
          </>
        ) : (
          <>
            {(after || before) && children}
            {control}
            {!after && !before && !nested && children}
          </>
        )}
      </label>
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
