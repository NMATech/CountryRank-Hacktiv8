import Select from "react-select";

const SelectForm = ({ countries, selectedOption, handleChange }) => {
  return (
    <Select
      options={countries} // option select
      value={selectedOption} // option selected
      onChange={handleChange} // handle ketika diselect
      placeholder="Select a country..."
      isSearchable={true} //
      className="text-black"
      styles={{
        control: (base) => ({
          ...base,
          borderColor: "#0d9488", //
          boxShadow: "none", //
          "&:hover": { borderColor: "#0d9488" },
        }),
      }}
    />
  );
};

export default SelectForm;
