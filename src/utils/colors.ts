// color.ts

const palette = {
  primary: '#7373E5',
  black: '#000000',
  greyDark: '#14213D',
  grey: '#434D64',
  greyLight: '#7D8FB2',
  whiteOff: '#F7F9FC',
  white: '#FFFFFF',
  blue: '#148FCD',
  green: '#3DCCB4',
  red: '#C8549F',
  yellow: '#FFA64D',
  transparent: 'rgba(0, 0, 0, 0)',
  border: '#E7EDF3',
  disabled: '#DAE2F2',
  toggle: '#B8C7E5',
  25: 'rgba(220, 228, 242, .25)',
  5: 'rgba(220, 228, 242, .5)',
  75: 'rgba(220, 228, 242, .75)',
  dark: {
    25: 'rgba(255, 255, 255, .25)',
    5: 'rgba(255, 255, 255, .5)',
    75: 'rgba(255, 255, 255, .75)',
  },
};

const button = {
  background: {
    primary: palette.primary,
    secondary: palette.greyLight,
    tertiary: palette.transparent,
    tertiaryHover: palette[5],
    outline: palette.transparent,
    disabled: palette.disabled,
  },
};

const input = {
  background: {
    default: palette.whiteOff,
    light: palette.white,
    focus: palette.white,
    disabled: palette.disabled,
  },
  border: {
    default: palette.border,
    focus: palette.blue,
  },
};

const tag = {
  default: {
    purple: palette.primary,
    yellow: palette.yellow,
    green: palette.green,
  },
  outline: {
    background: palette.transparent,
    default: palette.greyLight,
    blue: palette.blue,
  },
};

const toggle = {
  background: {
    default: palette.border,
    hover: palette.disabled,
    active: palette.white,
    disabled: palette.disabled,
  },
  border: {
    default: palette.toggle,
    focus: `${palette.blue}88`,
    active: palette.blue,
  },
};

const text = {
  default: palette.grey,
  secondary: palette.greyLight,
  bold: palette.greyDark,
  link: palette.blue,
  reversed: palette.white,
  primary: palette.primary,
};

export const colors = {
  colors: {
    background: palette.white,
    backgroundSecondary: palette.whiteOff,
    primary: palette.primary,
    secondary: palette.greyLight,
    accent: palette.blue,
    highlight: palette.yellow,
    muted: palette.border,
    sidebar: palette.greyDark,
    sidemenu: palette.whiteOff,
    overlay: `${palette.greyDark}CC`,
    card: palette.white,
    border: palette.border,
    disabled: palette.disabled,
    warning: palette.red,
    button: button,
    input: input,
    tag: tag,
    toggle: toggle,
    text: text,
  },
};

export default colors;
