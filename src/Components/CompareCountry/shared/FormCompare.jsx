import { useEffect, useState } from "react";
import CountryFlag from "./CountryFlag";
import SelectForm from "./SelectForm";

const FormCompare = () => {
  const [countryA, setCountryA] = useState([]);
  // Data opsi negara
  const [countries, setCountries] = useState([]);

  // State untuk nilai yang dipilih
  const [selectedOption, setSelectedOption] = useState(null);

  // Handler saat memilih opsi
  const handleChange = (selected) => {
    setSelectedOption(selected);
    console.log("Selected country:", selected);
  };

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

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const dataMapped = data.map((country) => ({
          value: country.cca2,
          label: country.name.common,
        }));
        setCountries(dataMapped);
      });
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
      <div className="w-full flex flex-col justify-center gap-3 mt-[20px]">
        <p className="text-white text-center text-xl">
          Select other countries :{" "}
        </p>
        <div className="w-full flex justify-around">
          <SelectForm
            countries={countries}
            selectedOption={selectedOption}
            handleChange={handleChange}
          />
          <SelectForm
            countries={countries}
            selectedOption={selectedOption}
            handleChange={handleChange}
          />
        </div>
        <button className="w-[20%] mx-auto bg-white text-[#333] rounded-xl py-2">
          Compare
        </button>
      </div>
    </div>
  );
};

export default FormCompare;
