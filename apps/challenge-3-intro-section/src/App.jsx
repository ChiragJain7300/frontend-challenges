import React from "react";
import Header from "../components/Header";
function App() {
  return (
    <>
      <main className="min-h-screen text-medium-gray font-primary">
        <Header />

        <section className="max-w-[350px] md:max-w-none md:min-w-[700px] md:w-3/5 flex flex-col-reverse md:flex-row mx-auto md:pt-8 pb-16">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="flex-1 flex flex-col items-center md:items-start justify-center p-8">
              <h1 className="text-almost-black text-2xl md:text-6xl font-bold mb-5 md:mb-10">
                Make remote work
              </h1>
              <p className="text-center md:text-left mb-5 md:mb-10 md:max-w-sm text-sm">
                Get your team in sync, no matter your location. Streamline
                processes, create team rituals, and watch productivity soar.
              </p>

              <button className="py-3 px-5 rounded-xl font-bold bg-almost-black text-almost-white cursor-pointer hover:bg-almost-white hover:text-almost-black duration-150 border-2 border-almost-black">
                Learn more
              </button>
            </div>

            <div className="p-5 w-full flex justify-evenly md:justify-start items-center gap-3 lg:gap-5 mt-5">
              <img
                src="./images/client-databiz.svg"
                alt="client-databiz.svg"
                className="w-14 md:w-16 lg:w-20"
              />
              <img
                src="./images/client-audiophile.svg"
                alt="client-audiophile.svg"
                className="w-14 md:w-16 lg:w-20"
              />
              <img
                src="./images/client-meet.svg"
                alt="client-meet.svg"
                className="w-14 md:w-16 lg:w-20"
              />
              <img
                src="./images/client-maker.svg"
                alt="client-maker.svg"
                className="w-14 md:w-16 lg:w-20"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="./images/image-hero-desktop.png"
              alt="image-hero-desktop.png"
              className="md:inline hidden w-full"
            />
            <img
              src="./images/image-hero-mobile.png"
              alt="image-hero-mobile.png"
              className="w-full inline md:hidden max-h-96"
            />
          </div>
        </section>
      </main>

      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </>
  );
}

export default App;
