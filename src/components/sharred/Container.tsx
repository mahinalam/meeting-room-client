import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-[10px] sm:mx-[30px] max-w-[1120px] lg:mx-auto">
      {children}
    </div>
  );
};

export default Container;
