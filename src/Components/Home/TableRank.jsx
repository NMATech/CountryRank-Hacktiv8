import { useEffect, useState } from "react";
import FilterTable from "./shared/FilterTable";
import HeadTRank from "./shared/HeadTRank";
import TableData from "./shared/TableData";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Store/actions/CountryRankActions";
import ReactPaginate from "react-paginate";

const TableRank = ({ itemsPerPage }) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countryRank.data);
  const [itemOffSet, setItemOffSet] = useState(0);
  const endOffSet = itemOffSet + itemsPerPage;
  const currentItems = countries?.slice(itemOffSet, endOffSet) || [];
  const pageCount = countries?.length
    ? Math.ceil(countries.length / itemsPerPage)
    : 0;

  // console.log(countries); aktifkan ini untuk melihat data

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(actions.displayAll());
    };

    fetchData();
  }, []);

  // handle untuk pindah pagenation
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % countries.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffSet(newOffset);
  };

  return (
    <div className="absolute w-[95%] mt-[37em] mx-auto bg-main-accent/70 text-white p-[30px] rounded-xl">
      <HeadTRank />

      <div className="mt-[20px] flex gap-3">
        <FilterTable />
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <TableData currentItems={currentItems} itemOffSet={itemOffSet} />
          <ReactPaginate
            breakLabel="..."
            nextLabel="next"
            previousLabel="prev"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            containerClassName="flex flex-row justify-center items-center gap-3 mt-4"
            pageClassName=" text-black py-1 px-3 rounded-md cursor-pointer"
            pageLinkClassName="no-underline"
            previousClassName="bg-gray-700 text-white py-1 px-3 rounded-md cursor-pointer"
            nextClassName="bg-gray-700 text-white py-1 px-3 rounded-md cursor-pointer"
            activeClassName="bg-white text-black font-bold border border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default TableRank;
