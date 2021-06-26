// .storybook/preview.js

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: ['Base', 'Components', 'Patterns', 'Templates'],
    },
  },
};
