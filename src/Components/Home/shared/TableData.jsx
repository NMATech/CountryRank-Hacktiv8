const TableData = ({ currentItems, itemOffSet }) => {
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
    <div className="w-[95%]">
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
          {currentItems &&
            currentItems.map((country, index) => {
              return (
                <tr key={country.cca3}>
                  <td className="py-2">{itemOffSet + index + 1}</td>
                  <td className="py-2">
                    <img
                      src={country.flags.png}
                      alt={`Flag of ${country.name.common}`}
                      className="w-12"
                    />
                  </td>
                  <td className="py-2">{country.cca2}</td>
                  <td className="py-2">{country.name.common}</td>
                  <td className="py-2">
                    {formatPopulation(country.population)}
                  </td>
                  <td className="py-2">{country.area.toLocaleString()} km²</td>
                  <td className="py-2">{country.region}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
