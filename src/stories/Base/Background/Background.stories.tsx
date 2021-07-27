// Background.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Background } from './Background';

export default {
  title: 'Base/Background',
  component: Background,
} as Meta;

const Template = (args) => {
  return <Background {...args}></Background>;
};

export const Example = Template.bind({});

Example.parameters = {
  layout: 'fullscreen',
};
