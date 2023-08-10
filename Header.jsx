import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
    return (
      <>
        <div>
        <header className="fixed inset-x-0 top-0 z-50 bg-slate-600">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <Link to="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Jiak</span>
                <img
                  className="h-8 w-auto"
                  src="https://assets.turbologo.com/blog/en/2019/11/19084834/gaming-logo-cover.jpg"
                  alt=""
                />
              </Link>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link
                to="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Cloud Eatery
              </Link>
              <Link
                to="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Pick Up
              </Link>
              <Link
                to="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                About Us
              </Link>
              <Link
                to="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                How it Works
              </Link>
              <Link
                to="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                FAQ
              </Link>
              <Link
                to="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Blogs
              </Link>
              <Link
                to="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Contact Us
              </Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                For Partners
              </button>
              <Link to="/auth/register">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Sign Up
                  </span>
                </button>
              </Link>
              <Link to="/auth/login">
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Login
                </button>
              </Link>
            </div>
          </nav>
        </header>
      </div>
      </>
    );
  }