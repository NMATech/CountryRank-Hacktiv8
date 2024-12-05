const CardNews = ({ data }) => {
  return (
    <div className="flex gap-3 text-white">
      <div className="w-[200px] h-[130px]">
        <img
          src={`https://static01.nyt.com/${data?.multimedia?.[0]?.url}`}
          alt="image"
          className="w-full h-full bg-center object-cover"
        />
      </div>

      <div className="flex flex-col justify-center">
        <span className="bg-main-accent text-xs px-3 py-1 rounded-full mb-2 w-max">
          News
        </span>

        {/* Judul berita */}
        <h1 className="text-[12px] md:text-[18px] font-bold">
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

export default CardNews;
