import { useSelector } from "react-redux";
import Hero from "../Components/Home/Hero";
import TableRank from "../Components/Home/TableRank";

const Home = () => {
  const countries = useSelector((state) => state.countryRank.data);

  return (
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
  );
};

export default Home;
