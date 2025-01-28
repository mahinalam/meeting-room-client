import React from "react";

const RoomFeaturedCard = ({ img, name }: { img: string; name: string }) => {
  return (
    <div className="">
      <section>
        <img
          className="rounded-md md:h-[250px] h-[200px] w-full"
          src={img}
          alt=""
        />
      </section>
      <section>
        <p className="font-bold text-title mb-0 mt-2">Hotel</p>
        <p className="text-sm text-subTitle mb-0 mt-1">Jan 31-Feb 1,2 adults</p>
        <p className="text-sm text-subTitle mb-0 mt-1">100 available</p>
      </section>
    </div>
  );
};

export default RoomFeaturedCard;
