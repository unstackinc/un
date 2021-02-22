/**
 * Typography variables
 */

/* Font families */
export const family = {
  header: 'Manrope,-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  body: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
}

/* Font scales */
const scale = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augmentedFourth: 1.414,
  perfectFifth: 1.5,
  goldenRatio: 1.618,
};

/* Font sizes */
const fontSizeBase = 1;
const fontSizeUnit = "rem";
const fontSizeScale = scale.majorThird;
const fontSize0 = fontSizeBase / fontSizeScale;
const fontSize1 = 1;
const fontSize2 = 1.125;
const fontSize3 = 1.5;
const fontSize4 = 2;

// Heading sizes
const heading = {
  h1: fontSize4 + fontSizeUnit,
  h2: fontSize3 + fontSizeUnit,
  h3: fontSize2 + fontSizeUnit,
};

// Paragraph sizes
const paragraph = {
  p1: fontSize2 + fontSizeUnit,
  p2: fontSize1 + fontSizeUnit,
  p3: fontSize0 + fontSizeUnit,
};

/* Font weights */
const weight = {
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700
};

/* Line heights */
const lineHeight = {
  sm: "100%",
  md: "140%",
  lg: "180%",
};

/**
 * Typography mixinns
 */

/* Font smoothing */

export const webkit = () => `
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

/* Fonts */

// Display font mixins

export const d1 = () => `
  font-family: ${family.body};
  line-height: ${lineHeight.md};
  font-weight: 400;
  font-size: ${paragraph.p1};
`

export const d2 = () =>  `
  font-family: ${family.body};
  line-height: ${lineHeight.md};
  font-size: ${paragraph.p2};
`

export const d3 = () =>  `
  font-family: ${family.body};
  line-height: ${lineHeight.md};
  font-size: ${paragraph.p3};
`

export const label1 = () =>  `
  font-family: ${family.body};
  line-height: ${lineHeight.md};
  font-size: ${paragraph.p1};
`

export const label2 = () =>  `
  font-family: ${family.body};
  line-height: ${lineHeight.md};
  font-size: ${paragraph.p2};
  line-height: ${lineHeight.lg};
`

export const button1 = () =>  `
  font-family: ${family.body};
  line-height: ${lineHeight.md};
  font-size: ${paragraph.p1};
  font-weight: ${weight.medium};
  line-height: 1;
`

export const button2 = () =>  `
  font-family: ${family.body};
  line-height: ${lineHeight.md};
  font-size: ${paragraph.p2};
  font-weight: ${weight.medium};
  line-height: 1;
`

// Header font mixins

export const h1 = () =>  `
  font-family: ${family.header};
  font-weight: ${weight.normal};
  line-height: ${lineHeight.sm};
  clear: both;
  font-size: ${heading.h1};
`

export const h2 = () =>  `
  font-family: ${family.header};
  font-weight: ${weight.bold};
  line-height: ${lineHeight.sm};
  clear: both;
  font-size: ${heading.h2};
`

export const h3 = () =>  `
  font-family: ${family.header};
  font-weight: ${weight.semiBold};
  line-height: ${lineHeight.sm};
  clear: both;
  font-size: ${heading.h3};
`

// Monospace font mixins

const m = () =>  `
  font-family: ${family.monospace};
  line-height: ${lineHeight.lg};
  color: ${black};
`

export const code = `
  ${m};
  font-size: ${paragraph.p2};
`