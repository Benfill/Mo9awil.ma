import { Outlet } from "react-router-dom";
import Header from "../../components/front_office/Navbar.jsx";
import SideNavbar from "../../components/back_office/SideNavBar.jsx";

export default function BackLayout() {
  return (
    <div className="App relative">
      <SideNavbar />
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
