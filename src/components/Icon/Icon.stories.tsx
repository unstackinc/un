import { Meta, Story } from '@storybook/react';

import { Icon, IconProps } from './Icon';

export default {
  title: 'Base/Icon',
  component: Icon,
  argTypes: {
    variant: {
      options: [
        'bag',
        'chart',
        'console',
        'home',
        'page',
        'people',
        'puzzle',
        'settings',
        'star',
      ],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => {
  return <Icon {...args}></Icon>;
};

export const Example = Template.bind({});
Example.args = { variant: 'chart' };
