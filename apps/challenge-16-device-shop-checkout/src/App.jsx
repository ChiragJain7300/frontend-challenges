import ProdCard from "./components/ProdCard";
function App() {
  const ProdData = [
    {
      src: "./resources/Gold.png",
      name: "iPhone 12 Pro",
      color: "Golden",
      qty: "1",
      price: "999",
    },
    {
      src: "./resources/Apple-watch.png",
      name: "Apple Watch",
      color: "Blue",
      qty: "1",
      price: "399",
    },
    {
      src: "./resources/iMac.png",
      name: "iMac",
      color: "Green",
      qty: "1",
      price: "1199",
    },
  ];
  return (
    <>
      <div
        className="w-full min-h-screen relative"
        style={{ fontFamily: `"Inter", sans-serif` }}
      >
        <img
          src="./resources/background-image.png"
          alt="backgroundImg"
          className="w-full h-[230px] absolute top-0 left-0 z-0 object-cover"
        />
        <div className="md:w-11/12 mx-auto pt-10 z-10 relative">
          <div className="flex gap-5 justify-center items-end mb-10">
            <h1 className="text-2xl text-center text-white font-bold">
              Checkout
            </h1>
            <div className="bg-[#1D1D1F] text-white py-1 px-4 rounded-full text-xs flex items-center font-semibold">
              <span>3 ITEMS</span>
            </div>
          </div>

          <div
            className="min-h-[300px] flex flex-col md:flex-row mx-auto w-11/12 min-w-[350px] md:w-full shadow-2xl"
            style={{ boxShadow: `0px 4px 4px -1px rgba(17, 23, 41, 0.05)` }}
          >
            {/* Product */}
            <div className="bg-[#E5E7EB] md:w-1/2 p-7 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
              {ProdData.map((prod, index) => (
                <ProdCard prod={prod} index={index} />
              ))}
              <hr className="w-full border-t-2 border-t-[#D2D5DA]" />

              <form className="flex gap-3 py-5 box-border w-full">
                <input
                  type="text"
                  name="couponCode"
                  id="couponCode"
                  placeholder="Enter coupon code"
                  className="min-w-40 flex-1 bg-white rounded-md px-4 text-sm md:text-md"
                />
                <button className="min-w-32 w-36 bg-[#1D1D1F] text-white font-bold py-3 rounded-md cursor-pointer text-sm md:text-md">
                  Apply Coupon
                </button>
              </form>

              <div className="flex justify-between mb-0.5">
                Sub total
                <span>$2597</span>
              </div>

              <div className="flex justify-between mb-0.5">
                tax
                <span>$623</span>
              </div>

              <div className="flex justify-between font-bold text-lg">
                Total
                <span>$3220</span>
              </div>
            </div>

            <div className="sm:rounded-r-2xl rounded-b-2xl md:w-1/2 bg-white p-7">
              <h1 className="mb-7 text-[#1D1D1F] font-bold text-lg">
                Contract Information
              </h1>

              <div className="flex gap-3 flex-col mb-5">
                <label htmlFor="name" className="text-[#394150] font-semibold">
                  First & Last name
                </label>
                <input
                  type="text"
                  placeholder="Enter first & last name"
                  id="name"
                  className="p-4 bg-[#E5E7EB] rounded-md border border-[#D2D5DA]"
                />
              </div>

              <div className="flex gap-3 flex-col mb-5">
                <label htmlFor="email" className="text-[#394150] font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  id="email"
                  className="p-4 bg-[#E5E7EB] rounded-md border border-[#D2D5DA]"
                />
              </div>

              <div className="w-full flex gap-5 mb-7">
                <div className="w-1/2 flex flex-col gap-2">
                  <label
                    htmlFor="country"
                    className="text-[#394150] font-semibold"
                  >
                    Country
                  </label>
                  <div className="relative">
                    <select
                      name="country"
                      id="country"
                      className="p-4 w-full bg-[#E5E7EB] rounded-md border border-[#D2D5DA] appearance-none"
                    >
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                    </select>
                    <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none mr-2">
                      ▼
                    </div>
                  </div>
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                  <label htmlFor="code" className="text-[#394150] font-bold">
                    Postal Code
                  </label>
                  <input
                    type="number"
                    placeholder="313002"
                    id="code"
                    className="w-full p-4 bg-[#E5E7EB] rounded-md border border-[#D2D5DA]"
                  />
                </div>
              </div>

              <button className="rounded-md w-full py-4 text-center text-white font-bold bg-[#1D1D1F]">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm text-center mt-[16px] text-[#374151]">
        Coded by <a href="#">CHIRAG JAIN</a> | Challenge by{" "}
        <a
          href="https://www.devchallenges.io?ref=challenge"
          target="_blank"
          className=" "
        >
          devChallenges.io
        </a>
      </div>
    </>
  );
}

export default App;
