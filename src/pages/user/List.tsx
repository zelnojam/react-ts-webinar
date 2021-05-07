import { Button, Popconfirm, Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiResource } from "../../utils/";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const ListUser: React.FC<{}> = () => {
  const [list, setList] = useState<{ data: User[]; loading: boolean }>({
    data: [],
    loading: true,
  });

  useEffect(() => {
    const fetch = async () => {
      const data = await apiResource("/users", "GET", null);
      setList({
        data: data,
        loading: false,
      });
    };
    fetch();
  }, []);

  const handleConfirm = async (id: number) => {
    setList({ ...list, loading: true });
    await apiResource(`/users/${id}`, "DELETE", null).then(() => {
      setList({
        data: list.data.filter((item) => item.id !== id),
        loading: false,
      });
    });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
    },
    {
      title: "Action",
      key: "action",
      render: (data: { id: number }) => {
        const path = `/users/edit/${data.id}`;
        return (
          <Space size="middle">
            <Button type="primary">
              <Link to={path}>Edit</Link>
            </Button>
            <Popconfirm
              title="Are you sure to delete this user?"
              onConfirm={() => handleConfirm(data.id)}
              okText="Yes, Delete"
              cancelText="Cancel"
            >
              <Button type="primary" danger>
                Delete
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <div>
      <Table dataSource={list.data} columns={columns} loading={list.loading} />
    </div>
  );
};

export default ListUser;
