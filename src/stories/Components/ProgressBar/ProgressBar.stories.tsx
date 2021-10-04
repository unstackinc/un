import { Meta, Story } from '@storybook/react';

import { ProgressBar, ProgressBarProps } from './ProgressBar';

export default {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  argTypes: {
    full: {
      control: { type: 'boolean' },
    },
    progress: {
      control: { type: 'number' },
    },
  },
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Example = Template.bind({});
Example.args = {
  full: false,
  progress: 80,
};
