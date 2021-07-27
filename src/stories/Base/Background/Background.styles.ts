// Background.styles.ts

import { css } from '@emotion/react';

export const Styles = css`
  @keyframes animate {
    100% {
      background-position: 1.5rem 1.5rem;
    }
  }

  background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Crect width='24' height='24' fill='%23A9B3C9'/%3E%3Crect x='-1' y='-1' width='2' height='2' rx='1' fill='white'/%3E%3Crect x='23' y='-1' width='2' height='2' rx='1' fill='white'/%3E%3Crect x='-1' y='23' width='2' height='2' rx='1' fill='white'/%3E%3Crect x='23' y='23' width='2' height='2' rx='1' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A")
    repeat 0 0;
  animation: animate 1s infinite linear;
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;
