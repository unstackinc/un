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
        {props.nav}
      </Nav>
      <Page>
        {props.page}
      </Page>
  </UnDashboard>
);


export const DashboardExample = ({ ...props }) => (
  <Dashboard
    nav={
      <div>
        <Tab label="Analytics" icon={<IoAnalytics />}>
          <Link label="Activity" link="example"></Link>
          <Link label="Test results" link="example"></Link>
          <Link label="Conversions" link="example"></Link>
          <Link label="UTMs" link="example"></Link>
          <Link label="Google Search Console" link="example"></Link>
        </Tab>
        <Tab label="Content" icon={<IoBrowsersOutline />} active>
          <Link label="Website" link="example"></Link>
          <Link label="Landing pages" link="example"></Link>
          <Link label="Blog" link="example"></Link>
          <Link label="Media" link="example"></Link>
        </Tab>
        <Tab label="Customers" icon={<IoPeople />}>
          <Link label="Contacts" link="example"></Link>
        </Tab>
        <Tab label="Design" icon={<IoEyedrop />}>
          <Link label="Header &amp; Footer" link="example"></Link>
          <Link label="Styles" link="example"></Link>
        </Tab>
        <Tab label="Setup" icon={<IoCog />}>
          <Link label="Integrations" link="example"></Link>
          <Link label="Payments" link="example"></Link>
          <Link label="Settings" link="example"></Link>
        </Tab>
      </div>
    }
    page={props.page}>
  </Dashboard>
);

export default Dashboard;
