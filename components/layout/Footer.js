import LogoYellow from '../layout/LogoYellow'

const Footer = (props) => {
  return (
    <div className="bg-white pt-28 pb-16 flex flex-col items-center justify-center f-f-l">
      <div className="w-full flex items-center justify-center mx-auto">
        <LogoYellow width={150} height={59} />
      </div>
      <div className="flex items-center space-x-6 py-12">
        <a className="cursor-pointer" href="https://www.facebook.com/Rutaspanama507/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 13 20"
            fill="none"
          >
            <path
              d="M1 8V12H4V19H8V12H11L12 8H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V8H1Z"
              stroke="#342931"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a className="cursor-pointer" href="https://www.instagram.com/rutas_panama507/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-instagram"
            width={38}
            height={38}
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="#342931"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x={4} y={4} width={16} height={16} rx={4} />
            <circle cx={12} cy={12} r={3} />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
        </a>
      </div>
      <div>
        <ul className="flex space-x-3 lg:space-x-10">
          <a href="/">
            <li className="text-base lg:text-lg leading-5 text-marron relative font-semibold cursor-pointer">
              Servicios
            </li>
          </a>
          <a href="/">
            <li className="text-base lg:text-lg leading-5 text-marron flex flex-col items-end justify-end font-semibold cursor-pointer">
              Nosotros
            </li>
          </a>
          <a href="/">
            <li className="text-base lg:text-lg leading-5 text-marron flex flex-col items-end justify-end font-semibold cursor-pointer">
              Contacto
            </li>
          </a>
        </ul>
      </div>
      <div className="pt-12 flex lg:items-start items-center">
        {/* <img
          loading="lazy"
          src="https://cdn.tuk.dev/assets/templates/foodies/tm.png"
          className=""
        /> */}
        <p className="lg:text-base text-xs text-marron leading-5 text-center">
          2021 Rutas Panamá. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};
export default Footer;
