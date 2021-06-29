// color.ts

const un = {
  primary: '#7373E5',
  black: '#000000',
  greyDark: '#14213D',
  grey: '#434D64',
  greyLight: '#7D8FB2',
  whiteOff: '#F8FAFE',
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
};

export const color = {
  colors: {
    background: un.whiteOff,
    overlay: un.greyDark,
    card: un.white,
    border: un.border,
    disabled: un.disabled,
    warning: un.red,
    button: {
      background: {
        primary: un.primary,
        secondary: un.greyLight,
        tertiary: un.transparent,
        tertiaryHover: un[5],
        outline: un.transparent,
        disabled: un.disabled,
      },
    },
    tag: {
      default: {
        purple: un.primary,
        yellow: un.yellow,
        green: un.green,
      },
      outline: {
        background: un.transparent,
        default: un.greyLight,
        blue: un.blue,
      },
    },
    input: {
      background: {
        default: un.whiteOff,
        light: un.white,
        focus: un.white,
        disabled: un.disabled,
      },
      border: {
        default: un.border,
        focus: un.blue,
      },
    },
    toggle: {
      background: {
        default: un.border,
        hover: un.disabled,
        active: un.white,
        disabled: un.disabled,
      },
      border: {
        default: un.toggle,
        focus: `${un.blue}88`,
        active: un.blue,
      },
    },
    text: {
      default: un.grey,
      secondary: un.greyLight,
      bold: un.greyDark,
      link: un.blue,
      reversed: un.white,
    },
  },
  opacity: {
    25: '.25',
    5: '.5',
    75: '.75',
  },
};

export default color;
