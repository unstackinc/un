// Select.tsx

import * as React from 'react';
import { useState } from 'react';
import PropTypes, { InferProps } from 'prop-types';

import {
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from '@reach/listbox';
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
  onChange: PropTypes.any,
  onClick: PropTypes.any,
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
  let [initialValue, setInitialValue] = useState(value);

  return (
    <ListboxInput
      value={initialValue}
      onChange={(initialValue) => setInitialValue(initialValue)}
      css={[full && FullStyles]}
      {...props}
    >
      <Label
        id={id}
        label={label}
        disabled={disabled}
        full={full}
        helpText={helpText}
        warningText={warningText}
      >
        <ListboxButton
          as="button"
          arrow={<IoChevronDown />}
          css={[
            Styles,
            full && FullStyles,
            warning && WarningStyles,
            disabled && DisabledStyles,
          ]}
          placeholder={placeholder}
          disabled={disabled}
        />
        <ListboxPopover>
          <ListboxList css={ListStyles}>
            {options.map((option, index) => {
              const { name, value } = option;
              return (
                <ListboxOption
                  css={OptionStyles}
                  key={`${option.toString()}-${index}`}
                  label={name}
                  value={value}
                >
                  {name}
                </ListboxOption>
              );
            })}
          </ListboxList>
        </ListboxPopover>
      </Label>
    </ListboxInput>
  );
};

Select.defaultProps = {
  disabled: false,
  onClick: undefined,
  placeholder: 'Placeholder',
  warning: false,
};

Select.propTypes = Types;

export default Select;
