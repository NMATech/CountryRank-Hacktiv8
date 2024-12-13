import CardWriter from "./shared/CardWriter";

const TopWriters = ({ writers, headline, paragraph }) => {
  return (
    <div className="px-[30px] py-5">
      <div className="flex flex-col gap-3 text-white">
        <h1 className="text-[25px] md:text-[30px]">{headline}</h1>
        <p className="w-full md:w-[70%] text-[18px] font-normal">{paragraph}</p>
      </div>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-around">
        {writers.map((writer, index) => {
          return (
            <CardWriter
              key={index}
              name={writer.name}
              paragraph={writer.paragraph}
              image={writer.image}
              profile={writer.profile}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopWriters;
