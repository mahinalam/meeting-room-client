import React from "react";

const RoomFeaturedCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className="">
      <div>
        <img className="rounded-xl h-[300px]  w-full" src={img} alt="" />
      </div>
      <div className="font-bold my-2">{name}</div>
    </div>
  );
};

export default RoomFeaturedCard;
