// Paragraph.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { P0, P1, P2, P3 } from './Paragraph';

export default {
  title: 'Base/Typography/Paragraph',
  component: P0,
  argTypes: {
    weight: {
      options: ['normal', 'medium', 'bold'],
      control: { type: 'radio' },
    },
    color: {
      control: { type: 'color' },
    },
    link: {
      control: { type: 'boolean' },
    },

    display: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template0 = (args) => <P0 {...args} />;

export const Paragraph0 = Template0.bind({});
Paragraph0.args = {
  display: true,
  link: false,
  children: 'Paragraph 0',
};

const Template1 = (args) => <P1 {...args} />;

export const Paragraph1 = Template1.bind({});
Paragraph1.args = {
  display: true,
  link: false,
  children: 'Paragraph 1',
};

const Template2 = (args) => <P2 {...args} />;

export const Paragraph2 = Template2.bind({});
Paragraph2.args = {
  display: true,
  link: false,
  children: 'Paragraph 2',
};

const Template3 = (args) => <P3 {...args} />;

export const Paragraph3 = Template3.bind({});
Paragraph3.args = {
  display: true,
  link: false,
  children: 'Paragraph 3',
};
