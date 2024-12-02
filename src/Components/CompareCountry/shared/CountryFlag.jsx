const CountryFlag = ({ name, image }) => {
  return (
    <div className="text-white w-max flex flex-col gap-3">
      <h1 className="font-alatsi text-[20px] md:text-[30px] text-center">
        {name || "Country"}
      </h1>
      <div className="relative rounded-lg shadow-2xl">
        {image ? (
          <img
            src={image}
            alt={`${name || "Country"} flag`}
            className="w-[200px] md:w-full rounded-md border border-gray-300 shadow-xl"
          />
        ) : (
          // Placeholder ketika pertama kali dirender no image
          <div className="flex items-center justify-center bg-gray-700 w-[200px] md:w-[300px] h-[150px] md:h-[230px] rounded-md">
            <span className="text-gray-300">No Flag</span>
          </div>
        )}
      </div>
      <p className="font-semibold text-[15px] md:text-[20px] text-center">
        All information:{" "}
        <a href="" className="hover:text-main-accent">
          {name || ""}
        </a>
      </p>
    </div>
  );
};

export default CountryFlag;
