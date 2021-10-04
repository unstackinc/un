import { Meta, Story } from '@storybook/react';

import { Textbox, TextboxProps } from './Textbox';

export default {
  title: 'Components/Textbox',
  component: Textbox,
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

const Template: Story<TextboxProps> = (args) => <Textbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  warningText: '',
  helpText: '',
  full: false,
  warning: false,
  disabled: false,
};
