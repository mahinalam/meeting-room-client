/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Typography, Row, Col, Card } from "antd";
import {
  CalendarOutlined,
  UsergroupAddOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css"; // Import Ant Design styles

const { Title, Paragraph } = Typography;

const steps = [
  {
    title: "Select a Room",
    icon: <UsergroupAddOutlined className="text-5xl text-blue-500" />,
    description:
      "Browse through our selection of rooms and choose the one that best suits your needs.",
    // backgroundColor: "bg-blue-50", // Light blue background
  },
  {
    title: "Choose Date & Time",
    icon: <CalendarOutlined className="text-5xl text-blue-500" />,
    description:
      "Pick the date and time that works best for you from our available slots.",
    // backgroundColor: "bg-blue-50", // Light blue background
  },
  {
    title: "Confirm Booking",
    icon: <CheckCircleOutlined className="text-5xl text-blue-500" />,
    description:
      "Review your details and confirm your booking. You will receive a confirmation email shortly.",
    // backgroundColor: "bg-blue-50", // Light blue background
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div className="px-4 py-10 md:mt-[50px] sm:mt-[25px] mt-[20px] mx-auto max-w-7xl ">
      <Title className="font-bold !text-2xl mb-5 text-blue-700 text-center">
        How It Works
      </Title>
      {/* <Divider /> */}
      <div className=" border md:w-1/4 w-1/2 mx-auto mb-4"></div>
      <Row gutter={[18, 18]} justify="center">
        {steps.map((step, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              bordered={false}
              className={`flex flex-col items-center p-8 text-center rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg ${
                (step as any).backgroundColor
              }`}
            >
              <div className="mb-4 p-4 rounded-full bg-white shadow-md">
                {step.icon}
              </div>
              <Title level={4} className="mb-2 text-blue-700">
                {step.title}
              </Title>
              <Paragraph className="text-gray-700">
                {step.description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HowItWorks;
