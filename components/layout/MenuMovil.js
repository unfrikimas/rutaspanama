import React, { useState } from "react"
import Link from 'next/link'

const MenuMovil = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="">
      <div className="container">
        <div className="mb-2">
          {/* Code block starts */}
          <div className="relative">
            <div
              className="bg-white dark:bg-gray-800 flex items-center p-1 cursor-pointer hover:bg-gray-100"
              onClick={() => setShow(!show)}
              onBlur={() => setShow(false)}
            >
              <div className="cursor-pointer text-marron dark:text-gray-200">
                {show ? (
                  <svg
                    aria-label="Close"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
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
                ) : (
                  <svg
                    aria-haspopup="true"
                    aria-label="Main Menu"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
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
                )}
              </div>
            </div>
            {show && (
              <ul className="visible transition duration-300 opacity-100 bg-white dark:bg-gray-800 shadow-lg rounded mt-2 w-48 px-2 py-5 absolute right-0">
                <Link href="/">
                  <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-xl leading-3 tracking-normal py-5 hover:bg-gray-100 px-3 font-normal">
                    <a>Inicio</a>
                  </li>
                </Link>
                <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-xl leading-3 tracking-normal py-5 hover:bg-gray-100 px-3 font-normal">
                  Servicios
                </li>
                <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-xl leading-3 tracking-normal py-5 hover:bg-gray-100 px-3 font-normal">
                  Nosotros
                </li>
                <Link href="/contacto">
                  <li className="cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-xl leading-3 tracking-normal py-5 hover:bg-gray-100 px-3 font-normal">
                    <a>Contacto</a>
                  </li>
                </Link>
              </ul>
            )}
          </div>
          {/* Code block ends */}
        </div>
      </div>
    </div>
  );
};
export default MenuMovil;
