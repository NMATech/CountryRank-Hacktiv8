const CountryFlag = ({ name, image }) => {
  return (
    <div className="text-white w-max flex flex-col gap-3">
      <h1 className="font-alatsi text-[30px] text-center">{name}</h1>
      <div className="relative rounded-lg shadow-2xl">
        <img
          src={image}
          alt={`${name} flag`}
          className="rounded-md border border-gray-300 shadow-xl "
        />
      </div>
      <p className="font-semibold text-center">
        All information:{" "}
        <a href="" className="hover:text-main-accent">
          {name}
        </a>
      </p>
    </div>
  );
};

export default CountryFlag;
