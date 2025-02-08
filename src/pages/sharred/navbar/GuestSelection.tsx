import React from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

const GuestSelection = () => {
  return (
    <div className="bg-white md:w-[18vw] !w-full shadow-2xl p-5">
      {/* adults section */}
      <div className="flex items-center rounded-md">
        <section className="flex items-center justify-between w-full">
          <p className="w-full text-title font-medium text-sm mb-0">Adults</p>

          {/* btn section */}

          <div className="flex md:w-3/4 w-full items-center justify-between border-[1px] border-[#868686] p-3 px-2">
            <span>
              <LuMinus className="text-blue font-medium" />
            </span>
            <span className="text-title font-medium">1</span>
            <span>
              <LuPlus className="text-blue font-normal" />
            </span>
          </div>
        </section>
      </div>

      {/* children section */}
      <div className="flex items-center rounded-md mt-1">
        <section className="flex items-center justify-between w-full">
          <p className="w-full text-title font-medium text-sm mb-0">Children</p>

          {/* btn section */}

          <div className="flex w-3/4 items-center justify-between border-[1px] border-[#868686] p-3 px-2">
            <span>
              <LuMinus className="text-blue font-medium" />
            </span>
            <span className="text-title font-medium">1</span>
            <span>
              <LuPlus className="text-blue font-normal" />
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GuestSelection;
