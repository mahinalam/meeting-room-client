import React from "react";
import Title from "../Title";
import Card from "./Card";
import { Carousel } from "antd";

const PropertiesMayLike = () => {
  return (
    <div className="mt-[20px] md:mt-[30px]">
      {/* Title Section */}
      <section>
        <Title
          title="Properties you might like in Budapest"
          subTitle="Check out these properties similar to the ones you recently viewed"
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

export default PropertiesMayLike;
