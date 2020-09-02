import React from 'react';
import LeftNavbar from '../../../../Components/Layout/LeftNavbar';
import Navbar from '../../../../Components/Layout/Navbar';
import {
  Col,
  Row,
  Layout,
  Form,
  Button,
  Input,
  Upload,
  Select,
  Space,
  Tag,
  Table,
  message,
  Popconfirm,
  Divider,
} from 'antd';
import Category from './Category';

const Show = () => {
  const { Content } = Layout;
  const { TextArea } = Input;
  const { Option } = Select;
  return (
    <React.Fragment>
      {/* <Layout style={{ minHeight: '100vh' }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <Navbar />
          <Content
            style={{
              margin: '16px 16px',
              backgroundColor: '#fff',
              width: '60%',
              marginLeft: 'auto',
              marginRight: 'auto',
              height: '300px',
              flex: 'none',
            }}
          >
            <div
              className="site-layout-background"
              style={{ minHeight: 360, padding: 70 }}
            > */}
      <Category />
      {/* </div>
          </Content>
        </Layout>
      </Layout> */}
    </React.Fragment>
  );
};

export default Show;
