import React, { useState } from "react";
import { Menu, Drawer, Button, Avatar, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import "antd/dist/reset.css"; // Import Ant Design styles
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  logout,
  selectCurrentUser,
} from "../../../redux/features/auth/authSlice";

const Navbar: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  const menu = (
    <Menu className="w-[130px]">
      {!user ? (
        <>
          <Menu.Item key="login">
            <Link to="/login" className="font-medium text-gray-800">
              Login
            </Link>
          </Menu.Item>
          <Menu.Item key="signup">
            <Link to="/signup" className="font-medium text-gray-800">
              Register
            </Link>
          </Menu.Item>
        </>
      ) : (
        <>
          {" "}
          {user.role === "user" ? (
            <>
              {" "}
              <Menu.Item key="my-bookings">
                <Link to="/my-bookings" className="font-medium text-gray-800">
                  My Booings
                </Link>
              </Menu.Item>
              <Menu.Item key="logout">
                <Link
                  to="/login"
                  onClick={handleLogout}
                  className="font-medium text-gray-800"
                >
                  Logout
                </Link>
              </Menu.Item>
            </>
          ) : (
            <>
              {" "}
              <Menu.Item key="dashboard">
                <Link
                  to="/admin/get-all-rooms"
                  className="font-medium text-gray-800"
                >
                  Dashboard
                </Link>
              </Menu.Item>
              <Menu.Item key="logout">
                <Link
                  to="/login"
                  onClick={handleLogout}
                  className="font-medium text-gray-800"
                >
                  Logout
                </Link>
              </Menu.Item>
            </>
          )}
        </>
      )}
    </Menu>
  );

  return (
    <div style={{ padding: 5, background: "#000000" }}>
      <div className="items-center flex justify-between mx-auto px-4">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          BookNest
        </Link>

        {/* Navigation Links for Medium and Larger Screens */}
        <div className="hidden md:flex flex-1 justify-center">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{
              lineHeight: "64px",
              margin: "0 auto",
            }}
          >
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="meeting-rooms">
              <Link to="/rooms">Meeting Rooms</Link>
            </Menu.Item>
            <Menu.Item key="contact-us">
              <Link to="/contact">Contact Us</Link>
            </Menu.Item>
          </Menu>
        </div>

        {/* User Icon for Medium and Larger Devices */}
        <div
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {/* <Dropdown
            overlay={userMenuItems}
            trigger={["click"]}
            placement="bottomRight"
          > */}
          <Dropdown
            className="hidden md:block"
            overlay={menu}
            trigger={["click"]}
            placement="bottomRight"
          >
            <Avatar
              icon={<UserOutlined />}
              style={{
                backgroundColor: "#ffffff",
                color: "#1e3a8a",
                cursor: "pointer",
              }}
            />
            {/* </Dropdown> */}
          </Dropdown>
        </div>

        {/* Toggle Button for Mobile */}
        <Button
          icon={<MenuOutlined />}
          className="md:hidden text-black bg-white "
          onClick={() => setDrawerVisible(true)}
        />
      </div>

      {/* Drawer for Mobile Menu */}
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="inline"
          theme="dark"
          style={{ backgroundColor: "#1e3a8a", color: "#ffffff" }}
          onClick={() => setDrawerVisible(false)}
        >
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="meeting-rooms">
            <Link to="/rooms">Meeting Rooms</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About Us</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="/contact">Contact Us</Link>
          </Menu.Item>
          {!user ? (
            <Menu.Item key="login">
              <Link to="/login">Login</Link>
            </Menu.Item>
          ) : (
            <Menu.Item key="logout">
              <Link onClick={handleLogout} to="/login">
                Logout
              </Link>
            </Menu.Item>
          )}
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;
