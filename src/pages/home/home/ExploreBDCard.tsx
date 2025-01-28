import React from "react";

const ExploreBDCard = ({ name, image, property }: any) => {
  return (
    <div>
      <div className="shadow-lg overflow-hidden rounded-lg">
        <div className="">
          <img
            className="rounded-t-lg "
            src={image}
            referrerPolicy="no-referrer"
            alt=""
          />
        </div>
        <div className="p-4 space-y-2">
          <p className="text-xl font-semibold mb-0 text-[#2C3E50]">{name}</p>
          <p className="mb-0 text-sm text-gray-500 ">{property} properties</p>
        </div>
      </div>
    </div>
  );
};

export default ExploreBDCard;
