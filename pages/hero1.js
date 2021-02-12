import React, { useState } from "react";
import Logo from "../components/layout/Logo";
import LogoYellow from "../components/layout/LogoYellow";

function IndexPage() {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="max-w-7xl mx-auto relative px-6 lg:px-4">
        <nav>
          <div className="lg:flex justify-between w-full py-6 hidden flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="">
              <Logo width={200} height={79} />
            </div>
            <div className="flex items-center justify-center">
              <ul className="font-normal text-lg flex space-x-8 items-center text-gray-700">
                <li className="cursor-pointer">
                  <a href="javascript:void(0)">Servicios</a>
                </li>
                <li className="cursor-pointer">
                  <a href="javascript:void(0)">Nosotros</a>
                </li>
                <li className="cursor-pointer">
                  <a href="javascript:void(0)">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="lg:hidden py-4">
          <div className="flex py-2 justify-between items-center">
            <div>
              <Logo width={150} height={59} />
            </div>
            <div className=" flex items-center">
              {show && (
                <ul
                  id="list"
                  className=" py-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-20 md:px-4 md:mt-20 z-20"
                >
                  <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                    <a href="javascript:void(0)">
                      <span className="ml-2 font-bold">Servicios</span>
                    </a>
                  </li>
                  <li
                    className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none justify-center"
                    onclick="dropdownHandler(this)"
                  >
                    <a href="javascript:void(0)">
                      <span className="ml-2 font-bold">Nosotros</span>
                    </a>
                  </li>
                  <li className=" cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                    <a href="javascript:void(0)">
                      <span className="ml-2 font-bold">Contacto</span>
                    </a>
                  </li>
                </ul>
              )}
              <div className="xl:hidden " onClick={() => setShow(!show)}>
                {show ? (
                  <svg
                    aria-label="Close"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                ) : (
                  <div className=" close-m-menu" onclick="MenuHandler(false)">
                    <svg
                      onclick="MenuHandler(true)"
                      aria-haspopup="true"
                      aria-label="Main Menu"
                      xmlns="http://www.w3.org/2000/svg"
                      className="show-m-menu icon icon-tabler icon-tabler-menu"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <line x1={4} y1={8} x2={20} y2={8} />
                      <line x1={4} y1={16} x2={20} y2={16} />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center">
          <div className="xl:mt-8">
            <div className="text-3xl lg:text-6xl xl:text-8xl text-gray-600 tracking-1px font-extrabold">
              <h1 className="mt-2 lg:mt-0">Transporte</h1>
              <h1 className="mt-2 lg:mt-0 text-primario">Ejecutivo</h1>
            </div>
            <h2 className="text-lg lg:text-2xl tracking-normal leading-9 lg:w-10/12 mt-2 lg:mt-6 text-gray-700">
              Empresa 100% panameña con más de 13 años de experiencia.
            </h2>
            <button className="flex items-center focus:outline-none justify-center mt-5 lg:mt-10 text-lg lg:text-2xl font-medium text-white p-4 lg:p-8 bg-primario rounded-3xl">
              Contactar
              <svg
                className="ml-8"
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={17}
                viewBox="0 0 26 17"
                fill="none"
              >
                <path
                  d="M1.33333 8.6665H24.6667"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 15.3332L24.6667 8.6665"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 2L24.6667 8.66667"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="w-4/5 flex items-center justify-self-end mt-8 lg:mt-0 rounded-3xl relative">
            <img
              class="w-full h-auto"
              src="https://i.ibb.co/80XYkkr/image.png"
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
