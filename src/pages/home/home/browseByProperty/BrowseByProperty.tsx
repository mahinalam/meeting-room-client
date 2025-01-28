// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React from "react";
// import { Link } from "react-router-dom";
// import Loader from "../../../../components/sharred/Loader";
// import { useGetAllRoomsQuery } from "../../../../redux/features/room/roomApi";
// import Title from "../Title";
// import RoomFeaturedCard from "../../../../components/sharred/RoomFeaturedCard";

// const BrowseByProperty = () => {
//   const { data: roomInfo, isLoading } = useGetAllRoomsQuery(undefined);
//   if (isLoading) {
//     return <Loader />;
//   }
//   return (
//     <div className="mt-[20px] md:mt-[30px]">
//       <div>
//         <Title title="Browse by property name" />
//       </div>
//       <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-[15px] md:mt-[20px]">
//         {roomInfo &&
//           roomInfo?.data?.map((room: any) => (
//             <Link to={`/rooms/${room._id}`}>
//               <RoomFeaturedCard
//                 key={room._id}
//                 name={room.name}
//                 img={room?.image}
//               />
//             </Link>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default BrowseByProperty;

import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import Card from "../../../../components/sharred/Card";
import Title from "../Title";
import RoomFeaturedCard from "../../../../components/sharred/RoomFeaturedCard";

const UniqueProperties = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o=",
    "https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o=",
    "https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o=",
    "https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o=",
    "https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o=",
    "https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o=",
    "https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o=",
    "https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o=",
  ];

  const slidesToShow = 4;

  // Function to handle slide change
  const handleSlideChange = (current: any) => {
    setCurrentSlide(current);
  };

  return (
    <div className="mt-[20px] md:mt-[30px]">
      {/* Title Section */}
      <section>
        <Title
          title="Browse by property type"
          // subTitle="From castles and villas to boats and igloos, we have it all"
        />
      </section>

      {/* Cards Section */}
      <section className="w-full mt-[15px] md:mt-[25px]">
        {/* For medium and larger screens, use Antd Carousel */}
        <div className="hidden md:block">
          <Carousel
            slidesToShow={4} // 4 cards for medium and large screens
            slidesToScroll={1}
            dots={false}
            infinite={false}
            draggable
          >
            {/* Render each card inside a slide */}
            {[...Array(8)].map((_, index) => (
              <div key={index}>
                <RoomFeaturedCard
                  img="https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o="
                  name="Dhaka"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* For small screens, enable horizontal scrolling */}
        <div className="block md:hidden overflow-x-auto">
          <div className="flex gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className=" flex-shrink-0">
                <RoomFeaturedCard
                  img="https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o="
                  name="Dhaka"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UniqueProperties;
