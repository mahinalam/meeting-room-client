import { Checkbox, Slider } from "antd";
import React from "react";

const PriceSlider = (
  {
    //   filterTitle,
    //   filterOptions,
    //   count,
    // }: {
    //   filterTitle: string;
    //   filterOptions: string[];
    //   count: string | number;
  }
) => {
  return (
    <div className="p-2 border-2 border-t-0">
      <section>
        <p className="text-sm font-bold text-title mb-0 pb-1">
          Your budget (per night)
        </p>
      </section>
      <p>BDT 4000 - BDT 30000</p>
      <Slider range defaultValue={[20, 50]} />
    </div>
  );
};

export default PriceSlider;
