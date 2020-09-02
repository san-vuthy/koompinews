import React from 'react';
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

import { ADD_JOB_CATEGORY } from '../../../../graphql/mutation';
import { GET_JOB_CATEGORY } from '../../../../graphql/query';
import { useMutation, useQuery } from '@apollo/client';
import EditJobcategory from './EditJobcategory';
const AddJobCategory = ({ isEdit, JobCateId, changeEdit }) => {
  const { loading, error, data, refetch } = useQuery(GET_JOB_CATEGORY);
  const [form] = Form.useForm();
  const [addJobCategory] = useMutation(ADD_JOB_CATEGORY);
  const onFinish = (value) => {
    addJobCategory({
      variables: {
        ...value,
        userId: '5f3e65128c70fe65b27d5c7f',
      },
    }).then(async (res) => {
      await message.success(res.data.addJobCategory.message);
      await refetch();
      //   form.resetFields();
    });
    console.log('success', value);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <React.Fragment>
      {!isEdit && (
        <React.Fragment>
          <h1 className="title-top">Add Job JobCategories</h1>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Name Categories"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input Categories name!',
                },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Button
              size="large"
              className="button-submit"
              type="primary"
              htmlType="submit"
              //   style={{ marginTop: '70px' }}
            >
              Submit
            </Button>
          </Form>
        </React.Fragment>
      )}
      {isEdit && (
        <EditJobcategory
        // isEdit={isEdit}
        // changeEdit={changeEdit}
        // id={JobCateId}
        />
      )}
    </React.Fragment>
  );
};

export default AddJobCategory;
