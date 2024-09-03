import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
const Hero: React.FC = () => {
  return (
    <div
      className="h-[70vh] bg-cover bg-black bg-center flex items-center "
      style={{ backgroundImage: `url('/background.jpeg')` }}
    >
      <div className=" text-[#FFFFFF] md:pl-20 p-6  bg-opacity-50 rounded-md font-bold">
        <h1 className="md:text-5xl text-4xl mb-3 ">Book your Ideal </h1>
        <h1 className="md:text-5xl text-4xl mb-3 ">Meeting Room with Ease</h1>
        {/* <img src={img} alt="" /> */}
        <p className="md:text-xl text-lg mb-6 font-medium">
          Efficient, hassle-free room booking for all our meeting needs
        </p>
        <Link to="/rooms">
          {" "}
          <Button
            type="primary"
            size="large"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Book a vacation rental
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
