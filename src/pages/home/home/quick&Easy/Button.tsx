import React from "react";

const Button = ({ icon, title }: { icon: any; title: string }) => {
  return (
    <div className="">
      <div className="inline-flex items-center bg-[#006CE40F] text-[#006CE4] px-4 py-[11px] text-sm gap-2 rounded-full border-[1px] border-[#006CE4]">
        {icon}
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Button;
