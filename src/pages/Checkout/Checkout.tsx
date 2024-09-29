/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Card, Button, Modal, Form, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useGetAvailableSlotsQuery } from "../../redux/features/slots/slot.api";
import { CreditCardOutlined, BankOutlined } from "@ant-design/icons";
import "./Checkout.css"; // Custom CSS for enhanced styling
import Loader from "../../components/sharred/Loader";
import { useCreateBookingMutation } from "../../redux/features/bookings/bookings.api";
import { useUpdateSlotsMutation } from "../../redux/features/slots/slot.api";
import { toast } from "sonner";
import { useAppDispatch } from "../../redux/hooks";
import { clearBooking } from "../../redux/features/bookings/booking.slice";

const Checkout: React.FC = () => {
  const booking = useAppSelector((state) => state.booking);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: slotsInfo, isLoading: slotsInfoLoading } =
    useGetAvailableSlotsQuery([{ date: booking?.date }]);
  const [createBooking] = useCreateBookingMutation();
  const [updateBooking] = useUpdateSlotsMutation();

  console.log("booking", booking);
  if (slotsInfoLoading) {
    return <Loader />;
  }
  const slotIds = booking.slots;
  const matchingSlots = slotsInfo?.data?.filter(
    (slot: any) => slotIds.includes(slot._id) // Filter slots where the ID matches one of the slotIds
  );
  console.log("matchingSlots", matchingSlots);
  // if (matchingSlots.length > 0) {
  const firstStartTime = matchingSlots[0]?.startTime; // '10:00'
  const lastEndTime = matchingSlots[matchingSlots.length - 1]?.endTime; // '12:00'
  // }

  console.log("matchingSlots", matchingSlots);
  console.log("booking", booking);

  const handleConfirmBooking = async () => {
    if (!paymentMethod) {
      return;
    }

    setLoading(true);

    const bookingInfo = {
      date: booking.date,
      slots: booking.slots,
      room: booking.room,
      user: booking.user,
    };

    setLoading(true);
    console.log("from checkout", bookingInfo);
    const res = await createBooking(bookingInfo);
    if (res?.data?.success) {
      const updateSlots = {
        slots: booking.slots,
      };
      updateBooking(updateSlots);
      setIsModalOpen(true);
      setLoading(false);
    } else {
      toast.error("Failed to create booking!");
      setLoading(false);
    }
  };

  const handleModalOk = () => {
    setIsModalOpen(false);
    dispatch(clearBooking());
    navigate("/");
  };

  const handlePaymentMethodChange = (e: any) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="checkout-container min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 p-6 ">
      <Card className="checkout-card backdrop-blur-md bg-white shadow-lg p-8 w-full max-w-lg rounded-lg">
        <h2 className="font-bold text-3xl text-center mb-8 text-gray-800">
          Booking Summary
        </h2>
        <div className="booking-summary text-gray-700 space-y-4 ">
          <p>
            <strong>Room Name:</strong> {booking.roomName}
          </p>
          <p>
            <strong>Date:</strong> {booking.date}
          </p>
          <p>
            <strong>Time:</strong> {firstStartTime} - {lastEndTime}
          </p>
          <p>
            <strong>Cost:</strong> ${booking.cost}
          </p>
          <p>
            <strong>Email:</strong> {booking.email}
          </p>
          <p>
            <strong>Name:</strong> {booking.name}
          </p>
          <p>
            <strong>Phone:</strong> {booking.phone}
          </p>
          <p>
            <strong>Address:</strong> {booking.address}
          </p>
        </div>

        <Form layout="vertical" className="payment-form mt-8">
          {/* <Form.Item label="Select Payment Method" className="text-gray-700">
            <Radio.Group
              onChange={handlePaymentMethodChange}
              className="space-y-4"
            >
              <Radio value="creditCard" className="flex items-center">
                <CreditCardOutlined className="mr-2 text-blue-500" />
                <span className="text-[16px] font-semibold">Credit Card</span>
              </Radio>
              <Radio value="paypal" className="flex items-center">
                <PayCircleOutlined className="mr-2 text-blue-500" />
                <span className="text-[16px] font-semibold">PayPal</span>
              </Radio>
              <Radio value="bankTransfer" className="flex items-center">
                <BankOutlined className="mr-2 text-blue-500" />
                <span className="text-[16px] font-semibold">Bank Transfer</span>
              </Radio>
            </Radio.Group>
          </Form.Item> */}
          <Form.Item label="Select Payment Method" className="text-gray-700">
            <Radio.Group
              onChange={handlePaymentMethodChange}
              className="flex space-x-4" // <-- Updated to align options horizontally
            >
              <Radio value="creditCard" className="flex items-center">
                <CreditCardOutlined className="mr-2 text-blue-500" />
                <span className="text-[16px] font-semibold">Credit Card</span>
              </Radio>
              <Radio value="paypal" className="flex items-center">
                {/* <PaypalOutlined className="mr-2 text-blue-500" /> */}
                <span className="text-[16px] font-semibold">PayPal</span>
              </Radio>
              <Radio value="bankTransfer" className="flex items-center">
                <BankOutlined className="mr-2 text-blue-500" />
                <span className="text-[16px] font-semibold">Bank Transfer</span>
              </Radio>
            </Radio.Group>
          </Form.Item>

          {paymentMethod === "creditCard" && (
            <div className="payment-details bg-gray-100 p-4 rounded-lg mt-4 text-gray-700">
              <p>
                <strong>Card Number:</strong> **** **** **** 1234
              </p>
              <p>
                <strong>Expiry Date:</strong> 12/24
              </p>
              <p>
                <strong>Name on Card:</strong> John Doe
              </p>
            </div>
          )}

          {paymentMethod === "paypal" && (
            <div className="payment-details bg-gray-100 p-4 rounded-lg mt-4 text-gray-700">
              <p>You will be redirected to PayPal to complete your payment.</p>
            </div>
          )}

          {paymentMethod === "bankTransfer" && (
            <div className="payment-details bg-gray-100 p-4 rounded-lg mt-4 text-gray-700">
              <p>
                <strong>Bank Name:</strong> ABC Bank
              </p>
              <p>
                <strong>Account Number:</strong> 1234567890
              </p>
              <p>
                <strong>SWIFT Code:</strong> ABCD1234
              </p>
            </div>
          )}
        </Form>

        <Button
          type="primary"
          size="large"
          className="confirm-button w-full mt-8 bg-blue-500 text-white hover:bg-blue-600"
          onClick={handleConfirmBooking}
          loading={loading}
          disabled={!paymentMethod}
          style={{
            pointerEvents: !paymentMethod ? "none" : "auto",
          }}
        >
          Confirm Booking
        </Button>
      </Card>

      <Modal
        title="Booking Confirmation"
        open={isModalOpen}
        closable={false}
        onOk={handleModalOk}
        footer={[
          <Button
            key="ok"
            type="primary"
            onClick={handleModalOk}
            className="bg-blue-500 text-white hover:bg-blue-600"
          >
            OK
          </Button>,
        ]}
        className="backdrop-blur-md bg-white rounded-lg text-gray-800"
      >
        <p>Thank you for your booking!</p>
        <p>Your booking has been confirmed with the following details:</p>
        <div className="booking-details text-gray-700">
          <p>
            <strong>Room Name:</strong> {booking?.roomName}
          </p>
          <p>
            <strong>Date:</strong> {booking?.date}
          </p>
          <p>
            <strong>Time:</strong> {firstStartTime} - {lastEndTime}
          </p>
          <p>
            <strong>Cost:</strong> ${booking?.cost}
          </p>
        </div>
        <p>We look forward to welcoming you!</p>
      </Modal>
    </div>
  );
};

export default Checkout;
