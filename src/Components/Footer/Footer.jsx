import logo from "../../assets/logo/Logo CountryRank Footer Light.png";
import Copyrights from "./shared/Copyrights";
import Menu_Footer from "./shared/Menu_Footer";
import QuickLinks from "./shared/QuickLinks";

const Footer = () => {
  return (
    <footer className="bg-main-primary w-full text-white px-[30px] md:px-[50px] pt-[30px] md:pt-[50px] pb-[20px]">
      <section className="flex flex-col md:flex-row gap-[40px]">
        <div className="w-full md:w-[40%] flex flex-col justify-center items-center md:justify-start md:items-start gap-3 ">
          <img src={logo} alt="" className="w-[250px] md:w-[300px]" />
          <p className="text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quam omnis iure hic.
          </p>
        </div>

        <Menu_Footer />
      </section>

      <Copyrights />
    </footer>
  );
};

export default Footer;
