import { Label } from '../Typography';
import { Styles } from './Toggle.styles';

export type ToggleProps = {
  disabled?: boolean;
  full?: boolean;
  id: string;
  label?: string;
  name: string;
  onChange?: any;
  onClick?: any;
  value: string;
};

export const Toggle = ({
  disabled,
  full,
  id,
  label,
  name,
  onChange,
  onClick,
  value,
  ...props
}: ToggleProps) => {
  return (
    <Label
      id={id}
      label={label}
      disabled={disabled}
      full={full}
      inline
      before
      control={
        <span className="control" role="presentation" aria-hidden="true"></span>
      }
      css={Styles}
    >
      <input
        type="checkbox"
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
};

Toggle.defaultProps = {
  disabled: false,
  onChange: undefined,
  onClick: undefined,
};
