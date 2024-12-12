import { motion } from "framer-motion";

const DetailCountry = ({ country, direction }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full md:w-[50%] bg-main-accent flex flex-col p-4 rounded-lg shadow-md"
    >
      <h1 className="text-[20px] md:text-[30px] text-modern-text font-alatsi text-center">
        {country?.name?.common || "Country"}
      </h1>
      <img src={country?.flags?.png} alt="" className="w-[300px] mx-auto" />

      <div className="mt-4 text-modern-text">
        <h2 className="text-[20px] font-semibold mb-2">Details:</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Common Name:</strong> {country?.name?.common || "N/A"}
          </li>
          <li>
            <strong>Official Name:</strong> {country?.name?.official || "N/A"}
          </li>
          <li>
            <strong>Region:</strong> {country?.region || "N/A"}
          </li>
          <li>
            <strong>Subregion:</strong> {country?.subregion || "N/A"}
          </li>
          <li>
            <strong>Latitude/Longitude:</strong>{" "}
            {country?.latlng
              ? `${country.latlng[0]}, ${country.latlng[1]}`
              : "N/A"}
          </li>
          <li>
            <strong>Area:</strong> {country?.area ? `${country.area}` : "N/A"}
          </li>
          <li>
            <strong>Population:</strong> {country?.population || "N/A"}
          </li>
        </ul>
      </div>

      {country?.coatOfArms?.png && (
        <div className="mt-4 flex justify-center">
          <img
            src={country.coatOfArms.png}
            alt={`${country?.name?.common || "Country"} Coat of Arms`}
            className="w-24 h-24 object-contain border border-gray-300 rounded-md"
          />
        </div>
      )}
    </motion.div>
  );
};

export default DetailCountry;
