import { useState, useEffect } from "react";

function Sidebar() {
  const sidebarMenuItems = [
    {
      id: 1,
      name: "Your stay",
      iconLink: "./assets/images/icon-bed.svg",
      noti: 1,
    },
    {
      id: 2,
      name: "The house",
      iconLink: "./assets/images/icon-house.svg",
    },
    {
      id: 3,
      name: "Around town",
      iconLink: "./assets/images/icon-pin.svg",
    },
    {
      id: 4,
      name: "Breakfast",
      iconLink: "./assets/images/icon-breakfast-outline.svg",
    },
    {
      id: 5,
      name: "Messages",
      iconLink: "./assets/images/icon-mail.svg",
    },
  ];
  const [menuToggle, setMenuToggle] = useState(false);
  const [activeItem, setActiveItem] = useState(1);

  useEffect(() => {
    if (menuToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMenuToggle(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuToggle]);

  return (
    <aside
      className={`z-50 bg-Neutral-100 flex flex-col w-full
    md:sticky md:top-0 md:w-56 md:shrink-0 md:h-dvh md:p-3 md:border-r md:border-Neutral-400
    ${menuToggle ? "fixed inset-0 h-dvh" : "relative h-auto"}
  `}
    >
      {/* logo */}
      <div className="border-b md:border-b-0 p-3 md:p-0">
        <div className="w-full flex items-center justify-between">
          <img
            src="./assets/images/logo.svg"
            alt="logo.svg"
            className="md:mb-3"
          />

          <button
            className="border p-1 cursor-pointer md:hidden"
            onClick={() => setMenuToggle((prev) => !prev)}
            aria-expanded={menuToggle}
            aria-label={menuToggle ? "Close menu" : "Open menu"}
          >
            {menuToggle ? (
              <img
                src="./assets/images/icon-close.svg"
                className="w-5 h-5"
                alt="Close"
              />
            ) : (
              <img
                src="./assets/images/icon-menu.svg"
                className="w-5 h-5"
                alt="Open menu"
              />
            )}
          </button>
        </div>
        <hr className="hidden md:block border-Neutral-400" />
      </div>

      <div
        className={`${menuToggle ? "flex" : "hidden"} p-3 md:p-0 flex-1 md:flex flex-col overflow-y-auto`}
      >
        {/* menu items */}
        {sidebarMenuItems && (
          <div className="flex flex-col gap-1 md:mt-2 flex-1 font-medium">
            {sidebarMenuItems.map((item) => {
              const isActive = item.id === activeItem;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveItem(item.id);
                    setMenuToggle(false);
                  }}
                  className={`w-full flex items-center justify-between rounded-xl p-2.5 cursor-pointer transition-colors ${
                    isActive
                      ? "bg-white text-Neutral-900 shadow-xs font-semibold"
                      : "text-Neutral-600 hover:bg-white/60"
                  }`}
                >
                  <span className="flex gap-2.5 items-center text-sm">
                    <img src={item.iconLink} alt={item.name} />
                    {item.name}
                  </span>

                  {item?.noti && (
                    <span className="rounded-full bg-Terracotta-600 text-white text-[0.7rem] font-bold w-5 h-5 flex items-center justify-center">
                      {item?.noti}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* sidebar footer */}

        <div className="text-xs font-DMMono pb-4 md:pb-0">
          {/* sunny card */}
          <div className="w-full bg-Sun-200 h-28 rounded-xl relative overflow-hidden flex flex-col gap-1 py-3 px-4 justify-between">
            <img
              src="./assets/images/icon-weather.svg"
              alt="icon-sun.svg"
              className="w-16 absolute -right-4 -top-4"
            />
            <p className="font-DMSans uppercase text-[10px] tracking-wider text-Neutral-700">
              Today in Cassis
            </p>
            <p className="text-2xl font-Fraunces">27°</p>
            <p className="font-DMSans text-xs text-Neutral-700">
              Sunny · light breeze
            </p>
          </div>

          <hr className="border-dashed my-3 border-Neutral-400" />

          <div className="flex flex-col gap-2 text-[10px] uppercase tracking-wider text-Neutral-600">
            <p>EST. 1987</p>
            <p>MAISON SOLEIL · 12 RUE DES OLIVIERS · CASSIS</p>
            <p>© 2026 MAISON SOLEIL</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
