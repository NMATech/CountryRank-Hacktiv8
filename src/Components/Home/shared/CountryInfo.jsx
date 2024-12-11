import { useEffect, useState } from "react";
import SliderCountries from "./SliderCountries";

const CountryInfo = ({ countries, selectedCountry, handleSelectedCountry }) => {
  const [countryData, setCountryData] = useState({});

  const checkSelected = (country) => {
    switch (country) {
      case "China":
        return countries[0];
      case "India":
        return countries[1];
      case "United States":
        return countries[2];
      case "Indonesia":
        return countries[3];
      case "Pakistan":
        return countries[4];
      default:
        return {};
    }
  };

  useEffect(() => {
    const data = checkSelected(selectedCountry);
    setCountryData(data);
  }, [selectedCountry, countries]);

  return (
    <div className="w-full flex flex-col md:flex-row gap-3">
      <div className="w-full md:w-[50%] ">
        <img
          src={countryData?.image}
          alt={countryData?.name}
          className="w-full h-[350px] md:h-[470px] object-cover bg-center bg-no-repeat rounded-xl"
        />
      </div>
      <div className="w-full md:w-[50%] flex flex-col gap-3 p-3">
        <div>
          <p className="font-serif text-xl">Fall in love with</p>
          <h1 className="font-alatsi text-[40px] md:text-[50px]">
            {countryData?.name}
          </h1>
          <p className="text-sm lg:text-lg">{countryData?.paragraph}</p>
        </div>
        <SliderCountries
          countries={countries}
          handleSelectedCountry={handleSelectedCountry}
        />
      </div>
    </div>
  );
};

export default CountryInfo;
