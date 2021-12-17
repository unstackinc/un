import { Meta, Story } from '@storybook/react';

import { Textarea, TextareaProps } from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    full: {
      control: { type: 'boolean' },
    },
    warning: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  warningText: '',
  helpText: '',
  full: false,
  warning: false,
  disabled: false,
};
