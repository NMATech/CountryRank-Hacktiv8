import { IoSearchSharp } from "react-icons/io5";

const HeadTRank = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-xl">Found 250 Data</h1>

      <div className="bg-modern-dark_accent w-[15em] flex items-center p-1 rounded-lg gap-3">
        <IoSearchSharp className="text-[25px] text-white/60" />
        <input
          type="text"
          placeholder="Search by Name, Region"
          className="bg-transparent focus:outline-none placeholder:text-white/60 text-white/80"
        />
      </div>
    </div>
  );
};

export default HeadTRank;
