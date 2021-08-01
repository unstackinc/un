// Checkbox.tsx

import * as React from 'react';
import { useEffect, useRef, forwardRef } from 'react';
import PropTypes, { InferProps } from 'prop-types';

import { IoCheckmark, IoRemove } from 'react-icons/io5';

import { Label } from '../..';
import { Styles } from './Checkbox.styles';

const Types = {
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  id: PropTypes.string,
  indeterminate: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  props: PropTypes.any,
  value: PropTypes.string,
};

type Props = InferProps<typeof Types>;

export const Checkbox = forwardRef(
  (
    {
      disabled,
      full,
      id,
      indeterminate,
      label,
      name,
      onChange,
      onClick,
      value,
      props,
    }: Props,
    ref,
  ) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <Label
        id={id}
        label={label}
        disabled={disabled}
        full={full}
        inline
        after
        control={
          <span className="control">
            <IoCheckmark className="checked" />
            <IoRemove className="indeterminate" />
          </span>
        }
        css={Styles}
      >
        <input
          type="checkbox"
          ref={resolvedRef}
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onClick={onClick}
          {...props}
        />
      </Label>
    );
  },
);

Checkbox.defaultProps = {
  disabled: false,
  onChange: undefined,
  onClick: undefined,
};

Checkbox.propTypes = Types;

const IndeterminateTypes = {
  indeterminate: PropTypes.bool,
};

type IndeterminateProps = InferProps<typeof IndeterminateTypes>;

export const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, ...props }: IndeterminateProps, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <Checkbox ref={resolvedRef} props={props} />
      </>
    );
  },
);

IndeterminateCheckbox.propTypes = IndeterminateTypes;

export default Checkbox;
