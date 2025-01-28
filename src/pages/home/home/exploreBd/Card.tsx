import React from "react";

const Card = ({ img }: { img: string }) => {
  return (
    <div>
      <img src={img} className="w-full h-auto rounded-lg shadow-md" />
      <div className="mt-3">
        <p className="font-bold text-title text-base mb-0">Dhaka</p>
        <p className="text-sm text-subTitle mt-1">200 Properties</p>
      </div>
    </div>
  );
};

export default Card;
