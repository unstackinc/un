// .storybook/preview.js

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      method: '',
      order: ['Components', 'Patterns', 'Templates'], 
      locales: '', 
    },
  },
}