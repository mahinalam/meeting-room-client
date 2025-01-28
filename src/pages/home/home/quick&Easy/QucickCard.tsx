import React from "react";

const QucickCard = () => {
  return (
    <div>
      <div>
        <img
          className="md:h-[150px] rounded-md"
          src="https://cf.bstatic.com/xdata/images/xphoto/300x240/140011216.jpg?k=1954d541e6bd6c8fdecbbf1c8fda2a51d179d4cb1c6606c76acdff1166b34274&o="
          alt=""
        />
      </div>
      <div className="mt-2">
        <p className="text-base text-[#1A1A1A] font-bold mb-0">Dhaka</p>
        <p className="text-subTitle text-sm">208 km from Dhaka</p>
      </div>
    </div>
  );
};

export default QucickCard;
