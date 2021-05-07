import { Input, Form, Button, notification } from "antd";
import React, { useState } from "react";
import Notification from "../../components/Notification";
import { apiResource, layout } from "../../utils/";

interface Values {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
};

const AddUser: React.FC<{}> = () => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [form] = Form.useForm<Values>();

  const onFinish = async (values: any) => {
    setSubmitting(true);
    await apiResource("/users", "POST", values).then((res) => {
      notification.success({
        message: "User Successfully Added",
        description: <Notification {...values} />,
      });
      setSubmitting(false);
    });
    form.resetFields();
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ alignSelf: "start" }}>Add User</h2>
      <Form
        {...layout}
        form={form}
        onFinish={onFinish}
        style={{
          width: "45%",
          justifyContent: "center",
          alignItems: "center",
        }}
        initialValues={initialValues}
        scrollToFirstError
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail.",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Website"
          name="website"
          rules={[
            {
              required: true,
              message: "Please input your website",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            block={true}
            htmlType="submit"
            loading={submitting}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddUser;
