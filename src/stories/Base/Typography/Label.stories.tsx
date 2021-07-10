// Paragraph.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Label } from './Label';

export default {
  title: 'Base/Typography/Label',
  component: Label,
} as Meta;

const Template = (args) => <Label {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'Label',
};
