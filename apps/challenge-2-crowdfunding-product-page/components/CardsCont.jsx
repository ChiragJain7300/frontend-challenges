import { useState } from "react";
import DonationCont from "./DonationCont";
import FundList from "./FundList";
import BackingConfirmModal from "./BackingConfirmModal";
import Logo from "./Logo";
const CardsCont = () => {
  const [bookmarked, setBookmarked] = useState(false);
  const [backingConformation, setBackingConformation] = useState(false);
  return (
    <section className="z-20 max-w-3xl w-full mx-auto mt-44 px-4">
      {/* Box - 1 */}
      <div className="boxCont text-center">
        <img
          src="/images/logo-mastercraft.svg"
          alt="logo-mastercraft.svg"
          className="w-12 absolute transform -top-0.5 -translate-y-1/2 left-1/2 -translate-x-1/2"
        />
        <h1 className="text-2xl font-bold mt-2">
          {" "}
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="text-gray-500 mt-2 mb-10">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>

        {/* Button Cont */}
        <div className="w-full flex justify-center md:justify-between items-center gap-5 md:gap-0">
          <button
            className="rounded-full py-4 px-6 md:px-8 bg-Green-400 text-white font-bold cursor-pointer hover:bg-Green-700 duration-200"
            onClick={() => setBackingConformation(true)}
          >
            Back this project
          </button>
          <button
            className={`flex items-center gap-5 bg-gray-200 rounded-full cursor-pointer md:pe-6 ${
              bookmarked ? "bg-Green-400" : ""
            }`}
            onClick={() => setBookmarked(!bookmarked)}
          >
            {bookmarked ? (
              <Logo
                fillBg="hsl(176, 72%, 28%)"
                fillIcon="hsl(0, 0.00%, 100.00%)"
              />
            ) : (
              <Logo fillBg="#2F2F2F" fillIcon="#B1B1B1" />
            )}
            <p
              className={`hidden md:block ${
                bookmarked ? "text-Green-400" : "text-Gray-500"
              } font-bold`}
            >
              {bookmarked ? "Bookmarked" : "Bookmark"}
            </p>
          </button>
        </div>
      </div>

      {/* Box - 2 */}
      <DonationCont />

      {/* Box - 3 */}
      <FundList />

      {/* Backing Confirmation Modal */}
      {backingConformation && (
        <BackingConfirmModal
          setBackingConformation={setBackingConformation}
          title="Mastercraft Bamboo Monitor Riser"
        />
      )}
    </section>
  );
};

export default CardsCont;
