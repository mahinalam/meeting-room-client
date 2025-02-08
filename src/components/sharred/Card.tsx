import React from "react";
import HeartIcon from "./HeartIcon";
// https://q-xx.bstatic.com/xdata/images/city/170x136/666853.jpg?k=b2212159e829c00b8b19af72b6211b25325d70811829e2eb4ef1045f8a568be5&o=
const Card = ({
  title,
  location,
  review,
  price,
  image,
}: {
  title: string;
  location: string;
  review: any;
  price: number;
  image: string;
}) => {
  return (
    <div className="shadow-md rounded-md relative cursor-pointer">
      {/* heart icon image */}
      <div className="absolute top-2 right-2">
        <HeartIcon />
      </div>
      {/* image section */}
      <section>
        <img
          className="rounded-md md:h-[250px] h-[200px] w-full"
          src={image}
          alt=""
        />
      </section>
      {/* title section */}
      <section className="p-2">
        <div>
          <p className="text-base mb-0 font-bold ">{title}</p>
        </div>
        <div>
          <p className="text-xs text-subTitle mb-0 mt-1">{location}</p>
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
          <span className=" font-bold text-base text-[#1A1A1A]">
            BDT {price}
          </span>
        </div>
      </section>
    </div>
  );
};

export default Card;
