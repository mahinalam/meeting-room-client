import React from "react";
import Container from "../../components/sharred/Container";
import AminitiesCard from "./AminitiesCard";

const RoomDetailsCard = () => {
  return (
    <Container>
      {/* title & save section */}
      <div className="flex items-center justify-between mb-4">
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

      {/* room  info */}
      <div className="flex flex-col mt-6">
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
      <div className="mt-5">
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

      {/* aminities section */}
      <section className="mt-5">
        <AminitiesCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>
          }
          title="Room in a bed and breakfast"
          subTitle="Your own room in a home, plus access to shared spaces."
          gap={5}
        />
      </section>

      {/* about place section */}
      <section className="border-y-2 py-8">
        <h1 className="text-[22px] font-medium text-title pb-2">
          About this place
        </h1>
        <p>
          This villa boasts a 2-story floor plan, providing ample space for you
          and your loved ones to relax and unwind. With a generous area of 132
          square meters, including 1 king bed, 4 single beds, and a sofa bed,
          it's perfect for families or groups
        </p>
        <p className="pt-1">
          Step into the villa and be greeted by the breathtaking sea view from
          the large windows. The private garden adds a touch of tranquility,
          perfect for enjoying a morning coffee or an evening sunset.
        </p>
        <div className="flex items-center">
          {" "}
          <button className="underline">Show more</button>
          <svg
            viewBox="0 0 18 18"
            role="presentation"
            focusable="false"
            className="size-3 mt-1"
          >
            <path
              d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </section>

      {/* place offers */}
      <section className="py-8 border-b-2">
        <h1 className="text-[22px] font-medium text-title pb-2">
          What this place offers
        </h1>
        <div className="flex items-center gap-4">
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
              d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
            />
          </svg>
          <span className="text-title">Wifi</span>
        </div>
        <button className="p-3 border-2 rounded-xl mt-6 ">
          Show all aminities
        </button>
      </section>
    </Container>
  );
};

export default RoomDetailsCard;
