// Icon.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Icon } from './Icon';

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

const Template = (args) => {
  return <Icon {...args}></Icon>;
};

export const Example = Template.bind({});
Example.args = { variant: 'chart' };
