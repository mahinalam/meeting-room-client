import { Checkbox } from "antd";
import React from "react";

const FilterComponent = ({
  filterTitle,
  filterOptions,
  count,
}: {
  filterTitle: string;
  filterOptions: string[];
  count: string | number;
}) => {
  return (
    <div className="p-2 border-2 border-t-0">
      <section>
        <p className="text-sm font-bold text-title mb-0 pb-1">{filterTitle}</p>
      </section>
      {filterOptions.map((filterOption) => (
        <section className="text-[13px] text-title flex items-center gap-4 w-full justify-between">
          <div className="flex items-center gap-2">
            <Checkbox className="text-lg" />
            <p className="mb-0">{filterOption}</p>
          </div>
          <p className="mb-0">{count}</p>
        </section>
      ))}
    </div>
  );
};

export default FilterComponent;
