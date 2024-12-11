const HeroCard = ({ image, headline, paragraph, cta, linkCta }) => {
  return (
    <div className="relative">
      <div className="w-full">
        <img
          src={image}
          alt=""
          className="w-full h-[250px] md:h-[400px] object-cover bg-center bg-no-repeat"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center text-center gap-4 md:gap-5">
        <h1 className="text-[18px] md:text-[40px] font-serif">{headline}</h1>
        <p className="w-[95%] md:w-[70%] text-sm md:text-[20px] font-serif">
          {paragraph}
        </p>
        <button className="bg-main-accent px-8 py-1 rounded-lg">
          <a href={linkCta} className="text-md md:text-lg">
            {cta}
          </a>
        </button>
      </div>
    </div>
  );
};

export default HeroCard;
