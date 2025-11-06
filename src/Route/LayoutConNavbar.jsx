import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const LayoutConNavbar = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutConNavbar;
