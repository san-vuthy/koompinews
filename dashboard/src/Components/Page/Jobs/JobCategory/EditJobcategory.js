// import React, { useState } from 'react';
// import { Input, Row, Col, Form, Button, message } from 'antd';
// import { UPDATE_JOB_CATEGORY } from '../../../../graphql/mutation';
// import {
//   GET_A_JOB_CATEGORY,
//   GET_JOB_CATEGORY,
// } from '../../../../graphql/query';
// import { useMutation, useQuery } from '@apollo/client';
// const EditJobcategory = (JobCateId, changeEdit) => {
//   // const [form] = Form.useForm();
//   const [loading1, setLoading] = useState(false);
//   const [updateJobCategory] = useMutation(UPDATE_JOB_CATEGORY);
//   const { loading, error, data } = useQuery(GET_A_JOB_CATEGORY, {
//     variables: { id: JobCateId },
//   });

//   const { refetch } = useQuery(GET_JOB_CATEGORY);
//   const onFinish = (values) => {
//     console.log(values);

//     updateJobCategory({
//       variables: {
//         id: JobCateId,
//         ...values,
//         userId: '5f3e65128c70fe65b27d5c7f',
//       },
//     })
//       .then(async (res) => {
//         setLoading(true);
//         message.success(res.data.updateJobCategory.message, 3);
//         await refetch();
//         // NProgress.done();
//         changeEdit();
//       })
//       .catch((error) => console.error(error));
//   };
//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };
//   return (
//     <div>
//       <h1 className="title-top">Update JobCategories</h1>
//       <Form
//         // form={form}
//         layout="vertical"
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         // initialValue={data.aJobCategory.name}
//       >
//         <Form.Item
//           label="Name Categories"
//           name="name"
//           rules={[
//             {
//               required: true,
//               message: 'Please input Categories name!',
//             },
//           ]}
//         >
//           <Input size="large" />
//         </Form.Item>
//         <Button
//           size="large"
//           className="button-submit"
//           type="primary"
//           htmlType="submit"
//         >
//           Submit
//         </Button>
//         <Button type="dashed" onClick={changeEdit}>
//           Cancel
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default EditJobcategory;
