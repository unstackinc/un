import { useEffect, useRef, forwardRef } from 'react';

import { IoCheckmark, IoRemove } from 'react-icons/io5';

import { Label } from '../Typography';
import { Styles } from './Checkbox.styles';

export type CheckboxProps = {
  disabled?: boolean;
  full?: boolean;
  id?: string;
  indeterminate?: boolean;
  label?: string;
  name?: string;
  onChange?: any;
  onClick?: any;
  props?: any;
  value?: string;
};

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
    }: CheckboxProps,
    ref,
  ) => {
    const defaultRef = useRef();
    const resolvedRef: any = ref || defaultRef;

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

type IndeterminateProps = {
  indeterminate: boolean;
};

export const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, ...props }: IndeterminateProps, ref) => {
    const defaultRef = useRef();
    const resolvedRef: any = ref || defaultRef;

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
