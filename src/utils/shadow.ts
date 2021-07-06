// shadow.ts
import color from './colors';

const { colors } = color;

export const shadows = {
  sm: '0px 0px 2px rgba(0, 0, 0, 0.05), 0px 1px 4px rgba(0, 0, 0, 0.05)',
  md: '0px 1px 4px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.1)',
  lg: '0px 2px 8px rgba(0, 0, 0, 0.15), 0px 4px 16px rgba(0, 0, 0, 0.15)',
  disabled: '0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0)',
  inset: {
    default: `inset 0 1px 4px ${colors.toggle.border.default}`,
    active: `inset 0 1px 4px ${colors.toggle.border.default}00`,
    disabled: `inset 0 0 0 ${colors.toggle.background.active}00`,
  },
  focus: {
    default: `0 0 0 2px ${colors.background}, 0 0 2px 4px ${colors.toggle.border.focus}`,
    input: {
      default: `0 0 0 2px ${colors.input.border.focus}`,
      warning: `0 0 0 2px ${colors.warning}`,
    },
    color: `0 0 0 2px ${colors.background}, 0 0 0 4px currentColor`,
    primary: `0 0 0 2px ${colors.background}, 0 0 0 4px ${colors.button.background.primary}`,
    secondary: `0 0 0 2px ${colors.background}, 0 0 0 4px ${colors.button.background.secondary}`,
    tertiary: `0 0 0 2px ${colors.button.background.primary}`,
    warning: `0 0 0 2px ${colors.background}, 0 0 0 4px ${colors.warning}`,
  },
};

export default shadows;
