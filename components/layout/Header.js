import React from "react";
import LogoYellow from '../layout/LogoYellow'

const Header = () => {
  return (
    <div className="lg:px-6 xl:px-0">
      <div className="container mx-auto relative z-20">
        <nav className="w-full absolute">
          <div className="hidden lg:flex w-full f-f-p justify-between items-center py-6 relative">
            <div className="w-2/3">
              <LogoYellow width={200} height={79} />
            </div>
            <div className="md:w-1/2 xl:w-1/3">
              <ul className="flex justify-between w-full items-center text-gray-600">
                <li className="border-custom pb-1">
                  <a href="">Home</a>
                </li>
                <li className="border-custom-trans pb-1">
                  <a href="">Servicios</a>
                </li>
                <li className="border-custom-trans pb-1">
                  <a href="">Nosotros</a>
                </li>
                <li className="border-custom-trans pb-1">
                  <a href="">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className="lg:hidden">
          <div className="flex py-6 justify-between items-center px-4">
            <div>
              <LogoYellow width={150} height={59} />
            </div>
            <div className="visible flex items-center">
              <ul
                id="list"
                className="hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16"
              >
                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                  <a href="#">
                    <span className="ml-2 font-bold">Home</span>
                  </a>
                </li>
                <li
                  className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none justify-center"
                  onclick="dropdownHandler(this)"
                >
                  <a href="#">
                    <span className="ml-2 font-bold">Servicios</span>
                  </a>
                </li>
                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700  items-center focus:text-indigo-700 focus:outline-none">
                  <a href="#">
                    <span className="ml-2 font-bold">Nosotros</span>
                  </a>
                </li>
                <li
                  className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center"
                  onclick="dropdownHandler(this)"
                >
                  <a href="#">
                    <span className="ml-2 font-bold">Contacto</span>
                  </a>
                </li>
              </ul>
              <div className="xl:hidden">
                <svg
                  id="open"
                  onclick="MenuHandler(true)"
                  aria-haspopup="true"
                  aria-label="Main Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="show-m-menu icon icon-tabler icon-tabler-menu"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <line x1="4" y1="8" x2="20" y2="8"></line>
                  <line x1="4" y1="16" x2="20" y2="16"></line>
                </svg>
                <div
                  id="close"
                  className="hidden close-m-menu"
                  onclick="MenuHandler(false)"
                >
                  <svg
                    aria-label="Close"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
