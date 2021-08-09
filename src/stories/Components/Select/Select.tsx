// Select.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { IoChevronDown } from 'react-icons/io5';

import { Label } from '../..';
import {
  Styles,
  ListStyles,
  OptionStyles,
  FullStyles,
  WarningStyles,
  DisabledStyles,
} from './Select.styles';

const OptionTypes = {
  name: PropTypes.node.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
};

const Types = {
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  helpText: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  options: PropTypes.arrayOf(OptionTypes).isRequired,
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
  onChange,
  onClick,
  options,
  placeholder,
  value,
  warning,
  warningText,
  ...props
}: Props) => {
  return (
    <Label
      id={id}
      label={label}
      disabled={disabled}
      full={full}
      helpText={helpText}
      warningText={warningText}
    >
      <select
        id={id}
        name={name}
        css={[
          Styles,
          full && FullStyles,
          warning && WarningStyles,
          disabled && DisabledStyles,
        ]}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onClick={onClick}
        {...props}
      >
        {options.map((option, index) => {
          const { name, value } = option;
          return (
            <option
              css={OptionStyles}
              key={`${option.toString()}-${index}`}
              value={value}
            >
              {name}
            </option>
          );
        })}
      </select>
    </Label>
  );
};

Select.defaultProps = {
  disabled: false,
  onChange: undefined,
  onClick: undefined,
  placeholder: 'Placeholder',
  warning: false,
};

Select.propTypes = Types;

export default Select;
