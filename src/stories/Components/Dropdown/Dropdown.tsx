/** @jsxImportSource @emotion/react */
// Dropdown.tsx

import * as React from 'react';
import { css } from '@emotion/react';

import { Label } from '../../';
import { UnDropdown, UnDropdownOption } from './Dropdown.styles';
import theme, { fontSizes } from '../../../theme';

const { colors } = theme;

interface DropdownProps {
  options: any;
  label?: string;
  warningText?: string;
  helpText?: string;
  placeholder: string;
  full?: boolean;
  warning?: boolean;
  disabled?: boolean;
  onClick?: any;
}

export const Dropdown = ({
  options,
  label,
  warningText,
  helpText,
  placeholder,
  full,
  warning,
  disabled,
  ...props
}: DropdownProps) => {
  return (
    <Label full={full}>
      {label && (
        <div
          className="label-text"
          css={css`
            ${disabled &&
            css`
              cursor: auto !important;
            `}
          `}
        >
          {label}
        </div>
      )}
      <UnDropdown
        className={full && 'full'}
        css={css`
          ${fontSizes[2]};
          ${warning &&
          css`
            box-shadow: 0 0 0 2px ${colors.warning} !important;
            &:focus {
              box-shadow: 0 0 0 2px ${colors.warning} !important;
            }
          `}
          ${disabled &&
          css`
            background: ${colors.disabled} !important;
            border-color: ${colors.disabled} !important;
            user-select: none !important;
            cursor: not-allowed !important;
            &:hover {
              color: inherit !important;
            }
          `}
        `}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      >
        {options.map((option, index) => {
          return (
            <React.Fragment key={`${option.toString()}-${index}`}>
              {option}
            </React.Fragment>
          );
        })}
      </UnDropdown>
      {warningText && <div className="warning-text">{warningText}</div>}
      {helpText && <div className="help-text">{helpText}</div>}
    </Label>
  );
};

Dropdown.defaultProps = {
  placeholder: 'Placeholder',
  warning: false,
  disabled: false,
  onClick: undefined,
};

interface OptionProps {
  value: string;
  children: React.ReactNode;
}

export const DropdownOption = ({ value, children, ...props }: OptionProps) => {
  return (
    <UnDropdownOption
      value={value}
      css={css`
        ${fontSizes[2]};
      `}
      {...props}
    >
      {children}
    </UnDropdownOption>
  );
};

DropdownOption.defaultProps = {
  placeholder: 'Placeholder',
  warning: false,
  disabled: false,
  onClick: undefined,
};

export default Dropdown;
