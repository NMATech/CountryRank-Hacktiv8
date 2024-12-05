const BelowCard = () => {
  const num = [1, 2, 3, 4, 5];

  return (
    <div className="flex gap-3 overflow-x-auto">
      {num.map((x, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[80%] sm:w-[60%] md:w-[48%] lg:w-[30%] flex flex-col gap-3 text-white p-3"
        >
          {/* Gambar dengan label */}
          <div className="relative">
            <img
              src="https://static01.nyt.com/images/2024/11/27/opinion/27opinions-friedman/27opinions-friedman-articleLarge.jpg"
              alt="Fashion Trends"
              className="w-full h-[150px] md:h-[200px] bg-center object-cover rounded-lg"
            />
            <span className="absolute top-2 left-2 bg-main-accent text-xs px-3 py-1 rounded-full">
              News
            </span>
          </div>

          {/* Informasi berita */}
          <div className="flex flex-col">
            {/* Judul berita */}
            <h1 className="text-sm md:text-lg font-bold line-clamp-2">
              Fashion Trends and Li Edelkoort the Culture Shock Special Report
            </h1>

            {/* Metadata berita */}
            <div className="flex text-xs md:text-sm text-gray-300 mt-2 gap-4">
              <span>BY JANE</span>
              <span>12.04.2023</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BelowCard;
