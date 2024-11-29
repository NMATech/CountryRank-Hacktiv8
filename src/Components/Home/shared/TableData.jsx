import { useEffect, useState } from "react";
import actions from "../../../Store/actions/CountryRankActions";
import { useDispatch, useSelector } from "react-redux";

const TableData = () => {
  const [datas, setDatas] = useState(null);
  const countries = useSelector((state) => state.countryRank.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.displayAll());
  }, []);

  // console.log(countries); tes debugging data fetching

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/name/Indonesia"
        );
        const data = await response.json();
        setDatas(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Fungsi untuk format population
  const formatPopulation = (population) => {
    if (population >= 1_000_000_000) {
      return (population / 1_000_000_000).toFixed(1) + "B"; // Miliar
    } else if (population >= 1_000_000) {
      return (population / 1_000_000).toFixed(1) + "M"; // Juta
    } else if (population >= 1_000) {
      return (population / 1_000).toFixed(1) + "K"; // Ribuan
    } else {
      return population.toString(); // Untuk angka di bawah 1000
    }
  };

  return (
    <div className="w-[80%]">
      <table className="w-full text-left">
        <thead className="border-b border-white">
          <tr>
            <th className="py-2">No</th>
            <th className="py-2">Flag</th>
            <th className="py-2">Code</th>
            <th className="py-2">Name</th>
            <th className="py-2">Population</th>
            <th className="py-2">Area</th>
            <th className="py-2">Region</th>
          </tr>
        </thead>
        <tbody>
          {datas ? (
            <tr>
              <td className="py-2">1</td>
              <td className="py-2">
                <img
                  src={datas[0].flags.png}
                  alt={`Flag of ${datas[0].name.common}`}
                  className="w-12"
                />
              </td>
              <td className="py-2">{datas[0].cca2}</td>
              <td className="py-2">{datas[0].name.common}</td>
              <td className="py-2">{formatPopulation(datas[0].population)}</td>
              <td className="py-2">{datas[0].area.toLocaleString()} km²</td>
              <td className="py-2">{datas[0].region}</td>
            </tr>
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-4">
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
