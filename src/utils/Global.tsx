// Global.ts

import { Global, css } from '@emotion/react';

<Global
  styles={css`
    html {
      font-size: 1rem;
      box-sizing: border-box;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    body {
      padding: 0;
      margin: 0;
    }
  `}
/>;
