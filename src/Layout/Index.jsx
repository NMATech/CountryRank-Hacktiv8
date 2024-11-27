import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Index = () => {
  return (
    <>
      <Navbar />

      <main className="w-full bg-[#333]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Index;
