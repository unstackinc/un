// Checkbox.tsx

import * as React from 'react';
import { useEffect, useRef, forwardRef } from 'react';

import { IoCheckmark, IoRemove } from 'react-icons/io5';

import { Label } from '../..';
import { Styles } from './Checkbox.styles';

interface Props {
  label?: string;
  id?: string;
  name?: string;
  value?: string;
  indeterminate?: boolean;
  full?: boolean;
  disabled?: boolean;
  onClick?: any;
  props: any;
}

export const Checkbox = forwardRef(
  (
    { label, id, name, value, indeterminate, full, disabled, props }: Props,
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
        nested
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
          {...props}
        />
      </Label>
    );
  },
);

Checkbox.defaultProps = {
  disabled: false,
  onClick: undefined,
};

interface IndeterminateProps {
  indeterminate?: any;
}

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

export default Checkbox;
