import DetailCountry from "./shared/DetailCountry";

const DetailsCompare = ({ countryA, countryB }) => {
  return (
    <div className="h-full flex flex-col md:flex-row justify-center gap-4 text-white p-3">
      <DetailCountry country={countryA} direction={-100} />

      <DetailCountry country={countryB} direction={100} />
    </div>
  );
};

export default DetailsCompare;
