// Tabs.tsx

import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import {
  Tabs as ReachTabs,
  TabList as ReachTabList,
  Tab,
  TabPanels as ReachTabPanels,
  TabPanel as ReachTabPanel,
} from '@reach/tabs';

import { TabListStyles, TabStyles, TabPanelsStyles } from './Tabs.styles';

/*
 * Tabs
 */

const Types = {
  children: PropTypes.node.isRequired,
};

type Props = InferProps<typeof Types>;

export const Tabs = ({ children, ...props }: Props) => {
  return <ReachTabs {...props}>{children}</ReachTabs>;
};

Tabs.propTypes = Types;

/*
 * TabList
 */

const TabListTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

type TabListProps = InferProps<typeof TabListTypes>;

export const TabList = ({ tabs, ...props }: TabListProps) => {
  return (
    <ReachTabList css={TabListStyles} {...props}>
      {tabs.map((tab, index) => (
        <Tab css={TabStyles} key={`${tab.toString()}-${index}`}>
          {tab}
        </Tab>
      ))}
    </ReachTabList>
  );
};

TabList.propTypes = TabListTypes;

/*
 * TabPanels
 */

const TabPanelsTypes = {
  children: PropTypes.node.isRequired,
};

type TabPanelsProps = InferProps<typeof TabPanelsTypes>;

export const TabPanels = ({ children, ...props }: TabPanelsProps) => {
  return (
    <ReachTabPanels css={TabPanelsStyles} {...props}>
      {children}
    </ReachTabPanels>
  );
};

TabPanels.propTypes = TabPanelsTypes;

/*
 * TabPanel
 */

const TabPanelTypes = {
  children: PropTypes.node.isRequired,
};

type TabPanelProps = InferProps<typeof TabPanelTypes>;

export const TabPanel = ({ children, ...props }: TabPanelProps) => {
  return <ReachTabPanel {...props}>{children}</ReachTabPanel>;
};

TabPanel.propTypes = TabPanelTypes;

export default Tabs;
