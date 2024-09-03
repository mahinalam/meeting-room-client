import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"
        // style={{ height: "50px", width: "50px", border: "#3B82F6" }}
      ></div>
    </div>
  );
};

export default Loader;
