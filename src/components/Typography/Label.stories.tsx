import { Meta, Story } from '@storybook/react';

import { Label, LabelProps } from './Label';

export default {
  title: 'Base/Typography/Label',
  component: Label,
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Example = Template.bind({});
Example.args = {
  children: 'Label',
};
