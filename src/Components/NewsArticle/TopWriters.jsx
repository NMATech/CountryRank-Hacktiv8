import bobWood from "../../assets/img/bob_woodward.jpg";
import walter from "../../assets/img/walter.jpg";
import christiane from "../../assets/img/christiane_amanpour.jpg";
import CardWriter from "./shared/CardWriter";

const TopWriters = () => {
  const writers = [
    {
      name: "Bob Woodward",
      paragraph:
        "Renowned investigative journalist from The Washington Post, known for covering the Watergate scandal.",
      image: bobWood,
      profile: "https://en.wikipedia.org/wiki/Bob_Woodward",
    },
    {
      name: "Walter Cronkite",
      paragraph:
        "Walter Cronkite being Called “the most trusted man in America”, best known as a news anchor at CBS News.",
      image: walter,
      profile: "https://en.wikipedia.org/wiki/Walter_Cronkite",
    },
    {
      name: "Christiane Amanpour",
      paragraph:
        "Christiane is Renowned for bold reporting, she highlights global conflicts with insight and compassion.",
      image: christiane,
      profile: "https://en.wikipedia.org/wiki/Christiane_Amanpour",
    },
  ];

  return (
    <div className="px-[30px] py-5">
      <div className="flex flex-col gap-3 text-white">
        <h1 className="text-[25px] md:text-[30px]">
          The Faces Behind the Stories
        </h1>
        <p className="w-full md:w-[70%] text-[18px] font-normal">
          From global affairs to local insights, these renowned writers are
          dedicated to keeping you informed with reliable and compelling
          content.
        </p>
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
