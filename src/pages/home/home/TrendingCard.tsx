import React from "react";

const TrendingCard = ({ image, place }: any) => {
  return (
    <div className="relative rounded-md ">
      <p
        style={{ textShadow: "rgb(26, 26, 26) 1px 1px 1px" }}
        className="absolute top-6 left-4 font-bold text-white text-2xl hidden md:block"
      >
        Dhaka
      </p>
      <div>
        <img
          src={image}
          className="rounded-md md:h-[250px] h-[180px] w-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default TrendingCard;
