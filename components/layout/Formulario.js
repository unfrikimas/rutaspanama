import React from "react";

const Formulario = () => {
  return (
    <div className="lg:pt-40 px-4 lg:px-8">
      <div className="f-f-p py-12 mx-auto container px-4 lg:px-0">
        <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-marron">
          Contáctanos
        </h1>
        <div className="mt-12 lg:mt-24">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg py-10 rounded-3xl flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={52}
                height={52}
                viewBox="0 0 52 52"
                fill="none"
              >
                <path
                  d="M7.64706 2H18.9412L24.5882 16.1866L17.5294 20.4426C20.5533 26.6039 25.5157 31.5905 31.6471 34.6291L35.8824 27.5358L50 33.2105V44.5597C50 46.0647 49.405 47.5081 48.346 48.5723C47.287 49.6365 45.8506 50.2344 44.3529 50.2344C33.3391 49.5618 22.951 44.8619 15.1487 37.0215C7.34636 29.1811 2.66932 18.7423 2 7.67463C2 6.16963 2.59496 4.72626 3.65398 3.66206C4.71301 2.59786 6.14937 2 7.64706 2Z"
                  stroke="#342931"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="text-lg font-bold tracking-wide mt-4 mb-5 text-gray-900">
                Teléfonos
              </h2>
              <p className="text-base font-normal tracking-wide text-color-para">
                +507 399 9062
              </p>
              <p className="text-base font-normal tracking-wide text-color-para mt-4">
                +507 6788 3883
              </p>
            </div>
            <div className="bg-white shadow-lg py-10 rounded-3xl flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={52}
                height={52}
                viewBox="0 0 50 51"
                fill="none"
              >
                <path
                  d="M1 10.0439L17 1L33 10.0439L49 1V40.1904L33 49.2344L17 40.1904L1 49.2344V10.0439Z"
                  stroke="#342931"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 1V40.1904"
                  stroke="#342931"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33 10.0439V49.2344"
                  stroke="#342931"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="text-lg font-bold tracking-wide mt-4 mb-5 text-marron">
                Ubicación
              </h2>
              <div className="text-color-para text-base tracking-wide text-center">
                <p className="leading-7">Panamá</p>
                <p className="leading-7">Panamá</p>
                <p className="leading-7">Panamá</p>
              </div>
            </div>
            <div className="bg-white shadow-lg py-10 rounded-3xl flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={51}
                viewBox="0 0 50 51"
                fill="none"
              >
                <path
                  d="M25 49.2344C38.2548 49.2344 49 38.4367 49 25.1172C49 11.7976 38.2548 1 25 1C11.7452 1 1 11.7976 1 25.1172C1 38.4367 11.7452 49.2344 25 49.2344Z"
                  stroke="#342931"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 11.7183V25.117L33 33.1562"
                  stroke="#342931"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="text-lg font-bold tracking-wide mt-4 mb-5 text-marron">
                Horario de oficina
              </h2>
              <div className="text-color-para text-base tracking-wide text-center">
                <p className="leading-7">Lunes a Viernes</p>
                <p className="leading-7">(8:00 am - 5:00 pm)</p>
                <p className="leading-7">Sábados</p>
                <p>(8:00 am - 2:00 pm)</p>
              </div>
            </div>
            <div className="bg-white shadow-lg py-10 rounded-3xl flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={64}
                height={51}
                viewBox="0 0 64 51"
                fill="none"
              >
                <path
                  d="M55.8571 1H7.85714C4.07004 1 1 4.08504 1 7.89062V42.3438C1 46.1493 4.07004 49.2344 7.85714 49.2344H55.8571C59.6442 49.2344 62.7142 46.1493 62.7142 42.3438V7.89062C62.7142 4.08504 59.6442 1 55.8571 1Z"
                  stroke="#342931"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 7.89014L31.8571 28.562L62.7142 7.89014"
                  stroke="#342931"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="text-lg font-bold tracking-wide mt-4 mb-5 text-marron">
                E-mail
              </h2>
              <div className="text-color-para text-base tracking-wide text-center">
                <p className>rutaspanama@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto pb-16 lg:pb-32 f-f-p container lg:mt-24 mt-12 px-4 xl:px-0">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          <div className="flex flex-col my-8 lg:my-0 xl:my-0">
            <label
              htmlFor="city"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
            >
              <span className="tracking-wide text-marron text-2xl font-semibold leading-10">
                Nombre
              </span>
            </label>
            <input
              id="city"
              className="focus:outline-none text-gray-700 focus:border focus:border-gray-800 font-normal w-full h-10 flex items-center mt-4 text-lg border-gray-400 border-b pb-2"
              placeholder="Tu nombre"
            />
          </div>
          <div className="flex flex-col my-8 lg:my-0 xl:my-0">
            <label
              htmlFor="city"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
            >
              <span className="tracking-wide text-marron text-2xl font-semibold leading-10">
                Email
              </span>
            </label>
            <input
              id="city"
              className="focus:outline-none focus:border text-gray-700 focus:border-gray-800 font-normal w-full h-10 flex items-center mt-4 text-lg border-gray-400 border-b pb-2"
              placeholder="ejemplo@email.com"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-8 lg:mt-16 gap-8">
          <div className="flex flex-col my-8 lg:my-0 xl:my-0">
            <label
              htmlFor="city"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
            >
              <span className="tracking-wide text-marron text-2xl font-semibold leading-10">
                Teléfono
              </span>
            </label>
            <input
              id="city"
              className="focus:outline-none text-gray-700 focus:border focus:border-gray-800 font-normal w-full h-10 flex items-center mt-4 text-lg border-gray-400 border-b pb-2"
              placeholder="399 4684"
            />
          </div>
          <div className="flex flex-col my-8 lg:my-0 xl:my-0">
            <label
              htmlFor="city"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
            >
              <span className="tracking-wide text-marron text-2xl font-semibold leading-10">
                Empresa
              </span>
            </label>
            <input
              id="city"
              className="focus:outline-none text-gray-700 focus:border focus:border-gray-800 font-normal w-full h-10 flex items-center mt-4 text-lg border-gray-400 border-b pb-2"
              placeholder="399 4684"
            />
          </div>
        </div>
        <div className="mt-16">
          <div className="flex flex-col my-8 lg:my-0 xl:my-0">
            <label
              htmlFor="city"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
            >
              <span className="tracking-wide text-marron text-2xl font-semibold leading-10">
                Mensaje
              </span>
            </label>
            <textarea
              id="mensaje"
              type="textarea"
              rows="5"
              className="focus:outline-none text-gray-700 focus:border focus:border-gray-800 font-normal w-full h-50 flex items-center mt-4 text-lg border-gray-400 border-b pb-2"
              placeholder="Deja tu mensaje aquí..."
            ></textarea>
          </div>
        </div>

        <div className="flex justify-between w-full mx-auto md:w-1/2 pt-16 lg:pt-24">
          <button
            className="w-full flex items-center justify-center px-8 py-5 lg:py-6 border border-transparent text-2xl font-medium rounded-3xl text-white bg-marron md:py-4 md:px-10"
            type="submit"
          >
            Enviar mensaje
          </button>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
