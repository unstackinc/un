// Paragraph.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

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

const Types = {
  after: PropTypes.bool,
  before: PropTypes.bool,
  control: PropTypes.node,
  children: PropTypes.node,
  css: PropTypes.any,
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  helpText: PropTypes.string,
  id: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.string,
  warningText: PropTypes.string,
};

type Props = InferProps<typeof Types>;

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

Label.propTypes = Types;
