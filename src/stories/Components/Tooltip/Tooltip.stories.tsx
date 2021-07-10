// Tooltip.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { P2 } from '../../';
import { Tooltip } from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

const Template = () => (
  <Tooltip content="Tooltip">
    <P2>Hover me</P2>
  </Tooltip>
);

export const Default = Template.bind({});
