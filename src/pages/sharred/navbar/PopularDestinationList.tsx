import React, { useState } from "react";
import DestinantionCard from "./DestinantionCard";
import LocationIcon from "./LocationIcon";

const PopularDestinationList = () => {
  return (
    <div className="bg-white md:w-[25vw] w-full shadow-2xl rounded-md border-[1px] border-[#E7E7E7] ">
      <section>
        <p className="font-sm font-bold text-title mb-0 pb-4 pt-4 ps-3">
          Popular destinations nearby
        </p>
      </section>
      <section>
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
        <DestinantionCard
          icon={<LocationIcon />}
          country="Bangladesh"
          place="Dhaka"
        />
      </section>
    </div>
  );
};

export default PopularDestinationList;
