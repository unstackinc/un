import { Meta, Story } from '@storybook/react';

import { P2 } from '../Typography';
import { Tooltip, TooltipProps } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = () => (
  <Tooltip content="Tooltip">
    <P2>Hover me</P2>
  </Tooltip>
);

export const Default = Template.bind({});
