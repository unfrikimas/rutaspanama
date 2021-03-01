import React, { useState } from "react"
import Link from 'next/link'
import LogoYellow from '../layout/LogoYellow'
import { Transition } from "@headlessui/react";
import MenuMovil from '../layout/MenuMovil'

const Header = () => {

  const [menuMobile, setMenuMobile] = useState(false)

  return (
    <div className="lg:px-6 xl:px-0">
      <div className="container mx-auto relative z-20">
        <nav className="w-full absolute">
          <div className="hidden lg:flex w-full f-f-p justify-between items-center py-6 relative">
            <div className="w-2/3 cursor-pointer">
              <Link href="/">
                <LogoYellow width={200} height={79} />
              </Link>
            </div>
            <div className="md:w-1/3 xl:w-1/4">
              <ul className="flex justify-between w-full items-center text-gray-600">
                <li className="border-custom pb-1">
                  <a href="">Inicio</a>
                </li>
                <li className="border-custom-trans pb-1">
                  <a href="">Servicios</a>
                </li>
                <li className="border-custom-trans pb-1">
                  <a href="">Nosotros</a>
                </li>
                <li className="border-custom-trans pb-1">
                  <Link href="/contacto" passHref>
                    <a href="">Contacto</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        {/* <Transition
            show={menuMobile}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            {(refm) => (

          <div 
            ref={refm}
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg bg-white ring-1 ring-primario ring-opacity-6 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <LogoYellow width={200} height={79} />
                </div>
                <div className="-mr-2">
                  { menuMobile && (
                    <button
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primario"
                      onClick={() => setMenuMobile(!menuMobile)}
                      onBlur={() => setMenuMobile(false)}
                    >
                      <span className="sr-only">Close main menu</span>
                      <svg
                        className="h-8 w-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              <div
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                  <div>
                    <div>
                      <a
                        className="inline-block mx-3 py-2 text-base font-medium text-gray-500 border-b-2 border-gray-200"
                        // role="menuitem"
                      >
                        Servicios
                      </a>
                    </div>
                    <div className="ml-4">
                      <Link href="/planilla">
                      <a
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                        role="menuitem"
                      >
                        Administración de Planilla
                      </a>
                      </Link>
                      <Link href="/latintopjobs">
                      <a
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                        role="menuitem"
                      >
                        Latin Top Jobs
                      </a>
                      </Link>
                      <Link href="/serviciosfinancieros">
                      <a
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                        role="menuitem"
                      >
                        Servicios Financieros
                      </a>
                      </Link>
                    </div>
                  </div>
                  <Link href="/nosotros">
                  <a
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    role="menuitem"
                  >
                    Nosotros
                  </a>
                  </Link>
                </div>
                <div role="none">
                  <Link href="/contacto">
                    <a
                      className="block w-full px-5 py-3 text-center font-medium text-primario bg-gray-50 hover:bg-gray-100"
                      role="menuitem"
                    >
                      Contactar
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          )}
          </Transition> */}


        <div className="lg:hidden relative">
          <div className="flex py-6 justify-between px-4">

            <div className="cursor-pointer">
              <Link href="/">
                <LogoYellow width={150} height={59} />
              </Link>
            </div>
            
            <MenuMovil />
    
            {/* <div className="visible flex items-center">
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
                <button
                  id="open"
                  className="show-m-menu icon icon-tabler icon-tabler-menu"
                  onclick={() => setMenuMobile(!menuMobile)}
                >
                  <svg
                    aria-haspopup="true"
                    aria-label="Main Menu"
                    xmlns="http://www.w3.org/2000/svg"
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
                </button>

                <div
                  id="close"
                  className="hidden close-m-menu"
                  onclick={() => setMenuMobile(!menuMobile)}
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
            </div> */}

          </div>
        </div>


      </div>
    </div>
  );
};

export default Header;
