import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";

function SideNavbar() {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  function logoutUser() {
    setLoading(true);
    let token = localStorage.getItem("token");

    fetch("http://127.0.0.1:8000/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          console.log(data);
        }
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setLoading(false);
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <Link to="/">
                <div className="flex items-center">
                  <h1 className="font-bold text-blue-950 text-2xl sm:text-3xl font-Poppins">
                    Mo9awil<span className="text-orange-500">.</span>ma
                  </h1>
                </div>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    onClick={toggleProfileMenu}
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg"
                      alt=""
                    />
                  </button>
                </div>
                {/* Profile menu */}
                {isProfileMenuOpen && (
                  <div className="z-50 absolute right-0 mt-[13rem] w-48 bg-white rounded-md overflow-hidden shadow-xl dark:bg-gray-800">
                    <div className="py-1">
                      {/* Profile menu items */}
                      <Link
                        to="/app"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </Link>
                      <Link
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </Link>
                      <button
                        onClick={logoutUser}
                        className="block px-4 w-full py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        {/* Sidebar content */}
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-6 font-medium">
            {/* Sidebar items */}
            <li>
              <Link
                to="/app"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Tableau de bord</span>
              </Link>
            </li>
            {/* More sidebar items */}

            <li>
              <Link
                to="orders"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <div className="bg-gray-500  px-1 rounded-full hover:bg-black">
                  <i class="fa-solid fa-money-bill  text-white transition duration-75"></i>
                </div>

                <span className="ms-3">Commandes</span>
              </Link>
            </li>
            <li>
              <Link className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <div className="bg-gray-500  px-1 rounded-full hover:bg-black">
                  <i class="fa-solid fa-question  text-white transition duration-75"></i>
                </div>

                <span className="ms-3">Aide</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      {loading && <Loading />}
    </>
  );
}

export default SideNavbar;
