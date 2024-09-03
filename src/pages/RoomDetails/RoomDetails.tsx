/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Carousel, Button, Modal } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  TeamOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import "./RoomDetails.css";
import { useGetSingleRoomQuery } from "../../redux/features/room/roomApi";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import PHForm from "../../components/form/PHForm";
import PHDatePickerWithWatch from "../../components/form/PHDatePickerWithWatch";
import PHInput from "../../components/form/PHInput";
import { useGetAvailableSlotsQuery } from "../../redux/features/slots/slot.api";
import PHSelect from "../../components/form/PHSelect";
import moment from "moment";
import { useGetMeQuery } from "../../redux/features/auth/authApi";
import { setBooking } from "../../redux/features/bookings/booking.slice";
import Loader from "../../components/sharred/Loader";

export type TQueryParams = {
  name: string;
  value: boolean | React.Key;
};

const RoomDetails: React.FC = () => {
  const user = useAppSelector((state) => state.auth);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const booking = useAppSelector((state) => state.booking);
  const { id } = useParams();
  const { data: roomInfo, isLoading } = useGetSingleRoomQuery(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dateId, setDateId] = useState("");
  const [params, setParams] = useState<TQueryParams[]>([]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data: getMeData, isLoading: getMeLoading } = useGetMeQuery(undefined);
  const {
    data: slotsInfo,
    isLoading: slotsInfoLoading,
    error: slotsError,
  } = useGetAvailableSlotsQuery([...params], {
    skip: !dateId,
  });

  const slotOptions = slotsInfo?.data
    ? slotsInfo?.data?.map((item: any) => ({
        value: item._id,
        label: `${item.startTime} - ${item.endTime}`,
      }))
    : [];

  useEffect(() => {
    if (dateId) {
      const queryParams: TQueryParams[] = [];
      queryParams.push({
        name: "date",
        value: moment((dateId as any).$d).format("YYYY-MM-DD"),
      });
      setParams(queryParams);
    }
  }, [dateId]);

  useEffect(() => {
    if (slotsError) {
      // Assuming error has a message or status you can use
      setErrorMessage("There is no available time slots for this date.");
    } else {
      setErrorMessage(null); // Reset the error message if there's no error
    }
  }, [slotsError]);

  if (isLoading) {
    return <Loader />;
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = (data: any) => {
    // console.log("data", data);
    if (data) {
      // console.log("slotsInfo", slotsInfo);
      const bookingInfo = {
        date: moment(data.date.$d).format("YYYY-MM-DD"),
        slots: data.slots,
        cost: Number(data.slots.length) * Number(roomInfo?.data?.pricePerSlot),
        room: roomInfo.data._id,
        roomName: roomInfo.data.name,
        user: getMeData?.data?._id,
        name: getMeData?.data?.name,
        phone: getMeData?.data?.phone,
        email: getMeData?.data.email,
        address: getMeData?.data.address,
      };
      console.log("bookingInfo", bookingInfo);
      dispatch(setBooking(bookingInfo));
      navigate("/checkout");
    }
  };

  const images = [
    "https://via.placeholder.com/500x300?text=Room+Image+1",
    "https://via.placeholder.com/500x300?text=Room+Image+2",
    "https://via.placeholder.com/500x300?text=Room+Image+3",
  ];

  return (
    <Card className=" rounded-lg   md:mt-[50px] sm:mt-[25px] mt-[20px] md:px-36 bg-white">
      <div className=" flex md:flex-row flex-col gap-6">
        {/* Left Column for Images */}
        <div className="md:w-7/12 w-full">
          <Carousel autoplay className="rounded-lg overflow-hidden shadow-md">
            {images.map((src, index) => (
              <div key={index}>
                <img
                  src={roomInfo?.data?.image}
                  alt={`Room Image ${index + 1}`}
                  className="w-full h-[500px]  object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Right Column for Details */}
        <div className="md:w-5/12 w-full ">
          <div
            className="flex flex-col px-5 justify-center md:py-0 py-5  h-full"
            style={{ background: "#F3F4F6" }}
          >
            <h2 className="text-3xl font-bold text-gray-900  mb-4 text-center">
              {roomInfo?.data?.name}
            </h2>
            <p className="text-lg text-gray-700 mb-3">
              <HomeOutlined className="text-gray-500 mr-2" /> Room No:{" "}
              {roomInfo?.data?.roomNo}
            </p>
            <p className="text-lg text-gray-700 mb-3">
              <UserOutlined className="text-gray-500 mr-2" /> Floor No:{" "}
              {roomInfo?.data?.floorNo}
              <span className="font-medium text-gray-900">2</span>
            </p>
            <p className="text-lg text-gray-700 mb-3">
              <TeamOutlined className="text-gray-500 mr-2" /> Capacity:{" "}
              <span className="font-medium text-gray-900">50 People</span>
            </p>
            <p className="text-lg text-gray-700 mb-5">
              <DollarOutlined className="text-gray-500 mr-2" /> Price Per Slot:{" "}
              <span className="font-medium text-gray-900">$200</span>
            </p>
            {/* Amenities */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Amenities:
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              {roomInfo?.data?.amenities.map((item: string) => (
                <li>{item}</li>
              ))}
            </ul>
            <Button
              onClick={showModal}
              type="primary"
              size="large"
              className="bg-blue-600 hover:bg-blue-700 w-full"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      <Modal
        title="Room Reservation"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="w-full ">
          <div>
            <PHForm onSubmit={onSubmit}>
              <PHDatePickerWithWatch
                onValueChange={setDateId}
                label="Date"
                name="date"
              />
              {errorMessage && <p className="text-red">{errorMessage}</p>}
              <PHSelect
                name="slots"
                label="Slots"
                disabled={!dateId || !!slotsError || slotsInfoLoading}
                options={slotOptions}
                mode="multiple"
              />
              <PHInput
                type="email"
                name="email"
                label="Email"
                defaultValue={getMeData?.data?.email}
                disabled={getMeLoading}
              />
              <PHInput
                type="text"
                name="name"
                label="Name"
                defaultValue={getMeData?.data?.name}
                disabled={getMeLoading}
              />
              <PHInput
                type="text"
                name="phone"
                label="Phone number"
                defaultValue={getMeData?.data?.phone}
                disabled={getMeLoading}
              />
              <PHInput
                type="text"
                name="address"
                label="Address"
                defaultValue={getMeData?.data?.address}
                disabled={getMeLoading}
              />
              {/* <Link to="/checkout"> */}
              <Button
                htmlType="submit"
                size="large"
                type="primary"
                className="w-full mx-auto"
                disabled={!dateId || !!slotsError || slotsInfoLoading}
              >
                Checkout
              </Button>
              {/* </Link> */}
            </PHForm>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default RoomDetails;
