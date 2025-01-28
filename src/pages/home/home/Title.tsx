import React from "react";

const Title = ({ title, subTitle }: { title: string; subTitle?: string }) => {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-bold mb-0 text-title">{title}</h1>
      <p className="text-sm md:text-base font-normal text-subTitle mb-0 mt-0.5 md:mt-1">
        {subTitle}
      </p>
    </div>
  );
};

export default Title;
