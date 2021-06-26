// color.ts

const un = {
  primary: '#7373E5',
  black: '#000',
  greyDark: '#14213D',
  grey: '#434D64',
  greyLight: '#8F97BF',
  whiteOff: '#F8FAFE',
  white: '#FFF',
  blue: '#1495CD',
  green: '#3EC4B6',
  red: '#E51739',
  yellow: '#F3AC5B',
  transparent: 'rgba(0, 0, 0, 0)',
  25: 'rgba(220, 228, 242, .25)',
  5: 'rgba(220, 228, 242, .5)',
  75: 'rgba(220, 228, 242, .75)',
};

export const color = {
  colors: {
    background: un.whiteOff,
    overlay: un.greyDark,
    modal: un.white,
    border: '#DEE4F3',
    button: {
      background: {
        primary: un.primary,
        secondary: un.greyLight,
        tertiary: un.transparent,
        tertiaryHover: un[5],
        outline: un.transparent,
        warning: un.red,
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
