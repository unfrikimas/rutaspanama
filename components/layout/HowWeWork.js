import React from "react"
import IconSeguridad from '../icons/Seguridad'
import IconIso from '../icons/Iso'
import IconAtencion from '../icons/Atencion'

const HowWeWork = () => {
  return (
    <div className="py-12 lg:pt-36 mx-auto container f-f-p px-4 xl:px-0">
      <h2 className="text-center text-3xl lg:text-5xl tracking-wider text-marron">
        Cómo trabajamos
      </h2>
      <div className="md:mt-36 f-f-p">
        <div className="hidden md:flex justify-center w-full">
          <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
            <IconSeguridad className="mt-24 mb-24" width={60} height={60} fill={"#342831"} />
            <svg
              className="mt-24"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle
                cx="24"
                cy="24"
                r="23.5"
                transform="rotate(90 24 24)"
                fill="#ffc803"
                stroke=""
              />
              <path
                d="M18.224 31.248C20.256 29.616 21.848 28.28 23 27.24C24.152 26.184 25.12 25.088 25.904 23.952C26.704 22.8 27.104 21.672 27.104 20.568C27.104 19.528 26.848 18.712 26.336 18.12C25.84 17.512 25.032 17.208 23.912 17.208C22.824 17.208 21.976 17.552 21.368 18.24C20.776 18.912 20.456 19.816 20.408 20.952H18.296C18.36 19.16 18.904 17.776 19.928 16.8C20.952 15.824 22.272 15.336 23.888 15.336C25.536 15.336 26.84 15.792 27.8 16.704C28.776 17.616 29.264 18.872 29.264 20.472C29.264 21.8 28.864 23.096 28.064 24.36C27.28 25.608 26.384 26.712 25.376 27.672C24.368 28.616 23.08 29.72 21.512 30.984H29.768V32.808H18.224V31.248Z"
                fill="#342931"
              />
            </svg>
            <div className="flex mt-12 flex-col lg:items-end md:w-8/12">
              <h1 className="text-2xl tracking-wide font-semibold text-marron">
                Certificación ISO 9001
              </h1>
              <h2 className="text-colo-para mt-3 md:text-right text-base leading-6 tracking-wide">
                Nuestra Política de Calidad nos posiciona como una empresa
                enfocada en brindar un servicio de transporte terrestre a
                empleados, ejecutivos y turistas que excede las expectativas del
                cliente, a través de un servicio seguro, puntual y cómodo
                brindado por personal altamente calificado y comprometido que
                busca la mejora continua mediante el seguimiento, medición,
                análisis y evaluación de la eficacia de nuestro Sistema de
                Gestión de la Calidad certificado bajo la norma Internacional
                ISO 9001.
              </h2>
            </div>

            <IconAtencion className="mt-36 mb-48" width={60} height={60} fill={"#342831"} />
            
            <img
              className="hidden md:block absolute right-0 top-0 -mt-2 -mr-1"
              src="/images/line_yellow.png"
              alt=""
            />
          </div>


          <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle
                cx="24"
                cy="24"
                r="24"
                transform="rotate(90 24 24)"
                fill="#ffc803"
              />
              <path
                d="M21.912 17.64V15.648H26.424V33H24.216V17.64H21.912Z"
                fill="#342831"
              />
            </svg>
            <div className="flex mt-12 flex-col md:items-start md:w-8/12">
              <h1 className="text-2xl tracking-wide font-semibold text-marron">
                Comprometidos con la Seguridad
              </h1>
              <h2 className="text-colo-para mt-3 text-base leading-6 tracking-wide">
                En Rutas Panamá practicamos y compartimos la pasión por la
                seguridad y la consideramos como un factor clave durante la
                prestación de nuestros servicios de transporte, logrando un
                entorno de trabajo seguro para nuestros empleados y clientes
                mediante un constante y minucioso proceso de revisión y
                mantenimiento de nuestra flota.
              </h2>
            </div>
            
            <IconIso className="mt-36 mb-48" width={60} height={60} fill={"#342831"} />

            <svg
              className="mt-20"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle
                cx="24"
                cy="24"
                r="23.5"
                transform="rotate(90 24 24)"
                fill="#ffc803"
                stroke=""
              />
              <path
                d="M17.44 20.016C17.552 18.544 18.12 17.392 19.144 16.56C20.168 15.728 21.496 15.312 23.128 15.312C24.216 15.312 25.152 15.512 25.936 15.912C26.736 16.296 27.336 16.824 27.736 17.496C28.152 18.168 28.36 18.928 28.36 19.776C28.36 20.768 28.072 21.624 27.496 22.344C26.936 23.064 26.2 23.528 25.288 23.736V23.856C26.328 24.112 27.152 24.616 27.76 25.368C28.368 26.12 28.672 27.104 28.672 28.32C28.672 29.232 28.464 30.056 28.048 30.792C27.632 31.512 27.008 32.08 26.176 32.496C25.344 32.912 24.344 33.12 23.176 33.12C21.48 33.12 20.088 32.68 19 31.8C17.912 30.904 17.304 29.64 17.176 28.008H19.288C19.4 28.968 19.792 29.752 20.464 30.36C21.136 30.968 22.032 31.272 23.152 31.272C24.272 31.272 25.12 30.984 25.696 30.408C26.288 29.816 26.584 29.056 26.584 28.128C26.584 26.928 26.184 26.064 25.384 25.536C24.584 25.008 23.376 24.744 21.76 24.744H21.208V22.92H21.784C23.256 22.904 24.368 22.664 25.12 22.2C25.872 21.72 26.248 20.984 26.248 19.992C26.248 19.144 25.968 18.464 25.408 17.952C24.864 17.44 24.08 17.184 23.056 17.184C22.064 17.184 21.264 17.44 20.656 17.952C20.048 18.464 19.688 19.152 19.576 20.016H17.44Z"
                fill="#342931"
              />
            </svg>
            <div className="flex mt-12 flex-col md:items-start md:w-8/12">
              <h1 className="text-2xl tracking-wide font-semibold text-marron">
                Atención 365 días / 24 horas
              </h1>
              <h2 className="text-colo-para mt-3 text-base leading-6 tracking-wide">
                Contamos con un equipo altamente calificado de colaboradores
                trabajando día a día en conjunto con nuestra sede principal en
                Panamá, manejando los mas altos estándares de calidad
                reconocidos a nivel internacional.
              </h2>
            </div>
          </div>
        </div>
        <div className="md:hidden flex flex-col items-center w-full">
          <div className="mt-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle
                cx="24"
                cy="24"
                r="24"
                transform="rotate(90 24 24)"
                fill="#ffc803"
              ></circle>
              <path
                d="M21.912 17.64V15.648H26.424V33H24.216V17.64H21.912Z"
                fill="#342931"
              ></path>
            </svg>
          </div>
          <div className="mt-10 px-4">
            <h2 className="text-2xl tracking-wide font-semibold">
              Comprometidos con la Seguridad</h2>
            <h3 className="text-colo-para mt-3 text-sm leading-6 tracking-wide">
              En Rutas Panamá practicamos y compartimos la pasión por la
              seguridad y la consideramos como un factor clave durante la
              prestación de nuestros servicios de transporte, logrando un
              entorno de trabajo seguro para nuestros empleados y clientes
              mediante un constante y minucioso proceso de revisión y
              mantenimiento de nuestra flota.
            </h3>
          </div>

          <div className="mt-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle
                cx="24"
                cy="24"
                r="23.5"
                transform="rotate(90 24 24)"
                fill="#ffc803"
                stroke=""
              ></circle>
              <path
                d="M18.224 31.248C20.256 29.616 21.848 28.28 23 27.24C24.152 26.184 25.12 25.088 25.904 23.952C26.704 22.8 27.104 21.672 27.104 20.568C27.104 19.528 26.848 18.712 26.336 18.12C25.84 17.512 25.032 17.208 23.912 17.208C22.824 17.208 21.976 17.552 21.368 18.24C20.776 18.912 20.456 19.816 20.408 20.952H18.296C18.36 19.16 18.904 17.776 19.928 16.8C20.952 15.824 22.272 15.336 23.888 15.336C25.536 15.336 26.84 15.792 27.8 16.704C28.776 17.616 29.264 18.872 29.264 20.472C29.264 21.8 28.864 23.096 28.064 24.36C27.28 25.608 26.384 26.712 25.376 27.672C24.368 28.616 23.08 29.72 21.512 30.984H29.768V32.808H18.224V31.248Z"
                fill="#342931"
              ></path>
            </svg>
          </div>
          <div className="mt-10 px-4">
            <h2 className="text-2xl tracking-wide font-semibold">
              Certificación ISO 9001
            </h2>
            <h3 className="text-colo-para mt-3 text-sm leading-6 tracking-wide">
              Nuestra Política de Calidad nos posiciona como una empresa
              enfocada en brindar un servicio de transporte terrestre a
              empleados, ejecutivos y turistas que excede las expectativas del
              cliente, a través de un servicio seguro, puntual y cómodo brindado
              por personal altamente calificado y comprometido que busca la
              mejora continua mediante el seguimiento, medición, análisis y
              evaluación de la eficacia de nuestros Sistema de Gestión de la
              Calidad certificado bajo la norma Internacional ISO 9001.
            </h3>
          </div>

          <div className="mt-16">   
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <circle
                cx="24"
                cy="24"
                r="23.5"
                transform="rotate(90 24 24)"
                fill="#ffc803"
                stroke=""
              ></circle>
              <path
                d="M17.44 20.016C17.552 18.544 18.12 17.392 19.144 16.56C20.168 15.728 21.496 15.312 23.128 15.312C24.216 15.312 25.152 15.512 25.936 15.912C26.736 16.296 27.336 16.824 27.736 17.496C28.152 18.168 28.36 18.928 28.36 19.776C28.36 20.768 28.072 21.624 27.496 22.344C26.936 23.064 26.2 23.528 25.288 23.736V23.856C26.328 24.112 27.152 24.616 27.76 25.368C28.368 26.12 28.672 27.104 28.672 28.32C28.672 29.232 28.464 30.056 28.048 30.792C27.632 31.512 27.008 32.08 26.176 32.496C25.344 32.912 24.344 33.12 23.176 33.12C21.48 33.12 20.088 32.68 19 31.8C17.912 30.904 17.304 29.64 17.176 28.008H19.288C19.4 28.968 19.792 29.752 20.464 30.36C21.136 30.968 22.032 31.272 23.152 31.272C24.272 31.272 25.12 30.984 25.696 30.408C26.288 29.816 26.584 29.056 26.584 28.128C26.584 26.928 26.184 26.064 25.384 25.536C24.584 25.008 23.376 24.744 21.76 24.744H21.208V22.92H21.784C23.256 22.904 24.368 22.664 25.12 22.2C25.872 21.72 26.248 20.984 26.248 19.992C26.248 19.144 25.968 18.464 25.408 17.952C24.864 17.44 24.08 17.184 23.056 17.184C22.064 17.184 21.264 17.44 20.656 17.952C20.048 18.464 19.688 19.152 19.576 20.016H17.44Z"
                fill="#342931"
              ></path>
            </svg>
          </div>
          <div className="mt-10 px-4">
            <h2 className="text-2xl tracking-wide font-semibold">
              Atención 365 días / 24 horas
            </h2>
            <h3 className="text-colo-para mt-3 text-sm leading-6 tracking-wide">
              Contamos con un equipo altamente calificado de colaboradores
              trabajando día a día en conjunto con nuestra sede principal en
              Panamá, manejando los mas altos estándares de calidad reconocidos
              a nivel internacional.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
