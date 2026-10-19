import React, { useState } from "react";

const Header = () => {
  const [featureDropMenu, setFeatureDropMenu] = useState(false);
  const [companyDropMenu, setCompanyDropMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <header className="max-w-7xl mx-auto p-5 flex items-center gap-8">
      <div>
        <img src="/images/logo.svg" alt="logo.svg" className="w-24" />
      </div>
      <div className="flex-1 hidden md:block">
        <ul className="flex gap-10 text-sm text-medium-gray font-bold items-center">
          <li
            className="flex gap-2 items-center cursor-pointer relative"
            onMouseOver={() => setFeatureDropMenu(true)}
            onMouseLeave={() => setFeatureDropMenu(false)}
          >
            Features
            <img
              src={
                featureDropMenu
                  ? "/images/icon-arrow-up.svg"
                  : "/images/icon-arrow-down.svg"
              }
              alt="icon-arrow-down.svg"
            />
            {featureDropMenu && (
              <div
                className="absolute bg-white p-5 rounded-lg shadow-2xl top-5 right-0 w-40"
                onMouseOver={() => setFeatureDropMenu(true)}
                onMouseLeave={() => setFeatureDropMenu(false)}
              >
                <ul className="flex flex-col gap-3">
                  <li className="ms-2 flex gap-3 items-center">
                    <img src="/images/icon-todo.svg" alt="icon-todo.svg" />
                    To Do List
                  </li>
                  <li className="ms-2 flex gap-3 items-center">
                    <img
                      src="/images/icon-calendar.svg"
                      alt="icon-calendar.svg"
                    />
                    Calendar
                  </li>
                  <li className="ms-2 flex gap-3 items-center">
                    <img
                      src="/images/icon-reminders.svg"
                      alt="icon-reminders.svg"
                    />
                    Reminder
                  </li>
                  <li className="ms-2 flex gap-3 items-center">
                    <img
                      src="/images/icon-planning.svg"
                      alt="icon-planning.svg"
                    />
                    Planning
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li
            className="flex gap-2 items-center cursor-pointer relative"
            onMouseOver={() => setCompanyDropMenu(true)}
            onMouseLeave={() => setCompanyDropMenu(false)}
          >
            Company
            <img
              src={
                companyDropMenu
                  ? "/images/icon-arrow-up.svg"
                  : "/images/icon-arrow-down.svg"
              }
              alt="icon-arrow-down.svg"
            />
            {companyDropMenu && (
              <div
                className="absolute bg-white p-5 rounded-lg shadow-2xl top-5 right-0 w-32"
                onMouseOver={() => setCompanyDropMenu(true)}
                onMouseLeave={() => setCompanyDropMenu(false)}
              >
                <ul className="flex flex-col gap-3">
                  <li className="ms-2 flex gap-3 items-center">History</li>
                  <li className="ms-2 flex gap-3 items-center">Our Team</li>
                  <li className="ms-2 flex gap-3 items-center">Blog</li>
                </ul>
              </div>
            )}
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
      </div>
      <div className="hidden md:block">
        <a href="#">Login</a>
        <button className="ms-8 px-5 py-2 rounded-xl border-2 border-medium-gray">
          Register
        </button>
      </div>

      <button
        className="block md:hidden ms-auto cursor-pointer"
        onClick={() => setOpenModal(true)}
      >
        <img src="/images/icon-menu.svg" alt="icon-menu.svg" />
      </button>
      {openModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50  backdrop-blur-md flex items-center justify-end z-10">
          <div className="bg-white h-screen w-2/3 absolute right-0 top-0 p-8 shadow-lg overflow-y-auto">
            <div className="flex justify-end">
              <button
                className="cursor-pointer"
                onClick={() => setOpenModal(false)}
              >
                <img src="/images/icon-close-menu.svg" alt="icon-close.svg" />
              </button>
            </div>
            <ul className="flex flex-col gap-5 text-lg text-medium-gray font-bold mb-5">
              <li
                className="flex flex-col gap-2 cursor-pointer"
                onClick={() => setFeatureDropMenu((prev) => !prev)}
              >
                <span className="w-full flex gap-3 items-center">
                  Features
                  <img
                    src={
                      featureDropMenu
                        ? "/images/icon-arrow-up.svg"
                        : "/images/icon-arrow-down.svg"
                    }
                    alt="icon-arrow-down.svg"
                  />
                </span>

                {featureDropMenu && (
                  <div
                    className="bg-white ps-5"
                    onMouseOver={() => setFeatureDropMenu(true)}
                    onMouseLeave={() => setFeatureDropMenu(false)}
                  >
                    <ul className="flex flex-col gap-3">
                      <li className="ms-2 flex gap-3 items-center">
                        <img src="/images/icon-todo.svg" alt="icon-todo.svg" />
                        To Do List
                      </li>
                      <li className="ms-2 flex gap-3 items-center">
                        <img
                          src="/images/icon-calendar.svg"
                          alt="icon-calendar.svg"
                        />
                        Calendar
                      </li>
                      <li className="ms-2 flex gap-3 items-center">
                        <img
                          src="/images/icon-reminders.svg"
                          alt="icon-reminders.svg"
                        />
                        Reminder
                      </li>
                      <li className="ms-2 flex gap-3 items-center">
                        <img
                          src="/images/icon-planning.svg"
                          alt="icon-planning.svg"
                        />
                        Planning
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                className="flex flex-col gap-2 cursor-pointer"
                onClick={() => setCompanyDropMenu((prev) => !prev)}
              >
                <span className="w-full flex gap-3 items-center">
                  Company
                  <img
                    src={
                      companyDropMenu
                        ? "/images/icon-arrow-up.svg"
                        : "/images/icon-arrow-down.svg"
                    }
                    alt="icon-arrow-down.svg"
                  />
                </span>

                {companyDropMenu && (
                  <div className="bg-white ps-5">
                    <ul className="flex flex-col gap-3">
                      <li className="ms-2 flex gap-3 items-center">History</li>
                      <li className="ms-2 flex gap-3 items-center">Our Team</li>
                      <li className="ms-2 flex gap-3 items-center">Blog</li>
                    </ul>
                  </div>
                )}
              </li>
              <li>Careers</li>
              <li>About</li>
            </ul>
            <div className="flex flex-col gap-5 items-center *:font-bold">
              <a href="#">Login</a>
              <button className="px-5 py-2 rounded-xl border-2 border-medium-gray w-full">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
