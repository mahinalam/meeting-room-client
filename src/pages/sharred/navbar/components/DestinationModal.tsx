import React, { useState } from "react";
import { Button, Input, Modal } from "antd";
import "./DestinationModal.css";
import { RiSendPlaneLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import PopularDestinationList from "../PopularDestinationList";
import DestinantionCard from "../DestinantionCard";
import LocationIcon from "../LocationIcon";

const DestinationModal = ({
  isDestinationModalOpen,
  handleCancel,
}: {
  isDestinationModalOpen: boolean;
  handleCancel: any;
}) => {
  return (
    <div className="">
      <Modal
        // title="Basic Modal"
        open={isDestinationModalOpen}
        onCancel={handleCancel}
        footer={false}
        className="w-full "
        style={{
          top: 0,
          margin: 0,
          padding: "0px",
          height: "100vh",
          width: "100vw",
          maxWidth: "100vw",
        }}
      >
        <div>
          {/* enter destination section */}
          <section>
            <p className="text-title text-base font-bold text-center">
              Enter destination
            </p>
          </section>

          {/* current location search icon */}
          <section>
            <div className="flex items-center border-y-4 p-2 ">
              <div>
                <IoSearch size={25} />
              </div>
              <div>
                <Input
                  //   onFocus={() => setShowDestinations(true)} // Show on focus
                  //   onBlur={() => setShowDestinations(false)} // Show on focus
                  className="bg-transparent outline-none border-none focus:ring-0 placeholder-subTitle "
                  placeholder="Around current location?"
                  allowClear
                  style={{
                    boxShadow: "none",
                    border: "none",
                    outline: "none",
                  }}
                  //   defaultValue={popularLocationValue}
                />
              </div>
            </div>
          </section>

          {/* current location text section */}
          <section>
            <div className="flex items-center gap-4 p-2 ">
              <div>
                <RiSendPlaneLine size={25} />
              </div>
              <div>
                <p className="font-bold mb-0">Around current location</p>
              </div>
            </div>
          </section>

          {/* popular destinantion section */}
          <section>
            <p className="font-bold mb-0 p-3">Popular destinantion nearby</p>
            <div>
              <DestinantionCard
                icon={<LocationIcon />}
                country="Bangladesh"
                place="Dhaka"
              />
              <DestinantionCard
                icon={<LocationIcon />}
                country="Bangladesh"
                place="Dhaka"
              />
              <DestinantionCard
                icon={<LocationIcon />}
                country="Bangladesh"
                place="Dhaka"
              />
            </div>
          </section>
        </div>
      </Modal>
    </div>
  );
};

export default DestinationModal;
