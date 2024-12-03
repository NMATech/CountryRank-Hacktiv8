import DetailCountry from "./shared/DetailCountry";

const DetailsCompare = ({ countryA, countryB }) => {
  return (
    <div className="h-full flex justify-center text-white p-3">
      <DetailCountry country={countryA} />

      {/* Line pembatas */}
      <div className="h-[550px] w-[2px] bg-gray-500 mx-5"></div>

      <DetailCountry country={countryB} />
    </div>
  );
};

export default DetailsCompare;
