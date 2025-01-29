import { Checkbox } from "antd";
import React from "react";
import type { CheckboxProps } from "antd";

const FilterSection = () => {
  // onChange function for checkbox
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(e.target.checked);
  };

  return (
    <div>
      <div>{/* filter by title section */}</div>
    </div>
  );
};

export default FilterSection;
