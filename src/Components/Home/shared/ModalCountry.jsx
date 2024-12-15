import { IoClose } from "react-icons/io5";

const ModalCountry = ({ setIsMapClicked, country }) => {
  return (
    <div className="w-full fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="w-[250px] md:w-[355px] bg-white p-2 rounded-xl">
        <div className="w-full flex justify-end items-center">
          <button onClick={() => setIsMapClicked((prev) => !prev)}>
            <IoClose className="text-[30px]" />
          </button>
        </div>
        <h1 className="text-[20px] md:text-[30px] text-modern-text font-alatsi text-center">
          {country?.name?.common || "Country"}
        </h1>
        <img
          src={country?.flags?.png}
          alt=""
          className="w-[200px] md:w-[300px] mx-auto"
        />

        <div className="mt-4 text-modern-text">
          <h2 className="text-[16px] md:text-[20px] font-semibold mb-2">
            Details:
          </h2>
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
      </div>
    </div>
  );
};

export default ModalCountry;
