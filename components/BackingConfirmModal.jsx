import { allFundTypes } from "../data";
import RadioChoices from "./RadioChoices";

const BackingConfirmModal = ({ setBackingConformation, title }) => {
  return (
    <div className="z-50 py-10 fixed inset-0 w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-80" />
      <div className="w-11/12 md:max-w-3xl mx-auto bg-white relative max-h-[80vh] overflow-y-auto  p-6 rounded-lg shadow-lg z-10 scrollbar-hide">
        <div className="w-full flex items-center justify-between mb-6">
          <h2 className="font-bold text-2xl">Back this project</h2>
          <button
            className="cursor-pointer"
            onClick={() => setBackingConformation(false)}
          >
            <img
              src="/images/icon-close-modal.svg"
              alt="icon-close-modal.svg"
              className="w-5"
            />
          </button>
        </div>

        {/* <div className="flex justify-end">
          <button
            className="bg-Green-400 text-white font-bold py-2 px-4 rounded-full hover:bg-Green-700 duration-200"
            onClick={() => setBackingConformation(false)}
          >
            Confirm
          </button>
        </div> */}
        <p className="text-Gray-500 mb-6">
          Want to support us in bringing {title} out in the world?
        </p>

        <label name="pledge-choice" id="pledge-choice">
          <RadioChoices
            desc="Choose to support us without a reward if you simply believe in our
        project. As a backer, you will be signed up to receive product updates
        via email."
            title="Pledge with no reward"
          />

          {allFundTypes.map((fund) => (
            <RadioChoices key={fund.id} {...fund} />
          ))}
        </label>
      </div>
    </div>
  );
};

export default BackingConfirmModal;
