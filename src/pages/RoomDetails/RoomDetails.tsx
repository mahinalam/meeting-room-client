import React from "react";
import RoomDetailsCard from "./RoomDetailsCard";
import Container from "../../components/sharred/Container";
import AminitiesCard from "./AminitiesCard";
import { useGetSingleRoomQuery } from "../../redux/features/room/roomApi";
import { useParams } from "react-router-dom";

const RoomDetails = () => {
  const { id } = useParams();

  // fetch single room
  const { data: roomData, isLoading: roomDataLoading } =
    useGetSingleRoomQuery(id);
  console.log("room", roomData);

  // handle loading state of roomData
  if (roomDataLoading) {
    return <p>Loading</p>;
  }

  return (
    <Container>
      <RoomDetailsCard roomData={roomData?.data} />

      {/* TODO: complete roomDetails */}
    </Container>
  );
};

export default RoomDetails;
