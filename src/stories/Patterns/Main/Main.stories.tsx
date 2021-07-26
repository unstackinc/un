// Main.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Main } from './Main';

export default {
  title: 'Patterns/Main',
  component: Main,
} as Meta;

const Template = (args) => {
  return <Main {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  end: <></>,
};

Example.parameters = {
  layout: 'fullscreen',
};
