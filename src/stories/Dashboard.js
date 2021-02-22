import React from 'react';

import styled from "styled-components";

import { Header } from './Header';
import { Nav, Tab, Link } from './Nav';
import { Page } from './Page';
import { Search } from './Search';

import { IoAnalytics, IoBrowsersOutline, IoPeople, IoEyedrop, IoCog } from "react-icons/io5";

const UnDashboard = styled.div`
  display: flex;
`;

export const Dashboard = ({ ...props }) => (
  <UnDashboard>
      <Header align="left"><Search label={`Search Unstack`} size="large"></Search></Header>
      <Nav>
        <Tab label="Analytics" icon={<IoAnalytics />}>
          <Link label="Activity"></Link>
          <Link label="Test results"></Link>
          <Link label="Conversions"></Link>
          <Link label="UTMs"></Link>
          <Link label="Google Search Console"></Link>
        </Tab>
        <Tab label="Content" icon={<IoBrowsersOutline />} active>
          <Link label="Website"></Link>
          <Link label="Landing pages"></Link>
          <Link label="Blog"></Link>
          <Link label="Media"></Link>
        </Tab>
        <Tab label="Customers" icon={<IoPeople />}>
          <Link label="Contacts"></Link>
        </Tab>
        <Tab label="Design" icon={<IoEyedrop />}>
          <Link label="Header &amp; Footer"></Link>
          <Link label="Styles"></Link>
        </Tab>
        <Tab label="Setup" icon={<IoCog />}>
          <Link label="Integrations"></Link>
          <Link label="Payments"></Link>
          <Link label="Settings"></Link>
        </Tab>
      </Nav>
      <Page>
        {props.page}
      </Page>
  </UnDashboard>
);

export default Dashboard;
