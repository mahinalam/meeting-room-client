import React from "react";
// https://q-xx.bstatic.com/xdata/images/city/170x136/666853.jpg?k=b2212159e829c00b8b19af72b6211b25325d70811829e2eb4ef1045f8a568be5&o=
const Card = () => {
  return (
    <div className="shadow-md rounded-md relative">
      {/* image section */}
      <section>
        <img
          className="rounded-md md:h-[250px] h-[200px] w-full"
          src="https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=f9cd3042175e0da40abf6d3988b9f3ac91aaeaefd9941081dbadfd0875c8ab27&o="
          alt=""
        />
      </section>
      <div className="p-3">
        {/* title section */}
        <section className="">
          <div className="flex gap-2 text-xs text-subTitle mb-0">
            <p className="!leading-none">Hotel</p>
            <p className="!leading-none bg-primary py-[1px] px-[3px] text-white  rounded-sm">
              Geneius
            </p>
          </div>
        </section>
        <section className="">
          <div>
            <p className="text-base mb-0 font-bold ">Dhaka Bangladesh</p>
          </div>
          <div>
            <p className="text-xs text-subTitle mb-0 mt-1">Dhaka Bangladesh</p>
          </div>
          <div className="flex items-center gap-2 mb-0 mt-1">
            <button className="text-xs bg-primary text-white p-[4px] rounded-sm">
              9.7
            </button>
            <span className="text-xs text-[#1A1A1A]">Exceptional</span>
            <span className="text-xs text-subTitle">100 reviews</span>
          </div>
          <div className="text-end mb-0 md:block hidden">
            <span className="text-xs text-subTitle pr-1"> Starting from</span>
            <span className="text-[#D4111E] text-sm line-through px-2">
              BDT 1600
            </span>
            <span className=" font-bold text-base text-[#1A1A1A]">
              BDT 1200
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
