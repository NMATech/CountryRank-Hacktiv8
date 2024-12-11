import FilterTable from "./FilterTable";
import HeadTRank from "./HeadTRank";

const MobileTableRank = () => {
  return (
    <div className="w-full flex flex-col md:hidden">
      <HeadTRank />
      <FilterTable />
    </div>
  );
};

export default MobileTableRank;