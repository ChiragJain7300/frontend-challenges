import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="w-full font-body bg-Desaturated-Blue">
        <div className="w-full sm:w-2/3 md:w-full flex md:flex-row flex-col max-w-7xl mx-auto px-4 sm:px-8 gap-5 py-16 md:justify-between items-center">
          <div className="md:w-7/12 lg:w-5/12">
            <h1 className="cent text-4xl text-white font-bold mb-5">
              Get early access today
            </h1>
            <p className="cent text-Light-Gray text-md font-semibold mb-5">
              {" "}
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>

          {/* top right */}
          <div className="w-full md:w-7/12 lg:w-5/12 flex flex-col gap-3 justify-center items-start">
            <input
              type="email"
              className="min-w-[350px] md:w-[400px] px-5 py-3 rounded-md mx-auto md:mx-0"
              placeholder="email@example.com"
            />
            <button className="w-[350px] md:w-52 font-bold bg-Bright-Blue text-white p-3 mx-auto md:mx-0 hover:bg-opacity-60 duration-100">
              Get Started For Free{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full font-body bg-Very-Dark-Blue">
        <div className="flex flex-col max-w-7xl mx-auto px-10 gap-5 py-16 text-white">
          {/* bottom section */}
          <div>
            <img
              src="/images/logo-white.svg"
              alt="logo-white.svg"
              className="w-[175px] mb-5"
            />
            <div className="flex md:flex-row flex-col justify-between gap-10 ">
              <div>
                <div className="flex gap-3 items-center mb-3">
                  <img src="/images/icon-phone.svg" alt="icon-phone" />
                  <span>Phone: +1-543-123-4567</span>
                </div>
                <div className="flex gap-3 items-center mb-3">
                  <img src="/images/icon-email.svg" alt="icon-email" />
                  <span>chiragjain7300@gmail.com</span>
                </div>
              </div>
              <ul className="flex flex-col gap-2">
                <li className="duration-100 cursor-pointer hover:text-Bright-Blue">
                  About Us
                </li>
                <li className="duration-100 cursor-pointer hover:text-Bright-Blue">
                  Jobs
                </li>
                <li className="duration-100 cursor-pointer hover:text-Bright-Blue">
                  Press
                </li>
                <li className="duration-100 cursor-pointer hover:text-Bright-Blue">
                  Blog
                </li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li className="duration-100 cursor-pointer hover:text-Bright-Blue">
                  Contact Us
                </li>
                <li className="duration-100 cursor-pointer hover:text-Bright-Blue">
                  Terms
                </li>
                <li className="duration-100 cursor-pointer hover:text-Bright-Blue">
                  {" "}
                  Privacy
                </li>
              </ul>
              <div className="flex gap-3 items-start justify-center md:justify-start w-full md:w-auto">
                <button>
                  <img
                    src="/images/icon-facebook-f.svg"
                    alt="icon-facebook-f"
                    className="w-10 border border-white p-2 rounded-full duration-100 cursor-pointer hover:border-2 hover:border-Bright-Blue"
                  />
                </button>
                <button>
                  <img
                    src="/images/icon-twitter.svg"
                    alt="icon-twitter"
                    className="w-10 border border-white p-2 rounded-full duration-100 cursor-pointer hover:border-2 hover:border-Bright-Blue"
                  />
                </button>
                <button>
                  <img
                    src="/images/icon-instagram.svg"
                    alt="icon-instagram"
                    className="w-10 border border-white p-2 rounded-full duration-100 cursor-pointer hover:border-2 hover:border-Bright-Blue"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
