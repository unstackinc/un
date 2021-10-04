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

export type LabelProps = {
  after?: boolean;
  before?: boolean;
  control?: ReactNode;
  children?: ReactNode;
  css?: any;
  disabled?: boolean;
  full?: boolean;
  helpText?: string;
  id?: string;
  inline?: boolean;
  label?: string;
  warningText?: string;
};

export const Label = ({
  after,
  before,
  control,
  children,
  css,
  disabled,
  full,
  helpText,
  id,
  inline,
  label,
  warningText,
  ...props
}: LabelProps) => {
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

            {!after && !before && children}

            {warningText && (
              <div css={[TextStyles, WarningTextStyles]}>{warningText}</div>
            )}
            {helpText && <div css={TextStyles}>{helpText}</div>}
          </>
        ) : (
          <>
            {(after || before) && children}
            {control}
            {!after && !before && children}
          </>
        )}
      </label>
    </div>
  );
};

Label.defaultProps = {
  after: false,
  before: false,
  disabled: false,
  full: false,
  inline: false,
};

export default Label;
