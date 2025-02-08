/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Link } from "react-router-dom";
import Title from "../Title";
import Card from "./Card";
import { useGetAllRoomsQuery } from "../../../../redux/features/room/roomApi";
import ExploreBDCarouselComponent from "./Carousel";

const ExploreBangladesh = () => {
  // fetch all rooms
  const { data: allRooms, isLoading: roomDataLoading } =
    useGetAllRoomsQuery(null);

  // handle roomData loading
  if (roomDataLoading) {
    return <p>Loading ...</p>;
  }

  const updatedRoomInfo = [
    {
      name: "Cox's Bazar",
      property: 60,
      image:
        "https://q-xx.bstatic.com/xdata/images/city/170x136/666853.jpg?k=b2212159e829c00b8b19af72b6211b25325d70811829e2eb4ef1045f8a568be5&o=",
    },
    {
      name: "Dhaka",
      property: 60,
      image:
        "https://q-xx.bstatic.com/xdata/images/city/170x136/688201.jpg?k=586e76aa55aa92d886eaf5837e288d77e15c9b81534bd4c7121d0d020e99064d&o=",
    },
    {
      name: "Sylhet",
      property: 50,
      image:
        "https://r-xx.bstatic.com/xdata/images/city/170x136/761433.jpg?k=21910a5884ba4c680badac1131347de875f68cf188a389376d8b5b2f7a75582e&o=",
    },
    {
      name: "Chittagong",
      property: 50,
      image:
        "https://q-xx.bstatic.com/xdata/images/city/170x136/858544.jpg?k=af54aeeb213e0c97b823854f6779ee99c332b7100660513ca6c0823c525bdea1&o=",
    },
    {
      name: "Rajshahi",
      property: 50,
      image:
        "https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o=",
    },
  ];

  return (
    <div className="mt-[20px] md:mt-[30px]">
      <div className="">
        <Title
          title="Explore Bangladesh"
          subTitle="These popular destinations have a lot to offer"
        />
      </div>

      {/* for large screen */}
      <div className="mt-[15px] md:mt-[20px] md:block hidden">
        <ExploreBDCarouselComponent rooms={allRooms?.data} />
      </div>

      {/* For small screens, enable horizontal scrolling */}
      <div className="block md:hidden overflow-x-auto mt-[15px]">
        <div className="flex gap-4">
          {updatedRoomInfo.map((room, index) => (
            <div key={index} className=" flex-shrink-0">
              <Card img={room.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreBangladesh;
