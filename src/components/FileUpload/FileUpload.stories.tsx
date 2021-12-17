import { Meta, Story } from '@storybook/react';

import { FileUpload, FileUploadProps } from './FileUpload';

export default {
  title: 'Components/FileUpload',
  component: FileUpload,
  argTypes: {
    full: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story<FileUploadProps> = (args) => <FileUpload {...args} />;

export const Example = Template.bind({});
Example.args = {
  full: false,
};
