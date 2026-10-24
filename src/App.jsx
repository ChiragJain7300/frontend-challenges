function App() {
  return (
    //
    <>
      {/* 
          We're coming soon

        Hello fellow shoppers! We're currently building our new fashion store. 
        Add your email below to stay up-to-date with announcements and our launch deals.

        Email Address
      */}
      <main className="w-full md:h-screen font-josephin flex">
        <div className="flex flex-col md:justify-around md:items-center xl:items-start xl:ps-32 flex-1 bg-gradient-to-br from-[hsl(0,0%,100%)] to-[hsl(0,100%,98%)] md:py-16 min-w-[420px]">
          <div className="min-w-[350px] md:w-1/2 flex justify-start p-10 md:p-0">
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div className="block md:hidden w-full">
            <img
              src="/images/hero-mobile.jpg"
              alt="hero-mobile.jpg"
              className="w-full min-w-[350px]"
            />
          </div>
          <div className="text-center md:text-start py-16 md:py-0 min-w-[350px] md:w-1/2">
            <p className="text-5xl md:text-7xl font-light uppercase tracking-widest text-DRed">
              We're
            </p>
            <p className="text-5xl md:text-7xl font-semibold uppercase tracking-widest">
              coming
            </p>
            <p className="text-5xl md:text-7xl font-semibold uppercase tracking-widest mb-5">
              soon
            </p>
            <p className="text-DRed mb-10 px-8 md:px-0">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <div className="max-w-[360px] md:max-w-full flex md:w-full mx-auto relative">
              <input
                type="email"
                name="email"
                id="email"
                className="py-4 px-8 flex-1 rounded-full border-2 border-DRed placeholder-DRed text-DRed focus:border-SRed focus:outline-none"
                placeholder="Email Address"
              />
              <button className="text-center bg-gradient-to-br from-[hsla(0,80%,86%,0.9)] to-[hsla(0,74%,74%,0.9)] w-20 md:w-24 rounded-full flex justify-center items-center -ms-16 hover:shadow-2xl hover:bg-opacity-90">
                <img src="/images/icon-arrow.svg" alt="icon-arrow.svg" />
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block h-full">
          <img
            src="/images/hero-desktop.jpg"
            alt="hero-desktop.jpg"
            className="h-full min-w-[350px]"
          />
        </div>
      </main>

      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>
    </>
  );
}

export default App;
