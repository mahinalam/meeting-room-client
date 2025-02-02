import Rate from "rc-rate";
import React from "react";

const RoomDetails = () => {
  return (
    <div className="md:border-2 md:rounded-xl md:p-3 border-b-[1px] border-[#E7E7E7] ">
      {/* rating  */}
      <p style={{ margin: "0", color: "yellow" }}>
        <Rate
          disabled
          allowClear={false}
          value={5}
          count={5}
          style={{
            fontSize: "14px",
            color: "yellow",
            letterSpacing: "2px",
          }}
        />
      </p>

      {/* room title */}
      <p className="font-bold text-title md:text-base text-sm mb-0">
        Mahin Room
      </p>
      {/* location */}
      <p className=" text-title text-sm mt-1 md:mt-3 mb-0">Dhaka, Bangladesh</p>
      {/* review section */}
      <div className="flex items-center text-xs mt-2 gap-2">
        <button className="btn bg-primary  text-white px-1 py-1 rounded-md font-medium mb-0">
          6.7
        </button>
        <span className="">Wonderful</span>
        <span className="text-subTitle">100 reviews</span>
      </div>

      {/* aminities section */}
      <div className="flex items-center text-xs text-title gap-1 mt-3 md:pb-0 pb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="md:size-6 size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
        <p className="mb-0 text-xs">Wifi</p>
      </div>
    </div>
  );
};

export default RoomDetails;
