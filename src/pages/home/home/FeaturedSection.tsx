/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import RoomFeaturedCard from "../../../components/sharred/RoomFeaturedCard";
import { useGetAllRoomsQuery } from "../../../redux/features/room/roomApi";
import { Link } from "react-router-dom";
import Loader from "../../../components/sharred/Loader";
import Title from "./Title";

const FeaturedSection = () => {
  const { data: roomInfo, isLoading } = useGetAllRoomsQuery(undefined);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="mt-[20px] md:mt-[30px]">
      <div>
        <Title title="Browse by property name" />
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-[15px] md:mt-[20px]">
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
