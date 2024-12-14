import { useState } from "react";
import CardNewsBelow from "./CardNewsBelow";
import { useEffect } from "react";

const BelowCard = ({ data }) => {
  const [widthBrowser, setWidthBrowser] = useState(window.innerWidth);
  const wrappedDataForLaptop = widthBrowser >= 1025 ? data.slice(0, 2) : data;

  // Handle delay for animation
  const handleDelay = (index) => {
    return index * 0.3;
  };

  // Listener resize
  useEffect(() => {
    const handleCheck = () => setWidthBrowser(window.innerWidth);

    window.addEventListener("resize", handleCheck);

    return () => {
      window.removeEventListener("resize", handleCheck);
    };
  }, []);

  return (
    <div className="flex gap-3 overflow-x-auto">
      {data && data.length > 0 ? (
        wrappedDataForLaptop.map((news, index) => (
          <CardNewsBelow
            styling={"w-[80%] sm:w-[60%] md:w-[48%] lg:w-[49%]"}
            key={index}
            news={news}
            durationDelay={handleDelay(index)}
          />
        ))
      ) : (
        <p>Loading!</p>
      )}
    </div>
  );
};

export default BelowCard;
