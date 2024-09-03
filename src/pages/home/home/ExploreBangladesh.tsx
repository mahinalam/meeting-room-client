/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import RoomCard from "../../../components/sharred/RoomFeaturedCard";
import { useGetAllRoomsQuery } from "../../../redux/features/room/roomApi";
const ExploreBangladesh = () => {
  const { data: roomInfo, isLoading } = useGetAllRoomsQuery(undefined);
  if (isLoading) {
    return <p>Loading ...</p>;
  }
  return (
    <div className="md:mt-[50px] sm:mt-[25px] mt-[20px]">
      <div>
        <h1 className="font-bold text-2xl mb-5">Browse by property name</h1>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {roomInfo &&
          roomInfo?.data?.map((room: any) => (
            <RoomCard key={room._id} name={room.name} img={room.image} />
          ))}
      </div>
    </div>
  );
};

export default ExploreBangladesh;
