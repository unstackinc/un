// Select.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { Fragment } from 'react';

import { Label } from '../..';
import {
  Styles,
  OptionStyles,
  FullStyles,
  WarningStyles,
  DisabledStyles,
} from './Select.styles';

const Types = {
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  helpText: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.any,
  onChange: PropTypes.any,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
  warning: PropTypes.bool,
  warningText: PropTypes.string,
};

type Props = InferProps<typeof Types>;

export const Select = ({
  disabled,
  full,
  helpText,
  id,
  label,
  name,
  onClick,
  onChange,
  options,
  placeholder,
  value,
  warning,
  warningText,
  ...props
}: Props) => {
  return (
    <Label id={id} label={label} disabled={disabled} full={full}>
      <select
        id={id}
        name={name}
        css={[
          Styles,
          full && FullStyles,
          warning && WarningStyles,
          disabled && DisabledStyles,
        ]}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        {...props}
      >
        {options.map((option, index) => {
          return (
            <Fragment key={`${option.toString()}-${index}`}>{option}</Fragment>
          );
        })}
      </select>
      {warningText && <div className="warning-text">{warningText}</div>}
      {helpText && <div className="help-text">{helpText}</div>}
    </Label>
  );
};

Select.defaultProps = {
  disabled: false,
  onClick: undefined,
  placeholder: 'Placeholder',
  warning: false,
};

Select.propTypes = Types;

const OptionTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
};

type OptionProps = InferProps<typeof OptionTypes>;

export const SelectOption = ({ children, value, ...props }: OptionProps) => {
  return (
    <option value={value} css={OptionStyles} {...props}>
      {children}
    </option>
  );
};

SelectOption.defaultProps = {
  value: 'Placeholder',
};

SelectOption.propTypes = OptionTypes;

export default Select;
