/**
 * Alignments
 */

import { css } from "styled-components";

// Viewport
export const breakpoints = {
  sm: "25rem",
  md: "50rem",
  lg: "75rem",
  default: "40rem",
  wide: "60rem",
  gridSm: "40rem",
  gridMd: "60rem",
  gridLg: "90rem",
};

/* Breakpoint mixins */

export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);

/* Centering */

export const center = {
  absoluteFull: () => `
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  absoluteVertical: () => `
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  `,
  absoluteHorizontal: () => `
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `,
  absolute: () => `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  flexColumn: () => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  flexRow: () => `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  flex: () => `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}

// Space reset
export const spaceReset =  () =>`
  margin: 0;
  padding: 0;
`;

// Clearfix
export const clearfix =  () =>`
  &:after {
    content: "";
    display: table;
    clear: both;
`;
