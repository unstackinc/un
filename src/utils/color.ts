// color.ts

const un = {
  primary: '#6F7FE2',
  black: '#000',
  greyDark: '#14213D',
  grey: '#14213D',
  greyLight: '#647FB4',
  whiteOff: '#F8FAFE',
  white: '#FFF',
  blue: '#1495CD',
  red: '#E51739',
  transparent: 'rgba(0, 0, 0, 0)',
  25: 'rgba(0, 0, 0, .25)',
  5: 'rgba(0, 0, 0, .5)',
  75: 'rgba(0, 0, 0, .75)',
};

export const color = {
  colors: {
    background: un.whiteOff,
    button: {
      background: {
        primary: un.primary,
        secondary: un.greyLight,
        outline: un.transparent,
        warning: un.red,
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
