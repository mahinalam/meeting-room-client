import React from "react";

const AminitiesCard = ({
  icon,
  title,
  subTitle,
  gap,
}: {
  icon: any;
  title: string;
  subTitle?: string;
  gap?: number;
}) => {
  return (
    <div className={`flex ${gap ? "gap-5" : "gap-3"}`}>
      <section className="">{icon}</section>
      <section>
        <p className="text-title font-medium mb-0 pb-1">{title}</p>
        <p className="text-subTitle">{subTitle}</p>
      </section>
    </div>
  );
};

export default AminitiesCard;
