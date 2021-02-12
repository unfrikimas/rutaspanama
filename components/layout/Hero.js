import React from "react";

const Hero = () => {
  return (
    <div className="lg:px-6 xl:px-0">
      <div className="mx-auto container relative z-0 px-4 xl:px-0">
        <div className="flex flex-col-reverse md:flex-row">
          <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48">
            <h1 className="text-5xl lg:text-6xl xl:text-8xl font-black text-center md:text-left tracking-tight f-f-i md:w-7/12 leading-tight text-marron">
              Transporte Privado Ejecutivo
            </h1>
            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-colo-para text-lg lg:text-2xl">
            Empresa 100% panameña con más de 13 años de experiencia. Comprometidos con la satisfaccion y bienestar de cada uno de nuestros clientes.
            </h2>
            <div className="w-full flex justify-center md:block">
              <button className="bg-amarillo py-4 px-10 lg:py-7 lg:px-20 rounded-3xl text-marron text-sm md:text-2xl f-f-p">
                Contactar
              </button>
            </div>
          </div>
          <div className="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
            {/* <img className="h-full" src="/images/Rectangle.png" alt="Device" /> */}
            <img
              className="md:absolute md:w-1/2 md:-ml-28"
              src="images/Device - Macbook Pro.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
