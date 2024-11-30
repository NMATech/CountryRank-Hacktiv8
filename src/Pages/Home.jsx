import Hero from "../Components/Home/Hero";
import TableRank from "../Components/Home/TableRank";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="w-full h-max flex justify-center items-center">
        <TableRank itemsPerPage={10} />
      </div>

      <div className="h-[670px]"></div>
    </>
  );
};

export default Home;
