import { Label } from '../../';
import { Styles, FullStyles, WarningStyles } from './Textarea.styles';

export type TextareaProps = {
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

export const Textarea = ({
  disabled,
  full,
  helpText,
  id,
  label,
  name,
  onChange,
  onClick,
  placeholder,
  warning,
  warningText,
  ...props
}: TextareaProps) => {
  return (
    <Label
      id={id}
      label={label}
      disabled={disabled}
      full={full}
      warningText={warningText}
      helpText={helpText}
    >
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        css={[Styles, full && FullStyles, warning && WarningStyles]}
        onChange={onChange}
        onClick={onClick}
        {...props}
      ></textarea>
    </Label>
  );
};

Textarea.defaultProps = {
  disabled: false,
  onChange: undefined,
  onClick: undefined,
  placeholder: 'Placeholder',
  warning: false,
};

export default Textarea;
