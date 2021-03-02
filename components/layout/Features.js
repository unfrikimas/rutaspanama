import React from "react"
import IconPersonal from '../icons/Personal'
import IconEjecutivo from '../icons/Ejecutivo'
import IconTurismo from '../icons/Turismo'
import IconPuerta from '../icons/Puerta'

const Features = () => {
  return (
    <div className="py-12 lg:py-16 mx-auto container f-f-p px-4 xl:px-16">
      <h2 className="lg:pb-20 text-center text-3xl lg:text-5xl tracking-wider text-marron">
        Servicios
      </h2>
      <div className="flex justify-center w-full items-center">
        <div className="w-12/12 f-f-p mt-12">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div className="py-10 px-4 lg:px-6 rounded-3xl bg-marron cursor-pointer">
              <IconPersonal width={60} height={60} fill={"#fff"} />
              <div className="mt-5">
                <h2 className="text-white text-2xl tracking-wide font-bold">
                  Transporte de Personal
                </h2>
                <h3 className="text-white mt-2 leading-6 text-sm lg:text-base tracking-wider">
                  Proveemos el mejor y más seguro servicio de transporte de personal. Recibe un trato exclusivo, cómodo y seguro en cada ruta.
                </h3>
              </div>
            </div>
            <div className="py-10 lg:ml-2 px-4 rounded-3xl bg-transparent cursor-pointer">
              <IconEjecutivo width={60} height={60} fill={"#342831"}/>
              <div className="mt-5">
                <h2 className="text-marron text-2xl tracking-wide font-bold">
                  Transporte Premium Ejecutivo
                </h2>
                <h3 className="text-color-para mt-2 leading-6 text-sm lg:text-base tracking-wider">
                  Convierte a Rutas Panamá en tu aliado estratégico para reuniones, convenciones, lanzamiento o eventos.
                </h3>
              </div>
            </div>
            <div className="pb-10 lg:py-10 px-4 rounded-3xl bg-transparent cursor-pointer">
              <IconTurismo width={60} height={60} fill={"#342831"}/>
              <div className="mt-5">
                <h1 className="text-marron text-2xl tracking-wide font-bold">
                  Transporte Especial y de Turismo
                </h1>
                <h2 className="text-color-para mt-2 leading-6 text-sm lg:text-base tracking-wider">
                    Somos la mejor opción para recorrer cada rincón de nuestro país y hacer de tus viajes una experiencia inolvidable. Nuestra flota se adapta a tus viajes familiares, de aventura y entretenimiento.
                </h2>
              </div>
            </div>
            <div className="pb-10 lg:py-10 px-4 rounded-3xl bg-transparent cursor-pointer">
              <IconPuerta className="-ml-1" width={60} height={60} fill={"#342831"}/>
              <div className="mt-5">
                <h1 className="text-marron text-2xl tracking-wide font-bold">
                  Traslados Puerta a Puerta
                </h1>
                <h2 className="text-color-para mt-2 leading-6 text-sm lg:text-base tracking-wider">
                    Manejamos la mejor logística de transporte, te aseguramos puntualidad, seguridad y confiabilidad con sus colaboradores.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
