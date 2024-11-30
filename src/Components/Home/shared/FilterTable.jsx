import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../../../Store/actions/CountryRankActions";

const FilterTable = ({ onChangeSort }) => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedSort, setSelectedSort] = useState("");
  const dispatch = useDispatch();

  // Daftar filter region
  const regions = [
    "Americas",
    "Antarctic",
    "Africa",
    "Asia",
    "Europe",
    "Oceania",
  ];

  // keadaan jika filter sort by diselect
  useEffect(() => {
    if (selectedSort) {
      const fetchData = async () => {
        await dispatch(actions.displayAll(selectedSort));
      };

      fetchData();
    }
  }, [selectedSort]);

  // keadaan jika filter select by region
  useEffect(() => {
    if (selectedRegion) {
      const fetchData = async () => {
        await dispatch(actions.searchByRegion(selectedRegion));
      };

      fetchData();
    } else if (selectedRegion === "") {
      // keadaan jika button select by region di nonaktifkan kembali
      const fetchData = async () => {
        await dispatch(actions.displayAll("population"));
      };

      fetchData();
    }
  }, [selectedRegion]);

  // Handler perubahan region
  const handleRegionChange = (region) => {
    if (selectedRegion === region) {
      setSelectedRegion("");
    } else {
      setSelectedRegion(region);
    }
  };

  // Handler perubahan sort
  const handleSortChange = (event) => {
    const value = event.target.value;
    setSelectedSort(value);
    onChangeSort(value); // Kirim data ke parent
  };

  return (
    <div className="w-[30%] text-white rounded-md space-y-4">
      {/* Sort */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Sort by</h2>
        <select
          name="sort"
          id="sort"
          className="text-white bg-modern-dark_accent w-full p-2 rounded-md"
          value={selectedSort}
          onChange={handleSortChange}
        >
          <option value="" disabled>
            Select
          </option>
          <option value="population">Population</option>
          <option value="area">Area</option>
        </select>
      </div>

      {/* Region */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Region</h2>
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => handleRegionChange(region)}
              className={`px-3 py-1 rounded-md ${
                selectedRegion === region
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterTable;
