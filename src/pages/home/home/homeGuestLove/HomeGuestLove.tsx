import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import Card from "../../../../components/sharred/Card";
import Title from "../Title";

const HomeGuestLove = () => {
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
    // <div className="mt-[20px] md:mt-[30px]">
    //   {/* title section */}

    //   <section>
    //     <Title title="Home guests love" />
    //   </section>
    //   <div className="relative w-full  mx-auto mt-[15px] md:mt-[25px]">
    //     {/* Carousel */}
    //     <Carousel
    //       ref={carouselRef}
    //       slidesToShow={slidesToShow}
    //       slidesToScroll={1}
    //       infinite={false}
    //       dots={false}
    //       draggable
    //       afterChange={handleSlideChange} // Track the current slide index
    //     >
    //       {images.map((src, index) => (
    //         //   <div key={index} className="px-2 ">
    //         //   <img
    //         //     src={src}
    //         //     alt={`Slide ${index + 1}`}
    //         //     className="w-full h-auto rounded-lg shadow-md"
    //         //   />
    //         <div className="pr-4">
    //           <Card />
    //         </div>
    //         //   {/* </div> */}
    //       ))}
    //     </Carousel>

    //     {/* Navigation Buttons */}
    //     {currentSlide > 0 && (
    //       <button
    //         onClick={() => carouselRef.current.prev()}
    //         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           className="w-4 h-4 text-sm text-black"
    //         >
    //           <path d="M15.087 4.764a.9.9 0 0 1-.642.266l-6.057 6.057a1.3 1.3 0 0 1-.388.945c-.008.35.123.69.364.945l5.694 5.718-5.718 5.718a.896.896 0 0 1 0 1.284.88.88 0 0 1 .642.266.91.91 0 0 1 1.284-1.284l5.718-5.718-5.694-5.718a.896.896 0 0 1-.364-.945c.008-.35.123-.69.364-.945l6.057-6.057a.9.9 0 0 1 .642-.266z"></path>
    //         </svg>
    //       </button>
    //     )}

    //     {currentSlide < images.length - slidesToShow && (
    //       <button
    //         onClick={() => carouselRef.current.next()}
    //         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           className="w-4 h- text-sm text-black"
    //           // dataRtl="true"
    //         >
    //           <path d="M8.913 19.236a.9.9 0 0 0 .642-.266l6.057-6.057a1.3 1.3 0 0 0 .388-.945c.008-.35-.123-.69-.364-.945L9.58 4.966a.91.91 0 0 0-1.284 0 .896.896 0 0 0 0 1.284l5.694 5.718-5.718 5.718a.896.896 0 0 0 0 1.284.88.88 0 0 0 .642.266"></path>
    //         </svg>
    //       </button>
    //     )}
    //   </div>
    // </div>
    <div className="mt-[20px] md:mt-[30px]">
      {/* Title Section */}
      <section>
        <Title
          title="Home guests love"
          // subTitle="Check out these properties similar to the ones you recently viewed"
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
                <Card />
              </div>
            ))}
          </Carousel>
        </div>

        {/* For small screens, enable horizontal scrolling */}
        <div className="block md:hidden overflow-x-auto">
          <div className="flex gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className=" flex-shrink-0">
                <Card />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeGuestLove;
