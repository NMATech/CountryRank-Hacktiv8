import React, { useState } from "react";

const FilterTable = ({ onFilterChange, onChangeSort }) => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  // Daftar filter region
  const regions = [
    "Americas",
    "Antarctic",
    "Africa",
    "Asia",
    "Europe",
    "Oceania",
  ];

  // Handler perubahan region
  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    onFilterChange(region); // Kirim data ke parent
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
