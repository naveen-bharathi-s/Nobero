import React from 'react'

const Hero = () => {
 return (
    <section className="relative bg-gradient-to-tr from-blue-50 to-white ">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-6 px-4 py-12 lg:flex-row lg:px-8 lg:py-20">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            TRAVEL-READY <span className="block">CO-ORDS</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Ultimate matching sets for a stress-free vacation look.
          </p>
          <div className="mt-6 flex justify-center gap-4 lg:justify-start">
            <a
              href="#"
              className="rounded bg-black px-6 py-3 text-white shadow hover:bg-gray-800"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <img
            src="https://nobero.com/cdn/shop/files/133.jpg?v=1758084079"
            alt="Travel-ready Co-ords"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero