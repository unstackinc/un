import { Label } from '../../';
import { Styles } from './Radio.styles';

export type RadioProps = {
  disabled?: boolean;
  full?: boolean;
  id: string;
  label?: string;
  name: string;
  onChange?: any;
  onClick?: any;
  value: string;
};

export const Radio = ({
  disabled,
  full,
  id,
  label,
  name,
  onChange,
  onClick,
  value,
  ...props
}: RadioProps) => {
  return (
    <Label
      id={id}
      label={label}
      disabled={disabled}
      full={full}
      inline
      after
      control={<span className="control"></span>}
      css={Styles}
    >
      <input
        type="radio"
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

Radio.defaultProps = {
  disabled: false,
  onChange: undefined,
  onClick: undefined,
};

export default Radio;
