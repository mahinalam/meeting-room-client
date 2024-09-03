import Navbar from "../../../src/pages/sharred/navbar/Navbar";
import Footer from "../../../src/pages/sharred/footer/Footer";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
