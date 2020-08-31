import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;
const LeftNavbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <React.Fragment>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">
          <img
            style={{
              height: '40px',
              width: '70%',
              paddingLeft: '40px',
            }}
            src="/img/logo.png"
          />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {/* <SubMenu key="1" icon={<PieChartOutlined />} title="Home Page">
            <Menu.Item>
              <NavLink to="/admin/newpage">All News</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/admin/addnews">Add News</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="2" icon={<PieChartOutlined />} title="Popular News">
            <Menu.Item>
              <NavLink to="/admin/allpopularnews">All Popular News</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/admin/addpopularnews">Add Popular News</NavLink>
            </Menu.Item>
          </SubMenu> */}
          <SubMenu key="3" icon={<PieChartOutlined />} title="News Page">
            <Menu.Item>
              <NavLink to="/admin/allnews">All News</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/admin/addnewspage">Add News</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="4" icon={<PieChartOutlined />} title="Jobs Page">
            <Menu.Item>
              <NavLink to="/admin/alljobs">All Jobs</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/admin/addjobs">Add Jobs</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/admin/jobcategories">Job Categories</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </React.Fragment>
  );
};

export default LeftNavbar;
