import { Outlet } from "react-router-dom";
import SideNavbar from "./SideNavBar.jsx";
import { useState } from "react";

export default function BackLayout({isSidebarOpen, setIsSidebarOpen}) {

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="App relative">
       <SideNavbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`p-4 ${isSidebarOpen ? 'sm:ml-64' : 'ml-14'}`}>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
