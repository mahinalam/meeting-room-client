import React from "react";

const PriceSummary = () => {
  return (
    <div className="  md:rounded-xl md:p-3 md:mt-3  md:border-[1px] border-[#E7E7E7]  pt-3 md:pt-0">
      {/* main price section */}
      <div className="">
        <h1 className="md:block hidden text-base font-bold text-title bg-white p-3">
          Your price summary
        </h1>
        <div className="bg-[#EBF3FF] p-3">
          <div className="flex items-center justify-between text-2xl  ">
            <h1 className="mb-0 text-title font-bold md:block hidden">Total</h1>
            <h1 className="mb-0 text-title font-bold md:hidden block">Price</h1>
            <h1 className="mb-0 text-title font-bold">BDT 9,026.6</h1>
          </div>
          <div className="flex items-end flex-col text-subTitle text-sm ">
            <p className="mb-0">Includes taxes and fees</p>
          </div>
        </div>
      </div>
      {/* additional price info */}
      <div className="p-3">
        <h1 className="text-title font-bold md:text-base text-sm">
          Price information
        </h1>
        {/* fees icon */}
        <div className="flex text-sm gap-3 md:gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
            />
          </svg>
          <div>
            <span className="text-sm text-title">
              Includes BDT 947.24 in taxes and fees
            </span>
            <div className="flex text-sm justify-between items-center">
              <p>8 % VAT</p>
              <p>BDT 500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSummary;
