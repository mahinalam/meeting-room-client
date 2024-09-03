/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

const RoomCard = ({ item }: any) => {
  console.log("from room card", item);
  const { _id, name, image, pricePerSlot, capacity } = item;
  console.log(name, image);
  return (
    <div className="shadow-lg overflow-hidden rounded-lg">
      <div>
        <img
          className="rounded-t-lg h-[300px]  w-full object-cover"
          src={image}
          referrerPolicy="no-referrer"
          alt=""
        />
      </div>
      <div className="p-4 space-y-2">
        <p className="text-2xl font-semibold mb-0 text-[#2C3E50]">{name}</p>
        <p className="mb-0 text-lg ">Capacity: {capacity}</p>
        <p className="mb-0 text-xl  font-medium ">
          Price Per Slot: <span className="font-semibold">${pricePerSlot}</span>
        </p>
      </div>
    </div>
  );
};

export default RoomCard;
