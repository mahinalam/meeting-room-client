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

import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import Card from "../../../../components/sharred/Card";
import Title from "../Title";
import RoomFeaturedCard from "../../../../components/sharred/RoomFeaturedCard";

const UniqueProperties = () => {
  const carouselRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

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

  // const slidesToShow = 4;

  // Function to handle slide change
  const handleSlideChange = (current: any) => {
    setCurrentSlide(current);
  };

  // Function to determine slidesToShow based on screen width
  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setSlidesToShow(1);
    } else if (width < 768) {
      setSlidesToShow(2);
    } else if (width < 1024) {
      setSlidesToShow(3);
    } else {
      setSlidesToShow(4);
    }
  };

  useEffect(() => {
    updateSlidesToShow(); // Set the initial value
    window.addEventListener("resize", updateSlidesToShow); // Update on resize

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  return (
    <div className="mt-[20px] md:mt-[30px] relative">
      {/* Title Section */}
      <section>
        <Title
          title="Browse by property type"
          // subTitle="From castles and villas to boats and igloos, we have it all"
        />
      </section>

      {/* Cards Section */}
      <section className="w-full mt-[15px] md:mt-[25px] ">
        {/* For medium and larger screens, use Antd Carousel */}
        <div className="hidden md:block">
          <Carousel
            ref={carouselRef}
            slidesToShow={slidesToShow}
            slidesToScroll={1}
            infinite={false}
            dots={false}
            draggable
            afterChange={handleSlideChange}
          >
            {/* Render each card inside a slide */}
            {[...Array(8)].map((_, index) => (
              <div key={index} className="pr-4">
                <RoomFeaturedCard
                  img="https://q-xx.bstatic.com/xdata/images/country/170x136/361.jpg?k=fe1c45898bddb55365c8067a6b4b071e9ebb8d52150800edb53e105cf896866d&o="
                  name="Dhaka"
                />
              </div>
            ))}
          </Carousel>
          {currentSlide > 0 && (
            <button
              onClick={() => carouselRef.current?.prev()}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
              style={{ height: "40px", width: "40px", lineHeight: "40px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 text-black mx-auto"
              >
                <path d="M15.087 19.236a.9.9 0 0 1-.642-.266l-6.057-6.057A1.3 1.3 0 0 1 8 11.968c-.008-.35.123-.69.364-.945l6.057-6.057a.91.91 0 0 1 1.284 0 .895.895 0 0 1 0 1.284l-5.694 5.718 5.718 5.718a.896.896 0 0 1 0 1.284.88.88 0 0 1-.642.266"></path>
              </svg>
            </button>
          )}

          {currentSlide < images.length - slidesToShow && (
            <button
              onClick={() => carouselRef.current?.next()}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
              style={{ height: "40px", width: "40px", lineHeight: "40px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 text-black mx-auto"
              >
                <path d="M8.913 19.236a.9.9 0 0 0 .642-.266l6.057-6.057a1.3 1.3 0 0 0 .388-.945c.008-.35-.123-.69-.364-.945L9.58 4.966a.91.91 0 0 0-1.284 0 .896.896 0 0 0 0 1.284l5.694 5.718-5.718 5.718a.896.896 0 0 0 0 1.284.88.88 0 0 0 .642.266"></path>
              </svg>
            </button>
          )}
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
      {/* Navigation Buttons */}
    </div>
  );
};

export default UniqueProperties;
