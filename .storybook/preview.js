// .storybook/preview.js

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Base', 'Components', 'Patterns', 'Templates'],
    },
  },
};
