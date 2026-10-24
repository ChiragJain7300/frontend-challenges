import React from "react";

const Hero = () => {
  return (
    <section className="w-full font-body">
      <div className="flex md:flex-row flex-col-reverse py-20 max-w-7xl mx-auto justify-between items-center px-4 sm:px-8 gap-10 md:gap-5">
        {/* left form */}
        <div className="sm:w-2/3 md:w-[40%] lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl md:text-2xl mb-5 text-Very-Dark-Blue font-bold lg:text-4xl !leading-[1.3] text-center md:text-left">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="text-Desaturated-Blue font-semibold mb-5 text-sm md:text-xs lg:text-lg text-center md:text-left">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <div className="flex flex-col lg:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter your email..."
              className="lg:w-80 md:w-56 py-3 px-5 border border-Bright-Blue rounded-sm w-full"
            />
            <button className="text-white font-bold rounded-md bg-Bright-Blue md:w-56 py-3 px-5 w-full hover:bg-opacity-60 duration-100">
              Get Started
            </button>
          </div>
        </div>

        {/* right Image */}
        <div className="sm:w-2/3 md:w-[60%] lg:w-1/2">
          <img
            src="/images/illustration-1.svg"
            alt="illustration-1.svg"
            className="w-full md:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
