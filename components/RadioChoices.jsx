const RadioChoices = ({ key, title, amount, ticketsLeft, desc }) => {
  return (
    <div
      key={key}
      className="border-2 border-gray-300 rounded-lg px-5 py-7 mb-5"
    >
      <div className="w-full flex items-center gap-4 mb-6 ">
        <input type="radio" name="pledge" value="basic" className="w-6 h-6" />
        <div>
          <h1 className="font-bold text-lg">{title}</h1>
          {amount && (
            <p className="font-bold text-Green-400">Pledge ${amount} or more</p>
          )}
        </div>
      </div>
      <p className="text-Gray-500 leading-7 font-semibold">{desc}</p>

      {ticketsLeft && (
        <p className="text-Gray-500 leading-7 font-semibold flex items-center gap-2 mt-5">
          <span className="font-bold text-Black text-3xl">{ticketsLeft}</span>{" "}
          tickets left
        </p>
      )}
    </div>
  );
};

export default RadioChoices;
