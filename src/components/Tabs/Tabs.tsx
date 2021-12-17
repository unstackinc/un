import { ReactNode } from 'react';
import {
  Tabs as ReachTabs,
  TabList as ReachTabList,
  Tab,
  TabPanels as ReachTabPanels,
  TabPanel as ReachTabPanel,
} from '@reach/tabs';

import { TabListStyles, TabStyles, TabPanelsStyles } from './Tabs.styles';

export type TabsProps = {
  children: ReactNode;
};

export const Tabs = ({ children, ...props }: TabsProps) => {
  return <ReachTabs {...props}>{children}</ReachTabs>;
};

type TabListProps = {
  tabs: string[];
};

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

type TabPanelsProps = {
  children: ReactNode;
};

export const TabPanels = ({ children, ...props }: TabPanelsProps) => {
  return (
    <ReachTabPanels css={TabPanelsStyles} {...props}>
      {children}
    </ReachTabPanels>
  );
};

type TabPanelProps = {
  children: ReactNode;
};

export const TabPanel = ({ children, ...props }: TabPanelProps) => {
  return <ReachTabPanel {...props}>{children}</ReachTabPanel>;
};
