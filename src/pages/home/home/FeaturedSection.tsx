/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import RoomFeaturedCard from "../../../components/sharred/RoomFeaturedCard";
import { useGetAllRoomsQuery } from "../../../redux/features/room/roomApi";
import { Link } from "react-router-dom";
import Loader from "../../../components/sharred/Loader";

const FeaturedSection = () => {
  const { data: roomInfo, isLoading } = useGetAllRoomsQuery(undefined);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="md:mt-[50px] sm:mt-[25px] mt-[20px]">
      <div>
        <h1 className="font-bold text-2xl mb-5 text-center">
          Browse by property name
        </h1>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {roomInfo &&
          roomInfo?.data?.map((room: any) => (
            <Link to={`/rooms/${room._id}`}>
              <RoomFeaturedCard
                key={room._id}
                name={room.name}
                img={room?.image}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
