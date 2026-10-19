function DisplayCards() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {/* card-1 */}
      <div className="w-full bg-white rounded-xl border border-Neutral-200 p-4">
        <div className="flex items-center justify-between text-Terracotta-700 mb-5">
          <div className="flex items-center gap-2 ">
            <div className="w-9 h-9 bg-Terracotta-700 rounded-lg flex items-center justify-center">
              <img src="./assets/images/icon-key.svg" alt="icon-key.svg" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">
              Arrival
            </span>
          </div>

          <span className="text-xl font-bold font-Fraunces">01</span>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-2xl text-Neutral-900 font-Fraunces">
            Check-in from 15:00
          </p>

          <p className="text-xs text-Neutral-600">Sat, 25 April</p>

          <p className="text-Neutral-600 text-sm md:text-xs">
            Ring the brass bell by the blue door. If we're at the market, the
            key is in the terracotta pot by the olive tree.
          </p>
        </div>
      </div>

      {/* card-2 */}
      <div className="w-full bg-white rounded-xl border border-Neutral-200 p-4">
        <div className="flex items-center justify-between text-Terracotta-700 mb-5">
          <div className="flex items-center gap-2 text-Blue-500">
            <div className="w-9 h-9 bg-Blue-500 rounded-lg flex items-center justify-center">
              <img src="./assets/images/icon-wifi.svg" alt="icon-wifi.svg" />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest">
              Wifi
            </span>
          </div>

          <span className="text-Blue-500 font-Fraunces text-xl font-bold">
            02
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-2xl text-Neutral-900 font-Fraunces">
            Le Soleil · Guest
          </p>

          <p className="text-xs text-Neutral-600">Password below</p>

          <div className="flex flex-col gap-2">
            <div className="rounded-lg bg-Neutral-200 p-2 flex items-center justify-between text-xs">
              <span className="uppercase tracking-widest text-Neutral-600 text-[10px]">
                Network
              </span>{" "}
              <span className="text-Neutral-900 text-[12px]">
                Le Soleil · Guest
              </span>
            </div>
            <div className="rounded-lg bg-Neutral-200 p-2 flex items-center justify-between text-xs">
              <span className="uppercase tracking-widest text-Neutral-600 text-[10px]">
                Password{" "}
              </span>{" "}
              <span className="text-Neutral-900 text-[12px] flex items-center gap-2">
                soleil-2026{" "}
                <button className="text-[9px] py-0.5 px-2 border text-Neutral-800 border-Neutral-400 rounded-full cursor-pointer uppercase hover:bg-white transition-colors">
                  Copy
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* card-3 */}
      <div className="w-full bg-white rounded-xl border border-Neutral-200 p-4 sm:col-span-2 lg:col-span-1">
        <div className="flex items-center justify-between text-Terracotta-700 mb-5">
          <div className="flex items-center gap-2 ">
            <div className="w-9 h-9 bg-Rose-500 rounded-lg flex items-center justify-center">
              <img
                src="./assets/images/icon-breakfast.svg"
                alt="icon-breakfast.svg"
              />
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-Rose-500">
              Breakfast
            </span>
          </div>

          <span className="text-xl font-bold text-Rose-500 font-Fraunces">
            03
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-2xl text-Neutral-900 font-Fraunces">
            Served 8 - 10:30
          </p>

          <p className="text-xs text-Neutral-600">On the terrace</p>

          <p className="text-Neutral-600 text-sm md:text-xs">
            Fresh figs, Marseille honey, pain au levain, and espresso.
            Gluten-free option? Leave a note the night before.
          </p>
        </div>
      </div>
    </div>
  );
}

