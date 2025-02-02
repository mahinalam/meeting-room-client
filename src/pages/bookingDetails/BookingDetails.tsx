import React from "react";
import RoomDetails from "./components/RoomDetails";
import Container from "../../components/sharred/Container";
import BookingInfo from "./components/BookingInfo";
import PriceSummary from "./components/PriceSummary";
import BookingDetailsInfo from "./components/BookingDetailsInfo";

const BookingDetails = () => {
  return (
    <Container>
      <div className="md:flex gap-6 justify-between">
        <div className="md:w-4/12">
          <RoomDetails />
          <BookingInfo />
          <PriceSummary />
        </div>
        <div className="md:w-8/12">
          <BookingDetailsInfo />
        </div>
      </div>
    </Container>
  );
};

export default BookingDetails;
