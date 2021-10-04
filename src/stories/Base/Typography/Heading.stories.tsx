import { Meta, Story } from '@storybook/react';

import { H3, H2, H1, H0, HeadingProps } from './Heading';

export default {
  title: 'Base/Typography/Heading',
  component: H0,
  argTypes: {
    color: {
      control: { type: 'color' },
    },
    display: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template0: Story<HeadingProps> = (args) => <H0 {...args} />;

export const Heading0 = Template0.bind({});
Heading0.args = {
  display: true,
  children: 'Heading 0',
};

const Template1: Story<HeadingProps> = (args) => <H1 {...args} />;

export const Heading1 = Template1.bind({});
Heading1.args = {
  display: true,
  children: 'Heading 1',
};

const Template2: Story<HeadingProps> = (args) => <H2 {...args} />;

export const Heading2 = Template2.bind({});
Heading2.args = {
  display: true,
  children: 'Heading 2',
};

const Template3: Story<HeadingProps> = (args) => <H3 {...args} />;

export const Heading3 = Template3.bind({});
Heading3.args = {
  display: true,
  children: 'Heading 3',
};
