import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import Card from "../../../../components/sharred/Card";
import Title from "../Title";

const UniqueProperties = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o=",
    "https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o=",
    "https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o=",
    "https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o=",
    "https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o=",
    "https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o=",
    "https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o=",
    "https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o=",
  ];

  const slidesToShow = 4;

  // Function to handle slide change
  const handleSlideChange = (current: any) => {
    setCurrentSlide(current);
  };

  return (
    <div className="mt-[20px] md:mt-[30px]">
      {/* Title Section */}
      <section>
        <Title
          title="Stay at our top unique properties"
          subTitle="From castles and villas to boats and igloos, we have it all"
        />
      </section>

      {/* Cards Section */}
      <section className="w-full mt-[15px] md:mt-[25px]">
        {/* For medium and larger screens, use Antd Carousel */}
        <div className="hidden md:block">
          <Carousel
            slidesToShow={4} // 4 cards for medium and large screens
            slidesToScroll={1}
            dots={false}
            infinite={false}
            draggable
          >
            {/* Render each card inside a slide */}
            {[...Array(8)].map((_, index) => (
              <div key={index}>
                <Card />
              </div>
            ))}
          </Carousel>
        </div>

        {/* For small screens, enable horizontal scrolling */}
        <div className="block md:hidden overflow-x-auto">
          <div className="flex gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className=" flex-shrink-0">
                <Card />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniqueProperties;
