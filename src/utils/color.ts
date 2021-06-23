// color.ts

const un = {
  primary: '#6F7FE2',
  primaryEdge: 'linear-gradient(180deg, #6F88E2 0%, #6F75E2 100%)',
  black: '#000',
  greyDark: '#14213D',
  grey: '#434D64',
  greyLight: '#647FB4',
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
    button: {
      background: {
        primary: un.primary,
        primaryEdge: un.primaryEdge,
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
    border: {
      dark: 'rgba(0, 0, 0, .1)',
      light: 'rgba(255, 255, 255, .1)',
    },
  },
  opacity: {
    25: '.25',
    5: '.5',
    75: '.75',
  },
};

export default color;
