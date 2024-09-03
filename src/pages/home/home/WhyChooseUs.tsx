import React from "react";
import { Card, Typography } from "antd";
import "antd/dist/reset.css"; // Import Ant Design styles

const { Title, Paragraph } = Typography;

export const WhyChooseUs: React.FC = () => {
  return (
    <div className="md:px-20 px-5 py-8 mx-auto bg-[#f8f9fa]">
      <div className="text-center mb-8 text-2xl font-bold">Why Choose Us?</div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <Card
          bordered={false}
          className="flex flex-col items-center p-4 text-center bg-white shadow-md transition-transform transform hover:scale-105"
        >
          {/* <CheckCircleOutlined className="text-4xl text-blue-600 mb-4 transition-colors hover:text-blue-800" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-9 text-[#038020] bg-[#FFFFFF] mb-2  mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <Title level={4}>Seamless Booking Experience</Title>
          <Paragraph>
            Experience an effortless and intuitive booking process that makes
            your life easier.
          </Paragraph>
        </Card>

        <Card
          bordered={false}
          className="flex flex-col items-center p-4 text-center bg-white shadow-md transition-transform transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-9 text-[#dba80e] bg-[#FFFFFF] mb-2  mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>

          <Title level={4}>Secure Transactions</Title>
          <Paragraph>
            Your personal data and transactions are protected with
            state-of-the-art security measures.
          </Paragraph>
        </Card>
        <Card
          bordered={false}
          className="flex flex-col items-center p-4 text-center bg-white shadow-md transition-transform transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-9 text-[#007bff] bg-[#FFFFFF] mb-2  mx-auto"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>

          <Title level={4}>24/7 Customer Support</Title>
          <Paragraph>
            Our dedicated team is available around the clock to assist you with
            any queries or issues.
          </Paragraph>
        </Card>
      </div>
    </div>
  );
};

export default WhyChooseUs;
