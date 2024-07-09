import { Link } from "react-router-dom";

export default function Footer() {
  function isHome() {
    return window.location.href.includes("services") ? false : true;
  }

  return (
    <>
      {isHome() && (
        <footer className="w-full bg-white py-4 border-t border-gray-200">
          <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
            <div className="text-center sm:text-left">
              <Link
                to="/"
                className="text-blue-950 font-bold text-lg sm:text-xl font-Poppins"
              >
                Mo9awil<span className="text-orange-500">.</span>ma
              </Link>
              <p className="text-sm text-gray-600 mt-1">
                © 2024 Mo9awil.ma. All rights reserved.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-4">
              <Link to="/about" className="text-gray-600 hover:text-blue-900">
                About
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-900">
                Contact
              </Link>
              <Link to="/privacy" className="text-gray-600 hover:text-blue-900">
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
