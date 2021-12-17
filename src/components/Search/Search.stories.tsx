import { Meta, Story } from '@storybook/react';

import { Search, SearchProps } from './Search';

export default {
  title: 'Components/Search',
  component: Search,
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

const Template: Story<SearchProps> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  full: false,
  warning: false,
  disabled: false,
};
