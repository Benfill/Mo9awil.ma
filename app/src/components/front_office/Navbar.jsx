import React from "react";
import { Link } from "react-router-dom";
import "../../style/header.css";
import { fetchData } from "../../utils/api";
import { setGlobalState, useGlobalState } from "../../utils/globalState";

const Header = () => {
  function handleTel() {
    if (window.location.href.includes("pack")) {
      return true;
    } else return false;
  }

  return (
    <div className="w-full fixed top-0 left-0 right-0 bg-white z-50">
      <header className="shadow w-full">
        <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 mx-auto sm:flex-row">
          <nav
            aria-labelledby="header-navigation"
            className="flex items-center justify-between w-full sm:flex-row"
          >
            <Link to="/">
              <div className="flex items-center">
                <h1 className="font-bold text-blue-950 text-2xl sm:text-3xl font-Poppins">
                  Mo9awil<span className="text-orange-500">.</span>ma
                </h1>
              </div>
            </Link>
            <ul className="mt-4 sm:mt-0">
              <div className="mb-2">
                <a href="tel:2125371XXXXX">
                  <button className="px-4 rounded-xl text-sm font-medium flex py-2 gap-2 justify-center items-center bg-green-400 text-white outline-none focus:outline-none m-1 hover:m-0 focus:m-0 border border-green-500 hover:border-4 focus:border-4 hover:border-green-800 hover:text-green-800 focus:border-purple-200 active:border-grey-900 active:text-grey-900 transition-all">
                    <img
                      src="https://assets-global.website-files.com/603544f36c95c822aaf84300/612ce01f01897c1f5a2caced_icon%20_%20phone.svg"
                      alt=""
                    />
                    {!handleTel() && <span className="max-sm:hidden max-md:hidden">05371XXXXX</span>}
                    {handleTel() && <span className="max-sm:hidden max-md:hidden">Contactez-nous</span>}
                  </button>
                </a>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;