import React from "react";

const DestinantionCard = ({
  place,
  country,
  icon,
}: {
  place: string;
  country: string;
  icon: any;
}) => {
  return (
    <div className="flex gap-3 items-center  border-b-[#E7E7E7] border-b-[1px] p-[10px] hover:bg-gray-100">
      {/* location icon */}
      <div className="">{icon}</div>
      {/* place city */}
      <div>
        <p className="mb-0 text-title font-bold text-sm">{place}</p>
        <p className="mb-0 text-xs text-title font-normal">{country}</p>
      </div>
    </div>
  );
};

export default DestinantionCard;
