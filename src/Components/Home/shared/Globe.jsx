import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { searchByName } from "../../../Store/actions/CountryRankActions";

const Globe = ({ setIsMapClicked }) => {
  const [geoUrl, setGeoUrl] = useState("");
  const dispatch = useDispatch();

  // Set URL GeoJSON
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/datasets/geo-boundaries-world-110m/master/countries.geojson";
    setGeoUrl(url);
  }, []);

  const handleCountryClick = (countryName) => {
    dispatch(searchByName(countryName));
  };

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 150,
        center: [0, 20],
      }}
      className="w-full h-[300px] md:h-[500px] bg-[#333]"
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onClick={() => {
                handleCountryClick(geo.properties.name);
                setIsMapClicked((prev) => !prev);
              }}
              stroke="white"
              className="hover:cursor-pointer"
              style={{
                default: {
                  fill: "#333",
                },
                hover: {
                  fill: "#3498DB",
                },
                pressed: {
                  fill: "#3498DB",
                },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default Globe;
