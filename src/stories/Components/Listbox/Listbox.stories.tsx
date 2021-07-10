// Listbox.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Listbox, ListboxOption } from './Listbox';

export default {
  title: 'Components/Listbox',
  component: Listbox,
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

const Template = (args) => (
  <Listbox
    options={[
      <ListboxOption value="option1">Option 1</ListboxOption>,
      <ListboxOption value="option2">Option 2</ListboxOption>,
      <ListboxOption value="option3">Option 3</ListboxOption>,
      <ListboxOption value="option4">Option 4</ListboxOption>,
      <ListboxOption value="option5">Option 5</ListboxOption>,
      <ListboxOption value="option6">Option 6</ListboxOption>,
      <ListboxOption value="option7">Option 7</ListboxOption>,
      <ListboxOption value="option8">Option 8</ListboxOption>,
    ]}
    {...args}
  />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
  warningText: '',
  helpText: '',
  full: false,
  warning: false,
  disabled: false,
};
