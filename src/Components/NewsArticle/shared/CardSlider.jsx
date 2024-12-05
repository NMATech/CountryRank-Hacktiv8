const CardSlider = () => {
  return (
    <div className="w-full h-max relative">
      {/* Gambar utama */}
      <div>
        <img
          src="https://static01.nyt.com/images/2024/11/27/opinion/27opinions-friedman/27opinions-friedman-articleLarge.jpg"
          alt="Fashion Trends"
          className="w-full h-[400px] bg-center object-cover"
        />
      </div>

      {/* Overlay gradien dan konten */}
      <div className="absolute inset-0 w-full h-full flex flex-col justify-end text-white bg-gradient-to-b from-transparent to-black/80 px-5 py-5">
        <span className="bg-main-accent text-xs px-3 py-1 rounded-full mb-2 w-max">
          News
        </span>

        {/* Judul berita */}
        <h1 className="text-[20px] md:text-[30px] font-bold">
          Fashion Trends and Li Edelkoort the Culture Shock Special Report
        </h1>

        {/* Detail metadata */}
        <div className="flex text-sm text-gray-300 mt-2 gap-4">
          <span>BY JANE</span>
          <span>12.04.2023</span>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
