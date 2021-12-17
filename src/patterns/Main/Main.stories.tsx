import { Meta, Story } from '@storybook/react';

import { Main, MainProps } from './Main';

export default {
  title: 'Patterns/Main',
  component: Main,
} as Meta;

const Template: Story<MainProps> = (args) => {
  return <Main {...args} />;
};

export const Example = Template.bind({});

Example.parameters = {
  layout: 'fullscreen',
};
