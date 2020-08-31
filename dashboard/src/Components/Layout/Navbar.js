import React from 'react';
import { Layout, Menu, Breadcrumb, Avatar } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const Navbar = () => {
  return (
    <React.Fragment>
      <Header className="header" style={{ padding: 0 }}>
        <div className="logo" style={{ paddingRight: '12px' }} />
        <img
          style={{
            width: '50px',
            height: '50px',
            float: 'right',
            marginTop: '8px',
            paddingRight: '12px',
          }}
          src="/img/undraw_profile_pic_ic5t.svg"
        />
        {/* <Avatar
          size={40}
          style={{
            float: 'right',
            backgroundColor: '#fde3cf',
            marginTop: '12px',
          }}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        /> */}
      </Header>
    </React.Fragment>
  );
};

export default Navbar;
