import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../Store/actions/CountryRankActions";

const HeadTRank = () => {
  const countries = useSelector((state) => state.countryRank.data);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onInput = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = () => {
    dispatch(actions.searchByName(input));
  };

  return (
    <div className="flex justify-between">
      <h1 className="text-xl">Found {countries.length} Data</h1>

      <div className="bg-modern-dark_accent w-[15em] flex items-center p-1 rounded-lg gap-3">
        <button onClick={handleSearch}>
          <IoSearchSharp className="text-[25px] text-white/60" />
        </button>
        <input
          type="text"
          value={input}
          onChange={() => onInput(event)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          placeholder="Search by Name, Region"
          className="bg-transparent focus:outline-none placeholder:text-white/60 text-white/80"
        />
      </div>
    </div>
  );
};

export default HeadTRank;
