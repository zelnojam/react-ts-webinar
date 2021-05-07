import { Input, Form, Button, notification, Spin } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect, useState } from "react";
import { useParams, withRouter } from "react-router";
import Notification from "../../components/Notification";
import { apiResource, layout } from "../../utils/";

const EditUser: React.FC<{}> = () => {
  const { id } = useParams<{ id: string }>();
  const [form] = useForm();
  const [{ data, loading, submitting }, setUser] = useState<{
    data: any;
    loading: boolean;
    submitting: boolean;
  }>({
    data: {},
    loading: true,
    submitting: false,
  });
  useEffect(() => {
    const fetch = async () => {
      const values = await apiResource(`/users/${id}`, "GET", null);
      setUser({ data: values, loading: false, submitting: false });
    };

    fetch();
  }, [id]);

  const onFinish = async (values: any) => {
    setUser({ data, loading, submitting: true });
    await apiResource("/users", "PUT", values).then((res) => {
      notification.success({
        message: "User Successfully Edited",
        description: <Notification {...values} />,
      });
      setUser({ data, loading, submitting: false });
    });
    form.resetFields();
  };

  return loading ? (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin />
    </div>
  ) : (
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
        initialValues={data}
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

export default withRouter(EditUser);
