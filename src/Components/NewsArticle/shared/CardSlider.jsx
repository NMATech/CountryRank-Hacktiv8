const CardSlider = ({ data }) => {
  return (
    <div className="w-full h-max relative">
      {/* Gambar utama */}
      <div>
        <img
          src={`https://static01.nyt.com/${data?.multimedia?.[0]?.url}`}
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
          {data?.headline?.main}
        </h1>

        {/* Detail metadata */}
        <div className="flex text-sm text-gray-300 mt-2 gap-4">
          <span>{data?.byline?.original}</span>
          <span>{new Date(data?.pub_date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
