// import { Carousel } from "antd";
// import React from "react";
// import img from "/background.jpeg";
// // import "rc-rate/assets/index.css";
// const contentStyle: React.CSSProperties = {
//   margin: 0,
//   height: "500px",
//   color: "black",
//   //   lineHeight: "160px",
//   textAlign: "center",
//   background: "#F7F7F7",
// };

// const Testimonial = () => {
//   return (
//     <div>
//       <Carousel arrows infinite={false}>
//         <div className="mx-auto text-center py-auto">
//           <div className="flex justify-center" style={contentStyle}>
//             {/* <div className=""> */}
//             <div className="m-0 p-0 w-1/4 text-center py-10">
//               <img
//                 className="w-[150px] h-[150px] block mx-auto rounded-full"
//                 src={img}
//                 alt=""
//               />
//               <div className="mt-2">
//                 <p className="text-xl font-bold mb-0">Mahin Alam</p>
//                 <p className="text-lg mb-0">CEO, Programming Hero</p>
//               </div>
//               <div></div>
//               <div className="mt-6 font-medium text-lg">
//                 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//                 Eligendi deserunt a autem possimus eaque eum sit aspernatur
//                 nesciunt doloremque molestiae?
//               </div>
//             </div>
//             {/* </div> */}
//           </div>
//         </div>
//         <div>
//           <h3 style={contentStyle}>2</h3>
//         </div>
//         <div>
//           <h3 style={contentStyle}>3</h3>
//         </div>
//         <div>
//           <h3 style={contentStyle}>4</h3>
//         </div>
//       </Carousel>
//     </div>
//   );
// };

// export default Testimonial;

import { Carousel, Card, Typography, Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Testimonial.css";

const { Title, Text } = Typography;

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Example Corp",
    avatar: "https://i.imgur.com/lMyULeZ.jpg", // Replace with actual image URL
    testimonial:
      "This service is fantastic! The attention to detail and quality is top-notch. Highly recommend to anyone looking for excellence.",
  },
  {
    name: "Jane Smith",
    title: "CTO, Tech Solutions",
    avatar: "https://i.imgur.com/fJO9x4d.jpg", // Replace with actual image URL
    testimonial:
      "A truly remarkable experience. The team went above and beyond to ensure our satisfaction. Outstanding results!",
  },
  {
    name: "Alex Johnson",
    title: "Founder, Startup Inc.",
    avatar: "https://i.imgur.com/IGyOoVg.jpg", // Replace with actual image URL
    testimonial:
      "Professional and efficient. Their expertise was evident throughout the entire process. Couldn’t be happier!",
  },
];

const Testimonial = () => (
  <div className="testimonial-container  md:mt-[50px] sm:mt-[25px] mt-[20px]">
    <p className="text-2xl font-bold text-center">What Our Clients Say</p>
    <Carousel autoplay dotPosition="bottom">
      {testimonials.map(({ name, title, avatar, testimonial }, index) => (
        <div key={index}>
          <Card className="testimonial-card">
            <Row gutter={16} align="middle">
              <Col xs={24} md={6} className="testimonial-avatar-col">
                <Avatar size={100} src={avatar} icon={<UserOutlined />} />
              </Col>
              <Col xs={24} md={18}>
                <Title level={4}>{name}</Title>
                <Text>{title}</Text>
                <Text className="testimonial-text">"{testimonial}"</Text>
              </Col>
            </Row>
          </Card>
        </div>
      ))}
    </Carousel>
  </div>
);

export default Testimonial;
