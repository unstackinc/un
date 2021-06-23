// theme.ts

import { color, typography, space, fluid } from './utils';

const base = 0.64;
const scale = 1.2;
const type = {
  X0: base,
  X1: base * Math.pow(scale, 1),
  X2: base * Math.pow(scale, 2),
  X3: base * Math.pow(scale, 3),
  X4: base * Math.pow(scale, 4),
  X5: base * Math.pow(scale, 5),
  X6: base * Math.pow(scale, 6),
  X7: base * Math.pow(scale, 7),
  X8: base * Math.pow(scale, 8),
  X9: base * Math.pow(scale, 9),
  X10: base * Math.pow(scale, 10),
  X11: base * Math.pow(scale, 11),
  X12: base * Math.pow(scale, 12),
  X13: base * Math.pow(scale, 13),
  X14: base * Math.pow(scale, 14),
  X15: base * Math.pow(scale, 15),
};

export const fontSizes = [
  fluid(type.X0, type.X1),
  fluid(type.X1, type.X2),
  fluid(type.X2, type.X3),
  fluid(type.X3, type.X4),
  fluid(type.X4, type.X5),
  fluid(type.X5, type.X6),
  fluid(type.X6, type.X7),
  fluid(type.X7, type.X8),
  fluid(type.X8, type.X9),
  fluid(type.X9, type.X10),
  fluid(type.X10, type.X11),
  fluid(type.X11, type.X12),
  fluid(type.X12, type.X13),
  fluid(type.X13, type.X14),
  fluid(type.X14, type.X15),
];

const breakpoints = ['30rem', '60rem', '90rem'];
const mediaQueries = {
  small: `@media screen and (min-width: ${breakpoints[0]})`,
  medium: `@media screen and (min-width: ${breakpoints[1]})`,
  large: `@media screen and (min-width: ${breakpoints[2]})`,
};

const sizes = {
  default: '45rem',
  card: '20rem',
  wide: '82rem',
  grid: '90rem',
};

export default {
  ...color,
  ...typography,
  ...space,
  sizes,
  breakpoints,
  mediaQueries,
  radii: {
    card: '1.25rem',
  },
};
