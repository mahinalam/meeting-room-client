/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import RoomCard from "../../components/sharred/RoomCard";
import { useGetAllRoomsQuery } from "../../redux/features/room/roomApi";
import { Input, Select } from "antd";
import Loader from "../../components/sharred/Loader";

const { Search } = Input;

const Rooms = () => {
  const { data: roomInfo, isLoading: roomInfoLoading } =
    useGetAllRoomsQuery(undefined);
  const [searchInput, setSearchInput] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  if (roomInfoLoading) {
    return <Loader />;
  }
  const handleSearchChange = (e: any) => {
    setSearchInput(e.target.value);
  };
  const handleSortChange = (value: string) => {
    console.log(value);
    setSelectedSort(value);
  };

  let filteredProducts = roomInfo?.data || [];

  if (searchInput) {
    filteredProducts = filteredProducts.filter((product: any) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  }
  if (selectedSort === "ascending") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.pricePerSlot - b.pricePerSlot
    );
  } else {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.pricePerSlot - a.pricePerSlot
    );
  }

  return (
    <div className="md:mt-[50px] sm:mt-[25px] mt-[20px]">
      <section className="flex items-center justify-between gap-6">
        <div className="my-5 w-1/2">
          <Search
            placeholder="Search your desired rooms"
            enterButton="Search"
            size="large"
            allowClear
            value={searchInput}
            onChange={handleSearchChange}
          />
        </div>
        <div className="my-5 w-1/2 ">
          <Select
            placeholder="Sort by Price"
            style={{ width: "80%" }}
            onChange={handleSortChange}
            options={[
              { value: "ascending", label: "Price: Low to High" },
              { value: "descending", label: "Price: High to Low" },
            ]}
            size="large"
          />
        </div>
      </section>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((room: any) => (
            <Link to={`/rooms/${room._id}`} key={room._id}>
              <RoomCard item={room} />
            </Link>
          ))
        ) : (
          <p className=" font-bold">No rooms found</p>
        )}
      </div>
    </div>
  );
};

export default Rooms;
