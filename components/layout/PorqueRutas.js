import React from "react";
import IconFlota from "../icons/Flota";
import IconMonitoreo from "../icons/Monitoreo";
import IconRescate from "../icons/Rescate";
import IconWifi from "../icons/Wifi";
import IconGps from "../icons/Gps";
import IconApp from "../icons/App";

const PorqueRutas = () => {
  return (
    <div className="mx-auto container px-4 xl:px-16 py-16 xl:pt-36 f-f-p">
      <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-marron">
        Por qué Rutas Panamá
      </h1>
      <div className="w-full flex justify-center mt-12 lg:mt-36">
        <div className="hidden lg:block xl:w-12/12">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center justify-end pb-12 xl:pr-10">
                <div>
                  <IconFlota width={60} height={60} stroke={"#342831"} />
                </div>
                <div className="flex flex-col pl-8 xl:w-8/12">
                  <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-marron">
                    Amplia Flota
                  </h2>
                  <p className="text-colo-para leading-7 tracking-wide text-base mt-3">
                    Contamos con una amplia variedad de unidades entre Buses,
                    Mini Buses y Van en óptimas condiciones, para cubrir las
                    necesidades de cada uno de nuestros clientes.
                  </p>
                </div>
              </div>
              <div className="w-full hidden lg:flex justify-center">
                <hr className="w-7/12 border-t-2 border-yellow-300" />
              </div>
            </div>
            <div>
              <div className="vl border-b border-yellow-200 hidden lg:block absolute"></div>
              <div className="flex items-center justify-end pb-12 lg:ml-8 xl:ml-0 xl:pr-10">
                <div>
                  <IconMonitoreo width={60} height={60} stroke={"#342831"} />
                </div>
                <div className="flex flex-col pl-8 xl:w-8/12">
                  <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-marron">
                    Centro de Monitoreo
                  </h2>
                  <p className="text-colo-para leading-7 tracking-wide text-base mt-3">
                    Vigilancia las 24 horas del día, los 365 días del año con un
                    equipo capacitado en el uso de nuestra plataforma de GPS y
                    una central telefónica.
                  </p>
                </div>
              </div>
              <div className="w-full hidden lg:flex justify-center">
                <hr className="w-7/12 border-t-2 border-yellow-300" />
              </div>
            </div>
            <div>
              <div className="vl hidden lg:block absolute"></div>
              <div className="flex items-center justify-end pb-12 lg:ml-8 xl:ml-0 xl:pr-10">
                <div>
                  <IconRescate width={60} height={60} stroke={"#342831"} />
                </div>
                <div className="flex flex-col pl-8 xl:w-8/12">
                  <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-marron">
                    Unidad de Rescate
                  </h2>
                  <p className="text-colo-para leading-7 tracking-wide text-base mt-3">
                    Nuestra flota pasa por revisiones mecánicas y contamos con
                    unidad móvil disponible las 24 horas del día con personal
                    altamente capacitado.
                  </p>
                </div>
              </div>
              <div className="w-full hidden lg:flex justify-center">
                <hr className="w-7/12 border-t-2 border-yellow-300" />
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10 gap-8">
            <div>
              <div className="flex items-center justify-end pb-12 pr-10">
                <div>
                  <IconWifi width={60} height={60} stroke={"#342831"} />
                </div>
                <div className="flex flex-col pl-8 xl:w-8/12">
                  <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-marron">
                    Zona Wi-Fi
                  </h2>
                  <p className="text-colo-para leading-7 tracking-wide text-base mt-3">
                    Disponemos del mejor sistema de WIFI vehicular en el
                    mercado, disfruta de estar informado mientras te
                    movilizamos.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="vl hidden lg:block absolute"></div>
              <div className="flex items-center justify-end pb-12 lg:ml-8 xl:ml-0 xl:pr-10">
                <div>
                  <IconGps width={60} height={60} stroke={"#342831"} />
                </div>
                <div className="flex flex-col pl-8 xl:w-8/12">
                  <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-marron">
                    GPS Móvil
                  </h2>
                  <p className="text-colo-para leading-7 tracking-wide text-base mt-3">
                    Sistema de navegación y localización instalada en nuestra
                    unidades para el manejo de la información en tiempo real.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="vl hidden lg:block absolute"></div>
              <div className="flex items-center justify-end pb-12 lg:ml-8 xl:ml-0 xl:pr-10">
                <div>
                  <IconApp width={60} height={60} stroke={"#342831"} />
                </div>
                <div className="flex flex-col pl-8 xl:w-8/12">
                  <h2 className="text-base xl:text-2xl font-semibold tracking-wider text-marron">
                    App
                  </h2>
                  <p className="text-colo-para leading-7 tracking-wide text-base mt-3">
                    Herramienta móvil, donde podrás verificar tu ruta en tiempo
                    real, sencillo y fácil de utilizar. Lector de tarjetas para
                    el control y uso del servicio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden flex-wrap justify-between">
          <div className="md:flex w-full justify-between items-center">
            <div className="flex items-center">
              <div>
                <IconFlota width={60} height={60} stroke={"#342831"} />
              </div>
              <div className="flex flex-col pl-4">
                <h2 className="text-lg xl:text-2xl font-semibold tracking-wider text-marron">
                  Amplia Flota
                </h2>
                <p className="text-colo-para leading-6 tracking-wide text-sm mt-3">
                  Contamos con una amplia variedad de unidades entre Buses, Mini
                  Buses y Van en óptimas condiciones, para cubrir las
                  necesidades de cada uno de nuestros clientes.
                </p>
              </div>
            </div>
            <div className="flex items-center mt-10 md:mt-0">
              <div>
                <IconMonitoreo width={60} height={60} stroke={"#342831"} />
              </div>
              <div className="flex flex-col pl-4">
                <h2 className="text-lg xl:text-2xl font-semibold tracking-wider text-marron">
                  Centro de Monitoreo
                </h2>
                <p className="text-colo-para leading-6 tracking-wide text-sm mt-3">
                  Vigilancia las 24 horas del día, los 365 días del año con un
                  equipo capacitado en el uso de nuestra plataforma de GPS y una
                  central telefónica.
                </p>
              </div>
            </div>
          </div>
          <div className="md:flex w-full justify-between items-center my-10">
            <div className="flex items-center">
              <div>
                <IconRescate width={60} height={60} stroke={"#342831"} />
              </div>
              <div className="flex flex-col pl-4">
                <h2 className="text-lg xl:text-2xl font-semibold tracking-wider text-marron">
                  Unidad de Rescate
                </h2>
                <p className="text-colo-para leading-6 tracking-wide text-sm mt-3">
                  Nuestra flota pasa por revisiones mecánicas y contamos con
                  unidad móvil disponible las 24 horas del día con personal
                  altamente capacitado.
                </p>
              </div>
            </div>
            <div className="mt-10 md:mt-0">
              <div className="flex items-center">
                <div>
                  <IconWifi width={60} height={60} stroke={"#342831"} />
                </div>
                <div className="flex flex-col pl-4">
                  <h2 className="text-lg xl:text-2xl font-semibold tracking-wider text-marron">
                    Zona Wi-Fi
                  </h2>
                  <p className="text-colo-para leading-6 tracking-wide text-sm mt-3">
                    Disponemos del mejor sistema de WIFI vehicular en el
                    mercado, disfruta de estar informado mientras te
                    movilizamos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex w-full justify-between items-center">
            <div>
              <div className="flex items-center">
                <div>
                  <IconGps width={60} height={60} stroke={"#342831"} />
                </div>
                <div className="flex flex-col pl-4">
                  <h2 className="text-lg xl:text-2xl font-semibold tracking-wider text-marron">
                    GPS Móvil
                  </h2>
                  <p className="text-colo-para leading-6 tracking-wide text-sm mt-3">
                    Sistema de navegación y localización instalada en nuestra
                    unidades para el manejo de la información en tiempo real.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 md:mt-0">
              <div className="flex items-center">
                <div>
                  <IconApp width={60} height={60} stroke={"#342831"} />
                </div>
                <div className="flex flex-col pl-5">
                  <h2 className="text-lg xl:text-2xl font-semibold tracking-wider text-marron">
                    App
                  </h2>
                  <p className="text-colo-para leading-6 tracking-wide text-sm mt-3">
                    Herramienta móvil, donde podrás verificar tu ruta en tiempo
                    real, sencillo y fácil de utilizar. Lector de tarjetas para
                    el control y uso del servicio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PorqueRutas;
