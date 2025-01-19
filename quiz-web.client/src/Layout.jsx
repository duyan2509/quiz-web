import React, { useState } from "react";
import { ConfigProvider, Menu, Layout, Avatar } from 'antd';
import { UserOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;
const pages = [
  {
    key: "1",
    label: "Quizzes",
    route: "/quizzes"
  },
  {
    key: "2",
    label: "My Quiz",
    route: "/my-quiz"
  }
];

const MyLayout = ({ children }) => {
  const [selectedKey, setSelectedKey] = useState("");
  const [avatarClicked, setAvatarClicked] = useState(false);
  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
    setAvatarClicked(false);
  };

  const handleLogoClick = () => {
    setSelectedKey("");
    setAvatarClicked(false);
  };

  const handleAvatarClick = () => {
    setSelectedKey("");
    setAvatarClicked(!avatarClicked);
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1890ff",
        },
      }}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ backgroundColor: "#ffffff" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div
              style={{
                color: "#1890ff",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={handleLogoClick}
            >
              <Link to="/home" style={{ color: "#1890ff", textDecoration: "none" }}>
                My Quiz App
              </Link>
            </div>

            <Menu
              theme="light" 
              mode="horizontal"
              selectedKeys={[selectedKey]}
              onClick={handleMenuClick}
              style={{
                lineHeight: "64px",
                marginRight: "20px",
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Menu.Item key={page.key}>
                  <Link to={page.route}>{page.label}</Link>
                </Menu.Item>
              ))}
            </Menu>

            <div onClick={handleAvatarClick}>
              <Link to="/settings">
                <Avatar
                  icon={<UserOutlined />}
                  style={{
                    backgroundColor: avatarClicked ? "#1890ff" : "", 
                    cursor: "pointer",
                  }}
                />
              </Link>
            </div>
          </div>
        </Header>

        <Content style={{ paddingTop: "20px",paddingInline:"40px", background: "#ffffff" }}>
          {children}
        </Content>

        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default MyLayout
