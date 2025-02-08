import React from "react";

const TrendingCard = ({ images, place }: any) => {
  return (
    <div className="relative rounded-md cursor-pointer">
      <p
        style={{ textShadow: "rgb(26, 26, 26) 1px 1px 1px" }}
        className="absolute top-6 left-4 font-bold text-white text-2xl hidden md:block"
      >
        {place}
      </p>
      <div>
        <img
          src={images?.[0]}
          className="rounded-md md:h-[250px] h-[180px] w-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default TrendingCard;
