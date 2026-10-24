import React from "react";

const Features = () => {
  return (
    <section className="w-full min-h-screen font-body bg-Light-Grayish-Blue">
      <div className="w-full bg-white">
        <img
          src="/images/bg-curve-desktop.svg"
          alt="bg-curve-desktop"
          className="w-full -z-20"
        />
      </div>

      <div className="flex flex-col-reverse md:flex-row py-16 max-w-7xl mx-auto justify-between items-center px-4 sm:px-8 gap-10 md:gap-5">
        {/* left form */}
        <div className="w-full sm:w-2/3 md:w-1/2 flex flex-col items-center md:items-start">
          <h1
            className="w-full mb-5 text-Very-Dark-Blue font-bold text-xl text-center md:text-left md:text-3xl
            !leading-[1.3]"
          >
            Stay productive, wherever you are
          </h1>
          <p className="mb-3 text-Desaturated-Blue font-semibold text-sm">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="mb-3 text-Desaturated-Blue font-semibold text-sm">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>
          <a
            href="#"
            className="text-Moderate-Cyan font-semibold text-lg flex gap-2 items-center  border-b-2 border-b-Moderate-Cyan mb-10 hover:text-cyan-200 duration-100 hover:border-b-cyan-200"
          >
            See how Fylo works
            <span>
              <img
                src="/images/icon-arrow.svg"
                alt="icon-arrow"
                className="w-5"
              />
            </span>
          </a>

          <div className="w-[360px] bg-white rounded-lg shadow-2xl p-7">
            <img
              src="/images/icon-quotes.svg"
              alt="icon-quotes.svg"
              className="mb-3"
            />
            <p className="text-Desaturated-Blue font-bold text-sm leading-6 mb-5">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>

            <div className="flex gap-3">
              <img
                src="/images/avatar-testimonial.jpg"
                alt="avatar-testimonial.jpg"
                className="w-10 rounded-full"
              />
              <div className="flex flex-col">
                <span className="text-sm text-Very-Dark-Blue font-bold">
                  Kyle Burton
                </span>
                <span className="text-xs text-Light-Gray font-bold">
                  Founder & CEO, Huddle
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* right img */}
        <div className="w-full sm:w-2/3 md:w-1/2">
          <img
            src="/images/illustration-2.svg"
            alt="illustration-2"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
