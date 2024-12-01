import { useEffect, useState } from "react";
import CountryFlag from "./CountryFlag";

const FormCompare = () => {
  const [countryA, setCountryA] = useState([]);

  useEffect(() => {
    const fetchCountry1 = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/name/indonesia"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCountryA(data[0]);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCountry1();
  }, []);

  return (
    <div className="w-[80%] mx-auto flex flex-col items-center">
      <div className="w-full flex justify-around items-center">
        <CountryFlag
          name={countryA?.name?.common}
          image={countryA?.flags?.png}
        />
        <CountryFlag
          name={countryA?.name?.common}
          image={countryA?.flags?.png}
        />
      </div>
      <div>
        <p className="text-white">Select other countries : </p>
      </div>
    </div>
  );
};

export default FormCompare;