function MovingCards() {
  const timings = [
    {
      type: "Check-in",
      day: "Saturday",
      date: "25 April",
      time: "15:00",
    },
    {
      type: "Check-out",
      day: "Wednesday",
      date: "29 April",
      time: "11:00",
    },
  ];
  const billItems = [
    {
      label: "Room · La Garrigue · 4 nights",
      amount: "€ 620.00",
    },
    {
      label: "Breakfast · 2 guests",
      amount: "€ 96.00",
    },
    {
      label: "Tourist tax",
      amount: "€ 14.40",
    },
  ];
  return (
    <div className="my-10 lg:my-14 flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-5 lg:hover:gap-40 transition-all duration-400 relative group">
      {/* Card-1 */}
      <div className="rounded-xl p-4 text-sm text-Neutral-600 w-full max-w-90 bg-white lg:rotate-[-5deg] transition-transform z-10 shadow-xl lg:-mr-6 lg:group-hover:rotate-[5deg] min-h-85">
        <div className="w-full flex items-center justify-between text-xs">
          <span className="uppercase">Receipt</span> <span>№ MS-2026</span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="text-xl text-Neutral-900 font-Fraunces">
            Your stay
          </span>{" "}
          <span className="text-xs">0421-AH</span>
        </div>
        <hr className="my-2 border-dashed" />
        <div className="w-full flex items-center justify-around gap-5">
          {timings.map((timing, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="uppercase text-xs">{timing.type}</p>
              <p className="text-2xl text-Neutral-900 font-Fraunces">
                {timing.date}
              </p>
              <p className="text-Neutral-700 text-xs">
                {timing.day} · {timing.time}
              </p>
            </div>
          ))}
        </div>
        <hr className="my-3 border-dashed" />
        <div className="flex flex-col gap-1.5">
          {billItems.map((item, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-between text-[12px] text-Neutral-900"
            >
              <p>{item.label}</p>
              <p>{item.amount}</p>
            </div>
          ))}
        </div>
        <hr className="my-3 text-shadow-Neutral-800" />

        <div className="flex items-center justify-between uppercase font-DMMono font-semibold tracking-widest text-xs">
          <span>Total paid</span>
          <span className="text-2xl text-Neutral-900 font-Fraunces">
            € 730.40
          </span>
        </div>

        <div className="mt-3 w-full flex items-center justify-between">
          <span className="uppercase font-DMMono font-semibold tracking-widest text-xs">
            Paid · Wise · GBP
          </span>

          <img src="./assets/images/icon-barcode.svg" alt="icon-barcode.svg" />
        </div>
      </div>

      {/* Card-2 */}
      <div className="rounded-xl p-4 text-sm w-full text-Sun-50 max-w-90 bg-radial-[at_top_right] from-Sun-200 from-[-115%] to-Terracotta-600 lg:rotate-[5deg] shadow-xl transition-transform z-20 lg:group-hover:rotate-[-5deg] relative flex flex-col min-h-85">
        <hr className="my-2 border-dashed" />
        <h1 className="text-[12px] uppercase tracking-wider">welcome card</h1>

        <img
          src="./assets/images/icon-sun.svg"
          alt="icon-sun.svg"
          className="absolute right-5 top-9"
        />

        <div className="mt-10">
          <h2 className="text-sm font-Fraunces text-Sun-200 italic">
            A note from your host,
          </h2>

          <h1 className="text-2xl font-Fraunces italic mt-1">Margaux.</h1>
        </div>

        <p className="text-[14px] mt-5 font-DMSans">
          We're so glad you're coming. The shutters will be open, the lemonade
          cold, and the cat - Poivre - pretending not to notice you.
        </p>

        <div className="mt-auto">
          <p className="text-[12px] uppercase tracking-widest">Room</p>
          <p className="font-Fraunces text-lg">La Garrigue</p>
        </div>
      </div>

      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none">
        <img
          src="./assets/images/illustration-sun.svg"
          alt="illustration-sun.svg"
          className=""
        />
      </div>
      <div className="flex gap-2 items-center justify-center absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 lg:opacity-100 transition-opacity duration-400">
        <img src="./assets/images/icon-sparkle.svg" alt="icon-sparkle.svg" />
        <p className="uppercase text-[10px] tracking-wider">hover to fan</p>
        <img src="./assets/images/icon-sparkle.svg" alt="icon-sparkle.svg" />
      </div>
    </div>
  );
}

function ContentBody() {
  return (
    <section className="flex-1 min-w-0 p-3 md:p-6 font-DMMono overflow-x-hidden">
      {/* first section */}
      <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end gap-5">
        <div>
          <p className="text-xs text-Neutral-600 mb-1">
            <span>Booking</span> · <span>Confirmed</span>
          </p>
          <p className="text-4xl font-Fraunces">
            <span className="text-Neutral-700">Bienvenue,</span>{" "}
            <span className="italic text-Terracotta-600">Lucia.</span>
          </p>
        </div>

        <div className="flex gap-5 w-full md:w-auto">
          <button className="text-sm rounded-full border border-Neutral-300 md:w-auto md:px-5 w-1/2 py-2 font-bold cursor-pointer">
            Print receipt
          </button>
          <button className="text-sm rounded-full border border-Neutral-300 md:w-auto md:px-5 w-1/2 py-2 font-bold bg-Neutral-800 text-Neutral-400 cursor-pointer">
            Add to calendar
          </button>
        </div>
      </div>

      {/* moving cards */}
      <MovingCards />

      {/* display cards */}
      <DisplayCards />
    </section>
  );
}

export default ContentBody;
