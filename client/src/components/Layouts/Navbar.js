import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="header">
        {/* <div className="logo" /> */}
        <div>
          <Menu
            style={{ paddingLeft: '20%', paddingRight: '20%' }}
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
          >
            <Menu.Item style={{ float: 'left' }}>
              <Link to="/">
                <img style={{ height: '40px' }} src="/img/Koompi-Black.png" />
                {/* logo */}
              </Link>
            </Menu.Item>
            <Menu.Item style={{ float: 'right' }}>Login</Menu.Item>
            <Menu.Item style={{ float: 'right' }}>Sign Up</Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
