// .storybook/preview.js

import { Global, css } from '@emotion/react';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../src/theme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          :root {
            --reach-dialog: 1;
          }
          html,
          body,
          #root {
            height: 100%;
          }
          [data-reach-dialog-overlay] {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            overflow: auto;
          }
        `}
      />
      {Story()}
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Base', 'Components', 'Patterns', 'Templates'],
    },
  },
};
