import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { TeamOutlined, UserOutlined } from '@ant-design/icons';
import { NavLink, Link } from 'react-router-dom';
import feet from '../../asset/img/feed.svg';
import news from '../../asset/img/news.svg';
import company from '../../asset/img/home.svg';
import event from '../../asset/img/calendar-event.svg';
import about from '../../asset/img/cards.svg';
import Knowledge from '../../asset/img/book-opened.svg';

const pathname = window.location.pathname;
const { Sider } = Layout;
const { SubMenu } = Menu;
const LeftNavbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <React.Fragment>
      <Sider collapsed={collapsed} onCollapse={onCollapse}>
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
        <Menu
          theme="dark"
          defaultSelectedKeys={[pathname]}
          defaultOpenKeys={[pathname]}
          mode="inline"
        >
          <SubMenu
            key="/admin/allnews"
            icon={
              <img
                style={{ color: '#fff', width: '30px', paddingRight: '7px' }}
                src={news}
              />
            }
            title="News Page"
          >
            <Menu.Item>
              <Link to="/admin/allnews">All News</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/admin/addnewspage">Add News</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="/admin/alljobs"
            icon={
              <img
                style={{ color: '#fff', width: '25px', paddingRight: '7px' }}
                src={feet}
              />
            }
            title="Jobs Page"
          >
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
          <SubMenu
            key="5"
            icon={
              <img
                style={{ color: '#fff', width: '28px', paddingRight: '7px' }}
                src={company}
              />
            }
            title="Company Page"
          >
            <Menu.Item>
              <NavLink to="/admin/allcompanies">All Company</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/admin/addcompany">Add Company</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="6"
            icon={
              <img
                style={{ color: '#fff', width: '30px', paddingRight: '7px' }}
                src={event}
              />
            }
            title="Event Page"
          >
            <Menu.Item>
              <NavLink to="/admin/allevent">All Event</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/admin/addevent">Add Event</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="7"
            icon={
              <img
                style={{ color: '#fff', width: '30px', paddingRight: '7px' }}
                src={about}
              />
            }
            title="About Page"
          >
            <Menu.Item>
              <NavLink to="/admin/allabout">All About</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/admin/addabout">Add About</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="8"
            icon={
              <img
                style={{ color: '#fff', width: '30px', paddingRight: '7px' }}
                src={Knowledge}
              />
            }
            title="Knowledge Page"
          >
            <Menu.Item>
              <NavLink to="/admin/allknowledge">All Knowledge</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/admin/addknowledge">Add Knowledge</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="9"
            icon={
              <img
                style={{ color: '#fff', width: '30px', paddingRight: '7px' }}
                src={Knowledge}
              />
            }
            title="CV "
          >
            <Menu.Item>
              <NavLink to="/admin/allcv">All CV</NavLink>
            </Menu.Item>
            {/* <Menu.Item>
              <NavLink to="/admin/addknowledge">Add Knowledge</NavLink>
            </Menu.Item> */}
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
