// ProgressBar.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { ProgressBar } from './ProgressBar';

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

const Template = (args) => <ProgressBar {...args} />;

export const Example = Template.bind({});
Example.args = {
  full: false,
  progress: 80,
};
