import { useState } from "react";
import BackImg from "./BackImg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <section className="relative w-full text-white font-semibold">
      {/* Background image behind all header content */}

      {/* Foreground content */}
      <div className="relative z-10 flex justify-between items-center max-w-6xl mx-auto h-full py-8 px-4">
        {/* logo */}
        <img src="/images/logo.svg" alt="logo" className="w-28" />

        {/* nav menu desktop */}
        <ul className="hidden md:flex gap-8">
          <li>
            <a href="#" className="duration-200 hover:text-white/80">
              About
            </a>
          </li>
          <li>
            <a href="#" className="duration-200 hover:text-white/80">
              Discover
            </a>
          </li>
          <li>
            <a href="#" className="duration-200 hover:text-white/80">
              Get Started
            </a>
          </li>
        </ul>

        {/* nav menu mobile */}
        <button
          className="md:hidden block cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img
            src={`/images/${
              openMenu ? "icon-close-menu.svg" : "icon-hamburger.svg"
            }`}
            alt="menu-toggle"
            className="w-5"
          />
        </button>
      </div>

      {/* mobile nav menu dropdown */}
      {openMenu && (
        <ul className="text-black md:hidden absolute top-20 left-1/2 w-64 bg-white shadow-lg rounded-md backdrop-blur-sm transform -translate-x-1/2 z-20">
          <li className="border-b border-gray-300 px-6 py-4">
            <a href="#" className="hover:text-black/50">
              About
            </a>
          </li>
          <li className="border-b border-gray-300 px-6 py-4">
            <a href="#" className="hover:text-black/50">
              Discover
            </a>
          </li>
          <li className="px-6 py-4">
            <a href="#" className="hover:text-black/50">
              Get Started
            </a>
          </li>
        </ul>
      )}
    </section>
  );
};

export default Header;
