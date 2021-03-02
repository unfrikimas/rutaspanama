import React from "react";
function IndexPage() {
  return (
    <>
      <div className="pt-12 xl:pt-28 mx-auto container f-f-p px-4 xl:px-16">
        <h2 className="xl:pb-12 text-center text-3xl xl:text-5xl tracking-wider text-marron">
          Nuestra flota
        </h2>
        <div className="mx-auto container pt-12 xl:pt-0">
          <div className="xl:pt-12 w-full lg:flex xl:px-0 px-4">
            <div className="lg:w-1/2 h-96 w-full relative lg:mb-0 mb-8 lg:mr-8">
              <img
                src="https://res.cloudinary.com/petportrait/image/upload/v1614711873/carlosenriquedev/bus-4_idu8tt.jpg"
                className="rounded-3xl absolute z-10 inset-0 w-full h-full object-cover object-center"
              />
              <div className="left-0 bg-white bottom-0 mx-6 mb-3 absolute z-20 rounded-xl">
                <div className="px-6 py-3">
                  <h3 className="f-m-m text-2xl">
                    <span className="font-semibold">Toyota</span>
                  </h3>
                  <h4 className="f-m-m">3000</h4>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 h-96 w-full relative lg:mb-0 mb-8 lg:mr-8">
              <img
                src="https://res.cloudinary.com/petportrait/image/upload/v1614711873/carlosenriquedev/bus-5_ao05up.jpg"
                className="rounded-3xl absolute z-10 inset-0 w-full h-full object-cover object-center"
              />
              <div className="left-0 bg-white bottom-0 mx-6 mb-3 absolute z-20 rounded-xl">
                <div className="px-6 py-3">
                  <h3 className="f-m-m text-2xl">
                    <span className="font-semibold">Sala de</span>
                  </h3>
                  <h4 className="f-m-m">Espera</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex items-center justify-between lg:mt-5 xl:mt-8 xl:px-0 px-4">
            <div className="lg:w-1/3 w-full relative h-96 lg:mb-0 mb-8 lg:mr-8">
              <img
                src="https://res.cloudinary.com/petportrait/image/upload/v1614711872/carlosenriquedev/bus-1_u4fwba.jpg"
                className="rounded-3xl absolute z-0 inset-0 w-full h-full object-cover object-center"
              />
              <div className="left-0 absolute z-20 bg-white bottom-0 mb-3 mx-6 rounded-xl">
                <div className="px-6 py-3">
                  <h3 className="f-m-m text-2xl">
                    <span className="font-semibold">Lector de</span>
                  </h3>
                  <h4 className="f-m-m">Tarjetas</h4>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full relative h-96 lg:mb-0 mb-8 lg:mr-8">
              <img
                src="https://res.cloudinary.com/petportrait/image/upload/v1614711872/carlosenriquedev/bus-2_dg4cls.jpg"
                className="rounded-3xl absolute z-0 inset-0 w-full h-full object-cover object-center"
              />
              <div className="left-0 absolute z-20 bg-white bottom-0 mb-3 mx-6 rounded-xl">
                <div className="px-6 py-3">
                  <h3 className="f-m-m text-2xl">
                    <span className="font-semibold">Covid</span>
                  </h3>
                  <h4 className="f-m-m">Free</h4>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full relative h-96 lg:mb-0 mb-8 lg:mr-8">
              <img
                src="https://res.cloudinary.com/petportrait/image/upload/v1614711872/carlosenriquedev/bus-3_aqyulz.jpg"
                className="rounded-3xl absolute z-0 inset-0 w-full h-full object-cover object-center"
              />
              <div className="left-0 absolute z-20 bg-white bottom-0 mb-3 mx-6 rounded-xl">
                <div className="px-6 py-3">
                  <h3 className="f-m-m text-2xl">
                    <span className="font-semibold">Toyota</span>
                  </h3>
                  <h4 className="f-m-m">3000</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
