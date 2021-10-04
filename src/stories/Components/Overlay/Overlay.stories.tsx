import { Meta, Story } from '@storybook/react';

import { Overlay } from './Overlay';

export default {
  title: 'Components/Overlay',
  component: Overlay,
  argTypes: {
    showOverlay: {
      control: { type: 'boolean' },
    },
    background: {
      control: { type: 'color' },
    },
  },
} as Meta;

const Template: Story<OverlayProps> = (args) => <Overlay {...args} />;

export const Default = Template.bind({});

Default.args = {
  showOverlay: true,
  children: '',
};

Default.parameters = {
  layout: 'fullscreen',
};
