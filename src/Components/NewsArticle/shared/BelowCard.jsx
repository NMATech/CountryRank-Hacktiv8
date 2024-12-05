const BelowCard = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[48%] flex flex-col gap-3 text-white">
        <div className="w-full relative">
          <img
            src="https://static01.nyt.com/images/2024/11/27/opinion/27opinions-friedman/27opinions-friedman-articleLarge.jpg"
            alt="Fashion Trends"
            className="w-full h-[200px] bg-center object-cover"
          />
          <span className="absolute inset-0 h-max m-3 bg-main-accent text-xs px-3 py-1 rounded-full mb-2 w-max">
            News
          </span>
        </div>

        <div className="flex flex-col justify-center">
          {/* Judul berita */}
          <h1 className="text-[12px] md:text-[18px] font-bold">
            Fashion Trends and Li Edelkoort the Culture Shock Special Report
          </h1>

          {/* Detail metadata */}
          <div className="flex text-sm text-gray-300 mt-2 gap-4">
            <span>BY JANE</span>
            <span>12.04.2023</span>
          </div>
        </div>
      </div>
      <div className="w-[48%] flex flex-col gap-3 text-white">
        <div className="w-full relative">
          <img
            src="https://static01.nyt.com/images/2024/11/27/opinion/27opinions-friedman/27opinions-friedman-articleLarge.jpg"
            alt="Fashion Trends"
            className="w-full h-[200px] bg-center object-cover"
          />
          <span className="absolute inset-0 h-max m-3 bg-main-accent text-xs px-3 py-1 rounded-full mb-2 w-max">
            News
          </span>
        </div>

        <div className="flex flex-col justify-center">
          {/* Judul berita */}
          <h1 className="text-[12px] md:text-[18px] font-bold">
            Fashion Trends and Li Edelkoort the Culture Shock Special Report
          </h1>

          {/* Detail metadata */}
          <div className="flex text-sm text-gray-300 mt-2 gap-4">
            <span>BY JANE</span>
            <span>12.04.2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowCard;
