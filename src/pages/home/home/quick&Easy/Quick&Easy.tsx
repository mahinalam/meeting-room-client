import React, { useState } from "react";
import Title from "../Title";
import QucickCard from "./QucickCard";
import Button from "./Button";
import HeartIcon from "../../../../components/sharred/HeartIcon";

const QuickAndEasy = () => {
  const [activeButton, setActiveButton] = useState("romance");

  return (
    <div className="cursor-pointer">
      {/* title section */}
      <section className="mt-[20px] md:mt-[30px]">
        <Title
          title="Quick and easy trip planner"
          subTitle="Pick a vibe and explore the top destinations in Bangladesh"
        />
      </section>
      {/* btn section */}
      <section className="mb-[20px] md:mb-[23px] mt-[15px] md:mt-[20px]">
        <Button
          icon={
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          }
          title="Romance"
        />
      </section>
      <div>
        <QucickCard />
      </div>
    </div>
  );
};

export default QuickAndEasy;
