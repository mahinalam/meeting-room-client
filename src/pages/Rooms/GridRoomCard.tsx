import Rate from "rc-rate";
import React from "react";
import "rc-rate/assets/index.css";
import "./PropertyCard.css";
import HeartIcon from "../../components/sharred/HeartIcon";

const GridRoomCard = () => {
  return (
    <div className="relative cursor-pointer">
      {/* image section */}
      <div className="absolute top-2 right-2">
        <HeartIcon />
      </div>
      <section className="w-full">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square240/503594116.webp?k=29ee77f63caf278cbbe24f8a3509fc7a69ff8cb4e28f8b3c4a52fd4673293c9d&o="
          alt=""
          className="rounded-lg h-[250px] w-full object-cover "
        />
      </section>

      {/* text section */}
      <div className="p-3 border-2">
        <section className="">
          {/* title and rating section */}
          <div className="">
            <section className="flex w-full items-center gap-4 justify-between">
              <div className="flex">
                <h4 className="md:text-base text-xl text-[#006CE4] bold mb-0">
                  Leonardo Royal Hotel Warsaw
                </h4>
              </div>
            </section>
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
          </div>
          <div className="flex items-center mt-2  gap-2">
            <div>
              <button className="btn bg-primary text-white text-sm px-1 py-1 rounded-md font-medium mb-0">
                6.7
              </button>
            </div>
            <p className="mb-0 text-title font-medium text-sm md:text-xs">
              Very Good
            </p>
            <p className="mb-0 text-subTitle md:text-xs text-sm">
              1000 reviews
            </p>
          </div>
        </section>

        {/* location section */}
        <section className="border-b-2 mt-1 pb-2">
          <div className="flex items-center gap-2 md:text-xs text-sm font-medium text-[#006CE4] w-full">
            <p className="underline mb-0">Dhamrai, Dhaka</p>
            <p className="underline mb-0">Show on map</p>
          </div>
          <p className="md:text-xs text-sm font-normal text-title w-full mb-0 md:mt-0 mt-1">
            1 km from downtown
          </p>
        </section>

        {/* facilities section */}
        <section className="text-xs pl-4 pt-2">
          <p className="text-title font-bold mb-0">2 mkdkjjjjjd</p>
          <p className="mb-0 mt-1">22 bed in doms</p>
          <p className="mb-0 mt-1">22 bed in doms</p>
        </section>

        {/* price section */}
        <div className="text-end md:pt-12 mt-8">
          <p className="text-subTitle text-xs mb-0">1 night, 2 adults</p>
          <p className="font-medium md:text-xl text-lg text-title mb-0">
            BDT 1000
          </p>
          <p className="text-subTitle text-xs mb-0">Includes taxes and fees</p>
        </div>
      </div>
    </div>
  );
};

export default GridRoomCard;
