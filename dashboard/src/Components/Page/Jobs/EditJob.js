import React, { useState } from 'react';
import {
  Col,
  Row,
  Layout,
  Form,
  Button,
  Input,
  Upload,
  Select,
  message,
} from 'antd';
import LeftNavbar from '../../Layout/LeftNavbar';
import Navbar from '../../Layout/Navbar';
import TextEditor from '../../Help/TextEditor';
import { useQuery, useMutation } from '@apollo/client';
import { GET_JOB_CATEGORY, GET_A_JOB, GET_JOBS } from '../../../graphql/query';
import { UPDATE_JOB } from '../../../graphql/mutation';
import { useParams } from 'react-router-dom';

const { Content } = Layout;
const { Option } = Select;

const AddJob = (props) => {
  const { id } = useParams();
  const { loading, error, data, refetch } = useQuery(GET_JOBS);
  const { loading: JobLoading, data: JobsData } = useQuery(GET_A_JOB, {
    variables: { id },
  });

  const [updateJob] = useMutation(UPDATE_JOB);

  const [image, setImage] = useState(null);
  const [desc, setDesc] = useState('');
  const [reqSkill, setReqSkill] = useState('');
  const [loading1, setLoading] = useState(false);

  const uploadImage = {
    name: 'file',
    multiple: false,
    action: 'http://localhost:8080/upload',
    // listType: 'picture',
    defaultFileList: image,
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        setImage(info.file.name.replace(/\s+/g, '-').toLowerCase());
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const handleDescChange = (value) => {
    console.log(value);
    setDesc(value);
  };
  const handleReqSkillChange = (value) => {
    console.log(value);
    setReqSkill(value);
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (value) => {
    updateJob({
      variables: {
        id: id,
        ...value,
        des: desc === '' ? JobsData.aJob.des : desc,
        requireSkill: reqSkill === '' ? JobsData.aJob.requireSkill : reqSkill,
        image: image === null ? JobsData.aJob.image : image,
        userId: '5f3e65128c70fe65b27d5c7f',
      },
    }).then(async (res) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      await message.success(res.data.updateJob.message);
      await refetch();
      await props.history.push('/admin/alljobs');
    });
    console.log('success', value);
  };
  const onChange = (e) => {
    console.log(e);
  };

  ///====dispaly CategoryId======
  function DisplayCategoryId() {
    const { loading, error, data } = useQuery(GET_JOB_CATEGORY);

    if (loading) return 'Loading...';
    console.log(data);
    if (error) return `Error! ${error.message}`;
    console.log('job', JobsData.aJob.position);
    return (
      <Form.Item
        initialValue={JobsData.aJob.jobCateName.id}
        rules={[{ required: true, message: 'input Job Categories' }]}
        label="Job Categories"
        name="jobCategId"
      >
        <Select
          defaultValue={JobsData.aJob.jobCateName.id}
          size="large"
          className="event-select"
          showSearch
          style={{ width: 200 }}
          placeholder="Select a Job Category"
          optionFilterProp="children"
          onChange={onChange}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {data.allJobCategories.map((res) => {
            return (
              <Option value={res.id} key={res.id}>
                {res.name}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
    );
  }
  if (JobLoading) {
    return 'Loading....';
  }
  return (
    <React.Fragment>
      <Layout style={{ minHeight: '100vh' }}>
        <LeftNavbar />
        <Layout className="site-layout">
          <Navbar />
          <Content style={{ margin: '16px 16px', backgroundColor: '#fff' }}>
            <div
              className="site-layout-background"
              style={{ minHeight: 360, padding: 70 }}
            >
              <h1 className="title-top">Update Jobs</h1>
              <Form
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={[32, 0]}>
                  <Col span={16}>
                    <Form.Item
                      label="Position"
                      name="position"
                      initialValue={JobsData.aJob.position}
                      rules={[
                        {
                          required: true,
                          message: 'Please input Position!',
                        },
                      ]}
                    >
                      <Input
                        defaultValue={JobsData.aJob.position}
                        size="large"
                      />
                    </Form.Item>
                    <Form.Item
                      initialValue={JobsData.aJob.company}
                      label="Company"
                      name="company"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Company!',
                        },
                      ]}
                    >
                      <Input
                        defaultValue={JobsData.aJob.company}
                        size="large"
                      />
                    </Form.Item>

                    <Row gutter={16}>
                      <Col span={12}>
                        <Form.Item
                          style={{ marginBottom: '-50px' }}
                          label="Job description & requirements"
                          name="des"
                          initialValue={JobsData.aJob.des}
                          // rules={[
                          //   {
                          //     required: true,
                          //     message: 'job & requirement is required',
                          //   },
                          // ]}
                        >
                          <TextEditor
                            handleDescChange={handleDescChange}
                            defaultValue={JobsData.aJob.des}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          style={{ marginBottom: '-50px' }}
                          label="Required Skills"
                          name="requireSkill"
                          initialValue={JobsData.aJob.requireSkill}
                          // rules={[
                          //   {
                          //     required: true,
                          //     message: 'Skill is required',
                          //   },
                          // ]}
                        >
                          <TextEditor
                            handleDescChange={handleReqSkillChange}
                            defaultValue={JobsData.aJob.requireSkill}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Button
                      style={{ marginTop: '0px', width: '150px' }}
                      size="large"
                      // className="button button-submit"
                      type="primary"
                      htmlType="submit"
                    >
                      SUBMIT
                    </Button>
                  </Col>
                  <Col span={8}>
                    {/* JOB Categories */}
                    <DisplayCategoryId />
                    <Form.Item
                      label="Location"
                      name="location"
                      initialValue={JobsData.aJob.location}
                      rules={[
                        {
                          required: true,
                          message: 'Please input Location!',
                        },
                      ]}
                    >
                      <Input
                        defaultValue={JobsData.aJob.location}
                        size="large"
                      />
                    </Form.Item>
                    <Form.Item
                      initialValue={JobsData.aJob.worktime}
                      rules={[
                        { required: true, message: 'Province is required' },
                      ]}
                      label="Time for work"
                      name="worktime"
                    >
                      <Input
                        defaultValue={JobsData.aJob.worktime}
                        size="large"
                      />
                    </Form.Item>
                    <Form.Item
                      initialValue={JobsData.aJob.salary}
                      label="Salary"
                      name="salary"
                      rules={[
                        {
                          required: true,
                          message: 'Please input Salary!',
                        },
                      ]}
                    >
                      <Input defaultValue={JobsData.aJob.salary} size="large" />
                    </Form.Item>

                    {/* <Form.Item label="Upload Image" name="image">
                      <Upload {...props}>
                        <Button>
                          <UploadOutlined /> Upload
                        </Button>
                      </Upload>
                    </Form.Item> */}
                    <Form.Item initialValue={JobsData.aJob.image} label="Image">
                      <Upload.Dragger {...uploadImage}>
                        {image === null ? (
                          <img
                            style={{ width: '270px' }}
                            sr
                            src={`${
                              'http://localhost:8080/' + JobsData.aJob.image
                            }`}
                            alt="avatar"
                          />
                        ) : (
                          <img
                            style={{ width: '270px' }}
                            src={`${'http://localhost:8080/' + image}`}
                            // src="http://localhost:8080/Technology-Images-Wallpapers-027.jpg"
                            alt="avatar"
                          />
                        )}
                      </Upload.Dragger>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default AddJob;
