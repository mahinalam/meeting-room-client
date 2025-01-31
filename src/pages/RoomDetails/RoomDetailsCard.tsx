import React from "react";
import Container from "../../components/sharred/Container";

const RoomDetailsCard = () => {
  return (
    <Container>
      {/* title & save section */}
      <div className="flex items-center justify-between">
        <div className="text-title text-2xl font-bold">Room title</div>
        <div className="flex items-center">
          <span className="flex items-center gap-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </span>
            <span>Share</span>
          </span>
          <span className="flex items-center gap-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </span>
            <span>Save</span>
          </span>
        </div>
      </div>

      {/* images section */}
      <section className="grid grid-cols-2 gap-2">
        {/* left image */}
        <div>
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-53436410/original/2dfebfdc-c502-4e55-b5f8-6ae6bd056de0.png?im_w=1200&im_format=avif"
            alt=""
            className="rounded-s-xl"
          />
        </div>
        {/* right images */}
        <div className="grid grid-cols-2 gap-2">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-53436410/original/2dfebfdc-c502-4e55-b5f8-6ae6bd056de0.png?im_w=1200&im_format=avif"
            alt=""
            className=""
          />
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-53436410/original/2dfebfdc-c502-4e55-b5f8-6ae6bd056de0.png?im_w=1200&im_format=avif"
            alt=""
          />
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-53436410/original/2dfebfdc-c502-4e55-b5f8-6ae6bd056de0.png?im_w=1200&im_format=avif"
            alt=""
          />
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-53436410/original/2dfebfdc-c502-4e55-b5f8-6ae6bd056de0.png?im_w=1200&im_format=avif"
            alt=""
          />
        </div>
      </section>
    </Container>
  );
};

export default RoomDetailsCard;
