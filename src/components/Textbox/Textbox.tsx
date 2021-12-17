import { Label } from '../Typography';
import { Styles, FullStyles, WarningStyles } from './Textbox.styles';

export type TextboxProps = {
  disabled?: boolean;
  full?: boolean;
  helpText?: string;
  id: string;
  label?: string;
  name: string;
  onChange?: any;
  onClick?: any;
  placeholder: string;
  warning?: boolean;
  warningText?: string;
};

export const Textbox = ({
  disabled,
  full,
  helpText,
  id,
  name,
  label,
  onChange,
  onClick,
  placeholder,
  warning,
  warningText,
  ...props
}: TextboxProps) => {
  return (
    <Label
      id={id}
      label={label}
      disabled={disabled}
      full={full}
      warningText={warningText}
      helpText={helpText}
    >
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        css={[Styles, full && FullStyles, warning && WarningStyles]}
        onChange={onChange}
        onClick={onClick}
        {...props}
      ></input>
    </Label>
  );
};

Textbox.defaultProps = {
  disabled: false,
  onChange: undefined,
  onClick: undefined,
  placeholder: 'Placeholder',
  warning: false,
};

export default Textbox;
