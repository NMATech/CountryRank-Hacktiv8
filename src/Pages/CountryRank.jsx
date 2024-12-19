import { useDispatch, useSelector } from "react-redux";
import Hero from "../Components/CountryRank/Hero";
import TableRank from "../Components/CountryRank/TableRank";
import actions from "../Store/actions/CountryRankActions";
import { RotatingLines } from "react-loader-spinner";
import { useEffect } from "react";

const CountryRank = () => {
  const countries = useSelector((state) => state.countryRank.data);
  const dispatch = useDispatch();

  // fetching data
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(actions.displayAll("population"));
    };

    fetchData();
  }, []);

  return (
    <>
      {countries.length > 1 ? (
        <>
          <Hero />

          <div className="w-full h-max flex justify-center items-center">
            <TableRank itemsPerPage={10} />
          </div>

          <div
            className={`${
              countries.length >= 10 ? "h-[1030px] md:h-[670px]" : "h-[440px]"
            }`}
          ></div>
        </>
      ) : (
        <div className="w-full h-[300px] flex justify-center items-center ">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="green"
            strokeWidth="5"
          />
        </div>
      )}
    </>
  );
};

export default CountryRank;
