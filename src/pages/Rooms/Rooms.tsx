/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import RoomCard from "../../components/sharred/RoomCard";
import { useGetAllRoomsQuery } from "../../redux/features/room/roomApi";
import { Input, Select } from "antd";
import Loader from "../../components/sharred/Loader";
import PropertyCard from "./PropertyCard";
import Container from "../../components/sharred/Container";
import FilterSection from "./FilterSection";
import FilterComponent from "./FilterComponent";

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
    <Container>
      <div className="flex justify-between gap-4">
        <div className="w-[25%]">
          <section>
            <div className="border-2 p-2">
              <p className="text-base text-title font-bold mb-0">Filter by:</p>
            </div>
          </section>
          <section>
            <FilterComponent
              count={100}
              filterOptions={["4 starts", "swimming pool"]}
              filterTitle="Popular filter"
            />
          </section>
          {/* <FilterSection /> */}
        </div>
        <div className="w-[75%]">
          <PropertyCard />
        </div>
      </div>
    </Container>
  );
};

export default Rooms;
