import React from "react";
import PHInput from "../../../components/form/PHInput";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { Checkbox } from "antd";

const BookingDetailsInfo = () => {
  // form submit handler fn
  const onSubmit = () => {};
  return (
    <div className="md:p-3 md:border-[1px] border-[#E7E7E7] pt-3 md:rounded-xl">
      <div>
        <h1 className="md:text-xl text-lg font-bold py-1">
          Enter your details
        </h1>
        {/* input section */}
        <div>
          <PHForm onSubmit={onSubmit}>
            {/* first & last name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PHInput
                name="email"
                type="email"
                disabled={false}
                label="First name *"
              />
              <PHInput
                name="email"
                type="email"
                disabled={false}
                label="Last name *"
              />
            </div>

            {/* for email */}
            <div className="md:border-b-2 md:pb-5 mt-2">
              <div className="md:w-1/2 w-full">
                <PHInput
                  name="email"
                  type="email"
                  disabled={false}
                  label="Email address *"
                />
              </div>
            </div>
            {/* address section */}
            <div className="md:w-1/2 w-full mt-3 ">
              <div>
                <h1 className="text-base font-bold mt-3 py-2 md:block hidden">
                  Your address
                </h1>
              </div>
              <div className="space-y-4">
                <PHInput
                  name="email"
                  type="email"
                  disabled={false}
                  label="Address *"
                />
                <PHInput
                  name="email"
                  type="email"
                  disabled={false}
                  label="City *"
                />
                <PHInput
                  name="email"
                  type="email"
                  disabled={false}
                  label="Phone number *"
                />
              </div>
            </div>

            {/* payment info */}
            <div className="md:w-1/2 w-full">
              <h1 className="md:text-base text-lg font-bold py-1">
                Payment information
              </h1>
              <div>
                <PHSelect
                  label="Pay with *"
                  options={[
                    { value: "amarPay", label: "Amar Pay" },
                    { value: "cashOnArrival", label: "Cash on Arrival" },
                  ]}
                  name="pay"
                />
              </div>
            </div>
            {/* check button */}
            <div>
              <div className="flex items-start gap-2">
                <Checkbox></Checkbox>
                <p>
                  I consent to receiving marketing emails from Booking.com,
                  including promotions, personalized recommendations, rewards,
                  travel experiences, and updates about Booking.com’s products
                  and services.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox></Checkbox>
                <p>
                  I consent to receiving marketing emails from Booking.com,
                  including promotions, personalized recommendations, rewards,
                  travel experiences, and updates about Booking.com’s products
                  and services.
                </p>
              </div>
            </div>
            {/* book button */}
            <div className="flex justify-end md:text-start text-center mt-4">
              <button className="flex mr-2 justify-center items-center w-full md:w-fit border-[1px] border-[#006CE4] text-[#006CE4] bg-white p-2 gap-2 rounded-md font-medium">
                Check your booking
              </button>
              <button className="flex justify-center items-center w-full md:w-fit bg-[#006CE4] text-white p-2 gap-2 rounded-md font-medium">
                Request to book
              </button>
            </div>
          </PHForm>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailsInfo;
