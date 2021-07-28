// Tabs.stories.tsx

import * as React from 'react';
import { Meta } from '@storybook/react';

import { Card } from '../../';
import { Tabs, TabList, TabPanels, TabPanel } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta;

const Template = (args) => (
  <Tabs {...args}>
    <TabList tabs={['Page 1', 'Page 2', 'Page 3']} />
    <TabPanels>
      <TabPanel>
        <Card title="Pages" subtitle="Use your website to inform and excite.">
          Test
        </Card>
        <Card>Test</Card>
      </TabPanel>
      <TabPanel>
        <Card>Test</Card>
        <Card title="Pages" subtitle="Use your website to inform and excite.">
          Test
        </Card>
      </TabPanel>
      <TabPanel>
        <Card>Page 3</Card>
        <Card title="Page 3" subtitle="Use your website to inform and excite.">
          Test
        </Card>
      </TabPanel>
    </TabPanels>
  </Tabs>
);

export const Default = Template.bind({});
