import Rate from "rc-rate";
import React from "react";
import "rc-rate/assets/index.css";
import "./PropertyCard.css";
import HeartIcon from "../../components/sharred/HeartIcon";

const PropertyCard = () => {
  return (
    <div className="flex p-4 border-2  justify-between gap-4 relative cursor-pointer">
      {/* image section */}
      <section>
        <div className="w-full relative">
          <img
            src="https://cf.bstatic.com/xdata/images/hotel/square240/503594116.webp?k=29ee77f63caf278cbbe24f8a3509fc7a69ff8cb4e28f8b3c4a52fd4673293c9d&o="
            alt=""
            className="rounded-lg h-[250px] w-full object-cover "
          />
          {/* heart icon in absolute position */}
          <div className="absolute top-2 right-2">
            <HeartIcon />
          </div>
        </div>
      </section>

      {/* text section */}
      <div className="flex justify-between w-full">
        {/* left section */}
        <section className="flex-1">
          <div>
            {/* title & review section */}
            <section className="flex w-full items-center gap-4 justify-between">
              <div className="flex">
                <h4 className="text-xl text-[#006CE4] bold mb-0">
                  Leonardo Royal Hotel Warsaw
                </h4>
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
            </section>
          </div>

          {/* location section */}
          <section>
            <div className="flex items-center gap-2 text-xs font-medium text-[#006CE4] ">
              <p className="underline mb-0">Dhamrai, Dhaka</p>
              <p className="underline mb-0">Show on map</p>
              <p className="text-title font-normal mb-0">1km from downtown</p>
            </div>
          </section>

          {/* facilities section */}
          <section className="flex justify-between mt-4 border-l-2 pl-2">
            <div>
              <p className="text-title font-bold mb-0 text-xs mt-1">
                Busniess Apartment
              </p>
              <div className="flex gap-1 text-xs text-title mt-1">
                <p className="mb-0">Entire partment</p>
                <ul className="flex gap-1 mb-0">
                  <li>1 bedrrom</li>
                  <li>1 bathroom</li>
                  <li>1 living room</li>
                </ul>
              </div>
              <p className="text-xs text-title mb-0 mt-1">1 full bed</p>
              <div className="font-bold text-xs text-[#008234] flex items-center gap-2 mt-2">
                <section className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 font-bold"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </section>
                <span className="mb-0">Free cancelation</span>
              </div>
            </div>
          </section>
        </section>

        {/* right section */}
        {/* for experiment right section*/}
        <section className="flex flex-col items-end">
          {/* rating related section */}
          <div className="flex items-center gap-2">
            <div>
              <p className="mb-0 text-title font-medium">Very Good</p>
              <p className="mb-0 text-subTitle text-xs">1000 reviews</p>
            </div>
            <div>
              <button className="btn bg-primary text-white txet-base px-1 py-2 rounded-md font-medium mb-0">
                6.7
              </button>
            </div>
          </div>

          {/* price related section */}
          <div className="text-end pt-5">
            <p className="text-subTitle text-xs mb-0">1 night, 2 adults</p>
            <p className="font-medium text-xl text-title mb-0">BDT 1000</p>
            <p className="text-subTitle text-xs mb-0">
              Includes taxes and fees
            </p>
          </div>

          {/*     avalinblity button */}
          <div className="pt-5">
            <span className="flex items-center bg-[#006CE4] text-white p-2 gap-2 rounded-md font-medium">
              <button className="text-sm">See availability</button>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-white mx-auto"
                >
                  <path d="M8.913 19.236a.9.9 0 0 0 .642-.266l6.057-6.057a1.3 1.3 0 0 0 .388-.945c.008-.35-.123-.69-.364-.945L9.58 4.966a.91.91 0 0 0-1.284 0 .896.896 0 0 0 0 1.284l5.694 5.718-5.718 5.718a.896.896 0 0 0 0 1.284.88.88 0 0 0 .642.266"></path>
                </svg>
              </span>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PropertyCard;
