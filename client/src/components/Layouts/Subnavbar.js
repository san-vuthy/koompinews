import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Input, Popover, Drawer, Button, Radio, Space, Affix } from 'antd';
import { AudioOutlined, DownOutlined, MenuOutlined } from '@ant-design/icons';
import { NavLink, NavNavLNavLink } from 'react-router-dom';

const Navbar = () => {
  const [state, setState] = useState({
    visible: false,
    // placement: 'left',
  });

  const showDrawer = () => {
    setState({
      visible: true,
    });
  };
  const onClose = () => {
    setState({
      visible: false,
    });
  };

  const { Search } = Input;

  const content = (
    <div style={{ cursor: 'pointer' }}>
      <p>
        <NavLink to="/news">Sport</NavLink>
      </p>
      <p>
        <NavLink to="/news">Social</NavLink>
      </p>
      <p>
        <NavLink to="/news">Science</NavLink>
      </p>
    </div>
  );
  return (
    <React.Fragment>
      <div className="subNavbar">
        <div className="header">
          {/* <div className="logo" /> */}
          <Affix>
            <Menu
              className="submenu-style-color"
              style={{ paddingLeft: '20%', paddingRight: '20%' }}
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['2']}
            >
              <Menu.Item style={{ float: 'left' }} key="0">
                <Popover content={content}>
                  NEWS
                  <DownOutlined
                    style={{ marginLeft: '5px', fontSize: '10px' }}
                  />
                </Popover>
              </Menu.Item>
              <Menu.Item active={{ color: 'red' }} style={{ float: 'left' }}>
                <NavLink activeClassName="main-nav-active " to="/jobs">
                  JOBS
                </NavLink>
              </Menu.Item>
              <Menu.Item style={{ float: 'left' }}>
                <NavLink activeClassName="main-nav-active " to="/companies">
                  COMPANIES
                </NavLink>
              </Menu.Item>
              <Menu.Item style={{ float: 'left' }}>
                <NavLink activeClassName="main-nav-active " to="/event">
                  EVENT
                </NavLink>
              </Menu.Item>
              <Menu.Item
                activeClassName="main-nav-active "
                style={{ float: 'left' }}
              >
                <NavLink to="/event">ABOUT</NavLink>
              </Menu.Item>
              <Menu.Item
                style={{
                  float: 'right',
                  hover: 'none',
                  border: 'none',
                  background: 'none',
                  cursor: 'none',
                }}
              >
                <Search
                  placeholder="input search text"
                  onSearch={(value) => console.log(value)}
                  style={{
                    width: 200,
                    //   float: 'right',
                    borderRadius: '22px',
                    margin: 'auto',
                  }}
                />
              </Menu.Item>
            </Menu>
          </Affix>
        </div>
      </div>

      {/* Mobile tablet navbar */}
      <Affix>
        <div className=" mobile-navbar">
          <Menu
            // className="mobile-navbar-menu"
            // style={{ paddingLeft: '20%', paddingRight: '20%' }}
            theme="light"
            mode="horizontal"
          >
            <Menu.Item onClick={showDrawer}>
              <MenuOutlined />
            </Menu.Item>
          </Menu>
        </div>
        <Drawer
          placement="left"
          closable={false}
          onClose={onClose}
          visible={state.visible}
          key={state.placement}
        >
          <div className="mobile-navbar-color">
            <p>Login</p>
            <p>Sign Up</p>
            <p>
              <Popover placement="bottom" content={content}>
                NEWS
                <DownOutlined style={{ marginLeft: '5px', fontSize: '10px' }} />
              </Popover>
            </p>
            <p>
              <NavLink activeClassName="main-nav-active " to="/jobs">
                JOBS
              </NavLink>
            </p>
            <p>
              <NavLink activeClassName="main-nav-active " to="/companies">
                COMPANIES
              </NavLink>
            </p>
            <p>
              <NavLink activeClassName="main-nav-active " to="/event">
                EVENT
              </NavLink>
            </p>
            <p>ABOUT</p>
          </div>
        </Drawer>
      </Affix>
    </React.Fragment>
  );
};

export default Navbar;
