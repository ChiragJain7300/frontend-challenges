import React from "react";

const Header = () => {
  return (
    <header className="w-full font-primary">
      <nav className="max-w-7xl mx-auto flex justify-between items-center pt-8 md:pt-12 px-4 sm:px-8 gap-5">
        <div>
          <img src="/images/logo.svg" alt="logo.svg" className="w-[175px]" />
        </div>
        <ul className="min-w-44 w-64 flex justify-between">
          <li className="custLi">Features</li>
          <li className="custLi">Team</li>
          <li className="custLi">Sign In</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
