import china from "../../assets/img/china.jpg";
import india from "../../assets/img/india.jpg";
import usa from "../../assets/img/us.jpg";
import indonesia from "../../assets/img/indonesia.jpg";
import pakistan from "../../assets/img/pakistan.jpg";

import CountryInfo from "./shared/CountryInfo";
import { useState } from "react";

const FeaturedCountries = () => {
  const [selectedCountry, setSelectedCountry] = useState("China");
  const topCountries = [
    {
      name: "China",
      paragraph:
        "China adalah negara dengan populasi terbesar di dunia dan salah satu peradaban tertua yang masih bertahan. Terkenal dengan Tembok Besar, budaya teh, dan inovasi modern, China menjadi kekuatan ekonomi global yang memimpin di berbagai sektor teknologi dan manufaktur, sambil tetap mempertahankan tradisi budaya yang kaya.",
      image: china,
    },
    {
      name: "India",
      paragraph:
        "India adalah negara beragam budaya yang dikenal dengan sejarahnya yang kaya, seperti Taj Mahal dan festival warna Holi. Dengan populasi besar dan ekonomi yang berkembang pesat, India memainkan peran penting dalam teknologi global, seni, dan kuliner, menawarkan pengalaman yang memadukan tradisi kuno dan modernitas.",
      image: india,
    },
    {
      name: "United States",
      paragraph:
        "Amerika Serikat adalah pusat inovasi global, terkenal dengan ekonomi yang kuat, kota-kota seperti New York dan Los Angeles, serta pengaruh budaya popnya. Negara ini memiliki lanskap yang beragam, dari Grand Canyon hingga Silicon Valley, menjadikannya destinasi wisata dan inovasi teknologi terkemuka di dunia.",
      image: usa,
    },
    {
      name: "Indonesia",
      paragraph:
        "Indonesia adalah negara kepulauan terbesar di dunia, terkenal dengan keindahan alamnya seperti Bali dan Raja Ampat. Dengan budaya yang beragam dan tradisi yang kaya, Indonesia juga memiliki ekonomi yang tumbuh pesat, menjadikannya salah satu pemain penting di kawasan Asia Tenggara.",
      image: indonesia,
    },
    {
      name: "Pakistan",
      paragraph:
        "Pakistan adalah negara dengan warisan budaya yang mendalam, mulai dari situs kuno Mohenjo-Daro hingga pegunungan Karakoram. Dikenal dengan keramahan penduduknya dan kelezatan kulinernya, Pakistan juga terus berkembang di bidang teknologi dan infrastruktur, memperkuat posisinya di kancah regional dan global.",
      image: pakistan,
    },
  ];

  const handleSelectedCountry = (name) => {
    setSelectedCountry(name);
  };

  return (
    <div className="w-[95%] mx-auto text-white mt-[20px] p-3">
      <h1 className="text-3xl text-center mb-5">Featured Countries</h1>
      <CountryInfo
        china={china}
        countries={topCountries}
        selectedCountry={selectedCountry}
        handleSelectedCountry={handleSelectedCountry}
      />
    </div>
  );
};

export default FeaturedCountries;
