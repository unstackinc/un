// fluid.ts

export const fluid = (minimumSize: number, maximumSize: number) => {
  const minWidth = 30;
  const maxWidth = 90;
  const minSize = minimumSize;
  const maxSize = maximumSize;

  const slope = (maxSize - minSize) / (maxWidth - minWidth);
  const base = minSize - slope * minWidth;
  const adjSize = `calc( ${base}rem + ( 100vw * ${slope} ) )`;

  return `
    font-size: ${minSize}rem;
    @media screen and ( min-width: ${minWidth}rem ) {
      font-size: ${adjSize};
    }
    @media screen and ( min-width: ${maxWidth}rem ) {
      font-size: ${maxSize}rem;
    }
  `;
};

export default fluid;
