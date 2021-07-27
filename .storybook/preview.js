// .storybook/preview.js

import { ThemeProvider } from 'theme-ui';
import theme from '../src/theme';

export const decorators = [
  (Story) => <ThemeProvider theme={theme}>{Story()}</ThemeProvider>,
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
