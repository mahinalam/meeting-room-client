import React from "react";
import RoomDetailsCard from "./RoomDetailsCard";
import Container from "../../components/sharred/Container";

const RoomDetails = () => {
  return (
    <Container>
      <RoomDetailsCard />

      <div className="flex flex-col">
        <p className="text-[22px] text-title font-semibold mb-0">
          Room in Maratua, Indonesia
        </p>
        <p className="mb-0 text-lg">2 bedrooms4 bedsShared bathroom</p>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 fill-title"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>

          <span className="mb-0 text-lg">No reviews yet</span>
        </div>
      </div>

      {/* hosted info */}
      <div>
        <div className="border-y-2 flex py-4 gap-4">
          <section>
            <img
              src="https://a0.muscache.com/im/pictures/user/dc147731-1c4a-48b6-8e85-8e2b65ce8f97.jpg?im_w=240&im_format=avif"
              alt=""
              className="size-[50px]"
            />
          </section>
          <section>
            <div>
              <p className="mb-0 text-xl text-title">Hosted By Mahin</p>
              <p className="mb-0 text-subTitle">3 years hosting</p>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
