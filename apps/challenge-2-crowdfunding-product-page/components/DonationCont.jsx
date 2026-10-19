import { useEffect, useState } from "react";

const DonationCont = () => {
  const [donationDet, setDonationDet] = useState({
    amountDonated: 78547,
    totalAmount: 100000,
  });
  const [width, setWidth] = useState(50);
  useEffect(() => {
    setWidth((donationDet.amountDonated / donationDet.totalAmount) * 100);
  }, [donationDet]);

  return (
    <div className="boxCont">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
        <div className="vr flex-1 box-border pb-5 md:pb-0 md:ps-5">
          <h1 className="heading-1 ">${donationDet.amountDonated}</h1>
          <p className="text-Gray-500 font-semibold">
            of ${donationDet.totalAmount} backed
          </p>
        </div>

        <div className="vr flex-1 md:ps-10 box-border pb-5 md:pb-0">
          <h1 className="heading-1">5,007</h1>
          <p className="text-Gray-500 font-semibold">total backers</p>
        </div>
        <div className="flex-1 md:ps-10 box-border pb-5 md:pb-0">
          <h1 className="heading-1">56</h1>
          <p className="text-Gray-500 font-semibold">days left</p>
        </div>
      </div>
      <div
        className="mt-10 flex w-full h-4 bg-gray-200 rounded-full overflow-hidden "
        role="progressbar"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="flex flex-col justify-center rounded-full overflow-hidden bg-Green-400 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-Green-400"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default DonationCont;
