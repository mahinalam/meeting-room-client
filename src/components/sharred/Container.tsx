import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mx-[20px] sm:mx-[30px] max-w-[1120px] md:mx-auto">
      {children}
    </div>
  );
};

export default Container;
