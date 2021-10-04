import { css } from '@emotion/react';

export const Styles = css`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  overflow: hidden;
  > * {
    width: 100%;
    object-fit: cover;
  }
`;

export const MediumStyles = css`
  width: 2.25rem;
  height: 2.25rem;
`;

export const LargeStyles = css`
  width: 3.75rem;
  height: 3.75rem;
`;

export const ExtraLargeStyles = css`
  width: 6rem;
  height: 6rem;
`;
