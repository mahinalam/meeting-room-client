import React from "react";

const BookingInfo = () => {
  return (
    <div className="md:border-[1px] border-[#E7E7E7] md:rounded-xl md:p-3 md:border-b-0 mt-4  pb-3 pt-3 ">
      <div>
        <h3 className="font-bold text-base md:block hidden">
          Your bookig details
        </h3>
      </div>

      {/* check-in & check-out */}
      <div className="flex ">
        {/* check in section */}
        <div className="w-1/2 border-r-2 ">
          <p className="mb-0 text-sm font-medium">Check-in</p>
          <div>
            <p className="mb-0 font-bold mt-2 md:text-base text-sm">
              Sun, Feb 23, 2025
            </p>
            <p className="mb-0 text-sm text-subTitle mt-1 md:block hidden">
              2:00 PM – 8:00 PM
            </p>
          </div>
          <p className="mb-0 text-sm text-title mt-3 font-medium">
            Total length of stay:
          </p>
          <p className="mb-0 text-sm font-bold mt-1">1 night</p>
        </div>
        {/* check out section */}
        <div className="w-1/2 pl-4">
          <p className="mb-0 text-sm font-medium">Check-out</p>
          <div>
            <p className="mb-0 font-bold mt-2 md:text-base text-sm">
              Sun, Feb 23, 2025
            </p>
            <p className="mb-0 text-sm text-subTitle mt-1 md:block hidden">
              2:00 PM – 8:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
