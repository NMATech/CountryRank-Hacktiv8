import FilterTable from "./shared/FilterTable";
import HeadTRank from "./shared/HeadTRank";
import TableData from "./shared/TableData";

const TableRank = () => {
  return (
    <div className="absolute w-[95%] mt-[15em] mx-auto bg-main-accent/70 text-white p-[30px] rounded-xl">
      <HeadTRank />

      <div className="mt-[20px] flex gap-3">
        <FilterTable />
        <TableData />
      </div>
    </div>
  );
};

export default TableRank;
