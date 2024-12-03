import { useState } from "react";
import DetailsCompare from "../Components/CompareCountry/DetailsCompare";
import HeroCompareCountry from "../Components/CompareCountry/HeroCompareCountry";

const Compare = () => {
  const [countryA, setCountryA] = useState([]);
  const [countryB, setCountryB] = useState([]);
  const [isCompareClicked, setIsCompareClicked] = useState(false);

  return (
    <div>
      <HeroCompareCountry
        countryA={countryA}
        countryB={countryB}
        setCountryA={setCountryA}
        setCountryB={setCountryB}
        setIsCompareClicked={setIsCompareClicked}
      />

      {/* Menampilkan DetailsCompare jika countryA dan countryB memiliki data */}
      {isCompareClicked && (
        <DetailsCompare countryA={countryA} countryB={countryB} />
      )}
    </div>
  );
};

export default Compare;
