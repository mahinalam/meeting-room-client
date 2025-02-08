import React, { useRef, useState, useEffect } from "react";
import { Carousel } from "antd";
import { IRoom } from "../../../../types";

const ExploreBDCarouselComponent = ({ rooms }: { rooms: IRoom[] }) => {
  const carouselRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(6);

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
      setSlidesToShow(4);
    } else {
      setSlidesToShow(6);
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
    <div className="relative w-full mx-auto">
      {/* Carousel */}
      <Carousel
        ref={carouselRef}
        slidesToShow={slidesToShow}
        slidesToScroll={1}
        infinite={false}
        dots={false}
        draggable
        afterChange={handleSlideChange}
      >
        {rooms.map((room: IRoom) => (
          <div key={room._id} className="pr-4">
            <img
              src={room.images[0]}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div className="mt-3">
              <p className="font-bold text-title text-base mb-0">
                {room.location}
              </p>
              {/* TODO: fixed properties dynamically */}
              <p className="text-sm text-subTitle mt-1">200 Properties</p>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Navigation Buttons */}
      {currentSlide > 0 && (
        <button
          onClick={() => carouselRef.current?.prev()}
          className="absolute top-1/3 left-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
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

      {/* {currentSlide < images.length - slidesToShow && (
        <button
          onClick={() => carouselRef.current?.next()}
          className="absolute top-1/3 right-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
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
      )} */}
    </div>
  );
};

export default ExploreBDCarouselComponent;
