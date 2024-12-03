import { useEffect, useState } from "react";
import CountryFlag from "./CountryFlag";
import SelectForm from "./SelectForm";

const FormCompare = ({
  countryA,
  countryB,
  setCountryA,
  setCountryB,
  setIsCompareClicked,
}) => {
  const [countries, setCountries] = useState([]);
  const [selectedOptionA, setSelectedOptionA] = useState(null);
  const [selectedOptionB, setSelectedOptionB] = useState(null);

  const handleChangeA = (selected) => {
    setSelectedOptionA(selected);
  };
  const handleChangeB = (selected) => {
    setSelectedOptionB(selected);
  };

  // Fetch data opsi negara
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

  // Fetch data negara A
  useEffect(() => {
    if (!selectedOptionA) return; // Jangan fetch jika belum ada pilihan
    const fetchCountry1 = async (name) => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
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
    fetchCountry1(selectedOptionA.label);
  }, [selectedOptionA]);

  // Fetch data negara B
  useEffect(() => {
    if (!selectedOptionB) return; // Jangan fetch jika belum ada pilihan
    const fetchCountry2 = async (name) => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCountryB(data[0]);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchCountry2(selectedOptionB.label);
  }, [selectedOptionB]);

  return (
    <div className="w-[80%] mx-auto flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row justify-around items-center">
        <CountryFlag
          name={countryA?.name?.common}
          image={countryA?.flags?.png}
        />
        <CountryFlag
          name={countryB?.name?.common}
          image={countryB?.flags?.png}
        />
      </div>
      <div className="w-full flex flex-col justify-center gap-3 mt-[20px]">
        <p className="text-white text-center text-xl">
          Select other countries :{" "}
        </p>
        <div className="w-full flex justify-around">
          <SelectForm
            countries={countries}
            selectedOption={selectedOptionA}
            handleChange={handleChangeA}
          />
          <SelectForm
            countries={countries}
            selectedOption={selectedOptionB}
            handleChange={handleChangeB}
          />
        </div>
        <button
          onClick={() => {
            setIsCompareClicked((prev) => !prev);
          }}
          className="w-full md:w-[20%] mx-auto bg-white text-[#333] rounded-xl py-2"
        >
          Compare
        </button>
      </div>
    </div>
  );
};

export default FormCompare;
