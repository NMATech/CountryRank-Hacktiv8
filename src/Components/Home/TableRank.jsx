import { useEffect, useState } from "react";
import FilterTable from "./shared/FilterTable";
import HeadTRank from "./shared/HeadTRank";
import TableData from "./shared/TableData";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Store/actions/CountryRankActions";
import ReactPaginate from "react-paginate";
import MobileTableRank from "./shared/MobileTableRank";
import { motion } from "framer-motion";

const TableRank = ({ itemsPerPage }) => {
  const innerWidthBrowser = window.innerWidth;
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countryRank.data); // data countries
  const [itemOffSet, setItemOffSet] = useState(0);
  const endOffSet = itemOffSet + itemsPerPage;
  const currentItems = countries?.slice(itemOffSet, endOffSet) || [];
  const pageCount = countries?.length
    ? Math.ceil(countries.length / itemsPerPage)
    : 0;

  // console.log(countries); aktifkan ini untuk melihat data

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(actions.displayAll("population"));
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 2 }}
      viewport={{ once: true }}
      className={`absolute w-[95%] ${
        countries.length >= 10 ? "mt-[60em] md:mt-[37em]" : "mt-[23em]"
      } mx-auto bg-main-accent/70 text-white p-[20px] md:p-[30px] rounded-xl`}
    >
      {innerWidthBrowser > 768 ? <HeadTRank /> : null}
      <MobileTableRank />

      <div className="mt-[20px] flex gap-3">
        {innerWidthBrowser > 768 ? <FilterTable /> : null}
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
            containerClassName="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-4 overflow-x-auto"
            pageClassName="py-1 px-2 sm:px-3 rounded-md cursor-pointer text-sm sm:text-base hover:bg-gray-300"
            pageLinkClassName="no-underline"
            previousClassName="bg-gray-700 text-white py-1 px-3 rounded-md cursor-pointer text-sm sm:text-base"
            nextClassName="bg-gray-700 text-white py-1 px-3 rounded-md cursor-pointer text-sm sm:text-base"
            activeClassName="bg-blue-500 text-white font-bold border border-blue-700"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TableRank;
