import Hero from "../Components/Home/Hero";
import TableRank from "../Components/Home/TableRank";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="w-full h-max flex justify-center items-center">
        <TableRank />
      </div>

      <div className="h-[330px]"></div>
    </>
  );
};

export default Home;
