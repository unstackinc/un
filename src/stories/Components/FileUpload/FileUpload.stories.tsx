// FileUpload.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { FileUpload } from './FileUpload';

export default {
  title: 'Components/FileUpload',
  component: FileUpload,
  argTypes: {
    full: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template = (args) => <FileUpload {...args} />;

export const Example = Template.bind({});
Example.args = {
  full: false,
};
