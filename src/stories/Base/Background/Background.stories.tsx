import { Meta, Story } from '@storybook/react';

import { Background, BackgroundProps } from './Background';

export default {
  title: 'Base/Background',
  component: Background,
} as Meta;

const Template: Story<BackgroundProps> = (args) => {
  return <Background {...args}></Background>;
};

export const Example = Template.bind({});

Example.parameters = {
  layout: 'fullscreen',
};
